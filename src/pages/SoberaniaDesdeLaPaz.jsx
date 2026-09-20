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

const videoVeteranos =
  '/images/projects/soberania-desde-la-paz/video/Centro-Veteranos-Neuquen.mp4'

function SoberaniaDesdeLaPaz() {
  const [videoAbierto, setVideoAbierto] = useState(false)
  const [videoActual, setVideoActual] = useState('autor')

  const abrirVideo = (video) => {
    setVideoActual(video)
    setVideoAbierto(true)
  }

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
            onClick={() => abrirVideo('autor')}
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


      {/* PRENSA Y REGISTRO */}
      <section className="soberania-prensa">

        <div className="soberania-kicker">
          PRENSA Y REGISTRO
        </div>

        <h2>
          La obra en circulación.
        </h2>

        <p className="soberania-prensa-intro">
          Presentaciones, registros y publicaciones que acompañan
          el recorrido de Soberanía desde la Paz y forman parte de
          la memoria de la obra.
        </p>


        {/* REGISTRO AUDIOVISUAL */}

        <article className="soberania-prensa-feature">

          <div className="soberania-prensa-video">

            <video
              controls
              preload="metadata"
              playsInline
            >
              <source
                src={videoVeteranos}
                type="video/mp4"
              />

              Tu navegador no soporta la reproducción de video.
            </video>

          </div>

          <div className="soberania-prensa-feature-info">

            <div className="soberania-prensa-meta">
              REGISTRO AUDIOVISUAL
            </div>

            <h3>
              Acto por Malvinas
            </h3>

            <p>
              Registro de la presentación de Soberanía desde la Paz
              junto al Centro de Veteranos de Malvinas de Neuquén.
            </p>

            <button
              className="soberania-video-button"
              onClick={() => abrirVideo('veteranos')}
            >
              VER VIDEO
              <span>↗</span>
            </button>

          </div>

        </article>


        {/* PUBLICACIONES */}

        <div className="soberania-prensa-list">

          <article className="soberania-prensa-item">

            <div className="soberania-prensa-item-top">

              <span>
                EL DIGITAL NEUQUÉN
              </span>

              <time>
                03 SEP 2026
              </time>

            </div>

            <div className="soberania-prensa-item-content">

              <div>
                <small>ARTÍCULO</small>

                <h3>
                  Malvinas, con relieve en el corazón
                </h3>
              </div>

              <p>
                Una nota sobre Soberanía desde la Paz, la obra que
                Andrés Zerneri realizará junto al Centro de Veteranos
                de Guerra de Neuquén, con participación de escuelas
                durante los días 15, 16 y 17 de septiembre.
              </p>

            </div>

            <a
              href="https://eldigitalneuquen.com.ar/2026/09/03/malvinas-con-relieve-en-el-corazon/"
              target="_blank"
              rel="noreferrer"
              className="soberania-prensa-link"
            >
              LEER PUBLICACIÓN
              <span>↗</span>
            </a>

          </article>


          <article className="soberania-prensa-item">

            <div className="soberania-prensa-item-top">

              <span>
                MARIANO MANSILLA
              </span>

              <time>
                VIDEO · INSTAGRAM
              </time>

            </div>

            <div className="soberania-prensa-item-content">

              <div>
                <small>VIDEO</small>

                <h3>
                  Soberanía desde la Paz
                </h3>
              </div>

              <p>
                Video de Mariano Mansilla sobre la iniciativa del
                Estudio Jurídico Mariano Mansilla y Asociados junto
                al Centro de Veteranos de Malvinas de Neuquén, que
                adquirieron la obra para su realización en el marco
                de esta propuesta colectiva.
              </p>

            </div>

            <a
              href="https://www.instagram.com/reel/Dct_B_FTZIL/?igsi=MWpZcZ3Nzb2tsdDBl"
              target="_blank"
              rel="noreferrer"
              className="soberania-prensa-link"
            >
              VER PUBLICACIÓN
              <span>↗</span>
            </a>

          </article>

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


      {/* INICIATIVA MUNICIPAL */}
      <section className="soberania-iniciativa">

        <div className="soberania-kicker">
          INICIATIVA MUNICIPAL
        </div>

        <h2>
          Soberanía desde la Paz
          <br />
          también puede convertirse
          <br />
          en una política pública.
        </h2>

        <p>
          Andrés Zerneri pone a disposición este proyecto de
          ordenanza para que municipios y Concejos Deliberantes
          de todo el país puedan conocerlo, adaptarlo a su
          jurisdicción y presentarlo para su tratamiento.
        </p>

        <p>
          La iniciativa propone declarar a cada ciudad como
          "Ciudad Malvinera" y crear un programa municipal
          permanente orientado al conocimiento, la memoria y
          la afirmación de nuestros derechos soberanos por la
          vía de la paz y el derecho internacional.
        </p>

        <div className="soberania-iniciativa-download">

          <span>
            PROYECTO DE ORDENANZA
          </span>

          <a
            className="soberania-contact-button"
            href="/images/projects/soberania-desde-la-paz/dossier/proyecto-ordenanza-ciudad-malvinera.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            DESCARGAR PROYECTO
            <span>↓</span>
          </a>

        </div>

      </section>


      {/* CIERRE */}
      <section className="soberania-cierre">

        <div className="soberania-cierre-text">
          <span>
            SOBERANÍA DESDE LA PAZ
          </span>

          <p>
            Conocer, recordar y construir soberanía desde la paz.
          </p>
        </div>

      </section>


      {/* VIDEO MODAL */}

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
            playsInline
            onClick={(e) => e.stopPropagation()}
          >

            <source
              src={
                videoActual === 'autor'
                  ? '/images/projects/soberania-desde-la-paz/video/soberania-desde-la-paz.mp4'
                  : videoVeteranos
              }
              type="video/mp4"
            />

          </video>

        </div>
      )}

    </main>
  )
}

export default SoberaniaDesdeLaPaz