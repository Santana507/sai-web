import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, '..');

// 1. Extraer cabecera y pie de página de index.html
const indexPath = join(root, 'index.html');
const indexHtml = readFileSync(indexPath, 'utf8');

const headerStart = indexHtml.indexOf('<header class="site-header">');
const headerEnd = indexHtml.indexOf('</header>') + 9;
const footerStart = indexHtml.indexOf('<footer class="site-footer">');
const footerEnd = indexHtml.indexOf('</footer>') + 9;

const header = indexHtml.substring(headerStart, headerEnd);
let footer = indexHtml.substring(footerStart, footerEnd);
if (footerStart === -1) {
  const fallbackFooterStart = indexHtml.indexOf('<footer>');
  const fallbackFooterEnd = indexHtml.indexOf('</footer>') + 9;
  footer = indexHtml.substring(fallbackFooterStart, fallbackFooterEnd);
}

function wrapPage(title, content) {
  return `<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title} | Colegio Buen Pastor Voz de Alerta</title>
  <link rel="icon" href="assets/favicon.svg">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
<body class="form-page">
  <a class="skip-link" href="#contenido">Saltar al contenido</a>

  ${header}

  <main id="contenido">
    ${content}
  </main>

  ${footer}

  <button class="back-to-top" type="button" aria-label="Volver arriba">↑</button>
</body>
</html>`;
}

// =============================================================================
// FORMULARIO 1: PREINGRESO 2027 (ESTUDIANTES REGULARES)
// =============================================================================
const formPreingresoHtml = `
<div class="form-container">
  <a href="admisiones.html" class="form-nav-back">
    <span aria-hidden="true">←</span> Volver a la Guía de Admisiones
  </a>

  <header class="form-header-box orange">
    <span class="badge">🎒 Estudiantes Regulares • Periodo 2027</span>
    <h1>Formulario Oficial de Preingreso</h1>
    <p>Renovación formal de cupo y actualización de expediente académico para el año lectivo 2027. Por favor complete cada sección con información veraz y adjunte el contrato y comprobante correspondientes.</p>
  </header>

  <!-- Alertas Normativas -->
  <div class="form-alert-banner orange">
    <div class="icon">⚠️</div>
    <div>
      <strong>Formato de Cédula Obligatorio con Guiones</strong>
      <p>Tanto la cédula del acudiente como la del estudiante deben escribirse obligatoriamente con guiones (ejemplo: <code>8-888-888</code> o <code>8-0888-00888</code>). Un error de tipeo o la omisión de los guiones puede provocar el rechazo o suspensión de la beca digital del <strong>PASE-U</strong>.</p>
    </div>
  </div>

  <div class="form-alert-banner turquoise">
    <div class="icon">⚖️</div>
    <div>
      <strong>Designación de un Único Acudiente Legal</strong>
      <p>Por normativas legales y administrativas escolares, se debe registrar a una sola persona como acudiente y representante legal formal (papá, mamá o tutor). Esta persona firmará el contrato y será el canal directo y oficial ante docentes y administración.</p>
    </div>
  </div>

  <form id="preingreso-form" novalidate>
    
    <!-- BLOQUE 1: DATOS DEL ACUDIENTE LEGAL -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">👤</span>
        <span>1. Datos del Acudiente Legal (Representante)</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="acudiente-nombre">
            <span>Nombre Completo y Apellidos <span class="req">*</span></span>
          </label>
          <input type="text" id="acudiente-nombre" name="acudiente_nombre" class="form-control" placeholder="Ej: Roberto Carlos Mendoza Pérez" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="acudiente-cedula">
            <span>Cédula de Identidad Personal <span class="req">*</span></span>
            <span class="hint">Con guiones</span>
          </label>
          <input type="text" id="acudiente-cedula" name="acudiente_cedula" class="form-control" placeholder="Ej: 8-765-4321" pattern=".*-.*" required>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="acudiente-email">
            <span>Correo Electrónico Principal <span class="req">*</span></span>
            <span class="hint">Notificaciones oficiales</span>
          </label>
          <input type="email" id="acudiente-email" name="acudiente_email" class="form-control" placeholder="correo@ejemplo.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="acudiente-parentesco">
            <span>Parentesco con el Estudiante <span class="req">*</span></span>
          </label>
          <select id="acudiente-parentesco" name="acudiente_parentesco" class="form-control" required>
            <option value="" disabled selected>Seleccione el parentesco...</option>
            <option value="madre">Madre</option>
            <option value="padre">Padre</option>
            <option value="tutor_legal">Tutor Legal / Apoderado Legal</option>
          </select>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="acudiente-telefono">
            <span>Teléfono Celular Prioritario <span class="req">*</span></span>
            <span class="hint">Contacto en emergencias</span>
          </label>
          <input type="tel" id="acudiente-telefono" name="acudiente_telefono" class="form-control" placeholder="Ej: 6123-4567" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="acudiente-telefono2">
            <span>Teléfono Residencial o Alternativo</span>
            <span class="hint">Opcional</span>
          </label>
          <input type="tel" id="acudiente-telefono2" name="acudiente_telefono2" class="form-control" placeholder="Ej: 391-0000">
        </div>
      </div>
    </section>

    <!-- BLOQUE 2: DATOS DEL ESTUDIANTE REGULAR -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">🎓</span>
        <span>2. Datos del Estudiante</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-nombre1">
            <span>Primer Nombre <span class="req">*</span></span>
          </label>
          <input type="text" id="est-nombre1" name="estudiante_nombre1" class="form-control" placeholder="Ej: Mateo" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-nombre2">
            <span>Segundo Nombre</span>
            <span class="hint">Si aplica</span>
          </label>
          <input type="text" id="est-nombre2" name="estudiante_nombre2" class="form-control" placeholder="Ej: Alexander">
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-apellido1">
            <span>Apellido Paterno <span class="req">*</span></span>
          </label>
          <input type="text" id="est-apellido1" name="estudiante_apellido1" class="form-control" placeholder="Ej: Mendoza" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-apellido2">
            <span>Apellido Materno <span class="req">*</span></span>
          </label>
          <input type="text" id="est-apellido2" name="estudiante_apellido2" class="form-control" placeholder="Ej: González" required>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-cedula">
            <span>Cédula Juvenil <span class="req">*</span></span>
            <span class="hint">Obligatorio con guiones</span>
          </label>
          <input type="text" id="est-cedula" name="estudiante_cedula" class="form-control" placeholder="Ej: 8-123-4567" pattern=".*-.*" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-grado">
            <span>Grado a Cursar en 2027 <span class="req">*</span></span>
          </label>
          <select id="est-grado" name="estudiante_grado" class="form-control" required>
            <option value="" disabled selected>Seleccione el nivel...</option>
            <optgroup label="Educación Preescolar">
              <option value="Prekinder">Prekínder</option>
              <option value="Kinder">Kínder</option>
            </optgroup>
            <optgroup label="Educación Primaria">
              <option value="1">1° Grado</option>
              <option value="2">2° Grado</option>
              <option value="3">3° Grado</option>
              <option value="4">4° Grado</option>
              <option value="5">5° Grado</option>
              <option value="6">6° Grado</option>
            </optgroup>
            <optgroup label="Educación Premedia">
              <option value="7">7° Grado</option>
              <option value="8">8° Grado</option>
              <option value="9">9° Grado</option>
            </optgroup>
            <optgroup label="Educación Media (Bachilleratos)">
              <option value="10-Ciencias">10° Grado — Bachiller en Ciencias</option>
              <option value="10-Informatica">10° Grado — Bachiller en Informática</option>
              <option value="11-Ciencias">11° Grado — Bachiller en Ciencias</option>
              <option value="11-Informatica">11° Grado — Bachiller en Informática</option>
              <option value="12-Ciencias">12° Grado — Bachiller en Ciencias</option>
              <option value="12-Informatica">12° Grado — Bachiller en Informática</option>
            </optgroup>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="est-direccion">
          <span>Lugar Exacto de Residencia <span class="req">*</span></span>
          <span class="hint">Comunidad / barrio, calle y número de casa</span>
        </label>
        <input type="text" id="est-direccion" name="estudiante_direccion" class="form-control" placeholder="Ej: Monterrico, calle 13, casa R78, 24 de Diciembre" required>
      </div>

      <div class="form-group">
        <label class="form-label" for="est-salud">
          <span>Condiciones de Salud, Educativas o Emocionales</span>
          <span class="hint">Alergias, medicamentos, tratamientos o adecuaciones</span>
        </label>
        <textarea id="est-salud" name="estudiante_salud" class="form-control" placeholder="Describa cualquier condición médica relevante o requerimiento pedagógico especial para el acompañamiento integral del estudiante..."></textarea>
      </div>
    </section>

    <!-- BLOQUE 3: DOCUMENTOS ADJUNTOS OBLIGATORIOS -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">📎</span>
        <span>3. Documentos Requeridos para Adjuntar</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">
            <span>Contrato 2027 Firmado <span class="req">*</span></span>
            <span class="hint">1ª y última página firmadas</span>
          </label>
          <div class="form-upload-box" id="drop-contrato">
            <span class="form-upload-icon">📄</span>
            <div class="form-upload-text">Seleccionar o arrastrar Contrato</div>
            <div class="form-upload-hint">Formatos: PDF, JPG, PNG (Máx 10 MB)</div>
            <div class="form-file-name" id="name-contrato">Ningún archivo seleccionado</div>
            <input type="file" id="file-contrato" name="file_contrato" accept=".pdf,image/jpeg,image/png,image/webp" required>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">
            <span>Comprobante de Pago de Reserva <span class="req">*</span></span>
            <span class="hint">Mínimo B/. 100.00</span>
          </label>
          <div class="form-upload-box" id="drop-pago">
            <span class="form-upload-icon">💳</span>
            <div class="form-upload-text">Seleccionar Comprobante de Abono</div>
            <div class="form-upload-hint">Formatos: PDF, JPG, PNG (Máx 10 MB)</div>
            <div class="form-file-name" id="name-pago">Ningún archivo seleccionado</div>
            <input type="file" id="file-pago" name="file_pago" accept=".pdf,image/jpeg,image/png,image/webp" required>
          </div>
        </div>
      </div>

      <div style="margin-top: 1rem; padding: 0.9rem 1.2rem; background: var(--cream); border: 1px solid var(--line); border-radius: 8px; font-size: 0.85rem; color: var(--gray);">
        📌 <strong>Abonos Posteriores:</strong> Cualquier pago adicional debe enviarse al correo oficial <code>info@buenpastor-vda.net</code>, indicando detalladamente el nombre del estudiante y que corresponde a la Matrícula 2027.
      </div>
    </section>

    <!-- BLOQUE 4: TÉRMINOS Y COMPROMISOS DEL CONTRATO 2027 -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">📝</span>
        <span>4. Términos y Compromisos Institucionales 2027</span>
      </div>

      <p style="font-size: 0.92rem; color: var(--deep); margin-bottom: 1.2rem;">
        Para formalizar y mantener activo el cupo del estudiante en el Colegio Buen Pastor Voz de Alerta durante el año escolar 2027, el acudiente legal asume y confirma la lectura de los siguientes compromisos:
      </p>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="compromiso_escuela_padres">
        <span><strong>1. Escuela para Padres:</strong> Confirmo que la asistencia presencial una vez al mes es de carácter obligatorio para conservar el cupo del estudiante en la institución.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="compromiso_fechas_pago">
        <span><strong>2. Cronograma y Fechas de Pago:</strong> Acepto cancelar las mensualidades dentro de los primeros 10 días de cada mes, la cuota de diciembre a más tardar el día 5, y el saldo total de la matrícula 2027 antes del 29 de enero de 2027.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="compromiso_sai">
        <span><strong>3. Plataforma Educativa SAI:</strong> Me comprometo a cancelar la totalidad de la plataforma educativa SAI antes del inicio formal del año escolar.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="compromiso_libros">
        <span><strong>4. Materiales y Libros Digitales:</strong> Acepto la cancelación oportuna de las licencias y libros digitales requeridos en la lista oficial de útiles.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="compromiso_inicio_clases">
        <span><strong>5. Requisito Previo al Inicio de Clases:</strong> Entiendo que para ingresar al primer día del año escolar deben estar totalmente cancelados: matrícula completa, plataforma SAI y materiales/libros digitales.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="compromiso_reglamento">
        <span><strong>6. Reglamento Interno:</strong> Me comprometo a cumplir y velar por el respeto a las normas disciplinarias, valores cristianos y código de convivencia del colegio.</span>
      </label>
    </section>

    <!-- ACCIÓN DE ENVÍO -->
    <div class="form-actions">
      <button type="submit" class="form-submit-button">
        <span>🚀 Enviar Formulario de Preingreso 2027</span>
      </button>
      <p style="text-align: center; font-size: 0.82rem; color: var(--gray); margin: 0;">
        Al hacer clic en enviar, sus datos quedarán registrados y su documentación será revisada por la Secretaría y Dirección del BPVDA.
      </p>
    </div>

  </form>
</div>

<!-- Modal de Confirmación -->
<div class="form-success-modal" id="success-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="form-success-card">
    <div style="font-size: 3.5rem; margin-bottom: 1rem;">✅</div>
    <h2 style="color: var(--navy); font-size: 1.8rem; margin-bottom: 0.75rem;">¡Solicitud de Preingreso Registrada!</h2>
    <p style="color: var(--deep); line-height: 1.6; margin-bottom: 1.5rem;">
      Hemos recibido satisfactoriamente la renovación de matrícula 2027 para <strong id="modal-student-name">el estudiante</strong>. Nuestro equipo administrativo verificará el contrato firmado y el comprobante de abono en un plazo de 24 a 48 horas hábiles.
    </p>
    <div style="background: var(--cream); border: 1px solid var(--line); border-radius: 8px; padding: 1rem; margin-bottom: 2rem; font-size: 0.9rem; text-align: left;">
      <div><strong>Acudiente:</strong> <span id="modal-acudiente-name"></span></div>
      <div><strong>Cédula:</strong> <span id="modal-acudiente-id"></span></div>
      <div><strong>Grado 2027:</strong> <span id="modal-student-grade"></span></div>
      <div><strong>Fecha de Envío:</strong> <span>${new Date().toLocaleDateString('es-PA')}</span></div>
    </div>
    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="admisiones.html" class="btn btn-accent" style="padding: 0.8rem 1.6rem;">Volver a Admisiones</a>
      <a href="index.html" class="btn btn-primary" style="padding: 0.8rem 1.6rem;">Ir al Inicio</a>
    </div>
  </div>
</div>

<script>
  // Actualización visual de nombres de archivos seleccionados
  document.getElementById('file-contrato').addEventListener('change', function(e) {
    const name = e.target.files[0] ? e.target.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('name-contrato').textContent = name;
  });

  document.getElementById('file-pago').addEventListener('change', function(e) {
    const name = e.target.files[0] ? e.target.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('name-pago').textContent = name;
  });

  // Manejo de envío con validación nativa
  document.getElementById('preingreso-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }

    const studentName = document.getElementById('est-nombre1').value + ' ' + document.getElementById('est-apellido1').value;
    const acudienteName = document.getElementById('acudiente-nombre').value;
    const acudienteId = document.getElementById('acudiente-cedula').value;
    const gradeSelect = document.getElementById('est-grado');
    const gradeText = gradeSelect.options[gradeSelect.selectedIndex].text;

    document.getElementById('modal-student-name').textContent = studentName;
    document.getElementById('modal-acudiente-name').textContent = acudienteName;
    document.getElementById('modal-acudiente-id').textContent = acudienteId;
    document.getElementById('modal-student-grade').textContent = gradeText;

    const modal = document.getElementById('success-modal');
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
  });
</script>
`;

// =============================================================================
// FORMULARIO 2: NUEVO INGRESO 2027 (REGISTRO COMPLETO Y FICHA INTEGRAL)
// =============================================================================
const formNuevoIngresoHtml = `
<div class="form-container">
  <a href="admisiones.html" class="form-nav-back">
    <span aria-hidden="true">←</span> Volver a la Guía de Admisiones
  </a>

  <header class="form-header-box turquoise">
    <span class="badge">🌟 Familias Aspirantes • Periodo 2027</span>
    <h1>Registro de Matrícula y Ficha Integral</h1>
    <p>Formulario oficial de primer ingreso para aspirantes al Colegio BPVDA. Por favor complete detalladamente los datos académicos, médicos y sociofamiliares requeridos para la apertura del expediente del estudiante.</p>
  </header>

  <!-- Alertas Normativas -->
  <div class="form-alert-banner orange">
    <div class="icon">⚠️</div>
    <div>
      <strong>Formato de Cédula Obligatorio con Guiones</strong>
      <p>Todas las cédulas (estudiante, padre, madre y acudiente) deben escribirse obligatoriamente con guiones (ejemplo: <code>8-888-888</code> o <code>PE-88-888</code>). La omisión de los guiones genera incompatibilidad en las plataformas de MEDUCA y el <strong>PASE-U</strong>.</p>
    </div>
  </div>

  <div class="form-alert-banner turquoise">
    <div class="icon">⚖️</div>
    <div>
      <strong>Designación del Acudiente Legal</strong>
      <p>Aunque ambos padres formen parte del entorno del estudiante, ante la institución educativa se debe registrar a un <strong>único acudiente legal</strong> que firmará el contrato de matrícula y será el canal de comunicación formal.</p>
    </div>
  </div>

  <form id="nuevo-ingreso-form" novalidate>
    
    <!-- BLOQUE 1: INFORMACIÓN DEL ESTUDIANTE -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">🧒</span>
        <span>1. Información del Estudiante Aspirante</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-nombre1">
            <span>Primer Nombre <span class="req">*</span></span>
          </label>
          <input type="text" id="est-nombre1" name="est_nombre1" class="form-control" placeholder="Ej: Daniel" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-nombre2">
            <span>Segundo Nombre</span>
            <span class="hint">Si aplica</span>
          </label>
          <input type="text" id="est-nombre2" name="est_nombre2" class="form-control" placeholder="Ej: Andrés">
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-apellido1">
            <span>Apellido Paterno <span class="req">*</span></span>
          </label>
          <input type="text" id="est-apellido1" name="est_apellido1" class="form-control" placeholder="Ej: Castillo" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-apellido2">
            <span>Apellido Materno <span class="req">*</span></span>
          </label>
          <input type="text" id="est-apellido2" name="est_apellido2" class="form-control" placeholder="Ej: Rivas" required>
        </div>
      </div>

      <div class="form-grid-3">
        <div class="form-group">
          <label class="form-label" for="est-cedula">
            <span>Cédula Juvenil / Pasaporte <span class="req">*</span></span>
            <span class="hint">Con guiones</span>
          </label>
          <input type="text" id="est-cedula" name="est_cedula" class="form-control" placeholder="Ej: 8-987-654" pattern=".*-.*" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-fecha-nac">
            <span>Fecha de Nacimiento <span class="req">*</span></span>
            <span class="hint" style="color: var(--orange); font-weight: 700;">Del alumno</span>
          </label>
          <input type="date" id="est-fecha-nac" name="est_fecha_nac" class="form-control" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-nacionalidad">
            <span>Nacionalidad <span class="req">*</span></span>
          </label>
          <input type="text" id="est-nacionalidad" name="est_nacionalidad" class="form-control" placeholder="Ej: Panameña" required>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-nivel-ingreso">
            <span>Nivel Académico al que Aspira <span class="req">*</span></span>
          </label>
          <select id="est-nivel-ingreso" name="est_nivel_ingreso" class="form-control" required>
            <option value="" disabled selected>Seleccione el nivel...</option>
            <optgroup label="Educación Preescolar">
              <option value="PK">Prekínder (4 años cumplidos a abril 2027)</option>
              <option value="K">Kínder (5 años cumplidos a abril 2027)</option>
            </optgroup>
            <optgroup label="Educación Primaria">
              <option value="1">1° Grado Primaria</option>
              <option value="2">2° Grado Primaria</option>
              <option value="3">3° Grado Primaria</option>
              <option value="4">4° Grado Primaria</option>
              <option value="5">5° Grado Primaria (Requiere prueba diagnóstica)</option>
              <option value="6">6° Grado Primaria (Requiere prueba diagnóstica)</option>
            </optgroup>
            <optgroup label="Educación Premedia (Requieren prueba diagnóstica)">
              <option value="7">7° Grado Premedia</option>
              <option value="8">8° Grado Premedia</option>
              <option value="9">9° Grado Premedia</option>
            </optgroup>
            <optgroup label="Educación Media">
              <option value="10-Ciencias">10° Grado — Bachiller en Ciencias</option>
              <option value="10-Humanidades-Informatica">10° Grado — Bachiller en Humanidades / Informática</option>
            </optgroup>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="ingreso-familiar">
            <span>Ingreso Familiar Mensual Aproximado <span class="req">*</span></span>
            <span class="hint">Sustento financiero</span>
          </label>
          <input type="text" id="ingreso-familiar" name="ingreso_familiar" class="form-control" placeholder="Ej: B/. 1,200.00" required>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="est-direccion-completa">
          <span>Dirección Residencial Completa <span class="req">*</span></span>
          <span class="hint">Comunidad / barrio, calle y número de casa</span>
        </label>
        <input type="text" id="est-direccion-completa" name="est_direccion" class="form-control" placeholder="Ej: Monterrico, Calle Principal, Casa #14B, 24 de Diciembre" required>
      </div>
    </section>

    <!-- BLOQUE 2: FICHA MÉDICA Y LATERALIDAD -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">🩺</span>
        <span>2. Ficha Médica y Desarrollo</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-sangre">
            <span>Tipaje de Sangre <span class="req">*</span></span>
          </label>
          <select id="est-sangre" name="est_sangre" class="form-control" required>
            <option value="" disabled selected>Seleccione el tipo...</option>
            <option value="O+">O Positivo (O+)</option>
            <option value="O-">O Negativo (O-)</option>
            <option value="A+">A Positivo (A+)</option>
            <option value="A-">A Negativo (A-)</option>
            <option value="B+">B Positivo (B+)</option>
            <option value="B-">B Negativo (B-)</option>
            <option value="AB+">AB Positivo (AB+)</option>
            <option value="AB-">AB Negativo (AB-)</option>
            <option value="Desconocido">Pendiente por prueba de laboratorio</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-lateralidad">
            <span>Predominancia Lateral <span class="req">*</span></span>
          </label>
          <select id="est-lateralidad" name="est_lateralidad" class="form-control" required>
            <option value="" disabled selected>Seleccione...</option>
            <option value="diestro">Diestro (Mano derecha)</option>
            <option value="zurdo">Zurdo (Mano izquierda)</option>
            <option value="ambidiestro">Ambidiestro</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="est-alergias">
          <span>Registro de Alergias o Enfermedades que Padece <span class="req">*</span></span>
          <span class="hint">Alimentos, medicamentos, asma, etc.</span>
        </label>
        <textarea id="est-alergias" name="est_alergias" class="form-control" placeholder="Especifique con claridad si padece alergias o tratamientos continuos. Si no padece ninguna, escriba 'Ninguna'." required></textarea>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="est-discapacidad-check">
            <span>¿Posee Alguna Condición de Discapacidad o Diagnóstico? <span class="req">*</span></span>
          </label>
          <select id="est-discapacidad-check" name="est_discapacidad_check" class="form-control" required>
            <option value="no" selected>No, no presenta diagnóstico ni discapacidad</option>
            <option value="si">Sí, cuenta con diagnóstico médico o psicopedagógico</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="est-discapacidad-detalle">
            <span>Especifique la Condición o Diagnóstico</span>
            <span class="hint">Si seleccionó Sí</span>
          </label>
          <input type="text" id="est-discapacidad-detalle" name="est_discapacidad_detalle" class="form-control" placeholder="Ej: TDAH, Trastorno de Lenguaje, Adecuación Curricular...">
        </div>
      </div>
    </section>

    <!-- BLOQUE 3: INFORMACIÓN DE LOS PADRES -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">👨‍👩‍👧</span>
        <span>3. Información del Núcleo Familiar</span>
      </div>

      <!-- Datos del Padre -->
      <div style="background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h4 style="color: var(--navy); margin-bottom: 1rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>👨</span> Datos del Padre
        </h4>

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label" for="padre-nombre">
              <span>Primer Nombre y Primer Apellido <span class="req">*</span></span>
            </label>
            <input type="text" id="padre-nombre" name="padre_nombre" class="form-control" placeholder="Ej: Carlos Castillo" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="padre-cedula">
              <span>Número de Cédula <span class="req">*</span></span>
              <span class="hint">Con guiones</span>
            </label>
            <input type="text" id="padre-cedula" name="padre_cedula" class="form-control" placeholder="Ej: 8-543-210" pattern=".*-.*" required>
          </div>
        </div>

        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label" for="padre-nacionalidad">
              <span>Nacionalidad <span class="req">*</span></span>
            </label>
            <input type="text" id="padre-nacionalidad" name="padre_nacionalidad" class="form-control" placeholder="Ej: Panameña" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="padre-ocupacion">
              <span>Ocupación y Lugar de Trabajo <span class="req">*</span></span>
            </label>
            <input type="text" id="padre-ocupacion" name="padre_ocupacion" class="form-control" placeholder="Ej: Ingeniero - Empresa XYZ" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="padre-celular">
              <span>Número de Celular <span class="req">*</span></span>
            </label>
            <input type="tel" id="padre-celular" name="padre_celular" class="form-control" placeholder="Ej: 6999-1122" required>
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem;">
          <label class="form-label">
            <span>¿Mantiene relación y convivencia con el estudiante? <span class="req">*</span></span>
          </label>
          <div style="display: flex; gap: 2rem; margin-top: 0.25rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="radio" name="padre_relacion" value="si" checked> Sí, mantiene relación activa
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="radio" name="padre_relacion" value="no"> No mantiene relación
            </label>
          </div>
        </div>
      </div>

      <!-- Datos de la Madre -->
      <div style="background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 1.5rem;">
        <h4 style="color: var(--navy); margin-bottom: 1rem; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>👩</span> Datos de la Madre
        </h4>

        <div class="form-grid-2">
          <div class="form-group">
            <label class="form-label" for="madre-nombre">
              <span>Primer Nombre y Primer Apellido <span class="req">*</span></span>
            </label>
            <input type="text" id="madre-nombre" name="madre_nombre" class="form-control" placeholder="Ej: Lucía Rivas" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="madre-cedula">
              <span>Número de Cédula <span class="req">*</span></span>
              <span class="hint">Con guiones</span>
            </label>
            <input type="text" id="madre-cedula" name="madre_cedula" class="form-control" placeholder="Ej: 8-765-432" pattern=".*-.*" required>
          </div>
        </div>

        <div class="form-grid-3">
          <div class="form-group">
            <label class="form-label" for="madre-nacionalidad">
              <span>Nacionalidad <span class="req">*</span></span>
            </label>
            <input type="text" id="madre-nacionalidad" name="madre_nacionalidad" class="form-control" placeholder="Ej: Panameña" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="madre-ocupacion">
              <span>Ocupación y Lugar de Trabajo <span class="req">*</span></span>
            </label>
            <input type="text" id="madre-ocupacion" name="madre_ocupacion" class="form-control" placeholder="Ej: Docente - MEDUCA" required>
          </div>

          <div class="form-group">
            <label class="form-label" for="madre-celular">
              <span>Número de Celular <span class="req">*</span></span>
            </label>
            <input type="tel" id="madre-celular" name="madre_celular" class="form-control" placeholder="Ej: 6888-3344" required>
          </div>
        </div>

        <div class="form-group" style="margin-top: 0.5rem;">
          <label class="form-label">
            <span>¿Mantiene relación y convivencia con el estudiante? <span class="req">*</span></span>
          </label>
          <div style="display: flex; gap: 2rem; margin-top: 0.25rem;">
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="radio" name="madre_relacion" value="si" checked> Sí, mantiene relación activa
            </label>
            <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
              <input type="radio" name="madre_relacion" value="no"> No mantiene relación
            </label>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOQUE 4: DESIGNACIÓN DEL ACUDIENTE LEGAL -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">⚖️</span>
        <span>4. Designación del Acudiente Legal (Representante)</span>
      </div>

      <div class="form-group">
        <label class="form-label" for="acudiente-rol">
          <span>Seleccione quién asumirá la representación legal ante el Colegio <span class="req">*</span></span>
        </label>
        <select id="acudiente-rol" name="acudiente_rol" class="form-control" required>
          <option value="" disabled selected>Seleccione representante...</option>
          <option value="madre">La Madre</option>
          <option value="padre">El Padre</option>
          <option value="otro">Otro Representante / Tutor Legal Formal</option>
        </select>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label" for="acudiente-designado-nombre">
            <span>Nombre Completo del Acudiente Designado <span class="req">*</span></span>
          </label>
          <input type="text" id="acudiente-designado-nombre" name="acudiente_designado_nombre" class="form-control" placeholder="Nombre y dos apellidos" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="acudiente-designado-cedula">
            <span>Cédula del Acudiente <span class="req">*</span></span>
            <span class="hint">Con guiones</span>
          </label>
          <input type="text" id="acudiente-designado-cedula" name="acudiente_designado_cedula" class="form-control" placeholder="Ej: 8-765-432" pattern=".*-.*" required>
        </div>
      </div>

      <div class="form-grid-3">
        <div class="form-group">
          <label class="form-label" for="acudiente-designado-celular">
            <span>Celular de Contacto Directo <span class="req">*</span></span>
          </label>
          <input type="tel" id="acudiente-designado-celular" name="acudiente_designado_celular" class="form-control" placeholder="Ej: 6888-3344" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="acudiente-designado-email">
            <span>Correo Electrónico <span class="req">*</span></span>
          </label>
          <input type="email" id="acudiente-designado-email" name="acudiente_designado_email" class="form-control" placeholder="correo@ejemplo.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="acudiente-designado-parentesco">
            <span>Parentesco Formal <span class="req">*</span></span>
          </label>
          <input type="text" id="acudiente-designado-parentesco" name="acudiente_designado_parentesco" class="form-control" placeholder="Ej: Madre, Padre, Tía / Tutora" required>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="acudiente-designado-trabajo">
          <span>Ocupación y Lugar de Trabajo del Acudiente <span class="req">*</span></span>
        </label>
        <input type="text" id="acudiente-designado-trabajo" name="acudiente_designado_trabajo" class="form-control" placeholder="Ej: Contadora en Banco XYZ" required>
      </div>
    </section>

    <!-- BLOQUE 5: COMPROBANTES Y REQUISITOS ADJUNTOS -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">💳</span>
        <span>5. Comprobante de Abono y Documentación</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group">
          <label class="form-label">
            <span>Comprobante de Abono del 50% o Pago Total <span class="req">*</span></span>
            <span class="hint">Requerido para separar cupo</span>
          </label>
          <div class="form-upload-box" id="drop-abono-nuevo">
            <span class="form-upload-icon">🧾</span>
            <div class="form-upload-text">Seleccionar Comprobante de Pago</div>
            <div class="form-upload-hint">Formatos: PDF, JPG, PNG (Máx 10 MB)</div>
            <div class="form-file-name" id="name-abono-nuevo">Ningún archivo seleccionado</div>
            <input type="file" id="file-abono-nuevo" name="file_abono" accept=".pdf,image/jpeg,image/png,image/webp" required>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">
            <span>Informe Médico o Psicopedagógico</span>
            <span class="hint">Solo si aplica</span>
          </label>
          <div class="form-upload-box" id="drop-diagnostico">
            <span class="form-upload-icon">📁</span>
            <div class="form-upload-text">Adjuntar Informe (Opcional)</div>
            <div class="form-upload-hint">Formatos: PDF, JPG, PNG (Máx 10 MB)</div>
            <div class="form-file-name" id="name-diagnostico">Ningún archivo seleccionado</div>
            <input type="file" id="file-diagnostico" name="file_diagnostico" accept=".pdf,image/jpeg,image/png,image/webp">
          </div>
        </div>
      </div>
    </section>

    <!-- BLOQUE 6: COMPROMISOS Y REGLAMENTO -->
    <section class="form-block">
      <div class="form-block-title">
        <span class="icon">📜</span>
        <span>6. Compromisos y Condiciones Institucionales</span>
      </div>

      <p style="font-size: 0.92rem; color: var(--deep); margin-bottom: 1.2rem;">
        Como parte de la comunidad educativa BPVDA, el acudiente legal asume los siguientes compromisos para formalizar el ingreso en el periodo 2027:
      </p>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="nuevo_escuela_padres">
        <span><strong>1. Escuela para Padres:</strong> Asumo la obligatoriedad de participar de forma presencial una vez al mes en los encuentros formativos de padres.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="nuevo_fechas_pago">
        <span><strong>2. Pagos de Colegiatura:</strong> Acepto cancelar las mensualidades dentro de los primeros 10 días de cada mes (y antes del 5 de diciembre para la última cuota), cancelando la totalidad de la matrícula a más tardar el 29 de enero de 2027.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="nuevo_sai_libros">
        <span><strong>3. Plataforma Educativa SAI y Libros Digitales:</strong> Me comprometo a cancelar la plataforma digital SAI y los libros interactivos antes del primer día de clases del periodo 2027.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="nuevo_induccion">
        <span><strong>4. Curso de Verano e Inducción (Enero 2027):</strong> Confirmo la asistencia de mi acudido a las jornadas de inducción y preparación académica pautadas para el mes de enero de 2027.</span>
      </label>

      <label class="form-checkbox-item">
        <input type="checkbox" required name="nuevo_reglamento">
        <span><strong>5. Aceptación del Ideario y Normas:</strong> Acepto el Ideario Cristiano y las normas del Reglamento Interno y de Convivencia Escolar del Colegio BPVDA.</span>
      </label>
    </section>

    <!-- ACCIÓN DE ENVÍO -->
    <div class="form-actions">
      <button type="submit" class="form-submit-button accent">
        <span>⭐ Registrar Matrícula y Ficha de Nuevo Ingreso</span>
      </button>
      <p style="text-align: center; font-size: 0.82rem; color: var(--gray); margin: 0;">
        Al enviar este formulario, la Ficha Integral del estudiante se remitirá a la Oficina de Admisiones y se generará su constancia digital.
      </p>
    </div>

  </form>
</div>

<!-- Modal de Confirmación -->
<div class="form-success-modal" id="nuevo-success-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="form-success-card">
    <div style="font-size: 3.5rem; margin-bottom: 1rem;">🎉</div>
    <h2 style="color: var(--navy); font-size: 1.8rem; margin-bottom: 0.75rem;">¡Registro de Matrícula Recibido!</h2>
    <p style="color: var(--deep); line-height: 1.6; margin-bottom: 1.5rem;">
      ¡Bienvenidos a la familia BPVDA! La Ficha Integral y Registro de <strong id="modal-nuevo-student">el aspirante</strong> ha sido cargada con éxito. Nuestro equipo de Admisiones se comunicará al WhatsApp o correo indicado para validar la prueba psicológica / diagnóstica y confirmar su cupo.
    </p>
    <div style="background: var(--cream); border: 1px solid var(--line); border-radius: 8px; padding: 1rem; margin-bottom: 2rem; font-size: 0.9rem; text-align: left;">
      <div><strong>Aspirante:</strong> <span id="modal-nuevo-student-val"></span></div>
      <div><strong>Cédula:</strong> <span id="modal-nuevo-id"></span></div>
      <div><strong>Grado al que Aspira:</strong> <span id="modal-nuevo-grade"></span></div>
      <div><strong>Acudiente Representante:</strong> <span id="modal-nuevo-acudiente"></span></div>
      <div><strong>Fecha de Solicitud:</strong> <span>${new Date().toLocaleDateString('es-PA')}</span></div>
    </div>
    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="admisiones.html" class="btn btn-accent" style="padding: 0.8rem 1.6rem;">Volver a Admisiones</a>
      <a href="index.html" class="btn btn-primary" style="padding: 0.8rem 1.6rem;">Ir al Inicio</a>
    </div>
  </div>
</div>

<script>
  // Actualización de nombres de archivos seleccionados
  document.getElementById('file-abono-nuevo').addEventListener('change', function(e) {
    const name = e.target.files[0] ? e.target.files[0].name : 'Ningún archivo seleccionado';
    document.getElementById('name-abono-nuevo').textContent = name;
  });

  const diagInput = document.getElementById('file-diagnostico');
  if (diagInput) {
    diagInput.addEventListener('change', function(e) {
      const name = e.target.files[0] ? e.target.files[0].name : 'Ningún archivo seleccionado';
      document.getElementById('name-diagnostico').textContent = name;
    });
  }

  // Si selecciona mamá o papá, autocompletar si ya llenó arriba
  document.getElementById('acudiente-rol').addEventListener('change', function() {
    const rol = this.value;
    const nameInput = document.getElementById('acudiente-designado-nombre');
    const cedulaInput = document.getElementById('acudiente-designado-cedula');
    const celInput = document.getElementById('acudiente-designado-celular');
    const parentescoInput = document.getElementById('acudiente-designado-parentesco');
    const trabajoInput = document.getElementById('acudiente-designado-trabajo');

    if (rol === 'madre') {
      const mNom = document.getElementById('madre-nombre').value;
      const mCed = document.getElementById('madre-cedula').value;
      const mCel = document.getElementById('madre-celular').value;
      const mTra = document.getElementById('madre-ocupacion').value;
      if (mNom) nameInput.value = mNom;
      if (mCed) cedulaInput.value = mCed;
      if (mCel) celInput.value = mCel;
      if (mTra) trabajoInput.value = mTra;
      parentescoInput.value = 'Madre';
    } else if (rol === 'padre') {
      const pNom = document.getElementById('padre-nombre').value;
      const pCed = document.getElementById('padre-cedula').value;
      const pCel = document.getElementById('padre-celular').value;
      const pTra = document.getElementById('padre-ocupacion').value;
      if (pNom) nameInput.value = pNom;
      if (pCed) cedulaInput.value = pCed;
      if (pCel) celInput.value = pCel;
      if (pTra) trabajoInput.value = pTra;
      parentescoInput.value = 'Padre';
    } else {
      parentescoInput.value = '';
    }
  });

  // Manejo de envío
  document.getElementById('nuevo-ingreso-form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (!this.checkValidity()) {
      this.reportValidity();
      return;
    }

    const studentName = document.getElementById('est-nombre1').value + ' ' + document.getElementById('est-apellido1').value;
    const studentId = document.getElementById('est-cedula').value;
    const acudienteName = document.getElementById('acudiente-designado-nombre').value;
    const gradeSelect = document.getElementById('est-nivel-ingreso');
    const gradeText = gradeSelect.options[gradeSelect.selectedIndex].text;

    document.getElementById('modal-nuevo-student').textContent = studentName;
    document.getElementById('modal-nuevo-student-val').textContent = studentName;
    document.getElementById('modal-nuevo-id').textContent = studentId;
    document.getElementById('modal-nuevo-grade').textContent = gradeText;
    document.getElementById('modal-nuevo-acudiente').textContent = acudienteName;

    const modal = document.getElementById('nuevo-success-modal');
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
  });
</script>
`;

// Escribir los dos archivos generados
writeFileSync(join(root, 'form-preingreso.html'), wrapPage('Formulario de Preingreso 2027', formPreingresoHtml));
console.log('✅ form-preingreso.html generado exitosamente.');

writeFileSync(join(root, 'form-nuevo-ingreso.html'), wrapPage('Registro de Nuevo Ingreso 2027', formNuevoIngresoHtml));
console.log('✅ form-nuevo-ingreso.html generado exitosamente.');
