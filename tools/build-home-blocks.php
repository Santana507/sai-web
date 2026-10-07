<?php
/**
 * Convierte el <main> de index.html en bloques de Gutenberg.
 * Uso: C:\xampp\php\php.exe tools\build-home-blocks.php
 * Salida: wordpress-theme/inc/home-blocks.html (con marcadores {{THEME}} y {{HOME}})
 */
$src  = dirname( __DIR__ );
$html = file_get_contents( "$src/index.html" );
preg_match( '~<main[^>]*>(.*)</main>~is', $html, $m );
$main = $m[1];

// Cabecera/pie/skip-link los aporta el tema; fuera comentarios.
$main = preg_replace( '~<header class="site-header">.*?</header>~is', '', $main );
$main = preg_replace( '~<footer>.*?</footer>~is', '', $main );
$main = preg_replace( '~<a class="skip-link".*?</a>~is', '', $main );
$main = preg_replace( '~<!--.*?-->~s', '', $main );
$main = str_replace( '<div id="contenido">', '<div>', $main );

// Rutas.
$main = preg_replace( '~(["\'(])assets/~', '$1{{THEME}}/assets/', $main );
$main = preg_replace_callback( '~href="(?!https?:)([\w-]+)\.html((?:#[\w-]*)?)"~', function ( $x ) {
	return 'href="{{HOME}}' . ( $x[1] === 'index' ? '/' : '/' . $x[1] . '/' ) . $x[2] . '"';
}, $main );

libxml_use_internal_errors( true );
$dom = new DOMDocument();
$dom->loadHTML( '<?xml encoding="UTF-8"><html><body>' . $main . '</body></html>' );
$body = $dom->getElementsByTagName( 'body' )->item( 0 );

function outer( DOMNode $n ) { global $dom; return trim( $dom->saveHTML( $n ) ); }
function inner( DOMNode $n ) {
	global $dom;
	$o = '';
	foreach ( $n->childNodes as $c ) { $o .= $dom->saveHTML( $c ); }
	return trim( $o );
}
function attrs_only( DOMElement $e, array $allowed ) {
	foreach ( $e->attributes as $a ) {
		if ( ! in_array( $a->name, $allowed, true ) ) { return false; }
	}
	return true;
}
function js( $a ) { return json_encode( $a, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ); }
function html_block( DOMElement $e ) { return "<!-- wp:html -->\n" . outer( $e ) . "\n<!-- /wp:html -->"; }

function conv( DOMElement $e ) {
	$tag = strtolower( $e->nodeName );
	$cls = trim( $e->getAttribute( 'class' ) );

	if ( preg_match( '/^h([1-6])$/', $tag, $mm ) && attrs_only( $e, array( 'class' ) ) ) {
		$lvl  = (int) $mm[1];
		$a    = array();
		if ( $lvl !== 2 ) { $a['level'] = $lvl; }
		if ( $cls ) { $a['className'] = $cls; }
		$json = $a ? ' ' . js( $a ) : '';
		return "<!-- wp:heading$json -->\n<$tag class=\"wp-block-heading" . ( $cls ? " $cls" : '' ) . '">' . inner( $e ) . "</$tag>\n<!-- /wp:heading -->";
	}

	if ( 'p' === $tag && attrs_only( $e, array( 'class' ) ) ) {
		$json = $cls ? ' ' . js( array( 'className' => $cls ) ) : '';
		return "<!-- wp:paragraph$json -->\n<p class=\"wp-block-paragraph" . ( $cls ? " $cls" : '' ) . '">' . inner( $e ) . "</p>\n<!-- /wp:paragraph -->";
	}

	if ( 'img' === $tag && attrs_only( $e, array( 'src', 'alt', 'decoding', 'loading' ) ) ) {
		return "<!-- wp:image -->\n<figure class=\"wp-block-image\"><img src=\"" . $e->getAttribute( 'src' ) . '" alt="' . htmlspecialchars( $e->getAttribute( 'alt' ) ) . "\"/></figure>\n<!-- /wp:image -->";
	}

	if ( in_array( $tag, array( 'div', 'section', 'article' ), true ) && attrs_only( $e, array( 'class', 'id' ) ) ) {
		$kids = array();
		$ok   = true;
		foreach ( $e->childNodes as $c ) {
			if ( XML_ELEMENT_NODE === $c->nodeType ) { $kids[] = $c; }
			elseif ( XML_TEXT_NODE === $c->nodeType && trim( $c->textContent ) !== '' ) { $ok = false; }
		}
		if ( $ok && $kids ) {
			$a = array();
			if ( 'div' !== $tag ) { $a['tagName'] = $tag; }
			if ( $cls ) { $a['className'] = $cls; }
			$json = $a ? ' ' . js( $a ) : '';
			$id   = $e->getAttribute( 'id' );
			$out  = "<!-- wp:group$json -->\n<$tag" . ( $id ? " id=\"$id\"" : '' ) . ' class="wp-block-group' . ( $cls ? " $cls" : '' ) . '">';
			foreach ( $kids as $k ) { $out .= "\n" . conv( $k ); }
			return $out . "\n</$tag>\n<!-- /wp:group -->";
		}
	}

	return html_block( $e );
}

$blocks = array();
foreach ( $body->childNodes as $c ) {
	if ( XML_ELEMENT_NODE === $c->nodeType ) {
		// El contenedor <div> sin atributos de nivel superior se desenvuelve.
		if ( 'div' === $c->nodeName && ! $c->hasAttributes() ) {
			foreach ( $c->childNodes as $cc ) {
				if ( XML_ELEMENT_NODE === $cc->nodeType ) { $blocks[] = conv( $cc ); }
			}
		} else {
			$blocks[] = conv( $c );
		}
	}
}
@mkdir( "$src/wordpress-theme/inc" );
file_put_contents( "$src/wordpress-theme/inc/home-blocks.html", implode( "\n\n", $blocks ) . "\n" );
echo count( $blocks ) . " bloques de nivel superior\n";
