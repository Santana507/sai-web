<?php
/**
 * Template Name: Plantilla form-preingreso
 */
get_header(); ?>

<main id="contenido">
    
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

  </main>

<?php get_footer(); ?>


