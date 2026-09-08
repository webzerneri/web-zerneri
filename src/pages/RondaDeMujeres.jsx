import './RondaDeMujeres.css'

const projectImages = {
  hero: '/images/projects/ronda-de-mujeres/hero-ronda-de-mujeres.webp',
  metodologia: '/images/projects/ronda-de-mujeres/metodologia-participativa.webp',
  experiencia: '/images/projects/ronda-de-mujeres/experiencia-continua.webp',
  implementacion: '/images/projects/ronda-de-mujeres/implementacion.webp',
  planta: '/images/projects/ronda-de-mujeres/planta-general.webp',
  elevacion: '/images/projects/ronda-de-mujeres/elevacion-frontal.webp',
  axonometria: '/images/projects/ronda-de-mujeres/axonometria-general.webp',
  red: '/images/projects/ronda-de-mujeres/red-latinoamericana.webp',
  andres: '/images/projects/ronda-de-mujeres/andres-taller.webp',
}

function RondaDeMujeres() {
  return (
    <main className="ronda-page">

      {/* HERO */}
      <section className="ronda-hero">
        <img
          src={projectImages.hero}
          alt="Representación conceptual de La Ronda de Mujeres"
          className="ronda-hero-image"
        />

        <div className="ronda-hero-overlay" />

        <div className="ronda-hero-content">
          <p className="ronda-kicker">ANDRÉS ZERNERI · PROYECTO</p>

          <h1>
            LA RONDA
            <br />
            DE MUJERES
          </h1>

          <p className="ronda-hero-subtitle">
            ARTE · MEMORIA · RECONOCIMIENTO · COMUNIDAD
          </p>
        </div>

        <div className="ronda-hero-bottom">
          <span>SEIS MUJERES · UN SÉPTIMO LUGAR · UNA COMUNIDAD</span>
          <span className="ronda-scroll-mark">↓</span>
        </div>
      </section>


      {/* INTRO / MANIFIESTO */}
      <section className="ronda-manifiesto">
        <div className="ronda-container">
          <p className="ronda-label">LA IDEA</p>

          <div className="ronda-manifiesto-grid">
            <h2>
              Una ronda
              <br />
              no tiene centro.
            </h2>

            <div className="ronda-copy ronda-copy-large">
              <p>
                La Ronda de Mujeres es una iniciativa de arte público participativo
                concebida para reconocer y poner en valor el aporte de las mujeres
                que construyeron la identidad, la memoria y el desarrollo de cada
                comunidad.
              </p>

              <p>
                Cada implantación comienza con la escucha, la investigación y el
                diálogo con el territorio. No se replica una obra: cada comunidad
                construye la suya a partir de sus propias historias.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* LA OBRA */}
      <section className="ronda-obra">
        <div className="ronda-container">
          <div className="ronda-section-heading">
            <div>
              <p className="ronda-label">01 · LA OBRA</p>
              <h2>
                Seis mujeres.
                <br />
                Un lugar abierto.
              </h2>
            </div>

            <p>
              Un conjunto escultórico de seis figuras de tamaño real unidas en una
              ronda, implantado a nivel del suelo y sin pedestal. El círculo deja
              deliberadamente un séptimo lugar vacío: un espacio para la ausencia,
              para las historias que merecen ser recordadas y para quien quiera
              formar parte de la obra.
            </p>
          </div>

          <div className="ronda-obra-visual">
            <img
              src={projectImages.axonometria}
              alt="Axonometría conceptual de La Ronda de Mujeres"
            />
          </div>

          <div className="ronda-facts">
            <div>
              <strong>06</strong>
              <span>figuras femeninas</span>
            </div>
            <div>
              <strong>01</strong>
              <span>séptimo lugar abierto</span>
            </div>
            <div>
              <strong>1,60 m</strong>
              <span>altura aproximada</span>
            </div>
            <div>
              <strong>2,80 m</strong>
              <span>diámetro interior aproximado</span>
            </div>
          </div>
        </div>
      </section>


      {/* SÉPTIMO LUGAR */}
      <section className="ronda-septimo">
        <div className="ronda-septimo-inner">
          <div className="ronda-septimo-copy">
            <p className="ronda-label">02 · EL SÉPTIMO LUGAR</p>

            <h2>
              La obra deja
              <br />
              un lugar abierto.
            </h2>

            <p>
              La Ronda no se contempla solamente desde afuera. El visitante puede
              ocupar el espacio que falta y completar el círculo desde adentro.
            </p>

            <p>
              Ese gesto sencillo transforma la relación con el monumento: la
              memoria deja de ser un relato inmóvil y se convierte en una
              experiencia compartida.
            </p>
          </div>

          <div className="ronda-septimo-quote">
            <span>EL SÉPTIMO LUGAR</span>
            <p>
              Un espacio para todas aquellas mujeres que ya no están y para todas
              aquellas historias que merecen seguir siendo recordadas.
            </p>
          </div>
        </div>
      </section>


      {/* ARTE PÚBLICO */}
      <section className="ronda-arte-publico">
        <div className="ronda-container">
          <div className="ronda-two-column">
            <div>
              <p className="ronda-label">03 · ARTE PÚBLICO</p>
              <h2>
                No venimos a
                <br />
                poner una estatua.
              </h2>
            </div>

            <div className="ronda-copy">
              <p>
                La Ronda entiende el arte público como un proceso. Una obra comienza
                a existir plenamente cuando las personas la recorren, la habitan y
                la incorporan a su vida cotidiana.
              </p>

              <p>
                Cada comunidad participa en la construcción del significado de la
                obra. Organizaciones, instituciones, historiadores, referentes y
                habitantes del territorio forman parte de una conversación que
                precede al primer boceto.
              </p>

              <p className="ronda-emphasis">
                La obra no llega con una historia cerrada.
                <br />
                La historia se construye con la comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* METODOLOGÍA */}
      <section className="ronda-metodologia">
        <div className="ronda-container">
          <div className="ronda-section-heading">
            <div>
              <p className="ronda-label">04 · METODOLOGÍA PARTICIPATIVA</p>
              <h2>
                Antes del bronce,
                <br />
                viene la escucha.
              </h2>
            </div>

            <p>
              Cada implantación sigue un proceso colaborativo que permite que la
              obra responda a la identidad, la memoria y los valores del territorio.
            </p>
          </div>

          <div className="ronda-diagram">
            <img
              src={projectImages.metodologia}
              alt="Diagrama de metodología participativa de La Ronda de Mujeres"
            />
          </div>
        </div>
      </section>


      {/* IMPLEMENTACIÓN */}
      <section className="ronda-implementacion">
        <div className="ronda-container">
          <div className="ronda-two-column ronda-two-column-wide">
            <div>
              <p className="ronda-label">05 · DE LA IDEA A UNA CIUDAD</p>
              <h2>
                Cada Ronda
                <br />
                nace en un territorio.
              </h2>
            </div>

            <div className="ronda-copy">
              <p>
                La implementación integra participación comunitaria, desarrollo
                artístico y gestión institucional. El proyecto ejecutivo se adapta
                a las características de cada ciudad sin perder la identidad
                conceptual de La Ronda.
              </p>
            </div>
          </div>

          <div className="ronda-diagram ronda-diagram-implementation">
            <img
              src={projectImages.implementacion}
              alt="Etapas de implementación de La Ronda en una ciudad"
            />
          </div>
        </div>
      </section>


      {/* EXPERIENCIA */}
      <section className="ronda-experiencia">
        <div className="ronda-container">
          <div className="ronda-experiencia-heading">
            <p className="ronda-label">06 · UNA EXPERIENCIA QUE CONTINÚA</p>
            <h2>
              La obra no termina
              <br />
              cuando se inaugura.
            </h2>
          </div>

          <div className="ronda-experiencia-image">
            <img
              src={projectImages.experiencia}
              alt="Representación conceptual de la experiencia de visitar La Ronda"
            />
          </div>

          <div className="ronda-experiencia-copy">
            <p>
              Cada visita puede abrir una nueva historia. El séptimo lugar permite
              entrar en la ronda y formar parte de ella, mientras los códigos QR
              conectan la obra física con una plataforma digital de memoria,
              testimonios, archivos y contenidos educativos.
            </p>

            <p>
              La plataforma permanece abierta y en evolución, permitiendo que el
              relato de cada comunidad continúe creciendo mucho después de la
              inauguración.
            </p>
          </div>
        </div>
      </section>


      {/* PLATAFORMA DIGITAL */}
      <section className="ronda-digital">
        <div className="ronda-container">
          <div className="ronda-digital-grid">
            <div>
              <p className="ronda-label">07 · PLATAFORMA DIGITAL</p>
              <h2>
                La memoria
                <br />
                también se conecta.
              </h2>
            </div>

            <div className="ronda-copy">
              <p>
                Cada Ronda puede contar con una plataforma digital propia, accesible
                desde la obra y organizada alrededor de las mujeres representadas,
                la historia de la implantación y los materiales producidos junto a
                la comunidad.
              </p>

              <div className="ronda-digital-list">
                <span>Biografías</span>
                <span>Galerías</span>
                <span>Audio</span>
                <span>Videos</span>
                <span>Entrevistas</span>
                <span>Archivos</span>
                <span>Bibliografía</span>
                <span>Recursos educativos</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* DOCUMENTACIÓN TÉCNICA */}
      <section className="ronda-tecnica">
        <div className="ronda-container">
          <div className="ronda-section-heading">
            <div>
              <p className="ronda-label">08 · REPRESENTACIÓN CONCEPTUAL</p>
              <h2>
                Pensada para
                <br />
                hacerse realidad.
              </h2>
            </div>

            <p>
              Las siguientes láminas presentan criterios referenciales de escala,
              organización espacial e implantación. Las proporciones definitivas se
              desarrollarán durante la etapa ejecutiva de cada proyecto.
            </p>
          </div>

          <div className="ronda-technical-grid">
            <figure>
              <img src={projectImages.planta} alt="Planta general conceptual de La Ronda" />
              <figcaption>Lámina 01 · Planta general</figcaption>
            </figure>

            <figure>
              <img src={projectImages.elevacion} alt="Elevación frontal conceptual de La Ronda" />
              <figcaption>Lámina 02 · Elevación frontal</figcaption>
            </figure>
          </div>

          <div className="ronda-materials">
            <div>
              <strong>MATERIAL</strong>
              <span>Bronce fundido</span>
            </div>
            <div>
              <strong>IMPLANTACIÓN</strong>
              <span>A nivel del suelo · sin pedestal</span>
            </div>
            <div>
              <strong>ACCESIBILIDAD</strong>
              <span>Universal</span>
            </div>
            <div>
              <strong>INTERACCIÓN</strong>
              <span>Códigos QR · plataforma web</span>
            </div>
          </div>
        </div>
      </section>


      {/* RED */}
      <section className="ronda-red">
        <div className="ronda-red-image-wrap">
          <img
            src={projectImages.red}
            alt="Representación conceptual de la Red Latinoamericana de La Ronda de Mujeres"
          />
          <div className="ronda-red-overlay" />
        </div>

        <div className="ronda-red-content ronda-container">
          <p className="ronda-label">09 · UNA RONDA, MUCHAS CIUDADES</p>
          <h2>
            Una obra que
            <br />
            puede crecer.
          </h2>
          <p>
            La metodología de La Ronda permite adaptar el proyecto a diferentes
            ciudades y contextos culturales. Cada implantación conserva el concepto
            común y, al mismo tiempo, incorpora la identidad propia del territorio.
          </p>
          <span>PROYECCIÓN REGIONAL E INTERNACIONAL</span>
        </div>
      </section>


      {/* ANDRÉS */}
      <section className="ronda-andres">
        <div className="ronda-container">
          <div className="ronda-andres-grid">
            <div className="ronda-andres-image-wrap">
              <img
                src={projectImages.andres}
                alt="Andrés Zerneri trabajando en su taller"
              />
            </div>

            <div className="ronda-andres-copy">
              <p className="ronda-label">10 · ANDRÉS ZERNERI</p>
              <h2>
                Arte,
                <br />
                memoria
                <br />
                y espacio público.
              </h2>

              <p>
                Andrés Zerneri desarrolla desde hace más de tres décadas una
                trayectoria dedicada al arte público como herramienta de construcción
                de memoria e identidad colectiva.
              </p>

              <p>
                Es autor de obras emplazadas en distintos espacios públicos de la
                Argentina y el exterior, entre ellas el Monumento a Juana Azurduy y
                proyectos vinculados con memoria, identidad y participación
                comunitaria.
              </p>

              <p>
                En La Ronda, esa trayectoria se pone al servicio de una obra que
                comienza en la comunidad y busca permanecer como patrimonio vivo.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* DOCUMENTACIÓN */}
      <section className="ronda-documentacion">
        <div className="ronda-container">
          <div className="ronda-documentacion-heading">
            <div>
              <p className="ronda-label">11 · DOCUMENTACIÓN DEL PROYECTO</p>
              <h2>
                Cuatro miradas
                <br />
                sobre La Ronda.
              </h2>
            </div>

            <p>
              La Ronda de Mujeres se presenta en distintos documentos según la
              escala y el contexto de implementación. Aquí puede consultarse y
              descargar la documentación del proyecto.
            </p>
          </div>

          <div className="ronda-documentacion-grid">
            <a
              href="/dossiers/ronda-de-mujeres/Dossier La Ronda de Mujeres - Proyecto Argentina.pdf"
              className="ronda-dossier-card"
              download
            >
              <span className="ronda-dossier-region">ARGENTINA</span>
              <strong>Dossier del proyecto</strong>
              <span className="ronda-dossier-action">DESCARGAR DOSSIER ↓</span>
            </a>

            <a
              href="/dossiers/ronda-de-mujeres/Dossier La Ronda de Mujeres.pdf"
              className="ronda-dossier-card"
              download
            >
              <span className="ronda-dossier-region">CHILE</span>
              <strong>Dossier del proyecto</strong>
              <span className="ronda-dossier-action">DESCARGAR DOSSIER ↓</span>
            </a>

            <a
              href="/dossiers/ronda-de-mujeres/Dossier La Ronda de Mujeres - Proyecto LATAM.pdf"
              className="ronda-dossier-card"
              download
            >
              <span className="ronda-dossier-region">AMÉRICA LATINA</span>
              <strong>Dossier LATAM</strong>
              <span className="ronda-dossier-action">DESCARGAR DOSSIER ↓</span>
            </a>

            <a
              href="/dossiers/ronda-de-mujeres/Dossier La  Ronda de Mujeres - Internacional.pdf"
              className="ronda-dossier-card"
              download
            >
              <span className="ronda-dossier-region">INTERNACIONAL</span>
              <strong>Presentación internacional</strong>
              <span className="ronda-dossier-action">DESCARGAR DOSSIER ↓</span>
            </a>
          </div>
        </div>
      </section>


      {/* CIERRE */}
      <section className="ronda-cierre">
        <div className="ronda-cierre-inner">
          <p className="ronda-cierre-label">12 · UNA INVITACIÓN A CONSTRUIR MEMORIA</p>

          <h2>
            Allí donde exista
            <br />
            una comunidad dispuesta
            <br />
            a recordar,
            <br />
            existirá un nuevo lugar
            <br />
            para La Ronda.
          </h2>

          <a
            href="mailto:zerneriandres3@gmail.com"
            className="ronda-contact-button"
          >
            CONTACTAR SOBRE EL PROYECTO
          </a>

          <span className="ronda-signature">
            ANDRÉS ZERNERI · ARTISTA PLÁSTICO Y ESCULTOR
          </span>
        </div>
      </section>

    </main>
  )
}

export default RondaDeMujeres