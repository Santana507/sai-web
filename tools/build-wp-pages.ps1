# Genera las plantillas PHP del tema WordPress a partir de los HTML originales.
$src = Split-Path -Parent $PSScriptRoot
$theme = Join-Path $src 'wordpress-theme'
$utf8 = New-Object System.Text.UTF8Encoding($false)

function Convert-Links([string]$html) {
    # assets/... -> URL del tema
    $html = [regex]::Replace($html, '(["''(])assets/', '$1<?php echo esc_url( get_template_directory_uri() ); ?>/assets/')
    # enlaces internos a .html -> URL de WordPress
    $html = [regex]::Replace($html, 'href="(?!https?:)([\w-]+)\.html((?:#[\w-]*)?)"', {
        param($m)
        $slug = $m.Groups[1].Value
        $hash = $m.Groups[2].Value
        if ($slug -eq 'index') { $p = "/" } else { $p = "/$slug/" }
        'href="<?php echo esc_url( home_url( ''' + $p + ''' ) ); ?>' + $hash + '"'
    })
    return $html
}

$files = Get-ChildItem $src -Filter '*.html'
foreach ($f in $files) {
    $slug = $f.BaseName
    $text = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    if ($text -notmatch '(?is)<main[^>]*>.*?</main>') { Write-Host "SIN <main>: $($f.Name)"; continue }
    $main = Convert-Links $Matches[0]
    if ($slug -eq 'index') {
        $out = Join-Path $theme 'front-page.php'
        $head = "<?php`n/**`n * Portada (copia fiel de index.html)`n */`nget_header(); ?>`n`n"
    } else {
        $out = Join-Path $theme "page-$slug.php"
        $head = "<?php`n/**`n * Pagina: $slug (copia fiel de $($f.Name))`n */`nget_header(); ?>`n`n"
    }
    [System.IO.File]::WriteAllText($out, $head + $main + "`n`n<?php get_footer(); ?>`n", $utf8)
    Write-Host "OK $slug"
}

# Header: enlaces del menu a paginas reales
$h = Join-Path $theme 'header.php'
$t = [System.IO.File]::ReadAllText($h, $utf8)
$t = [regex]::Replace($t, "home_url\( '/#([\w-]+)' \)", {
    param($m)
    $s = $m.Groups[1].Value
    if ($s -eq 'experiencia') { $s = 'quienes-somos' }
    "home_url( '/$s/' )"
})
[System.IO.File]::WriteAllText($h, $t, $utf8)

# Quitar BOM de todos los PHP
Get-ChildItem $theme -Filter '*.php' -Recurse | ForEach-Object {
    $c = [System.IO.File]::ReadAllText($_.FullName, $utf8)
    [System.IO.File]::WriteAllText($_.FullName, $c, $utf8)
}
