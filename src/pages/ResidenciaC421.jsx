import React, { useEffect, useRef, useState } from 'react'
import './ResidenciaC421.css'
import { supabase } from '../lib/supabase'
import { v4 as uuidv4 } from 'uuid'

const imagenes = {
  // =========================================================
  // HERO
  // =========================================================

  hero: '/images/residencia-c421/hero-c421-nieve-luces.jpg',

  // =========================================================
  // CASA / EXTERIOR
  // =========================================================

  casaPerspectiva:
    '/images/residencia-c421/casa-perspectiva.jpg',

  casaInterior:
    '/images/residencia-c421/c421-casa-interior.jpg',

  casaFrontal:
    '/images/residencia-c421/c421-casa-nieve-frontal.jpg',

  // =========================================================
  // NUEVA SECCIÓN · ESPACIOS DE LA RESIDENCIA
  // =========================================================

  casa1: '/images/residencia-c421/casa1.jpg',
  casa2: '/images/residencia-c421/casa2.jpg',
  casa3: '/images/residencia-c421/casa3.jpg',
  casa4: '/images/residencia-c421/casa4.jpg',
  casa5: '/images/residencia-c421/casa5.jpg',
  casa6: '/images/residencia-c421/casa6.jpg',

  // =========================================================
  // EXPERIENCIA / TALLER
  // =========================================================

  experienciaTaller:
    '/images/residencia-c421/c421-experiencia-taller-01.jpg',

  experienciaEncuentro:
    '/images/residencia-c421/c421-experiencia-encuentro-01.jpg',

  experienciaEncuentro2:
    '/images/residencia-c421/c421-experiencia-encuentro-02.jpg',

  experienciaTaller2:
    '/images/residencia-c421/c421-experiencia-taller-02.jpg',

  experienciaBrindis:
    '/images/residencia-c421/c421-experiencia-brindis.jpg',

  // =========================================================
  // TERRITORIO
  // =========================================================

  territorioBosque:
    '/images/residencia-c421/c421-territorio-bosque.jpg',

  territorioArcoiris:
    '/images/residencia-c421/c421-territorio-arcoiris.jpg',
}

function ResidenciaC421() {
  const [formularioAbierto, setFormularioAbierto] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [errorEnvio, setErrorEnvio] = useState('')
  const successRef = useRef(null)
  const formRef = useRef(null)
  const formHeadingRef = useRef(null)
  const formToggleRef = useRef(null)
  const nombreInputRef = useRef(null)

  useEffect(() => {
    if (formularioAbierto && !enviado && formHeadingRef.current) {
      requestAnimationFrame(() => {
        formHeadingRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })

        setTimeout(() => {
          nombreInputRef.current?.focus()
        }, 500)
      })
    }
  }, [formularioAbierto, enviado])

  useEffect(() => {
    if (enviado && successRef.current) {
      requestAnimationFrame(() => {
        successRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        })
      })
    }
  }, [enviado])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (enviando) return

    setEnviando(true)
    setErrorEnvio('')

    try {
      const form = event.currentTarget
      const formData = new FormData(form)
      const obrasFiles = Array.from(formData.getAll('obras')).filter(
        (file) => file instanceof File && file.size > 0
      )
      const materialFile = formData.get('materialAdicional')
      const material =
        materialFile instanceof File && materialFile.size > 0
          ? materialFile
          : null

      if (obrasFiles.length > 10) {
        throw new Error('Podés seleccionar un máximo de 10 imágenes de obras.')
      }

      const postulacionId = uuidv4()
      const obras = []

      for (let i = 0; i < obrasFiles.length; i += 1) {
        const file = obrasFiles[i]
        const extension = file.name.includes('.')
          ? file.name.split('.').pop().toLowerCase()
          : 'jpg'
        const path = `${postulacionId}/obras/${String(i + 1).padStart(2, '0')}.${extension}`

        const { error: uploadError } = await supabase.storage
          .from('c421-postulaciones')
          .upload(path, file, {
            cacheControl: '3600',
            upsert: false,
          })

        if (uploadError) throw uploadError

        obras.push({
          path,
          nombre: file.name,
          tipo: file.type,
          tamano: file.size,
        })
      }

      let materialAdicional = null

      if (material) {
        const extension = material.name.includes('.')
          ? material.name.split('.').pop().toLowerCase()
          : 'bin'
        const path = `${postulacionId}/material-adicional.${extension}`

        const { error: uploadError } = await supabase.storage
          .from('c421-postulaciones')
          .upload(path, material, {
            cacheControl: '3600',
            upsert: false,
          })

        if (uploadError) throw uploadError

        materialAdicional = {
          path,
          nombre: material.name,
          tipo: material.type,
          tamano: material.size,
        }
      }

      const { error: insertError } = await supabase
        .from('c421_postulaciones')
        .insert({
          id: postulacionId,
          nombre: formData.get('nombre'),
          apellido: formData.get('apellido'),
          email: formData.get('email'),
          whatsapp: formData.get('whatsapp'),
          ubicacion: formData.get('ubicacion'),
          redes: formData.get('redes') || null,
          biografia: formData.get('biografia'),
          disciplina: formData.get('disciplina'),
          experiencias: formData.get('experiencias') || null,
          proyecto: formData.get('proyecto'),
          dias: Number(formData.get('dias')),
          espacio: formData.get('espacio'),
          elementos: formData.get('elementos'),
          obras,
          material_adicional: materialAdicional,

          // Estado inicial de toda postulación.
          // La Edge Function de correo podrá cambiarlo a:
          // 'enviado' o 'error'.
          estado: 'pendiente',
        })

      if (insertError) throw insertError

      setEnviado(true)
      form.reset()
    } catch (error) {
      console.error('Error al enviar postulación C-421:', error)
      setErrorEnvio(
        'No pudimos enviar la postulación. Revisá los archivos e intentá nuevamente.'
      )
    } finally {
      setEnviando(false)
    }
  }

  return (
    <main className="c421-page">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="c421-hero">

        <img
          className="c421-hero-image"
          src={imagenes.hero}
          alt="Residencia C-421 en Villa La Angostura, entre la nieve y el bosque"
        />

        <div className="c421-hero-overlay" />

        <div className="c421-hero-content">

          <p className="c421-eyebrow">
            RESIDENCIA ARTÍSTICA INTERNACIONAL
          </p>

          <h1>C-421</h1>

          <p className="c421-hero-subtitle">
            Casa taller en la Cordillera de los Andes
          </p>

          <p className="c421-hero-location">
            Villa La Angostura · Patagonia Argentina
          </p>

        </div>

        <div
          className="c421-hero-bottom"
          style={{ justifyContent: 'flex-end' }}
        >
          <span>DESDE 2022 · CREACIÓN · PRODUCCIÓN · POSTPRODUCCIÓN</span>
        </div>

      </section>


      {/* =========================================================
          INTRODUCCIÓN
      ========================================================= */}

      <section className="c421-intro">

        <div className="c421-container">

          <div className="c421-section-label">
            <span>01</span>
            <span>LA RESIDENCIA</span>
          </div>

          <div className="c421-intro-layout">

            <div className="c421-intro-copy">

              <h2>
                Una casa.
                <br />
                Un taller.
                <br />
                Un territorio.
              </h2>

              <p className="c421-lead">
                La residencia C-421 es una casa taller en Villa La
                Angostura, Cordillera de los Andes, Patagonia Argentina,
                ubicada en el bosque, entre los lagos Correntoso y
                Nahuel Huapi.
              </p>

              <p>
                Funciona desde 2022 y está coordinada por el artista
                plástico Andrés Zerneri. Ofrece estancias de períodos
                variables para hacer foco en la creación, la producción
                y la postproducción de obras de distintas disciplinas
                artísticas.
              </p>

            </div>

            <figure className="c421-intro-image">
              <img
                src={imagenes.casaPerspectiva}
                alt="Vista exterior de la residencia C-421 en Villa La Angostura"
              />
            </figure>

          </div>

        </div>

      </section>


      {/* =========================================================
          CASA / TALLER
      ========================================================= */}

      <section className="c421-casa">

        <div className="c421-container">

          <div className="c421-casa-intro">

            <span className="c421-story-kicker">
              02 · LA CASA
            </span>

            <h2>
              Antes de ser
              <br />
              residencia, es casa.
            </h2>

            <p className="c421-lead">
              La casa y el taller son el punto de partida de la
              experiencia C-421. Un espacio para habitar, trabajar,
              observar y dejar que cada proyecto encuentre su propia
              forma de desarrollarse.
            </p>

          </div>


          {/* -------------------------------------------------------
              CASA · VISTA INTERIOR
          ------------------------------------------------------- */}

          <div className="c421-story-row c421-story-row-casa-interior">

            <figure className="c421-story-image">
              <img
                src={imagenes.casaInterior}
                alt="Interior de la casa de la Residencia C-421"
              />
            </figure>

            <div className="c421-story-copy">

              <span className="c421-story-kicker">
                EL ESPACIO
              </span>

              <h2>
                Un lugar para
                <br />
                habitar.
              </h2>

              <p>
                La casa propone un ambiente donde la vida cotidiana y
                el trabajo artístico pueden convivir. Los espacios
                están pensados para ser habitados con libertad durante
                la estancia.
              </p>

              <p>
                La residencia no busca separar completamente el tiempo
                de producción del tiempo de descanso: ambos forman
                parte de la experiencia.
              </p>

            </div>

          </div>


          {/* -------------------------------------------------------
              CASA · EXTERIOR
          ------------------------------------------------------- */}

          <div className="c421-story-row c421-story-row-reverse c421-story-row-casa-frontal">

            <div className="c421-story-copy">

              <span className="c421-story-kicker">
                CASA · TALLER
              </span>

              <h2>
                Un lugar para
                <br />
                hacer foco.
              </h2>

              <p>
                La casa y el taller funcionan como una estación de
                producción: un espacio donde el tiempo y las condiciones
                de trabajo permiten concentrarse en el desarrollo de
                una obra.
              </p>

              <p>
                C-421 recibe artistas de distintas disciplinas y propone
                una experiencia en la que el espacio de trabajo forma
                parte de una manera más amplia de habitar el proceso
                creativo.
              </p>

            </div>

            <figure className="c421-story-image">
              <img
                src={imagenes.casaFrontal}
                alt="Vista exterior de la casa C-421 en invierno"
              />
            </figure>

          </div>


          {/* =======================================================
              NUEVA SECCIÓN · ESPACIOS DE LA RESIDENCIA
          ======================================================= */}

          <div className="c421-espacios">

            <div className="c421-espacios-heading">

              <span className="c421-story-kicker">
                LOS ESPACIOS DE LA RESIDENCIA
              </span>

              <h2>
                Cada rincón
                <br />
                tiene su tiempo.
              </h2>

              <p>
                C-421 también se descubre recorriendo la casa. Sus
                distintos espacios permiten trabajar, conversar,
                descansar, observar el paisaje y encontrar un ritmo
                propio durante la residencia.
              </p>

            </div>


            {/* -------------------------------------------------------
                CASA 1
            ------------------------------------------------------- */}

            <article className="c421-espacio-item">

              <figure className="c421-espacio-image">
                <img
                  src={imagenes.casa1}
                  alt="Espacio interior de la Residencia C-421"
                />
              </figure>

              <div className="c421-espacio-copy">

                <span>01</span>

                <h3>
                  El espacio común
                </h3>

                <p>
                  Un lugar amplio y abierto donde la vida cotidiana y
                  el trabajo pueden encontrarse. La madera, la mesa y
                  la luz construyen un ambiente para compartir,
                  conversar y también detenerse.
                </p>

              </div>

            </article>


            {/* -------------------------------------------------------
                CASA 2
            ------------------------------------------------------- */}

            <article className="c421-espacio-item c421-espacio-item-reverse">

              <div className="c421-espacio-copy">

                <span>02</span>

                <h3>
                  El taller como extensión de la casa
                </h3>

                <p>
                  Los espacios de C-421 no están separados de la
                  experiencia de habitar. El trabajo puede aparecer en
                  distintos rincones, adaptándose a cada proyecto y a
                  cada manera de producir.
                </p>

              </div>

              <figure className="c421-espacio-image">
                <img
                  src={imagenes.casa2}
                  alt="Espacio de trabajo dentro de la Residencia C-421"
                />
              </figure>

            </article>


            {/* -------------------------------------------------------
                CASA 3
            ------------------------------------------------------- */}

            <article className="c421-espacio-item">

              <figure className="c421-espacio-image">
                <img
                  src={imagenes.casa3}
                  alt="Espacio interior con vista al bosque en C-421"
                />
              </figure>

              <div className="c421-espacio-copy">

                <span>03</span>

                <h3>
                  Mirar hacia afuera
                </h3>

                <p>
                  Las ventanas hacen que el paisaje forme parte
                  permanente de la casa. El bosque, la nieve y la luz
                  cambiante acompañan los momentos de descanso,
                  observación y trabajo.
                </p>

              </div>

            </article>


            {/* -------------------------------------------------------
                CASA 4
            ------------------------------------------------------- */}

            <article className="c421-espacio-item c421-espacio-item-reverse">

              <div className="c421-espacio-copy">

                <span>04</span>

                <h3>
                  La casa como refugio
                </h3>

                <p>
                  Un espacio íntimo y protegido, pensado para que cada
                  artista pueda encontrar sus propios ritmos durante
                  la estancia y alternar concentración, descanso y
                  contemplación.
                </p>

              </div>

              <figure className="c421-espacio-image">
                <img
                  src={imagenes.casa4}
                  alt="Espacio íntimo de la casa de la Residencia C-421"
                />
              </figure>

            </article>


            {/* -------------------------------------------------------
                CASA 5
            ------------------------------------------------------- */}

            <article className="c421-espacio-item">

              <figure className="c421-espacio-image">
                <img
                  src={imagenes.casa5}
                  alt="Espacio de trabajo y luz natural en C-421"
                />
              </figure>

              <div className="c421-espacio-copy">

                <span>05</span>

                <h3>
                  Tiempo, silencio y concentración
                </h3>

                <p>
                  Otro de los espacios disponibles para retirarse,
                  pensar y trabajar con tranquilidad. La residencia
                  también necesita lugares donde simplemente poder
                  estar.
                </p>

              </div>

            </article>


            {/* -------------------------------------------------------
                CASA 6
            ------------------------------------------------------- */}

            <article className="c421-espacio-item c421-espacio-item-reverse">

              <div className="c421-espacio-copy">

                <span>06</span>

                <h3>
                  El calor de la casa
                </h3>

                <p>
                  La estufa encendida introduce otra dimensión de la
                  experiencia: el calor, la reunión y esa sensación de
                  refugio que adquiere la casa durante una estancia.
                </p>

              </div>

              <figure className="c421-espacio-image">
                <img
                  src={imagenes.casa6}
                  alt="Interior cálido de la Residencia C-421 con la estufa encendida"
                />
              </figure>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================================
          TALLERES
      ========================================================= */}

      <section className="c421-talleres">

        <div className="c421-container">

          <div className="c421-section-label">
            <span>03</span>
            <span>LOS TALLERES</span>
          </div>

          <div className="c421-talleres-intro">

            <h2>
              El trabajo
              <br />
              también se comparte.
            </h2>

            <p>
              La residencia propone un espacio de trabajo, intercambio
              y acompañamiento. La producción puede suceder en soledad,
              pero también en conversación con otras personas y con
              quienes habitan la residencia.
            </p>

          </div>


          <div className="c421-story-row">

            <figure className="c421-story-image c421-story-image-andres">
              <img
                src={imagenes.experienciaTaller}
                alt="Persona trabajando y leyendo durante una residencia C-421"
                style={{
                  aspectRatio: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </figure>

            <div className="c421-story-copy">

              <span className="c421-story-kicker">
                CREACIÓN
              </span>

              <h2>
                Investigar.
                <br />
                Experimentar.
                <br />
                Producir.
              </h2>

              <p>
                Cada residencia puede ser diferente. El tiempo
                disponible, la disciplina y las necesidades de cada
                proyecto definen la manera de habitar el espacio.
              </p>

              <p>
                C-421 ofrece asistencia en la producción y acompañamiento
                para que las y los artistas puedan concentrarse en su
                tarea.
              </p>

            </div>

          </div>


          <div className="c421-story-row c421-story-row-reverse">

            <div className="c421-story-copy">

              <span className="c421-story-kicker">
                ENCUENTRO
              </span>

              <h2>
                Pensar
                <br />
                con otros.
              </h2>

              <p>
                Compartir la casa, conversar, mostrar un proceso y
                encontrarse con otras miradas también forman parte de
                la experiencia.
              </p>

              <p>
                La residencia busca generar las condiciones para que
                esos encuentros puedan convertirse en parte del propio
                proceso creativo.
              </p>

            </div>

            <figure className="c421-story-image">
              <img
                src={imagenes.experienciaEncuentro}
                alt="Personas conversando junto al ventanal de C-421"
              />
            </figure>

          </div>


          <div className="c421-full-story">

            <div className="c421-full-story-copy">

              <span className="c421-story-kicker">
                UNA EXPERIENCIA COMPARTIDA
              </span>

              <p>
                La casa se transforma durante la residencia. El taller,
                las conversaciones, los momentos de descanso y las
                actividades compartidas construyen una experiencia que
                va más allá del espacio destinado exclusivamente a
                producir.
              </p>

            </div>

            <figure className="c421-full-story-image">
              <img
                src={imagenes.experienciaEncuentro2}
                alt="Vista de personas junto al ventanal de la residencia"
                style={{
                  objectFit: 'contain',
                  width: '100%',
                  height: '100%',
                }}
              />
            </figure>

          </div>


          <div className="c421-story-row">

            <figure className="c421-story-image">
              <img
                src={imagenes.experienciaTaller2}
                alt="Grupo de artistas trabajando en el piso durante una residencia"
              />
            </figure>

            <div className="c421-story-copy">

              <span className="c421-story-kicker">
                PRODUCCIÓN
              </span>

              <h2>
                Hacer
                <br />
                juntos.
              </h2>

              <p>
                El taller puede convertirse en un espacio de intercambio
                donde distintas prácticas conviven, se observan y se
                contaminan unas con otras.
              </p>

              <p>
                La producción artística encuentra así un lugar para
                desarrollarse, pero también para abrirse al diálogo.
              </p>

            </div>

          </div>


          <div className="c421-full-story c421-full-story-brindis">

            <figure className="c421-full-story-image">
              <img
                src={imagenes.experienciaBrindis}
                alt="Grupo compartiendo un brindis durante la residencia C-421"
              />
            </figure>

            <div className="c421-full-story-copy">

              <span className="c421-story-kicker">
                HABITAR
              </span>

              <p>
                También hay tiempo para celebrar lo realizado, compartir
                una mesa y disfrutar de estar juntos en un lugar que
                invita a bajar el ritmo.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          TERRITORIO
      ========================================================= */}

      <section className="c421-territorio">

        <div className="c421-container">

          <div className="c421-section-label">
            <span>04</span>
            <span>EL TERRITORIO</span>
          </div>

          <div className="c421-territorio-intro">

            <h2>
              El paisaje
              <br />
              también trabaja.
            </h2>

            <p>
              La residencia está ubicada en el bosque, entre los lagos
              Correntoso y Nahuel Huapi. La playa, las cascadas, la
              nieve y la montaña forman parte de la experiencia y pueden
              convertirse en un insumo creativo.
            </p>

          </div>


          <figure className="c421-territorio-main-image">
            <img
              src={imagenes.territorioBosque}
              alt="Bosque y paisaje vistos desde el ventanal de C-421"
            />
          </figure>


          <div className="c421-territorio-split">

            <div className="c421-territorio-text">

              <span className="c421-story-kicker">
                EL ENTORNO
              </span>

              <h3>
                Una ventana
                <br />
                hacia afuera.
              </h3>

              <p>
                El territorio no es solamente el paisaje que rodea la
                residencia. Es una parte activa de la experiencia: una
                posibilidad de observar, recorrer y encontrar nuevas
                preguntas.
              </p>

            </div>

            <figure className="c421-territorio-image-secondary">
              <img
                src={imagenes.territorioArcoiris}
                alt="Montaña y arcoíris en Villa La Angostura"
              />
            </figure>

          </div>

        </div>

      </section>


      {/* =========================================================
          CAMINATORIOS
      ========================================================= */}

      <section className="c421-caminatorios">

        <div className="c421-container">

          <div className="c421-section-label">
            <span>05</span>
            <span>CAMINATORIOS</span>
          </div>

          <div className="c421-caminatorios-layout">

            <div className="c421-caminatorios-title">

              <h2>
                Caminar
                <br />
                para encontrar.
              </h2>

            </div>

            <div className="c421-caminatorios-copy">

              <p className="c421-lead">
                Andrés llama <em>caminatorios</em> a una serie de
                circuitos de senderos que forman parte de la experiencia
                de la residencia.
              </p>

              <p>
                Caminar, observar y desplazarse por el territorio también
                pueden ser formas de producir. La playa, las cascadas,
                la nieve y la montaña se transforman en un laboratorio
                de ideas.
              </p>

              <p>
                Los caminatorios son una invitación a salir del taller
                sin dejar de estar dentro del proceso creativo.
              </p>

            </div>

          </div>


          <div className="c421-caminatorios-closing">
            <p>
              PAISAJE · MOVIMIENTO · OBSERVACIÓN · IDEAS
            </p>
          </div>

        </div>

      </section>


      {/* =========================================================
          CONVOCATORIA
      ========================================================= */}

      <section className="c421-convocatoria">

        <div className="c421-container">

          <div className="c421-section-label">
            <span>06</span>
            <span>CONVOCATORIA</span>
          </div>

          <div className="c421-convocatoria-intro">

            <h2>
              Ahora te toca
              <br />
              a vos.
            </h2>

            <p>
              C-421 abre sus puertas a artistas que quieran investigar,
              experimentar o producir durante una estancia en Villa La
              Angostura.
            </p>

          </div>


          <div className="c421-convocatoria-info">

            <div className="c421-convocatoria-block">

              <span>01</span>

              <h3>
                DICIEMBRE · ENERO · FEBRERO
              </h3>

              <p>
                La residencia estará abierta desde el 1 de diciembre
                hasta el 28 de febrero. Cada residente elige la cantidad
                de días que quiere quedarse.
              </p>

            </div>


            <div className="c421-convocatoria-block">

              <span>02</span>

              <h3>
                TRES PROYECTOS POR MES
              </h3>

              <p>
                C-421 seleccionará proyectos para participar de la
                residencia durante este período.
              </p>

            </div>


            <div className="c421-convocatoria-block">

              <span>03</span>

              <h3>
                MEDIA BECA
              </h3>

              <p>
                Los proyectos seleccionados tendrán hospedaje gratuito
                y media beca para el uso del espacio de taller, clínica
                de obra, asistencia en la producción, talleres y
                actividades de la residencia.
              </p>

            </div>


            <div className="c421-convocatoria-block">

              <span>04</span>

              <h3>
                $50.000 POR DÍA
              </h3>

              <p>
                 Con la media beca, el valor de la residencia queda en
                $50.000 por día e incluye todo lo mencionado en la
                propuesta. La residencia es para mentorias, nunca se cobra
                el hospedaje de los artistas.
              </p>

            </div>

          </div>


          <div className="c421-convocatoria-note">

            <p>
              Una vez seleccionado el proyecto, C-421 enviará información
              para que la o el artista pueda solicitar pasajes o ayuda
              económica a Cultura de su ciudad o al Gobierno provincial.
            </p>

          </div>


          {/* =======================================================
              BOTÓN FORMULARIO
          ======================================================= */}

          <div ref={formToggleRef} className="c421-form-toggle-wrapper">

            <button
              type="button"
              className={`c421-form-toggle ${
                formularioAbierto ? 'is-open' : ''
              }`}
              onClick={() =>
                setFormularioAbierto(!formularioAbierto)
              }
              aria-expanded={formularioAbierto}
            >
              <span>
                {formularioAbierto
                  ? 'CERRAR FORMULARIO'
                  : 'POSTULARME A UNA MEDIA BECA'}
              </span>

              <span className="c421-form-toggle-arrow">
                {formularioAbierto ? '↑' : '↓'}
              </span>
            </button>

          </div>


          {/* =======================================================
              FORMULARIO DESPLEGABLE
          ======================================================= */}

          {formularioAbierto && (

            <div ref={formRef} className="c421-form-wrapper">

              {!enviado ? (

                <form
                  className="c421-form"
                  onSubmit={handleSubmit}
                >

                  <div ref={formHeadingRef} className="c421-form-heading">

                    <span className="c421-story-kicker">
                      POSTULACIÓN C-421
                    </span>

                    <h3>
                      Contanos sobre vos
                      <br />
                      y sobre tu proyecto.
                    </h3>

                    <p>
                      Completá la información para postularte a una
                      media beca de residencia.
                    </p>

                  </div>


                  {/* DATOS */}

                  <fieldset>

                    <legend>DATOS PERSONALES</legend>

                    <div className="c421-form-grid">

                      <label>
                        <span>Nombre *</span>

                        <input
                          ref={nombreInputRef}
                          type="text"
                          name="nombre"
                          required
                        />
                      </label>

                      <label>
                        <span>Apellido *</span>

                        <input
                          type="text"
                          name="apellido"
                          required
                        />
                      </label>

                      <label>
                        <span>Email *</span>

                        <input
                          type="email"
                          name="email"
                          required
                        />
                      </label>

                      <label>
                        <span>WhatsApp *</span>

                        <input
                          type="tel"
                          name="whatsapp"
                          required
                        />
                      </label>

                      <label className="c421-form-full">

                        <span>
                          Ciudad / País *
                        </span>

                        <input
                          type="text"
                          name="ubicacion"
                          required
                        />

                      </label>

                      <label className="c421-form-full">

                        <span>
                          Redes sociales / sitio web
                        </span>

                        <input
                          type="text"
                          name="redes"
                          placeholder="@instagram · sitio web"
                        />

                      </label>

                    </div>

                  </fieldset>


                  {/* PRÁCTICA */}

                  <fieldset>

                    <legend>TU PRÁCTICA</legend>

                    <label>

                      <span>
                        Breve biografía *
                      </span>

                      <textarea
                        name="biografia"
                        rows="6"
                        required
                      />

                    </label>

                    <label>

                      <span>
                        Disciplina con la que te gustaría investigar,
                        experimentar o producir *
                      </span>

                      <textarea
                        name="disciplina"
                        rows="4"
                        required
                      />

                    </label>

                    <label>

                      <span>
                        Experiencias en otras residencias
                      </span>

                      <textarea
                        name="experiencias"
                        rows="5"
                      />

                    </label>

                  </fieldset>


                  {/* PROYECTO */}

                  <fieldset>

                    <legend>TU PROYECTO</legend>

                    <label>

                      <span>
                        Breve proyecto *
                      </span>

                      <textarea
                        name="proyecto"
                        rows="8"
                        required
                      />

                    </label>

                    <div className="c421-form-grid">

                      <label>

                        <span>
                          ¿Cuántos días querrías quedarte? *
                        </span>

                        <input
                          type="number"
                          name="dias"
                          min="1"
                          required
                        />

                      </label>

                      <label>

                        <span>
                          ¿Cuánto espacio necesitarías? *
                        </span>

                        <input
                          type="text"
                          name="espacio"
                          required
                        />

                      </label>

                    </div>

                    <label>

                      <span>
                        ¿Con qué elementos trabajarías? *
                      </span>

                      <textarea
                        name="elementos"
                        rows="5"
                        required
                      />

                    </label>

                  </fieldset>


                  {/* OBRAS */}

                  <fieldset>

                    <legend>
                      10 IMÁGENES DE OBRAS REALIZADAS
                    </legend>

                    <p className="c421-form-help">
                      Podés seleccionar hasta 10 imágenes para
                      acompañar tu postulación.
                    </p>

                    <label className="c421-file-input">

                      <span>
                        SELECCIONAR IMÁGENES
                      </span>

                      <input
                        type="file"
                        name="obras"
                        accept="image/jpeg,image/png,image/webp"
                        multiple
                      />

                    </label>

                  </fieldset>


                  {/* MATERIAL ADICIONAL */}

                  <fieldset>

                    <legend>
                      MATERIAL ADICIONAL · OPCIONAL
                    </legend>

                    <p className="c421-form-help">
                      Si querés acercarle algo más a Andrés, podés
                      adjuntar un CV, portfolio, proyecto, dossier u
                      otro material que consideres relevante.
                    </p>

                    <label className="c421-file-input">

                      <span>
                        ADJUNTAR ARCHIVO
                      </span>

                      <input
                        type="file"
                        name="materialAdicional"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.webp"
                      />

                    </label>

                  </fieldset>


                  {/* ENVÍO */}

                  <div className="c421-form-submit">

                    <p>
                      Al enviar tu postulación, la información será
                      recibida por C-421 para su evaluación.
                    </p>

                    {errorEnvio && (
                      <p className="c421-form-error" role="alert">
                        {errorEnvio}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="c421-submit-button"
                      disabled={enviando}
                    >
                      {enviando ? 'ENVIANDO…' : 'ENVIAR POSTULACIÓN'}
                      <span>→</span>
                    </button>

                  </div>

                </form>

              ) : (

                <div ref={successRef} className="c421-form-success">

                  <span className="c421-story-kicker">
                    POSTULACIÓN RECIBIDA
                  </span>

                  <h3>
                    Gracias por
                    <br />
                    acercarte a C-421.
                  </h3>

                  <p>
                    Recibimos tu postulación y tu proyecto.
                    La información será evaluada por C-421.
                  </p>

                  <button
                    type="button"
                    className="c421-close-success"
                    onClick={() => {
                      setEnviado(false)
                      setFormularioAbierto(false)

                      requestAnimationFrame(() => {
                        formToggleRef.current?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        })
                      })
                    }}
                  >
                    VOLVER A LA RESIDENCIA
                  </button>

                </div>

              )}

            </div>

          )}

        </div>

      </section>


      {/* =========================================================
          CIERRE
      ========================================================= */}

      <section className="c421-cierre">

        <div className="c421-cierre-image">

          <img
            src={imagenes.hero}
            alt=""
          />

        </div>

        <div className="c421-cierre-overlay" />

      </section>

    </main>
  )
}

export default ResidenciaC421