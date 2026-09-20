import { useEffect, useMemo, useState } from 'react'
import './AdminC421.css'
import { supabase } from '../../lib/supabase'

const WEEK_DAYS = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM']

const MONTHS = [
  'ENERO',
  'FEBRERO',
  'MARZO',
  'ABRIL',
  'MAYO',
  'JUNIO',
  'JULIO',
  'AGOSTO',
  'SEPTIEMBRE',
  'OCTUBRE',
  'NOVIEMBRE',
  'DICIEMBRE',
]

const EDITABLE_FIELDS = [
  { key: 'nombre', label: 'Nombre', type: 'text' },
  { key: 'apellido', label: 'Apellido', type: 'text' },
  { key: 'email', label: 'Email', type: 'email' },
  { key: 'whatsapp', label: 'WhatsApp', type: 'tel' },
  { key: 'ubicacion', label: 'Ubicación', type: 'text' },
  { key: 'redes', label: 'Redes sociales', type: 'text' },
  { key: 'disciplina', label: 'Disciplina', type: 'text' },
  { key: 'experiencias', label: 'Experiencias', type: 'textarea' },
  { key: 'proyecto', label: 'Breve proyecto', type: 'textarea' },
  { key: 'espacio', label: 'Espacio necesario', type: 'textarea' },
  { key: 'elementos', label: 'Elementos necesarios', type: 'textarea' },
  { key: 'obras', label: 'Obras', type: 'textarea' },
  { key: 'material_adicional', label: 'Material adicional', type: 'textarea' },
  { key: 'biografia', label: 'Biografía', type: 'textarea' },
]

function pad(value) {
  return String(value).padStart(2, '0')
}

function dateToKey(date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
    date.getDate()
  )}`
}

function formatDate(value) {
  if (!value) return '-'

  const [year, month, day] = value.split('-')

  return `${day}/${month}/${year}`
}

function calculateDays(from, to) {
  if (!from || !to) return null

  const start = new Date(`${from}T00:00:00`)
  const end = new Date(`${to}T00:00:00`)

  const difference = end.getTime() - start.getTime()

  if (difference < 0) return null

  return Math.floor(difference / 86400000) + 1
}

function normalizeWhatsapp(value) {
  if (!value) return ''

  return value.replace(/\D/g, '')
}

function formatFieldValue(value) {
  if (value === null || value === undefined || value === '') {
    return 'Sin información'
  }

  if (typeof value === 'object') {
    if (value.nombre) {
      return value.nombre
    }

    try {
      return JSON.stringify(value)
    } catch {
      return 'Información adjunta'
    }
  }

  return String(value)
}

function getEditValue(value) {
  if (value === null || value === undefined) {
    return ''
  }

  if (typeof value === 'object') {
    try {
      return JSON.stringify(value, null, 2)
    } catch {
      return ''
    }
  }

  return String(value)
}

function getFilesArray(value) {
  if (!value) return []

  if (Array.isArray(value)) {
    return value
  }

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value)

      return Array.isArray(parsed) ? parsed : []
    } catch {
      return []
    }
  }

  return []
}

function AdminC421() {
  const today = new Date()

  const [currentMonth, setCurrentMonth] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  )

  const [residents, setResidents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedDate, setSelectedDate] = useState(null)

  const [editingId, setEditingId] = useState(null)
  const [editingField, setEditingField] = useState(null)
  const [editingValue, setEditingValue] = useState('')

  const [saving, setSaving] = useState(false)
  const [deletingId, setDeletingId] = useState(null)

  const [obraUrls, setObraUrls] = useState({})

  useEffect(() => {
    loadResidents()
  }, [])

  async function loadResidents() {
    setLoading(true)
    setError('')

    const { data, error: supabaseError } = await supabase
      .from('c421_postulaciones')
      .select(
        `
          id,
          nombre,
          apellido,
          email,
          whatsapp,
          ubicacion,
          redes,
          biografia,
          disciplina,
          experiencias,
          proyecto,
          dias,
          fecha_desde,
          fecha_hasta,
          espacio,
          elementos,
          obras,
          material_adicional,
          estado,
          residente_activo
        `
      )
      .order('created_at', { ascending: false })

    if (supabaseError) {
      console.error(
        'Error cargando postulaciones C421:',
        supabaseError
      )

      setError(
        'No se pudieron cargar las postulaciones de C421.'
      )

      setResidents([])
      setObraUrls({})
      setLoading(false)
      return
    }

    const loadedResidents = data || []

    setResidents(loadedResidents)

    await loadObraUrls(loadedResidents)

    setLoading(false)
  }

  async function loadObraUrls(records) {
    const allFiles = []

    records.forEach((resident) => {
      const files = getFilesArray(resident.obras)

      files.forEach((file) => {
        if (file?.path) {
          allFiles.push({
            residentId: resident.id,
            path: file.path,
          })
        }
      })
    })

    if (allFiles.length === 0) {
      setObraUrls({})
      return
    }

    const uniquePaths = [
      ...new Set(allFiles.map((file) => file.path)),
    ]

    const {
      data,
      error: storageError,
    } = await supabase.storage
      .from('c421-postulaciones')
      .createSignedUrls(uniquePaths, 3600)

    if (storageError) {
      console.error(
        'Error generando URLs de obras C421:',
        storageError
      )

      setObraUrls({})
      return
    }

    const urlsByPath = {}

    ;(data || []).forEach((item) => {
      if (item?.path && item?.signedUrl) {
        urlsByPath[item.path] = item.signedUrl
      }
    })

    setObraUrls(urlsByPath)
  }

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()

    const firstDay = new Date(year, month, 1)
    const firstWeekday = (firstDay.getDay() + 6) % 7
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const totalCells =
      Math.ceil((firstWeekday + daysInMonth) / 7) * 7

    const days = []

    for (let index = 0; index < totalCells; index += 1) {
      const dayNumber = index - firstWeekday + 1

      if (dayNumber < 1 || dayNumber > daysInMonth) {
        days.push(null)
        continue
      }

      const date = new Date(year, month, dayNumber)

      days.push({
        date,
        key: dateToKey(date),
        dayNumber,
      })
    }

    return days
  }, [currentMonth])

  const unorganizedResidents = residents.filter(
    (resident) =>
      !resident.fecha_desde ||
      !resident.fecha_hasta
  )

  const organizedResidents = residents.filter(
    (resident) =>
      resident.fecha_desde &&
      resident.fecha_hasta
  )

  function getResidentsForDate(dateKey) {
    return residents.filter((resident) => {
      if (!resident.fecha_desde || !resident.fecha_hasta) {
        return false
      }

      if (!resident.residente_activo) {
        return false
      }

      return (
        dateKey >= resident.fecha_desde &&
        dateKey <= resident.fecha_hasta
      )
    })
  }

  function goToPreviousMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        1
      )
    )

    setSelectedDate(null)
  }

  function goToNextMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        1
      )
    )

    setSelectedDate(null)
  }

  function goToToday() {
    setCurrentMonth(
      new Date(today.getFullYear(), today.getMonth(), 1)
    )

    setSelectedDate(dateToKey(today))
  }

  function handleDayClick(day) {
    if (!day) return

    const dayResidents = getResidentsForDate(day.key)

    if (dayResidents.length > 0) {
      setSelectedDate(day.key)
    } else {
      setSelectedDate(null)
    }
  }

  function startEditing(id, field, value) {
    setEditingId(id)
    setEditingField(field)
    setEditingValue(getEditValue(value))
  }

  function cancelEditing() {
    setEditingId(null)
    setEditingField(null)
    setEditingValue('')
  }

  function goToResidentCard(residentId) {
    const element = document.getElementById(
      `admin-c421-resident-${residentId}`
    )

    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    setTimeout(() => {
      element.classList.add('admin-c421-highlight')

      setTimeout(() => {
        element.classList.remove(
          'admin-c421-highlight'
        )
      }, 1800)
    }, 400)
  }

  async function saveField(resident, field) {
    if (!resident || !field) return

    setSaving(true)
    setError('')

    let value = editingValue

    if (
      field === 'fecha_desde' ||
      field === 'fecha_hasta'
    ) {
      value = value || null
    }

    if (
      field === 'material_adicional' ||
      field === 'obras'
    ) {
      if (!editingValue.trim()) {
        value = null
      } else {
        try {
          value = JSON.parse(editingValue)
        } catch {
          setError(
            `El campo "${field}" debe contener un JSON válido.`
          )

          setSaving(false)
          return
        }
      }
    }

    const updatedValues = {
      [field]: value,
    }

    if (
      field === 'fecha_desde' ||
      field === 'fecha_hasta'
    ) {
      const newFrom =
        field === 'fecha_desde'
          ? value
          : resident.fecha_desde

      const newTo =
        field === 'fecha_hasta'
          ? value
          : resident.fecha_hasta

      if (newFrom && newTo) {
        if (newTo < newFrom) {
          setError(
            'La fecha hasta no puede ser anterior a la fecha desde.'
          )

          setSaving(false)
          return
        }

        updatedValues.dias = calculateDays(
          newFrom,
          newTo
        )
      } else {
        updatedValues.dias = null
      }
    }

    const { data, error: supabaseError } = await supabase
      .from('c421_postulaciones')
      .update(updatedValues)
      .eq('id', resident.id)
      .select()
      .single()

    if (supabaseError) {
      console.error(
        'Error actualizando postulación:',
        supabaseError
      )

      setError(
        'No se pudo guardar el cambio. Revisá los permisos de Supabase.'
      )

      setSaving(false)
      return
    }

    setResidents((current) =>
      current.map((item) =>
        item.id === resident.id
          ? { ...item, ...data }
          : item
      )
    )

    if (field === 'obras') {
      await loadObraUrls(
        residents.map((item) =>
          item.id === resident.id
            ? { ...item, ...data }
            : item
        )
      )
    }

    cancelEditing()
    setSaving(false)
  }

  async function toggleResidentActive(resident) {
    setSaving(true)
    setError('')

    const newValue = !resident.residente_activo

    const { data, error: supabaseError } = await supabase
      .from('c421_postulaciones')
      .update({
        residente_activo: newValue,
      })
      .eq('id', resident.id)
      .select()
      .single()

    if (supabaseError) {
      console.error(
        'Error cambiando residente_activo:',
        supabaseError
      )

      setError(
        'No se pudo cambiar el estado del residente.'
      )

      setSaving(false)
      return
    }

    setResidents((current) =>
      current.map((item) =>
        item.id === resident.id
          ? { ...item, ...data }
          : item
      )
    )

    setSaving(false)
  }

  async function deleteResident(resident) {
    const fullName = `${resident.nombre || ''} ${
      resident.apellido || ''
    }`.trim()

    const confirmed = window.confirm(
      `¿Eliminar definitivamente la postulación de ${
        fullName || 'esta persona'
      }?\n\nEsta acción no se puede deshacer.`
    )

    if (!confirmed) return

    setDeletingId(resident.id)
    setError('')

    const { error: supabaseError } = await supabase
      .from('c421_postulaciones')
      .delete()
      .eq('id', resident.id)

    if (supabaseError) {
      console.error(
        'Error eliminando postulación:',
        supabaseError
      )

      setError(
        'No se pudo eliminar la postulación. Revisá los permisos de Supabase.'
      )

      setDeletingId(null)
      return
    }

    setResidents((current) =>
      current.filter(
        (item) => item.id !== resident.id
      )
    )

    if (editingId === resident.id) {
      cancelEditing()
    }

    setDeletingId(null)

    setSelectedDate(null)
  }

  function renderObras(resident) {
    const files = getFilesArray(resident.obras)

    if (files.length === 0) {
      return (
        <div className="admin-c421-field-value">
          <span>Sin información</span>

          <button
            type="button"
            className="admin-c421-pencil"
            onClick={() =>
              startEditing(
                resident.id,
                'obras',
                resident.obras
              )
            }
            aria-label="Editar obras"
            title="Editar obras"
          >
            ✎
          </button>
        </div>
      )
    }

    return (
      <div className="admin-c421-files">

        <div className="admin-c421-files-list">

          {files.map((file, index) => {
            const signedUrl =
              file?.path
                ? obraUrls[file.path]
                : null

            const fileName =
              file?.nombre ||
              file?.path?.split('/').pop() ||
              `Archivo ${index + 1}`

            return (
              <div
                key={`${file?.path || fileName}-${index}`}
                className="admin-c421-file"
              >

                {signedUrl ? (
                  <a
                    href={signedUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="admin-c421-file-link"
                  >
                    ↗ {fileName}
                  </a>
                ) : (
                  <span className="admin-c421-file-loading">
                    {fileName}
                  </span>
                )}

              </div>
            )
          })}

        </div>

        <button
          type="button"
          className="admin-c421-pencil"
          onClick={() =>
            startEditing(
              resident.id,
              'obras',
              resident.obras
            )
          }
          aria-label="Editar obras"
          title="Editar obras"
        >
          ✎
        </button>

      </div>
    )
  }

  function renderEditableField(resident, field) {
    const value = resident[field.key] ?? ''

    const isEditing =
      editingId === resident.id &&
      editingField === field.key

    if (field.key === 'obras') {
      if (isEditing) {
        return (
          <div className="admin-c421-edit-box">

            <textarea
              value={editingValue}
              onChange={(event) =>
                setEditingValue(event.target.value)
              }
              autoFocus
            />

            <div className="admin-c421-edit-actions">
              <button
                type="button"
                onClick={() =>
                  saveField(
                    resident,
                    field.key
                  )
                }
                disabled={saving}
              >
                {saving
                  ? 'GUARDANDO...'
                  : 'GUARDAR'}
              </button>

              <button
                type="button"
                onClick={cancelEditing}
                disabled={saving}
              >
                CANCELAR
              </button>
            </div>

          </div>
        )
      }

      return renderObras(resident)
    }

    if (isEditing) {
      return (
        <div className="admin-c421-edit-box">

          {field.type === 'textarea' ? (
            <textarea
              value={editingValue}
              onChange={(event) =>
                setEditingValue(event.target.value)
              }
              autoFocus
            />
          ) : (
            <input
              type={field.type}
              value={editingValue}
              onChange={(event) =>
                setEditingValue(event.target.value)
              }
              autoFocus
            />
          )}

          <div className="admin-c421-edit-actions">
            <button
              type="button"
              onClick={() =>
                saveField(
                  resident,
                  field.key
                )
              }
              disabled={saving}
            >
              {saving
                ? 'GUARDANDO...'
                : 'GUARDAR'}
            </button>

            <button
              type="button"
              onClick={cancelEditing}
              disabled={saving}
            >
              CANCELAR
            </button>
          </div>

        </div>
      )
    }

    return (
      <div className="admin-c421-field-value">

        <span>
          {formatFieldValue(value)}
        </span>

        <button
          type="button"
          className="admin-c421-pencil"
          onClick={() =>
            startEditing(
              resident.id,
              field.key,
              value
            )
          }
          aria-label={`Editar ${field.label}`}
          title={`Editar ${field.label}`}
        >
          ✎
        </button>

      </div>
    )
  }

  function renderDateField(
    resident,
    field,
    label
  ) {
    const value = resident[field] || ''

    const isEditing =
      editingId === resident.id &&
      editingField === field

    if (isEditing) {
      return (
        <div className="admin-c421-date-edit">

          <input
            type="date"
            value={editingValue}
            min={
              field === 'fecha_hasta'
                ? resident.fecha_desde || undefined
                : undefined
            }
            max={
              field === 'fecha_desde'
                ? resident.fecha_hasta || undefined
                : undefined
            }
            onChange={(event) =>
              setEditingValue(event.target.value)
            }
            autoFocus
          />

          <div className="admin-c421-edit-actions">
            <button
              type="button"
              onClick={() =>
                saveField(
                  resident,
                  field
                )
              }
              disabled={saving}
            >
              {saving
                ? 'GUARDANDO...'
                : 'GUARDAR'}
            </button>

            <button
              type="button"
              onClick={cancelEditing}
              disabled={saving}
            >
              CANCELAR
            </button>
          </div>

        </div>
      )
    }

    return (
      <div className="admin-c421-field-value">

        <span>{formatDate(value)}</span>

        <button
          type="button"
          className="admin-c421-pencil"
          onClick={() =>
            startEditing(
              resident.id,
              field,
              value
            )
          }
          aria-label={`Editar ${label}`}
          title={`Editar ${label}`}
        >
          ✎
        </button>

      </div>
    )
  }

  function renderResidentCard(resident) {
    const whatsapp = normalizeWhatsapp(
      resident.whatsapp
    )

    return (
      <article
        id={`admin-c421-resident-${resident.id}`}
        key={resident.id}
        className="admin-c421-application"
      >

        <div className="admin-c421-application-header">

          <div>
            <p className="admin-c421-kicker">
              POSTULACIÓN
            </p>

            <h3>
              {resident.nombre || 'Sin nombre'}{' '}
              {resident.apellido || ''}
            </h3>

            <span className="admin-c421-application-id">
              ID: {resident.id}
            </span>
          </div>

          <div className="admin-c421-header-actions">

            <span
              className={[
                'admin-c421-status',
                resident.residente_activo
                  ? 'active'
                  : 'inactive',
              ].join(' ')}
            >
              {resident.residente_activo
                ? 'RESIDENTE ACTIVO'
                : 'NO ACTIVO'}
            </span>

            <button
              type="button"
              className="admin-c421-delete"
              onClick={() =>
                deleteResident(resident)
              }
              disabled={
                deletingId === resident.id
              }
            >
              {deletingId === resident.id
                ? 'ELIMINANDO...'
                : 'ELIMINAR'}
            </button>

          </div>

        </div>

        <div className="admin-c421-fields">

          {EDITABLE_FIELDS.map((field) => (
            <div
              className={[
                'admin-c421-field',
                field.type === 'textarea'
                  ? 'wide'
                  : '',
              ]
                .filter(Boolean)
                .join(' ')}
              key={field.key}
            >
              <span className="admin-c421-field-label">
                {field.label}
              </span>

              {renderEditableField(
                resident,
                field
              )}
            </div>
          ))}

          <div className="admin-c421-field">
            <span className="admin-c421-field-label">
              Fecha desde
            </span>

            {renderDateField(
              resident,
              'fecha_desde',
              'Fecha desde'
            )}
          </div>

          <div className="admin-c421-field">
            <span className="admin-c421-field-label">
              Fecha hasta
            </span>

            {renderDateField(
              resident,
              'fecha_hasta',
              'Fecha hasta'
            )}
          </div>

          <div className="admin-c421-field">
            <span className="admin-c421-field-label">
              Días
            </span>

            <div className="admin-c421-field-value">
              <span>
                {resident.dias ||
                  'Se calcula con las fechas'}
              </span>
            </div>
          </div>

          <div className="admin-c421-field">
            <span className="admin-c421-field-label">
              Estado
            </span>

            <div className="admin-c421-field-value">

              <span>
                {formatFieldValue(
                  resident.estado
                )}
              </span>

              <button
                type="button"
                className="admin-c421-pencil"
                onClick={() =>
                  startEditing(
                    resident.id,
                    'estado',
                    resident.estado || ''
                  )
                }
                aria-label="Editar estado"
                title="Editar estado"
              >
                ✎
              </button>

            </div>
          </div>

        </div>

        <div className="admin-c421-application-footer">

          <div className="admin-c421-contact-actions">

            {resident.email && (
              <a
                href={`mailto:${resident.email}`}
                className="admin-c421-contact"
              >
                EMAIL
              </a>
            )}

            {whatsapp && (
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="admin-c421-contact"
              >
                WHATSAPP
              </a>
            )}

          </div>

          <button
            type="button"
            className={[
              'admin-c421-active-toggle',
              resident.residente_activo
                ? 'active'
                : '',
            ].join(' ')}
            onClick={() =>
              toggleResidentActive(resident)
            }
            disabled={saving}
          >
            <span>
              {resident.residente_activo
                ? 'RESIDENTE ACTIVO'
                : 'MARCAR COMO RESIDENTE ACTIVO'}
            </span>

            <i>
              {resident.residente_activo
                ? '✓'
                : '○'}
            </i>
          </button>

        </div>

      </article>
    )
  }

  const selectedResidents = selectedDate
    ? getResidentsForDate(selectedDate)
    : []

  const todayKey = dateToKey(today)

  return (
    <main className="admin-c421">

      <div className="admin-c421-container">

        <header className="admin-c421-header">

          <div>
            <p className="admin-c421-kicker">
              ADMINISTRACIÓN
            </p>

            <h1>C421</h1>

            <p className="admin-c421-description">
              Gestión de postulaciones, residentes y
              disponibilidad de la residencia.
            </p>
          </div>

          <button
            type="button"
            className="admin-c421-refresh"
            onClick={loadResidents}
            disabled={loading}
          >
            {loading
              ? 'CARGANDO...'
              : 'ACTUALIZAR'}
          </button>

        </header>

        {error && (
          <div className="admin-c421-error">
            {error}
          </div>
        )}

        {/* =====================================================
            POSTULACIONES SIN ORGANIZAR
            ===================================================== */}

        <section className="admin-c421-unorganized">

          <div className="admin-c421-section-heading">

            <div>
              <p className="admin-c421-kicker">
                REVISAR
              </p>

              <h2>
                Postulaciones sin organizar
              </h2>
            </div>

            <span className="admin-c421-count">
              {unorganizedResidents.length}
            </span>

          </div>

          {loading ? (
            <div className="admin-c421-loading">
              Cargando postulaciones...
            </div>
          ) : unorganizedResidents.length === 0 ? (
            <div className="admin-c421-empty">
              <p>
                No hay postulaciones sin organizar. ✓
              </p>
            </div>
          ) : (
            <div className="admin-c421-applications">
              {unorganizedResidents.map(
                renderResidentCard
              )}
            </div>
          )}

        </section>

        {/* =====================================================
            POSTULACIONES ORGANIZADAS
            ===================================================== */}

        <section className="admin-c421-unorganized">

          <div className="admin-c421-section-heading">

            <div>
              <p className="admin-c421-kicker">
                GESTIÓN
              </p>

              <h2>
                Postulaciones organizadas
              </h2>
            </div>

            <span className="admin-c421-count">
              {organizedResidents.length}
            </span>

          </div>

          {organizedResidents.length === 0 ? (
            <div className="admin-c421-empty">
              <p>
                No hay postulaciones organizadas todavía.
              </p>
            </div>
          ) : (
            <div className="admin-c421-applications">
              {organizedResidents.map(
                renderResidentCard
              )}
            </div>
          )}

        </section>

        {/* =====================================================
            CALENDARIO
            ===================================================== */}

        <section className="admin-c421-calendar-section">

          <div className="admin-c421-section-heading">

            <div>
              <p className="admin-c421-kicker">
                DISPONIBILIDAD
              </p>

              <h2>Calendario C421</h2>
            </div>

            <span className="admin-c421-count">
              {organizedResidents.length}
            </span>

          </div>

          <div className="admin-c421-calendar-header">

            <div className="admin-c421-month">

              <button
                type="button"
                onClick={goToPreviousMonth}
                aria-label="Mes anterior"
                className="admin-c421-month-arrow"
              >
                ←
              </button>

              <div>
                <h2>
                  {MONTHS[currentMonth.getMonth()]}
                </h2>

                <span>
                  {currentMonth.getFullYear()}
                </span>
              </div>

              <button
                type="button"
                onClick={goToNextMonth}
                aria-label="Mes siguiente"
                className="admin-c421-month-arrow"
              >
                →
              </button>

            </div>

            <button
              type="button"
              className="admin-c421-today"
              onClick={goToToday}
            >
              HOY
            </button>

          </div>

          <div className="admin-c421-legend">

            <span>
              <i className="admin-c421-legend-dot available" />
              DISPONIBLE
            </span>

            <span>
              <i className="admin-c421-legend-dot occupied" />
              OCUPADO
            </span>

          </div>

          <div className="admin-c421-calendar">

            <div className="admin-c421-weekdays">

              {WEEK_DAYS.map((day) => (
                <div
                  key={day}
                  className="admin-c421-weekday"
                >
                  {day}
                </div>
              ))}

            </div>

            <div className="admin-c421-grid">

              {calendarDays.map((day, index) => {

                if (!day) {
                  return (
                    <div
                      key={`empty-${index}`}
                      className="admin-c421-day empty"
                    />
                  )
                }

                const dayResidents =
                  getResidentsForDate(day.key)

                const occupied =
                  dayResidents.length > 0

                const isToday =
                  day.key === todayKey

                const isSelected =
                  day.key === selectedDate

                return (
                  <button
                    key={day.key}
                    type="button"
                    className={[
                      'admin-c421-day',
                      occupied
                        ? 'occupied'
                        : 'available',
                      isToday
                        ? 'today'
                        : '',
                      isSelected
                        ? 'selected'
                        : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    onClick={() =>
                      handleDayClick(day)
                    }
                  >
                    <span className="admin-c421-day-number">
                      {day.dayNumber}
                    </span>

                    {occupied && (
                      <span className="admin-c421-day-residents">
                        {dayResidents.length === 1
                          ? '1 RESIDENTE'
                          : `${dayResidents.length} RESIDENTES`}
                      </span>
                    )}
                  </button>
                )
              })}

            </div>

          </div>

        </section>

        {/* =====================================================
            DETALLE DEL DÍA
            ===================================================== */}

        {selectedDate &&
          selectedResidents.length > 0 && (
            <section className="admin-c421-selected">

              <div className="admin-c421-selected-header">

                <div>
                  <p className="admin-c421-kicker">
                    RESIDENTES
                  </p>

                  <h2>
                    {formatDate(selectedDate)}
                  </h2>
                </div>

                <button
                  type="button"
                  className="admin-c421-close"
                  onClick={() =>
                    setSelectedDate(null)
                  }
                  aria-label="Cerrar"
                >
                  ×
                </button>

              </div>

              <div className="admin-c421-residents">

                {selectedResidents.map(
                  (resident) => {

                    const whatsapp =
                      normalizeWhatsapp(
                        resident.whatsapp
                      )

                    return (
                      <article
                        key={resident.id}
                        className="admin-c421-resident"
                      >

                        <div className="admin-c421-resident-main">

                          <div className="admin-c421-resident-name">

                            <span>
                              RESIDENTE
                            </span>

                            <h3>
                              {resident.nombre}{' '}
                              {resident.apellido}
                            </h3>

                          </div>

                          <div className="admin-c421-resident-dates">

                            <div>
                              <span>
                                INGRESO
                              </span>

                              <strong>
                                {formatDate(
                                  resident.fecha_desde
                                )}
                              </strong>
                            </div>

                            <div>
                              <span>
                                SALIDA
                              </span>

                              <strong>
                                {formatDate(
                                  resident.fecha_hasta
                                )}
                              </strong>
                            </div>

                            <div>
                              <span>
                                ESTADO
                              </span>

                              <strong>
                                {resident.estado ||
                                  '-'}
                              </strong>
                            </div>

                          </div>

                        </div>

                        <div className="admin-c421-resident-actions">

                          {resident.email && (
                            <a
                              href={`mailto:${resident.email}`}
                              className="admin-c421-action"
                            >
                              EMAIL
                            </a>
                          )}

                          {whatsapp && (
                            <a
                              href={`https://wa.me/${whatsapp}`}
                              target="_blank"
                              rel="noreferrer"
                              className="admin-c421-action"
                            >
                              WHATSAPP
                            </a>
                          )}

                          <button
                            type="button"
                            className="admin-c421-action"
                            onClick={() =>
                              goToResidentCard(
                                resident.id
                              )
                            }
                          >
                            EDITAR
                          </button>

                          <button
                            type="button"
                            className="admin-c421-action admin-c421-action-delete"
                            onClick={() =>
                              deleteResident(
                                resident
                              )
                            }
                            disabled={
                              deletingId ===
                              resident.id
                            }
                          >
                            {deletingId ===
                            resident.id
                              ? 'ELIMINANDO...'
                              : 'ELIMINAR'}
                          </button>

                        </div>

                      </article>
                    )
                  }
                )}

              </div>

            </section>
          )}

      </div>

    </main>
  )
}

export default AdminC421