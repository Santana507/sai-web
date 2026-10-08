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
    <span class="badge">Estudiantes Regulares • Periodo 2027</span>
    <h1>Formulario Oficial de Preingreso</h1>
    <p>Renovación formal de cupo y actualización de expediente académico para el año lectivo 2027. Por favor complete cada sección con información veraz y adjunte el contrato y comprobante correspondientes.</p>
  </header>

  <!-- Alertas Normativas -->
  <div class="form-alert-banner orange">
    <div>
      <strong>Formato de Cédula Obligatorio con Guiones</strong>
      <p>Tanto la cédula del acudiente como la del estudiante deben escribirse obligatoriamente con guiones (ejemplo: <code>8-888-888</code> o <code>PE-12-345</code>). Un error de tipeo o la omisión de los guiones puede provocar el rechazo o suspensión de la beca digital del <strong>PASE-U</strong>.</p>
    </div>
  </div>

  <div class="form-alert-banner turquoise">
    <div>
      <strong>Designación de un Único Acudiente Legal</strong>
      <p>Por normativas legales y administrativas escolares, se debe registrar a una sola persona como acudiente y representante legal formal (papá, mamá o tutor). Esta persona firmará el contrato y será el canal directo y oficial ante docentes y administración.</p>
    </div>
  </div>

  <div class="progress-container">
    <div style="display: flex; justify-content: space-between; font-weight: 600; color: var(--navy); font-size: 0.95rem;">
      <span>Progreso del Formulario</span>
      <span id="progress-text">0 de 4 secciones completadas</span>
    </div>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" id="progress-bar"></div>
    </div>
  </div>

  <div id="form-summary-error" class="form-summary-error">
    Por favor, corrija los errores en el formulario antes de enviar.
  </div>

  <form id="preingreso-form" novalidate>
    
    <!-- BLOQUE 1: DATOS DEL ACUDIENTE LEGAL -->
    <section class="form-block" id="block-1">
      <div class="form-block-title">
        <span>1. Datos del Acudiente Legal (Representante)</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-acudiente-email">
          <label class="form-label" for="acudiente-email">
            <span>Correo Electrónico <span class="req">*</span></span>
          </label>
          <input type="email" id="acudiente-email" name="acudiente_email" class="form-control" placeholder="correo@ejemplo.com" required>
          <div class="form-error-msg">Ingrese un correo electrónico válido.</div>
        </div>

        <div class="form-group" id="group-acudiente-nombre">
          <label class="form-label" for="acudiente-nombre">
            <span>Nombre Completo y Apellidos <span class="req">*</span></span>
          </label>
          <input type="text" id="acudiente-nombre" name="acudiente_nombre" class="form-control" placeholder="Ej: Roberto Carlos Mendoza Pérez" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-acudiente-cedula">
          <label class="form-label" for="acudiente-cedula">
            <span>Cédula de Identidad con guiones <span class="req">*</span></span>
          </label>
          <input type="text" id="acudiente-cedula" name="acudiente_cedula" class="form-control" placeholder="Ej: 8-888-888" required>
          <div class="form-error-msg">La cédula debe escribirse con guiones (Ej: 8-888-888).</div>
        </div>

        <div class="form-group" id="group-acudiente-parentesco">
          <label class="form-label" for="acudiente-parentesco">
            <span>Parentesco <span class="req">*</span></span>
          </label>
          <select id="acudiente-parentesco" name="acudiente_parentesco" class="form-control" required>
            <option value="" disabled selected>Seleccione el parentesco...</option>
            <option value="Madre">Madre</option>
            <option value="Padre">Padre</option>
            <option value="Tutor Legal">Tutor Legal</option>
          </select>
          <div class="form-error-msg">Seleccione una opción válida.</div>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-acudiente-telefono">
          <label class="form-label" for="acudiente-telefono">
            <span>Teléfono de Contacto <span class="req">*</span></span>
          </label>
          <input type="tel" id="acudiente-telefono" name="acudiente_telefono" class="form-control" placeholder="Ej: 6123-4567" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>

        <div class="form-group" id="group-acudiente-telefono2">
          <label class="form-label" for="acudiente-telefono2">
            <span>Teléfono Alternativo</span>
            <span class="hint">Opcional</span>
          </label>
          <input type="tel" id="acudiente-telefono2" name="acudiente_telefono2" class="form-control" placeholder="Ej: 391-0000">
        </div>
      </div>
    </section>

    <!-- BLOQUE 2: DATOS DEL ESTUDIANTE -->
    <section class="form-block" id="block-2">
      <div class="form-block-title">
        <span>2. Datos del Estudiante</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-est-grado">
          <label class="form-label" for="est-grado">
            <span>Grado a Cursar en 2027 <span class="req">*</span></span>
          </label>
          <select id="est-grado" name="estudiante_grado" class="form-control" required>
            <option value="" disabled selected>Seleccione el nivel...</option>
            <optgroup label="Preescolar">
              <option value="PK">Prekínder (PK)</option>
              <option value="K">Kínder (K)</option>
            </optgroup>
            <optgroup label="Primaria">
              <option value="1">1° Grado</option>
              <option value="2">2° Grado</option>
              <option value="3">3° Grado</option>
              <option value="4">4° Grado</option>
              <option value="5">5° Grado</option>
              <option value="6">6° Grado</option>
            </optgroup>
            <optgroup label="Premedia">
              <option value="7">7° Grado</option>
              <option value="8">8° Grado</option>
              <option value="9">9° Grado</option>
            </optgroup>
            <optgroup label="Media">
              <option value="10-Ciencias">10° Grado - Ciencias</option>
              <option value="10-Informatica">10° Grado - Informática</option>
              <option value="11-Ciencias">11° Grado - Ciencias</option>
              <option value="11-Informatica">11° Grado - Informática</option>
              <option value="12-Ciencias">12° Grado - Ciencias</option>
              <option value="12-Informatica">12° Grado - Informática</option>
            </optgroup>
          </select>
          <div class="form-error-msg">Seleccione una opción válida.</div>
        </div>

        <div class="form-group" id="group-est-nombre1">
          <label class="form-label" for="est-nombre1">
            <span>Primer Nombre <span class="req">*</span></span>
          </label>
          <input type="text" id="est-nombre1" name="estudiante_nombre1" class="form-control" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-est-nombre2">
          <label class="form-label" for="est-nombre2">
            <span>Segundo Nombre</span>
            <span class="hint">Opcional</span>
          </label>
          <input type="text" id="est-nombre2" name="estudiante_nombre2" class="form-control">
        </div>

        <div class="form-group" id="group-est-apellido1">
          <label class="form-label" for="est-apellido1">
            <span>Apellido Paterno <span class="req">*</span></span>
          </label>
          <input type="text" id="est-apellido1" name="estudiante_apellido1" class="form-control" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-est-apellido2">
          <label class="form-label" for="est-apellido2">
            <span>Apellido Materno <span class="req">*</span></span>
          </label>
          <input type="text" id="est-apellido2" name="estudiante_apellido2" class="form-control" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>

        <div class="form-group" id="group-est-cedula">
          <label class="form-label" for="est-cedula">
            <span>Cédula de Identidad Juvenil <span class="req">*</span></span>
          </label>
          <input type="text" id="est-cedula" name="estudiante_cedula" class="form-control" required>
          <div class="form-error-msg">La cédula debe escribirse con guiones (Ej: 8-888-888).</div>
        </div>
      </div>

      <div class="form-group" id="group-est-direccion">
        <label class="form-label" for="est-direccion">
          <span>Lugar de Residencia Detallado <span class="req">*</span></span>
        </label>
        <input type="text" id="est-direccion" name="estudiante_direccion" class="form-control" placeholder="Ej: Monte Rico, calle 13, casa R78" required>
        <div class="form-error-msg">Este campo es obligatorio.</div>
      </div>

      <div class="form-group" id="group-est-condiciones">
        <label class="form-label" for="est-condiciones">
          <span>Condiciones de salud / educativas / emocionales</span>
          <span class="hint">Opcional</span>
        </label>
        <textarea id="est-condiciones" name="estudiante_condiciones" class="form-control" rows="3"></textarea>
      </div>
    </section>

    <!-- BLOQUE 3: DOCUMENTOS REQUERIDOS -->
    <section class="form-block" id="block-3">
      <div class="form-block-title">
        <span>3. Documentos Requeridos</span>
      </div>

      <div class="form-grid-2">
        <div class="form-group" id="group-file-contrato">
          <label class="form-label">
            <span>Contrato 2027 Firmado <span class="req">*</span></span>
            <span class="hint">1ª y última pág firmadas</span>
          </label>
          <div class="form-upload-box">
            <svg class="form-upload-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 10px; color: var(--turquoise);"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <div class="form-upload-text">Seleccionar Archivo</div>
            <div class="form-upload-hint">Formatos: PDF, JPG, PNG (Máx 10 MB)</div>
            <div class="form-file-name" id="name-contrato">Ningún archivo seleccionado</div>
            <input type="file" id="file-contrato" name="file_contrato" accept=".pdf,image/jpeg,image/png,image/webp" required>
          </div>
          <div class="form-error-msg" id="error-file-contrato">Debe adjuntar este documento para continuar.</div>
        </div>

        <div class="form-group" id="group-file-pago">
          <label class="form-label">
            <span>Comprobante de Pago de Matrícula <span class="req">*</span></span>
            <span class="hint">Mínimo B/. 100.00</span>
          </label>
          <div class="form-upload-box">
            <svg class="form-upload-svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 10px; color: var(--turquoise);"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
            <div class="form-upload-text">Seleccionar Comprobante</div>
            <div class="form-upload-hint">Formatos: PDF, JPG, PNG (Máx 10 MB)</div>
            <div class="form-file-name" id="name-pago">Ningún archivo seleccionado</div>
            <input type="file" id="file-pago" name="file_pago" accept=".pdf,image/jpeg,image/png,image/webp" required>
          </div>
          <div class="form-error-msg" id="error-file-pago">Debe adjuntar este documento para continuar.</div>
        </div>
      </div>

      <div style="margin-top: 1rem; padding: 0.9rem 1.2rem; background: var(--cream); border: 1px solid var(--line); border-radius: 8px; font-size: 0.85rem; color: var(--gray);">
        <strong>Abonos Posteriores:</strong> Cualquier pago adicional debe enviarse al correo oficial <code>info@buenpastor-vda.net</code>, indicando detalladamente el nombre del estudiante y que corresponde a la Matrícula 2027.
      </div>
    </section>

    <!-- BLOQUE 4: TÉRMINOS Y COMPROMISOS -->
    <section class="form-block" id="block-4">
      <div class="form-block-title">
        <span>4. Términos y Compromisos</span>
      </div>
      
      <div class="form-group" id="group-terminos">
        <div class="form-error-msg" style="margin-bottom: 1rem;" id="error-terminos">Debe aceptar todos los compromisos institucionales.</div>

        <label class="form-checkbox-item">
          <input type="checkbox" required name="comp_escuela_padres" class="term-checkbox">
          <span><strong>1. Escuela para Padres:</strong> Asistencia presencial una vez al mes es obligatoria.</span>
        </label>

        <label class="form-checkbox-item">
          <input type="checkbox" required name="comp_fechas_pago" class="term-checkbox">
          <span><strong>2. Fechas de pago:</strong> Mensualidades los primeros 10 días de cada mes, cuota de diciembre hasta el día 5, y el saldo total de la matrícula 2027 antes del 29 de enero de 2027.</span>
        </label>

        <label class="form-checkbox-item">
          <input type="checkbox" required name="comp_sai" class="term-checkbox">
          <span><strong>3. Plataforma SAI:</strong> Pago total de la plataforma antes del inicio del año escolar.</span>
        </label>

        <label class="form-checkbox-item">
          <input type="checkbox" required name="comp_libros" class="term-checkbox">
          <span><strong>4. Materiales y libros digitales:</strong> Acepto la cancelación oportuna de las licencias y libros.</span>
        </label>

        <label class="form-checkbox-item">
          <input type="checkbox" required name="comp_requisito" class="term-checkbox">
          <span><strong>5. Requisito previo al inicio de clases:</strong> Entiendo que para ingresar el primer día deben estar cancelados: matrícula, SAI y materiales/libros digitales.</span>
        </label>

        <label class="form-checkbox-item">
          <input type="checkbox" required name="comp_reglamento" class="term-checkbox">
          <span><strong>6. Reglamento interno:</strong> Cumplir y velar por el respeto a las normas del colegio.</span>
        </label>
      </div>
    </section>

    <div class="form-actions">
      <button type="submit" class="form-submit-button">
        <span>Enviar Formulario de Preingreso 2027</span>
      </button>
      <p style="text-align: center; font-size: 0.82rem; color: var(--gray); margin: 0; margin-top: 1rem;">
        Al hacer clic en enviar, sus datos quedarán registrados y su documentación será revisada.
      </p>
    </div>
  </form>
</div>

<!-- Modal de Confirmación -->
<div class="form-success-modal" id="success-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="form-success-card">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <h2 style="color: var(--navy); font-size: 1.8rem; margin-bottom: 0.75rem;">¡Solicitud Registrada!</h2>
    <p style="color: var(--deep); line-height: 1.6; margin-bottom: 1.5rem;">
      Hemos recibido satisfactoriamente la solicitud de renovación de matrícula 2027.
    </p>
    
    <div style="background: var(--cream); border: 1px solid var(--line); border-radius: 8px; padding: 1.2rem; margin-bottom: 2rem; font-size: 0.9rem; text-align: left; color: var(--navy);">
      <div style="margin-bottom: 0.4rem;"><strong>Estudiante:</strong> <span id="modal-student-name"></span></div>
      <div style="margin-bottom: 0.4rem;"><strong>Grado 2027:</strong> <span id="modal-student-grade"></span></div>
      <div style="margin-bottom: 0.4rem;"><strong>Acudiente:</strong> <span id="modal-acudiente-name"></span></div>
      <div style="margin-bottom: 0.4rem;"><strong>Cédula Acudiente:</strong> <span id="modal-acudiente-id"></span></div>
      <div><strong>Fecha de Envío:</strong> <span id="modal-date"></span></div>
    </div>

    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="index.html" class="btn btn-primary" style="padding: 0.8rem 1.6rem; width: 100%; border-radius: 6px; text-decoration: none; display: inline-block;">Volver al Inicio</a>
    </div>
  </div>
</div>
</div>

<script>
(function() {
  'use strict';

  const form = document.getElementById('preingreso-form');
  const summaryError = document.getElementById('form-summary-error');
  
  // Validation Regex
  const cedulaRegex = /^[A-Za-z0-9]+-[0-9]+-[0-9]+$/; // Flexible for 8-888-888 or PE-12-345 etc. Must have at least two hyphens
  // Let's use a simpler one: just must contain at least one hyphen and alphanumeric characters
  const cedulaRegexSimple = /^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Max file size: 10MB
  const MAX_FILE_SIZE = 10 * 1024 * 1024;

  const getGroup = (element) => element.closest('.form-group');

  const showError = (group, inputId, msgText) => {
    if(!group) return;
    group.classList.remove('is-valid');
    group.classList.add('is-invalid');
    if (msgText) {
      let msgEl = group.querySelector('.form-error-msg');
      if(msgEl) msgEl.textContent = msgText;
    }
  };

  const clearError = (group) => {
    if(!group) return;
    group.classList.remove('is-invalid');
    group.classList.add('is-valid');
  };

  const validateField = (field) => {
    const group = getGroup(field);
    if (!group) return true;

    // Remove valid/invalid classes if not required and empty
    if (!field.required && field.value.trim() === '' && field.type !== 'file') {
      group.classList.remove('is-invalid', 'is-valid');
      return true;
    }

    let isValid = true;
    let customMsg = '';

    if (field.required && !field.value.trim() && field.type !== 'file' && field.type !== 'checkbox') {
      isValid = false;
      customMsg = 'Este campo es obligatorio.';
    } else if (field.type === 'email' && field.value.trim()) {
      if (!emailRegex.test(field.value.trim())) {
        isValid = false;
        customMsg = 'Ingrese un correo electrónico válido.';
      }
    } else if (field.id === 'acudiente-cedula' || field.id === 'est-cedula') {
      if (!cedulaRegexSimple.test(field.value.trim())) {
        isValid = false;
        customMsg = 'La cédula debe escribirse con guiones (Ej: 8-888-888).';
      }
    } else if (field.tagName === 'SELECT' && field.required && !field.value) {
      isValid = false;
      customMsg = 'Seleccione una opción válida.';
    } else if (field.type === 'file' && field.required) {
      if (!field.files || field.files.length === 0) {
        isValid = false;
        customMsg = 'Debe adjuntar este documento para continuar.';
      } else if (field.files[0].size > MAX_FILE_SIZE) {
        isValid = false;
        customMsg = 'El archivo excede el tamaño máximo permitido (10 MB).';
      }
    }

    if (!isValid) {
      showError(group, field.id, customMsg);
    } else {
      clearError(group);
    }

    return isValid;
  };

  const validateCheckboxes = () => {
    const checkboxes = document.querySelectorAll('.term-checkbox');
    const group = document.getElementById('group-terminos');
    const errorMsg = document.getElementById('error-terminos');
    
    let allChecked = true;
    checkboxes.forEach(cb => {
      if (!cb.checked) allChecked = false;
    });

    if (!allChecked) {
      group.classList.add('is-invalid');
      group.classList.remove('is-valid');
      errorMsg.style.display = 'block';
      return false;
    } else {
      group.classList.remove('is-invalid');
      group.classList.add('is-valid');
      errorMsg.style.display = 'none';
      return true;
    }
  };

  const updateProgress = () => {
    // block 1: acudiente (email, nombre, cedula, parentesco, telefono)
    // block 2: est (grado, nombre1, apellido1, apellido2, cedula, direccion)
    // block 3: files (contrato, pago)
    // block 4: terms
    
    const b1 = ['acudiente-email', 'acudiente-nombre', 'acudiente-cedula', 'acudiente-parentesco', 'acudiente-telefono'];
    const b2 = ['est-grado', 'est-nombre1', 'est-apellido1', 'est-apellido2', 'est-cedula', 'est-direccion'];
    const b3 = ['file-contrato', 'file-pago'];
    
    let completed = 0;
    
    if (b1.every(id => validateField(document.getElementById(id)))) completed++;
    if (b2.every(id => validateField(document.getElementById(id)))) completed++;
    if (b3.every(id => validateField(document.getElementById(id)))) completed++;
    if (validateCheckboxes()) completed++;
    
    // Update UI
    document.getElementById('progress-text').textContent = `${completed} de 4 secciones completadas`;
    document.getElementById('progress-bar').style.width = `${(completed / 4) * 100}%`;
  };

  // Add blur listeners
  const inputs = form.querySelectorAll('input, select, textarea');
  inputs.forEach(input => {
    if (input.type !== 'checkbox' && input.type !== 'file') {
      input.addEventListener('blur', () => {
        validateField(input);
        updateProgress();
      });
      input.addEventListener('input', () => {
        if (getGroup(input).classList.contains('is-invalid')) {
          validateField(input);
        }
      });
    } else if (input.type === 'checkbox') {
      input.addEventListener('change', () => {
        validateCheckboxes();
        updateProgress();
      });
    }
  });

  // Handle files
  ['contrato', 'pago'].forEach(id => {
    const fileInput = document.getElementById(`file-${id}`);
    fileInput.addEventListener('change', function(e) {
      const nameEl = document.getElementById(`name-${id}`);
      if (this.files && this.files.length > 0) {
        nameEl.textContent = this.files[0].name;
        validateField(this);
      } else {
        nameEl.textContent = 'Ningún archivo seleccionado';
        validateField(this);
      }
      updateProgress();
    });
  });

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzadIYg4CdWgyDqkw0m7M3SMCyHZLvvTmOxI3GWoLAGpc_VXyfBBOTK2MHMDfupoPtn5A/exec';

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          nombre: file.name,
          tipo: file.type || 'application/octet-stream',
          contenido: reader.result.split(',')[1]
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Form submit
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    let isValid = true;
    let firstInvalid = null;

    inputs.forEach(input => {
      if (input.type !== 'checkbox') {
        const fieldValid = validateField(input);
        if (!fieldValid) {
          isValid = false;
          if (!firstInvalid) firstInvalid = input;
        }
      }
    });

    const termsValid = validateCheckboxes();
    if (!termsValid) {
      isValid = false;
      if (!firstInvalid) firstInvalid = document.querySelector('.term-checkbox');
    }

    if (!isValid) {
      summaryError.style.display = 'block';
      if (firstInvalid) {
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        if(typeof firstInvalid.focus === 'function') {
          firstInvalid.focus();
        }
      }
      return;
    }

    summaryError.style.display = 'none';

    const submitBtn = form.querySelector('.form-submit-button');
    const originalBtnHtml = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span>Enviando información y archivos a Drive... ⏳</span>';

    try {
      const fileContratoInput = document.getElementById('file-contrato');
      const filePagoInput = document.getElementById('file-pago');

      const fileContratoObj = fileContratoInput && fileContratoInput.files.length > 0
        ? await fileToBase64(fileContratoInput.files[0])
        : null;

      const filePagoObj = filePagoInput && filePagoInput.files.length > 0
        ? await fileToBase64(filePagoInput.files[0])
        : null;

      const payload = {
        tipo_tramite: "preingreso",
        acudiente_email: document.getElementById('acudiente-email').value.trim(),
        acudiente_nombre: document.getElementById('acudiente-nombre').value.trim(),
        acudiente_cedula: document.getElementById('acudiente-cedula').value.trim(),
        acudiente_parentesco: document.getElementById('acudiente-parentesco').value.trim(),
        acudiente_telefono: document.getElementById('acudiente-telefono').value.trim(),
        acudiente_telefono2: document.getElementById('acudiente-telefono2').value.trim(),
        estudiante_grado: (document.getElementById('est-grado').options[document.getElementById('est-grado').selectedIndex] || {}).text || "",
        estudiante_nombre1: document.getElementById('est-nombre1').value.trim(),
        estudiante_nombre2: document.getElementById('est-nombre2').value.trim(),
        estudiante_apellido1: document.getElementById('est-apellido1').value.trim(),
        estudiante_apellido2: document.getElementById('est-apellido2').value.trim(),
        estudiante_cedula: document.getElementById('est-cedula').value.trim(),
        estudiante_direccion: document.getElementById('est-direccion').value.trim(),
        estudiante_condiciones: document.getElementById('est-condiciones').value.trim(),
        file_contrato: fileContratoObj,
        file_pago: filePagoObj,
        comp_escuela_padres: (form.querySelector('input[name="comp_escuela_padres"]') || {}).checked,
        comp_fechas_pago: (form.querySelector('input[name="comp_fechas_pago"]') || {}).checked,
        comp_sai: (form.querySelector('input[name="comp_sai"]') || {}).checked,
        comp_libros: (form.querySelector('input[name="comp_libros"]') || {}).checked,
        comp_requisito: (form.querySelector('input[name="comp_requisito"]') || {}).checked,
        comp_reglamento: (form.querySelector('input[name="comp_reglamento"]') || {}).checked
      };

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      const resData = await response.json().catch(() => ({ status: 'ok' }));
      if (resData.status !== 'ok') {
        throw new Error(resData.message || 'Error desconocido al registrar en Google Sheets');
      }

      // Populate modal
      const studentName = document.getElementById('est-nombre1').value.trim() + ' ' + document.getElementById('est-apellido1').value.trim();
      const acudienteName = document.getElementById('acudiente-nombre').value.trim();
      const acudienteId = document.getElementById('acudiente-cedula').value.trim();
      const gradeSelect = document.getElementById('est-grado');
      const gradeText = gradeSelect.options[gradeSelect.selectedIndex].text;
      const now = new Date();
      const dateStr = now.toLocaleDateString('es-PA', { year: 'numeric', month: '2-digit', day: '2-digit' });

      document.getElementById('modal-student-name').textContent = studentName;
      document.getElementById('modal-acudiente-name').textContent = acudienteName;
      document.getElementById('modal-acudiente-id').textContent = acudienteId;
      document.getElementById('modal-student-grade').textContent = gradeText;
      document.getElementById('modal-date').textContent = dateStr;

      // Show modal
      const modal = document.getElementById('success-modal');
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');

      form.reset();
      const nameContrato = document.getElementById('name-contrato');
      if (nameContrato) nameContrato.textContent = 'Ningún archivo seleccionado';
      const namePago = document.getElementById('name-pago');
      if (namePago) namePago.textContent = 'Ningún archivo seleccionado';
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error al enviar el formulario: ' + err.message + '\nPor favor verifica tu conexión e inténtalo de nuevo.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnHtml;
    }
  });

})();
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
    <span class="badge">Familias Aspirantes • Periodo 2027</span>
    <h1>Registro de Matrícula y Ficha Integral</h1>
    <p>Formulario oficial de primer ingreso para aspirantes al Colegio BPVDA. Por favor complete detalladamente los datos académicos, médicos y sociofamiliares requeridos para la apertura del expediente del estudiante.</p>
  </header>

  <!-- Alertas Normativas -->
  <div class="form-alert-banner orange">
    <div>
      <strong>Formato de Cédula Obligatorio con Guiones</strong>
      <p>Todas las cédulas (estudiante, padre, madre y acudiente) deben escribirse obligatoriamente con guiones (ejemplo: <code>8-888-888</code> o <code>PE-88-888</code>). La omisión de los guiones genera incompatibilidad en las plataformas de MEDUCA y el <strong>PASE-U</strong>.</p>
    </div>
  </div>

  <div class="form-alert-banner turquoise">
    <div>
      <strong>Designación del Acudiente Legal</strong>
      <p>Aunque ambos padres formen parte del entorno del estudiante, ante la institución educativa se debe registrar a un <strong>único acudiente legal</strong> que firmará el contrato de matrícula y será el canal de comunicación formal.</p>
    </div>
  </div>

  <div id="form-summary-error" class="form-alert-banner error" style="display: none; background-color: #ffebee; border-left: 4px solid #f44336; color: #b71c1c; margin-bottom: 2rem;">
    <div>
      <strong>Error en el formulario</strong>
      <p>Hay campos con errores o incompletos. Por favor revise el formulario y corrija los campos marcados en rojo.</p>
    </div>
  </div>

  <form id="nuevo-ingreso-form" novalidate>
    
    <!-- BLOQUE 1: INFORMACIÓN DEL ESTUDIANTE -->
    <section class="form-block">
      <div class="form-block-title">
        <span>1. Información del Estudiante Aspirante</span>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="est-cedula" class="required">Cédula juvenil o pasaporte</label>
          <input type="text" id="est-cedula" name="est_cedula" placeholder="Ej: 8-888-888" required data-type="cedula">
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="est-nac" class="required">Nacionalidad</label>
          <input type="text" id="est-nac" name="est_nac" placeholder="Panameña" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="est-nombre1" class="required">Primer nombre</label>
          <input type="text" id="est-nombre1" name="est_nombre1" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="est-nombre2">Segundo nombre</label>
          <input type="text" id="est-nombre2" name="est_nombre2">
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="est-ape1" class="required">Apellido paterno</label>
          <input type="text" id="est-ape1" name="est_ape1" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="est-ape2" class="required">Apellido materno</label>
          <input type="text" id="est-ape2" name="est_ape2" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="est-fecha-nac" class="required">Fecha de nacimiento (Del alumno)</label>
          <input type="date" id="est-fecha-nac" name="est_fecha_nac" required data-type="date">
          <div class="form-error-msg">Ingrese una fecha de nacimiento válida.</div>
        </div>
        <div class="form-group" >
          <label for="est-ingreso" class="required">Monto del ingreso familiar mensual</label>
          <input type="text" id="est-ingreso" name="est_ingreso" placeholder="$" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-group">
        <label for="est-dir" class="required">Dirección completa (Comunidad/barrio, calle y número de casa)</label>
        <textarea id="est-dir" name="est_dir" rows="2" required></textarea>
        <div class="form-error-msg">Este campo es obligatorio.</div>
      </div>
    </section>

    <!-- BLOQUE 2: FICHA MÉDICA -->
    <section class="form-block">
      <div class="form-block-title">
        <span>2. Ficha Médica y Desarrollo</span>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="med-sangre" class="required">Tipaje de sangre</label>
          <select id="med-sangre" name="med_sangre" required>
            <option value="">Seleccione...</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="Desconocido">Desconocido</option>
          </select>
          <div class="form-error-msg">Seleccione una opción válida.</div>
        </div>
        <div class="form-group" >
          <label for="med-lateral" class="required">Predominancia lateral</label>
          <select id="med-lateral" name="med_lateral" required>
            <option value="">Seleccione...</option>
            <option value="Diestro">Diestro</option>
            <option value="Zurdo">Zurdo</option>
            <option value="Ambidiestro">Ambidiestro</option>
          </select>
          <div class="form-error-msg">Seleccione una opción válida.</div>
        </div>
      </div>
      <div class="form-group">
        <label for="med-alergias" class="required">Registro de alergias o enfermedades crónicas</label>
        <p class="form-help">Si no padece ninguna, escriba "Ninguna".</p>
        <textarea id="med-alergias" name="med_alergias" rows="2" required></textarea>
        <div class="form-error-msg">Este campo es obligatorio.</div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="med-discapacidad" class="required">¿Condición de discapacidad o NEE?</label>
          <select id="med-discapacidad" name="med_discapacidad" required>
            <option value="">Seleccione...</option>
            <option value="No">No</option>
            <option value="Sí">Sí</option>
          </select>
          <div class="form-error-msg">Seleccione una opción válida.</div>
        </div>
        <div class="form-group" >
          <label for="med-discapacidad-detalle">Especifique la condición (Si seleccionó Sí)</label>
          <input type="text" id="med-discapacidad-detalle" name="med_discapacidad_detalle">
          <div class="form-error-msg">Debe especificar la condición o diagnóstico.</div>
        </div>
      </div>
    </section>

    <!-- BLOQUE 3: INFORMACIÓN DE LOS PADRES -->
    <section class="form-block">
      <div class="form-block-title">
        <span>3. Información de los Padres</span>
      </div>
      
      <h3 style="margin-bottom: 1rem; color: var(--navy); font-size: 1.1rem;">A. Datos del Padre</h3>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="padre-nombre" class="required">Primer nombre y primer apellido</label>
          <input type="text" id="padre-nombre" name="padre_nombre" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="padre-cedula" class="required">Cédula con guiones</label>
          <input type="text" id="padre-cedula" name="padre_cedula" required data-type="cedula">
          <div class="form-error-msg">La cédula debe escribirse con guiones (Ej: 8-888-888).</div>
        </div>
        <div class="form-group" >
          <label for="padre-nac" class="required">Nacionalidad</label>
          <input type="text" id="padre-nac" name="padre_nac" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="padre-ocupacion" class="required">Ocupación y lugar de trabajo</label>
          <input type="text" id="padre-ocupacion" name="padre_ocupacion" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="padre-celular" class="required">Celular</label>
          <input type="tel" id="padre-celular" name="padre_celular" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-group">
        <label class="required">¿Mantiene relación y contacto con el niño?</label>
        <div class="radio-group" style="display: flex; gap: 1rem; margin-top: 0.5rem;">
          <label><input type="radio" name="padre_relacion" value="Sí" required> Sí</label>
          <label><input type="radio" name="padre_relacion" value="No" required> No</label>
        </div>
        <div class="form-error-msg" id="err-padre-relacion">Seleccione una opción válida.</div>
      </div>

      <hr style="margin: 2rem 0; border: none; border-top: 1px dashed #ccc;">

      <h3 style="margin-bottom: 1rem; color: var(--navy); font-size: 1.1rem;">B. Datos de la Madre</h3>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="madre-nombre" class="required">Primer nombre y primer apellido</label>
          <input type="text" id="madre-nombre" name="madre_nombre" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="madre-cedula" class="required">Cédula con guiones</label>
          <input type="text" id="madre-cedula" name="madre_cedula" required data-type="cedula">
          <div class="form-error-msg">La cédula debe escribirse con guiones (Ej: 8-888-888).</div>
        </div>
        <div class="form-group" >
          <label for="madre-nac" class="required">Nacionalidad</label>
          <input type="text" id="madre-nac" name="madre_nac" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="madre-ocupacion" class="required">Ocupación y lugar de trabajo</label>
          <input type="text" id="madre-ocupacion" name="madre_ocupacion" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="madre-celular" class="required">Celular</label>
          <input type="tel" id="madre-celular" name="madre_celular" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
      </div>
      <div class="form-group">
        <label class="required">¿Mantiene relación y contacto con el niño?</label>
        <div class="radio-group" style="display: flex; gap: 1rem; margin-top: 0.5rem;">
          <label><input type="radio" name="madre_relacion" value="Sí" required> Sí</label>
          <label><input type="radio" name="madre_relacion" value="No" required> No</label>
        </div>
        <div class="form-error-msg" id="err-madre-relacion">Seleccione una opción válida.</div>
      </div>
    </section>

    <!-- BLOQUE 4: ACUDIENTE LEGAL -->
    <section class="form-block">
      <div class="form-block-title">
        <span>4. Designación del Acudiente Legal</span>
      </div>
      <div class="form-group">
        <label for="acu-seleccion" class="required">Seleccione quién será el acudiente legal ante el colegio</label>
        <select id="acu-seleccion" name="acu_seleccion" required>
          <option value="">Seleccione...</option>
          <option value="Papá">Papá</option>
          <option value="Mamá">Mamá</option>
          <option value="Otro">Otro familiar / Tutor</option>
        </select>
        <div class="form-error-msg">Seleccione una opción válida.</div>
      </div>

      <div class="form-grid-2">
        <div class="form-group" >
          <label for="acu-nombre" class="required">Nombre completo del acudiente</label>
          <input type="text" id="acu-nombre" name="acu_nombre" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="acu-cedula" class="required">Cédula con guiones</label>
          <input type="text" id="acu-cedula" name="acu_cedula" required data-type="cedula">
          <div class="form-error-msg">La cédula debe escribirse con guiones (Ej: 8-888-888).</div>
        </div>
      </div>
      <div class="form-grid-2">
        <div class="form-group" >
          <label for="acu-parentesco" class="required">Parentesco formal</label>
          <input type="text" id="acu-parentesco" name="acu_parentesco" placeholder="Ej: Padre, Madre, Abuela..." required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="acu-celular" class="required">Celular</label>
          <input type="tel" id="acu-celular" name="acu_celular" required>
          <div class="form-error-msg">Este campo es obligatorio.</div>
        </div>
        <div class="form-group" >
          <label for="acu-correo" class="required">Correo electrónico</label>
          <input type="email" id="acu-correo" name="acu_correo" required data-type="email">
          <div class="form-error-msg">Ingrese un correo electrónico válido.</div>
        </div>
      </div>
      <div class="form-group">
        <label for="acu-ocupacion" class="required">Ocupación y lugar de trabajo del acudiente</label>
        <input type="text" id="acu-ocupacion" name="acu_ocupacion" required>
        <div class="form-error-msg">Este campo es obligatorio.</div>
      </div>
    </section>

    <!-- BLOQUE 5: DOCUMENTACIÓN -->
    <section class="form-block">
      <div class="form-block-title">
        <span>5. Comprobante y Documentación</span>
      </div>
      <div class="form-group">
        <label for="doc-nivel" class="required">Nivel académico al que aspira</label>
        <select id="doc-nivel" name="doc_nivel" required>
          <option value="">Seleccione...</option>
          <option value="PK">Prekínder</option>
          <option value="K">Kínder</option>
          <option value="1-6 Primaria">1° a 6° Primaria</option>
          <option value="7-9 Premedia">7° a 9° Premedia</option>
          <option value="10° Ciencias">10° Bachiller en Ciencias</option>
          <option value="10° Humanidades/Informática">10° Bachiller en Humanidades/Informática</option>
        </select>
        <div class="form-error-msg">Seleccione una opción válida.</div>
      </div>

      <div class="form-group">
        <label for="doc-comprobante" class="required">Comprobante de 50% matrícula o pago completo</label>
        <p class="form-help">Formato PDF o Imagen. Tamaño máximo: 10 MB.</p>
        <input type="file" id="doc-comprobante" name="doc_comprobante" accept=".pdf,image/*" required>
        <div class="form-error-msg">Debe adjuntar este documento para continuar.</div>
      </div>

      <div class="form-group">
        <label for="doc-informe">Informe médico/psicopedagógico (Opcional)</label>
        <p class="form-help">Obligatorio únicamente si declaró condición de discapacidad o NEE.</p>
        <input type="file" id="doc-informe" name="doc_informe" accept=".pdf,image/*">
        <div class="form-error-msg">El archivo excede el tamaño máximo permitido (10 MB).</div>
      </div>
    </section>

    <!-- BLOQUE 6: COMPROMISOS INSTITUCIONALES -->
    <section class="form-block">
      <div class="form-block-title">
        <span>6. Compromisos Institucionales</span>
      </div>
      <p style="margin-bottom: 1rem; color: var(--navy); font-size: 0.95rem;">
        Para formalizar la solicitud de ingreso, el acudiente debe aceptar los siguientes compromisos normativos del Colegio BPVDA:
      </p>
      
      <div class="form-group checkbox-group-validation">
        <div class="checkbox-wrapper">
          <input type="checkbox" id="comp-padres" name="comp_padres" required>
          <label for="comp-padres">Me comprometo a asistir a las reuniones mensuales de Escuela para Padres.</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="comp-pagos" name="comp_pagos" required>
          <label for="comp-pagos">Me comprometo a realizar los pagos de colegiatura los primeros 10 días de cada mes, cancelar la mensualidad de diciembre antes del 5 de dicho mes y tener la matrícula 2027 cancelada para el 29 de enero.</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="comp-sai" name="comp_sai" required>
          <label for="comp-sai">Me comprometo a adquirir el acceso al SAI y los libros digitales antes del primer día de clases.</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="comp-verano" name="comp_verano" required>
          <label for="comp-verano">Me comprometo a que el estudiante participe en el curso de verano e inducción en enero de 2027.</label>
        </div>
        <div class="checkbox-wrapper">
          <input type="checkbox" id="comp-reglamento" name="comp_reglamento" required>
          <label for="comp-reglamento">Acepto el ideario cristiano y el reglamento interno de la institución.</label>
        </div>
        <div class="form-error-msg" id="err-compromisos">Debe aceptar todos los compromisos para continuar.</div>
      </div>
    </section>

    <div class="form-actions">
      <button type="submit" class="btn btn-primary" id="btn-submit">
        ENVIAR SOLICITUD DE NUEVO INGRESO
      </button>
      <p class="form-disclaimer" style="text-align: center; margin-top: 1rem; font-size: 0.85rem; color: #666;">
        Al hacer clic en Enviar, declara bajo juramento que los datos proporcionados son veraces.
      </p>
    </div>
  </form>
</div>

<!-- Modal de Éxito para Nuevo Ingreso -->
<div class="form-success-modal" id="nuevo-success-modal" role="dialog" aria-modal="true" aria-hidden="true">
  <div class="form-success-card">
    <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin-bottom: 1rem;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <h2 style="color: var(--navy); font-size: 1.8rem; margin-bottom: 0.75rem;">¡Solicitud Registrada!</h2>
    <p style="color: var(--deep); line-height: 1.6; margin-bottom: 1.5rem;">
      La solicitud de primer ingreso ha sido enviada exitosamente para revisión de Admisiones.
    </p>
    
    <div style="background: var(--cream); border: 1px solid var(--line); border-radius: 8px; padding: 1.2rem; margin-bottom: 2rem; font-size: 0.9rem; text-align: left; color: var(--navy);">
      <div style="margin-bottom: 0.4rem;"><strong>Estudiante:</strong> <span id="modal-nuevo-name"></span></div>
      <div style="margin-bottom: 0.4rem;"><strong>Cédula:</strong> <span id="modal-nuevo-id"></span></div>
      <div style="margin-bottom: 0.4rem;"><strong>Nivel Aspirado:</strong> <span id="modal-nuevo-grade"></span></div>
      <div style="margin-bottom: 0.4rem;"><strong>Acudiente Legal:</strong> <span id="modal-nuevo-acudiente"></span></div>
      <div><strong>Fecha:</strong> <span id="modal-nuevo-date"></span></div>
    </div>
    
    <p style="font-size: 0.85rem; color: var(--gray); margin-bottom: 1.5rem; line-height: 1.5;">
      El Departamento de Admisiones evaluará la documentación adjunta. Nos pondremos en contacto con usted a través del correo o celular proporcionado para informarle sobre la entrevista presencial.
    </p>

    <div style="display: flex; gap: 1rem; justify-content: center;">
      <a href="index.html" class="btn btn-primary" style="padding: 0.8rem 1.6rem; width: 100%; border-radius: 6px; text-decoration: none; display: inline-block;">Volver al Inicio</a>
    </div>
  </div>
</div>
<script>
(function() {
  'use strict';

  const form = document.getElementById('nuevo-ingreso-form');
  const errorBanner = document.getElementById('form-summary-error');
  
  if (!form) return;

  const cedulaRegex = /^[a-zA-Z0-9]{1,3}-\d{1,4}-\d{1,6}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const maxSize = 10 * 1024 * 1024; // 10MB

  function showError(field, messageContainerId) {
    const group = field.closest('.form-group');
    if (!group) return;
    group.classList.add('is-invalid');
    group.classList.remove('is-valid');
  }

  function clearError(field) {
    const group = field.closest('.form-group');
    if (!group) return;
    group.classList.remove('is-invalid');
    group.classList.add('is-valid');
  }

  function validateField(field) {
    let isValid = true;
    
    // Si no es requerido y está vacío, es válido (salvo reglas condicionales)
    if (!field.required && field.value.trim() === '' && field.type !== 'checkbox' && field.type !== 'radio') {
      clearError(field);
      return true;
    }

    if (field.type === 'checkbox') {
      isValid = field.checked;
    } else if (field.type === 'radio') {
      const radios = form.querySelectorAll(`input[name="${field.name}"]`);
      isValid = Array.from(radios).some(r => r.checked);
      if(!isValid) {
        field.closest('.form-group').classList.add('is-invalid');
      } else {
        field.closest('.form-group').classList.remove('is-invalid');
        field.closest('.form-group').classList.add('is-valid');
      }
      return isValid;
    } else if (field.tagName.toLowerCase() === 'select') {
      isValid = field.value.trim() !== '';
    } else {
      isValid = field.value.trim() !== '';
    }

    if (isValid && field.dataset.type === 'cedula') {
      isValid = cedulaRegex.test(field.value.trim());
    }

    if (isValid && field.dataset.type === 'email') {
      isValid = emailRegex.test(field.value.trim());
    }

    if (isValid && field.dataset.type === 'date') {
      const dateVal = new Date(field.value);
      isValid = !isNaN(dateVal.getTime());
      if(isValid) {
        // Validador de fecha de estudiante (no adulto) - rough check: nacimientos a partir del 2005
        const year = dateVal.getFullYear();
        if(year < 2000 || year > new Date().getFullYear()) {
          isValid = false;
        }
      }
    }

    if (isValid && field.type === 'file' && field.files.length > 0) {
      if (field.files[0].size > maxSize) {
        isValid = false;
      }
    }

    if (!isValid) {
      showError(field);
    } else {
      clearError(field);
    }

    return isValid;
  }

  // Validación on blur
  form.querySelectorAll('input, select, textarea').forEach(field => {
    field.addEventListener('blur', () => {
      validateField(field);
    });
    
    field.addEventListener('change', () => {
      validateField(field);
    });
  });

  // Lógica condicional: Discapacidad
  const discSelect = document.getElementById('med-discapacidad');
  const discDetalle = document.getElementById('med-discapacidad-detalle');
  if(discSelect) {
    discSelect.addEventListener('change', () => {
      if (discSelect.value === 'Sí') {
        discDetalle.required = true;
        discDetalle.closest('.form-group').querySelector('label').classList.add('required');
      } else {
        discDetalle.required = false;
        discDetalle.closest('.form-group').querySelector('label').classList.remove('required');
        discDetalle.value = '';
        clearError(discDetalle);
        discDetalle.closest('.form-group').classList.remove('is-valid');
      }
    });
  }

  // Auto-fill acudiente
  const acuSelect = document.getElementById('acu-seleccion');
  if(acuSelect) {
    acuSelect.addEventListener('change', () => {
      const val = acuSelect.value;
      const acuNombre = document.getElementById('acu-nombre');
      const acuCedula = document.getElementById('acu-cedula');
      const acuParentesco = document.getElementById('acu-parentesco');
      const acuCelular = document.getElementById('acu-celular');
      const acuOcupacion = document.getElementById('acu-ocupacion');
      
      if (val === 'Papá') {
        acuNombre.value = document.getElementById('padre-nombre').value;
        acuCedula.value = document.getElementById('padre-cedula').value;
        acuParentesco.value = 'Padre';
        acuCelular.value = document.getElementById('padre-celular').value;
        acuOcupacion.value = document.getElementById('padre-ocupacion').value;
        
        [acuNombre, acuCedula, acuParentesco, acuCelular, acuOcupacion].forEach(f => {
          if(f.value) validateField(f);
        });
      } else if (val === 'Mamá') {
        acuNombre.value = document.getElementById('madre-nombre').value;
        acuCedula.value = document.getElementById('madre-cedula').value;
        acuParentesco.value = 'Madre';
        acuCelular.value = document.getElementById('madre-celular').value;
        acuOcupacion.value = document.getElementById('madre-ocupacion').value;
        
        [acuNombre, acuCedula, acuParentesco, acuCelular, acuOcupacion].forEach(f => {
          if(f.value) validateField(f);
        });
      } else {
        acuNombre.value = '';
        acuCedula.value = '';
        acuParentesco.value = '';
        acuCelular.value = '';
        acuOcupacion.value = '';
        
        [acuNombre, acuCedula, acuParentesco, acuCelular, acuOcupacion].forEach(f => {
          clearError(f);
          f.closest('.form-group').classList.remove('is-valid');
        });
      }
    });
  }

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzadIYg4CdWgyDqkw0m7M3SMCyHZLvvTmOxI3GWoLAGpc_VXyfBBOTK2MHMDfupoPtn5A/exec';

  function fileToBase64(file) {
    return new Promise((resolve, reject) => {
      if (!file) return resolve(null);
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          nombre: file.name,
          tipo: file.type || 'application/octet-stream',
          contenido: reader.result.split(',')[1]
        });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  // Validación On Submit
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    let isFormValid = true;
    let firstErrorField = null;

    // Campos regulares
    const fieldsToValidate = form.querySelectorAll('input, select, textarea');
    fieldsToValidate.forEach(field => {
      if (field.type === 'radio' || field.type === 'checkbox') return;
      
      const isFieldValid = validateField(field);
      if (!isFieldValid) {
        isFormValid = false;
        if (!firstErrorField) firstErrorField = field;
      }
    });

    // Validar Radios
    const radioNames = ['padre_relacion', 'madre_relacion'];
    radioNames.forEach(name => {
      const radios = form.querySelectorAll(`input[name="${name}"]`);
      if(radios.length > 0) {
        const isChecked = Array.from(radios).some(r => r.checked);
        if(!isChecked) {
          isFormValid = false;
          radios[0].closest('.form-group').classList.add('is-invalid');
          if(!firstErrorField) firstErrorField = radios[0];
        } else {
          radios[0].closest('.form-group').classList.remove('is-invalid');
        }
      }
    });

    // Validar Compromisos (Checkboxes)
    const compromises = ['comp_padres', 'comp_pagos', 'comp_sai', 'comp_verano', 'comp_reglamento'];
    let allCompromisesChecked = true;
    compromises.forEach(id => {
      const cb = document.getElementById(id.replace('_', '-'));
      if(cb && !cb.checked) {
        allCompromisesChecked = false;
      }
    });
    const compromisesGroup = document.querySelector('.checkbox-group-validation');
    if(!allCompromisesChecked) {
      isFormValid = false;
      if(compromisesGroup) compromisesGroup.classList.add('is-invalid');
      if(!firstErrorField) firstErrorField = document.getElementById('comp-padres');
    } else {
      if(compromisesGroup) compromisesGroup.classList.remove('is-invalid');
    }

    if (!isFormValid) {
      errorBanner.style.display = 'flex';
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstErrorField.focus();
      }
      return;
    }

    // Ocultar banner de error si todo está bien
    errorBanner.style.display = 'none';

    const submitBtn = document.getElementById('btn-submit');
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Enviando solicitud y archivos a Google Drive... ⏳';

    try {
      const fileComprobanteInput = document.getElementById('doc-comprobante');
      const fileInformeInput = document.getElementById('doc-informe');

      const docComprobanteFile = fileComprobanteInput && fileComprobanteInput.files.length > 0
        ? await fileToBase64(fileComprobanteInput.files[0])
        : null;

      const docInformeFile = fileInformeInput && fileInformeInput.files.length > 0
        ? await fileToBase64(fileInformeInput.files[0])
        : null;

      const payload = {
        tipo_tramite: "nuevo_ingreso",
        est_cedula: document.getElementById('est-cedula').value.trim(),
        est_nac: document.getElementById('est-nac').value.trim(),
        est_nombre1: document.getElementById('est-nombre1').value.trim(),
        est_nombre2: document.getElementById('est-nombre2').value.trim(),
        est_ape1: document.getElementById('est-ape1').value.trim(),
        est_ape2: document.getElementById('est-ape2').value.trim(),
        est_fecha_nac: document.getElementById('est-fecha-nac').value.trim(),
        est_ingreso: document.getElementById('est-ingreso').value.trim(),
        est_dir: document.getElementById('est-dir').value.trim(),
        med_sangre: document.getElementById('med-sangre').value.trim(),
        med_lateral: document.getElementById('med-lateral').value.trim(),
        med_alergias: document.getElementById('med-alergias').value.trim(),
        med_discapacidad: document.getElementById('med-discapacidad').value.trim(),
        med_discapacidad_detalle: document.getElementById('med-discapacidad-detalle').value.trim(),
        padre_nombre: document.getElementById('padre-nombre').value.trim(),
        padre_cedula: document.getElementById('padre-cedula').value.trim(),
        padre_nac: document.getElementById('padre-nac').value.trim(),
        padre_ocupacion: document.getElementById('padre-ocupacion').value.trim(),
        padre_celular: document.getElementById('padre-celular').value.trim(),
        padre_relacion: (form.querySelector('input[name="padre_relacion"]:checked') || {}).value || "",
        madre_nombre: document.getElementById('madre-nombre').value.trim(),
        madre_cedula: document.getElementById('madre-cedula').value.trim(),
        madre_nac: document.getElementById('madre-nac').value.trim(),
        madre_ocupacion: document.getElementById('madre-ocupacion').value.trim(),
        madre_celular: document.getElementById('madre-celular').value.trim(),
        madre_relacion: (form.querySelector('input[name="madre_relacion"]:checked') || {}).value || "",
        acu_seleccion: document.getElementById('acu-seleccion').value.trim(),
        acu_nombre: document.getElementById('acu-nombre').value.trim(),
        acu_cedula: document.getElementById('acu-cedula').value.trim(),
        acu_parentesco: document.getElementById('acu-parentesco').value.trim(),
        acu_celular: document.getElementById('acu-celular').value.trim(),
        acu_correo: document.getElementById('acu-correo').value.trim(),
        acu_ocupacion: document.getElementById('acu-ocupacion').value.trim(),
        doc_nivel: (document.getElementById('doc-nivel').options[document.getElementById('doc-nivel').selectedIndex] || {}).text || "",
        doc_comprobante: docComprobanteFile,
        doc_informe: docInformeFile,
        comp_padres: document.getElementById('comp-padres').checked,
        comp_pagos: document.getElementById('comp-pagos').checked,
        comp_sai: document.getElementById('comp-sai').checked,
        comp_verano: document.getElementById('comp-verano').checked,
        comp_reglamento: document.getElementById('comp-reglamento').checked
      };

      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify(payload)
      });

      const resData = await response.json().catch(() => ({ status: 'ok' }));
      if (resData.status !== 'ok') {
        throw new Error(resData.message || 'Error desconocido al registrar en Google Sheets');
      }

      // Rellenar Modal de Éxito
      const name1 = document.getElementById('est-nombre1').value;
      const ape1 = document.getElementById('est-ape1').value;
      document.getElementById('modal-nuevo-name').textContent = `${name1} ${ape1}`;
      document.getElementById('modal-nuevo-id').textContent = document.getElementById('est-cedula').value;
      
      const nivelSelect = document.getElementById('doc-nivel');
      document.getElementById('modal-nuevo-grade').textContent = nivelSelect.options[nivelSelect.selectedIndex].text;
      
      document.getElementById('modal-nuevo-acudiente').textContent = document.getElementById('acu-nombre').value;
      
      // Dynamic date
      const today = new Date();
      const dateStr = today.toLocaleDateString('es-PA', { year: 'numeric', month: 'long', day: 'numeric' });
      document.getElementById('modal-nuevo-date').textContent = dateStr;

      // Mostrar Modal
      const modal = document.getElementById('nuevo-success-modal');
      modal.classList.add('is-active');
      modal.setAttribute('aria-hidden', 'false');

      form.reset();
    } catch (err) {
      console.error(err);
      alert('Ocurrió un error al enviar el formulario: ' + err.message + '\nPor favor verifica tu conexión e inténtalo de nuevo.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });
  
  // Close modal listeners are assumed to be handled in main.js, 
  // but let's add a basic handler just in case
  const closeBtns = document.querySelectorAll('[data-close]');
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const m = btn.closest('.modal');
      if(m) {
        m.classList.remove('is-active');
        m.setAttribute('aria-hidden', 'true');
      }
    });
  });

})();
</script>
`;

// Escribir los dos archivos generados
writeFileSync(join(root, 'form-preingreso.html'), wrapPage('Formulario de Preingreso 2027', formPreingresoHtml));
console.log('✅ form-preingreso.html generado exitosamente.');

writeFileSync(join(root, 'form-nuevo-ingreso.html'), wrapPage('Registro de Nuevo Ingreso 2027', formNuevoIngresoHtml));
console.log('✅ form-nuevo-ingreso.html generado exitosamente.');
