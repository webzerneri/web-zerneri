import './SoberaniaDesdeLaPaz.css'
import { useState } from 'react'

const imagenes = {
  obra: '/images/projects/soberania-desde-la-paz/cuadro.png',
  andres: '/images/projects/soberania-desde-la-paz/Cuadro y Andres.png',
  collage: '/images/projects/soberania-desde-la-paz/Collage.png',
  frases: '/images/projects/soberania-desde-la-paz/frases.png',
  pared: '/images/projects/soberania-desde-la-paz/pared.png',
  pared2: '/images/projects/soberania-desde-la-paz/pared2.png',
}

function SoberaniaDesdeLaPaz() {
  const [videoAbierto, setVideoAbierto] = useState(false)

  return (
    <main className="soberania-page">

      {/* INTRO */}
      <section className="soberania-intro">
        <div className="soberania-kicker">
          OBRA · ARTE Y MEMORIA
        </div>

        <h1>
          SOBERANÍA
          <br />
          DESDE LA PAZ
        </h1>

        <div className="soberania-line" />

        <p className="soberania-lead">
          Una nueva mirada sobre las Islas Malvinas.
        </p>
      </section>


      {/* OBRA PRINCIPAL */}
      <section className="soberania-obra">
        <div className="soberania-obra-image">
          <img
            src={imagenes.obra}
            alt="Soberanía desde la Paz"
          />
        </div>

        <div className="soberania-obra-text">
          <span>LA OBRA</span>

          <h2>
            Conocer para
            <br />
            construir memoria.
          </h2>

          <p>
            Soberanía desde la Paz propone una representación
            contemporánea de las Islas Malvinas, poniendo en primer
            plano su geografía, su biodiversidad, sus recursos
            naturales y su historia.
          </p>

          <p>
            La obra no propone respuestas. Propone preguntas. Y
            entiende que la memoria se fortalece cuando permanece
            presente en la vida cotidiana de la comunidad.
          </p>
        </div>
      </section>


      {/* FRASE */}
      <section className="soberania-frase">
        <div className="soberania-frase-inner">
          Solo aquello que conocemos puede formar parte
          <br className="desktop-only" />
          de nuestra identidad.
        </div>
      </section>


      {/* GALERÍA */}
      <section className="soberania-gallery">
        <div className="soberania-section-title">
          Soberanía desde la Paz — detalles de la obra
        </div>

        <div className="soberania-gallery-grid">

          <figure className="gallery-main">
            <img
              src={imagenes.pared}
              alt="Soberanía desde la Paz — obra"
            />
          </figure>

          <figure className="gallery-collage">
            <img
              src={imagenes.collage}
              alt="Detalles de Soberanía desde la Paz"
            />
          </figure>

        </div>
      </section>


      {/* HISTORIA / PRESENTACIÓN */}
      <section className="soberania-story">

        <div className="soberania-kicker">
          EL NACIMIENTO DE LA OBRA
        </div>

        <h2>
          Una obra para mantener
          <br />
          presente la memoria.
        </h2>

        <p>
          Soberanía desde la Paz nace como una obra destinada
          a generar reflexión, conocimiento y memoria alrededor
          de las Islas Malvinas.
        </p>

        <p>
          Su propuesta busca acercar esta temática a las
          comunidades desde una mirada contemporánea, artística
          y profundamente vinculada con la identidad.
        </p>

      </section>


      {/* ANDRÉS */}
      <section className="soberania-andres">

        <div className="soberania-andres-image">
          <img
            src={imagenes.pared2}
            alt="Andrés Zerneri junto a Soberanía desde la Paz"
          />
        </div>

        <div className="soberania-andres-text">
          <div className="soberania-kicker">
            ANDRÉS ZERNERI
          </div>

          <h2>
            La obra contada
            <br />
            por su autor.
          </h2>

          <p>
            En este video, Andrés Zerneri explica el origen,
            el sentido y la construcción de Soberanía desde la Paz.
          </p>

          <button
            className="soberania-video-button"
            onClick={() => setVideoAbierto(true)}
          >
            VER VIDEO
            <span>↗</span>
          </button>
        </div>

      </section>


      {/* PRESENTACIONES */}
      <section className="soberania-presentaciones">

        <div className="soberania-kicker">
          LA OBRA EN LA COMUNIDAD
        </div>

        <h2>
          Soberanía desde la Paz
          <br />
          en distintos espacios.
        </h2>

        <p className="presentaciones-intro">
          La obra ha sido presentada y exhibida en distintos
          ámbitos institucionales y culturales, generando nuevos
          espacios de encuentro alrededor de la memoria y la
          identidad.
        </p>

        <div className="presentaciones-list">

          <div className="presentacion-item">
            <span>01</span>
            <div>
              <strong>Palacio Municipal</strong>
              <small>Villa La Angostura · Argentina</small>
            </div>
          </div>

          <div className="presentacion-item">
            <span>02</span>
            <div>
              <strong>Cancillería de la Nación</strong>
              <small>República Argentina</small>
            </div>
          </div>

          <div className="presentacion-item">
            <span>03</span>
            <div>
              <strong>Centro de Veteranos de Malvinas</strong>
              <small>Neuquén · Argentina</small>
            </div>
          </div>

        </div>

      </section>


      {/* CONVOCATORIA */}
      <section className="soberania-convocatoria">

        <div className="soberania-kicker">
          UNA OBRA PARA COMPARTIR
        </div>

        <h2>
          Llevar Soberanía desde la Paz
          <br />
          a nuevos espacios.
        </h2>

        <p>
          Municipios, legislaturas, instituciones, organizaciones,
          espacios culturales y comunidades pueden incorporar la
          obra a sus propios espacios y contribuir a mantener
          presente su mensaje.
        </p>

        <p>
          La propuesta busca que Soberanía desde la Paz pueda
          formar parte del patrimonio cultural de nuevos lugares,
          acercando su contenido a distintas comunidades y
          generaciones.
        </p>

        <a
          className="soberania-contact-button"
          href="/images/projects/soberania-desde-la-paz/dossier/soberania-desde-la-paz.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONOCER LA PROPUESTA
          <span>↗</span>
        </a>

      </section>


      {/* CIERRE */}
      <section className="soberania-closing">
        ...
      </section>


      {/* VIDEO */}
      {videoAbierto && (
        <div
          className="soberania-video-modal"
          onClick={() => setVideoAbierto(false)}
        >
          <button
            className="soberania-video-close"
            onClick={() => setVideoAbierto(false)}
            aria-label="Cerrar video"
          >
            ×
          </button>

          <video
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
          >
            <source
              src="/images/projects/soberania-desde-la-paz/video/soberania-desde-la-paz.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}

    </main>
  )
}

export default SoberaniaDesdeLaPaz