import './Maddem.css'

const maddemImages = [
  '/images/projects/maddem/maddem01.jpg',
  '/images/projects/maddem/maddem02.jpg',
  '/images/projects/maddem/maddem03.jpg',
  '/images/projects/maddem/maddem04.jpg',
  '/images/projects/maddem/maddem07.jpg',
]

function Maddem() {
  return (
    <main className="maddem-page">

      {/* HERO */}

      <section className="maddem-hero">

        <div className="maddem-hero-image">
          <img
            src="/images/projects/maddem/maddem.jpg"
            alt="MADdeM — Monumento al Deporte de Montaña"
          />
        </div>

      </section>


      {/* INTRODUCCIÓN */}

      <section className="maddem-section maddem-introduction">

        <div className="maddem-section-label">
          MADdeM
        </div>

        <div className="maddem-section-content">

          <h2>
            Un símbolo para una ciudad.
          </h2>

          <p>
            Hay momentos que ocurren una sola vez en la historia de una ciudad.
            El reconocimiento de Villa la Angostura como Capital Provincial del Deporte de Montaña
            es uno de esos momentos.
          </p>

          <p>
            Esa ley reconoce una identidad que la comunidad construyó durante décadas.
            Pero toda gran capital necesita algo más que un reconocimiento.

            Necesita un símbolo capaz de representar a esa identidad durante generaciones.
          </p>

        </div>
      </section>


      {/* LEY */}

      <section className="maddem-section maddem-law">

        <div className="maddem-section-heading">
          <span>01</span>
          <h2>UNA LEY. UN SÍMBOLO.</h2>
        </div>

        <div className="maddem-law-intro">

          <p>
            Villa La Angostura fue reconocida oficialmente por la Provincia
            del Neuquén como Capital Provincial del Deporte de Montaña.
          </p>

          <p className="maddem-law-number">
            LEY PROVINCIAL N.º 3521/25
          </p>

        </div>

        <div className="maddem-law-document">

          <iframe
            src="/documents/maddem/ley-provincial-3521.pdf"
            title="Ley Provincial N.º 3521/25"
            className="maddem-pdf-viewer"
          />

        </div>

        <div className="maddem-downloads">

          <a
            href="/documents/maddem/ley-provincial-3521.pdf"
            target="_blank"
            rel="noreferrer"
            className="maddem-button"
          >
            VER LEY
          </a>

          <a
            href="/documents/maddem/ley-provincial-3521.pdf"
            download
            className="maddem-button"
          >
            DESCARGAR LEY
          </a>

        </div>

      </section>


      {/* VISIÓN */}

      <section className="maddem-section maddem-vision">

        <div className="maddem-section-heading">
          <span>02</span>
          <h2>LA VISIÓN.</h2>
        </div>

        <div className="maddem-feature-image">
          <img
            src="/images/projects/maddem/maddem01.jpg"
            alt="MADdeM frente al paisaje de montaña"
          />
        </div>

        <div className="maddem-text-large">

          <p>
            El MADdeM fue concebido para convertirse en el símbolo de la
            Capital Provincial del Deporte de Montaña y en un nuevo punto
            de encuentro para quienes viven, visitan y sienten la montaña
            como parte de su vida.
          </p>

          <p>
            Más que un monumento, el MADdeM propone una experiencia.
          </p>

          <p>
            Un lugar al que se llega caminando entre los árboles, donde el
            paisaje se abre lentamente hasta revelar una esfera suspendida
            frente a las montañas.
          </p>

          <p>
            Un espacio pensado para detenerse, contemplar, compartir una
            fotografía, celebrar un logro o simplemente disfrutar del
            silencio y la inmensidad del entorno.
          </p>

          <p>
            Con el paso del tiempo, el MADdeM será el escenario de
            premiaciones, encuentros, lanzamientos, eventos deportivos,
            actividades educativas y celebraciones que fortalecerán el
            vínculo entre la comunidad, el deporte y la naturaleza.
          </p>

        </div>

        <div className="maddem-closing">
          <strong>El deporte de montaña tiene una capital.</strong>
          <strong>Ahora tiene un símbolo.</strong>
        </div>

      </section>


      {/* PLATAFORMA */}

      <section className="maddem-section maddem-platform">

        <div className="maddem-section-heading">
          <span>03</span>
          <h2>LA PLATAFORMA.</h2>
        </div>

        <div className="maddem-platform-intro">

          <p>
            <strong>
              Un símbolo puede representar una ciudad.
            </strong>
          </p>

          <p>
            <strong>
              Una plataforma puede transformarla.
            </strong>
          </p>

        </div>

        <div className="maddem-text-large">

          <p>
            Pensado como una plataforma capaz de generar nuevas
            oportunidades para Villa La Angostura y consolidar su liderazgo
            como Capital Provincial del Deporte de Montaña.
          </p>

          <p>
            Alrededor del MADdeM podrán desarrollarse:
          </p>

        </div>

        <ul className="maddem-platform-list">
          <li>Premiaciones.</li>
          <li>Lanzamientos de productos.</li>
          <li>Presentaciones institucionales.</li>
          <li>Encuentros deportivos.</li>
          <li>Actividades educativas.</li>
          <li>Eventos culturales.</li>
          <li>Producción de contenido audiovisual.</li>
          <li>Acciones de patrocinio.</li>
          <li>Promoción turística.</li>
        </ul>

        <div className="maddem-feature-image">
          <img
            src="/images/projects/maddem/maddem02.jpg"
            alt="MADdeM — plataforma y espacio de encuentro"
          />
        </div>

        <div className="maddem-text-large">

          <p>
            Cada actividad fortalecerá el vínculo entre el deporte, la
            comunidad y el paisaje, transformando al monumento en un espacio
            vivo durante todo el año.
          </p>

          <p>
            Con el paso del tiempo, la obra trascenderá su condición de
            monumento para convertirse en un punto de encuentro, una
            referencia para quienes visiten la ciudad y un nuevo ícono de
            Villa La Angostura.
          </p>

          <p>
            Porque el verdadero valor del MADdeM no está únicamente en lo
            que es, sino en todo lo que hará posible.
          </p>

        </div>

      </section>


      {/* PREMIO MADdeM */}

      <section className="maddem-section maddem-award">

        <div className="maddem-section-heading">
          <span>04</span>
          <h2>EL PREMIO MADdeM.</h2>
        </div>

        <div className="maddem-feature-image">
          <img
            src="/images/projects/maddem/maddem04.jpg"
            alt="Premio MADdeM"
          />
        </div>

        <div className="maddem-text-large">

          <h3>
            Un símbolo que viaja.
          </h3>

          <p>
            El MADdeM nace en Villa La Angostura, pero su historia no termina
            allí.
          </p>

          <p>
            El Premio MADdeM acompañará cada evento deportivo y llevará
            consigo el símbolo de la Capital Provincial del Deporte de
            Montaña.
          </p>

          <p>
            La estatuilla del MADdeM será entregada como reconocimiento a
            quienes participen, representen y contribuyan al desarrollo del
            deporte de montaña y a los valores que representa.
          </p>

          <p>
            De esta manera, el MADdeM no termina con la inauguración del
            monumento: comienza allí una historia que continuará acompañando
            cada encuentro deportivo.
          </p>

          <p>
            En ese contexto, el Premio MADdeM nace con la vocación de
            convertirse en una tradición que trascienda generaciones y
            fronteras.
          </p>

        </div>

      </section>


      {/* APOYO INSTITUCIONAL */}

      <section className="maddem-section maddem-support">

        <div className="maddem-section-heading">
          <span>05</span>
          <h2>UN PROYECTO COLECTIVO.</h2>
        </div>

        <div className="maddem-introduction">

          <div className="maddem-section-label">
            APOYO
          </div>

          <div className="maddem-section-content">

            <h2>
              Para que una idea se convierta en un símbolo,
              necesita de una comunidad que la acompañe.
            </h2>

            <p>
              MADdeM cuenta con el apoyo de la Municipalidad de
              Villa La Angostura, de la Cámara de Comercio y de
              empresas que acompañan el proyecto y hacen posible
              avanzar hacia su realización.
            </p>

            <p>
              La participación de estos actores permite construir
              el proyecto de manera colectiva, articulando
              instituciones, sector privado y comunidad alrededor
              de una misma iniciativa.
            </p>

            <div className="maddem-feature-image">
              <img
                src="/images/projects/maddem/maddem09.jpg"
                alt="MADdeM"
              />
            </div>

          </div>

        </div>

      </section>


      {/* MATERIALIZACIÓN */}

      <section className="maddem-section maddem-materialization">

        <div className="maddem-section-heading">
          <span>06</span>
          <h2>MATERIALIZACIÓN DE LA OBRA.</h2>
        </div>

        <div className="maddem-feature-image">
          <img
            src="/images/projects/maddem/maddem07.jpg"
            alt="Materialización y ficha técnica del MADdeM"
          />
        </div>

        <div className="maddem-specs">

          <div>
            <span>ALTURA TOTAL</span>
            <strong>6 METROS</strong>
          </div>

          <div>
            <span>DIÁMETRO DE LA ESFERA</span>
            <strong>3 METROS</strong>
          </div>

          <div>
            <span>PLATAFORMA</span>
            <strong>3 METROS</strong>
          </div>

          <div>
            <span>INVERSIÓN ESTIMADA</span>
            <strong>USD 26.000</strong>
          </div>

        </div>

      </section>


      {/* EMPRESAS FUNDADORAS */}

      <section className="maddem-section maddem-founders">

        <div className="maddem-section-heading">
          <span>07</span>
          <h2>EMPRESAS FUNDADORAS.</h2>
        </div>

        <div className="maddem-text-large">

          <p>
            Los grandes símbolos no pertenecen a una persona, a una
            institución ni a una generación.
          </p>

          <p>
            Pertenecen a la comunidad que decide hacerlos posibles.
          </p>

          <p>
            El MADdeM nace con esa vocación: convertirse en un legado para
            Villa La Angostura y para el deporte de montaña, integrando a
            quienes, desde distintos ámbitos, han contribuido al crecimiento
            de esta identidad.
          </p>

          <p>
            Las empresas e instituciones que acompañen su realización
            pasarán a formar parte de esa historia desde su origen.
          </p>

          <p>
            Su participación quedará incorporada de manera permanente al
            propio monumento mediante inscripciones en bajo relieve
            integradas al diseño del pedestal.
          </p>

        </div>

        <div className="maddem-founders-closing">

          <p>
            Ser Empresa Fundadora del MADdeM es integrar el origen de un
            futuro ícono de Villa La Angostura.
          </p>

        </div>

      </section>


      {/* TRANSPARENCIA Y APP */}

      <section className="maddem-section maddem-transparency">

        <div className="maddem-section-heading">
          <span>08</span>
          <h2>TRANSPARENCIA.</h2>
        </div>

        <div className="maddem-feature-image">
          <img
            src="/images/projects/maddem/maddem10.jpg"
            alt="Plataforma digital MADdeM"
          />
        </div>

        <div className="maddem-feature-image">
          <img
            src="/images/projects/maddem/maddem08.jpg"
            alt="Plataforma digital MADdeM"
          />
        </div>

        <div className="maddem-text-large">

          <p>
            El proyecto cuenta con una plataforma digital desarrollada para
            acompañar todo el proceso de manera abierta y transparente.
          </p>

          <p>
            Desde allí es posible conocer el estado del proyecto, consultar
            novedades, conocer las empresas fundadoras, adherir como empresa,
            conocer el destino de los aportes y acceder a toda la información
            vinculada al MADdeM.
          </p>

          <p>
            La plataforma también contempla la posibilidad de desadhesión,
            porque la transparencia no consiste solamente en invitar a
            participar, sino también en garantizar que cada decisión pueda
            tomarse con absoluta libertad.
          </p>

        </div>

        <a
          href="https://maddem-app.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="maddem-button maddem-button-primary"
        >
          Para formar parte del proyecto haga clic para abrir la app MADdeM
        </a>

      </section>


      {/* DOCUMENTACIÓN */}

      <section className="maddem-section maddem-dossier">

        <div className="maddem-section-heading">
          <span>09</span>
          <h2>DOCUMENTACIÓN.</h2>
        </div>

        <div className="maddem-text-large">

          <p>
            El MADdeM es un proyecto abierto y documentado. Ponemos a
            disposición la documentación necesaria para conocerlo en
            profundidad.
          </p>

        </div>

        <div className="maddem-document-links">

          <div className="maddem-document">

            <h3>
              PRESENTACIÓN
            </h3>

            <p>
              Presentación institucional del proyecto.
            </p>

            <div className="maddem-downloads">

              <a
                href="/documents/maddem/maddem-presentacion.pdf"
                target="_blank"
                rel="noreferrer"
                className="maddem-button"
              >
                VER PRESENTACIÓN
              </a>

              <a
                href="/documents/maddem/maddem-presentacion.pdf"
                download
                className="maddem-button"
              >
                DESCARGAR
              </a>

            </div>

          </div>


          <div className="maddem-document">

            <h3>
              DOSSIER MADdeM
            </h3>

            <p>
              Documentación completa del proyecto.
            </p>

            <div className="maddem-downloads">

              <a
                href="/documents/maddem/maddem-dossier.pdf"
                target="_blank"
                rel="noreferrer"
                className="maddem-button"
              >
                VER DOSSIER
              </a>

              <a
                href="/documents/maddem/maddem-dossier.pdf"
                download
                className="maddem-button"
              >
                DESCARGAR
              </a>

            </div>

          </div>


          <div className="maddem-document">

            <h3>
              LEY PROVINCIAL N.º 3521/25
            </h3>

            <p>
              Marco legal que reconoce a Villa La Angostura como Capital
              Provincial del Deporte de Montaña.
            </p>

            <div className="maddem-downloads">

              <a
                href="/documents/maddem/ley-provincial-3521.pdf"
                target="_blank"
                rel="noreferrer"
                className="maddem-button"
              >
                VER LEY
              </a>

              <a
                href="/documents/maddem/ley-provincial-3521.pdf"
                download
                className="maddem-button"
              >
                DESCARGAR
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* CIERRE */}

      <section className="maddem-section maddem-call">

        <div className="maddem-call-content">

          <p className="maddem-eyebrow">
            MADdeM · MONUMENTO AL DEPORTE DE MONTAÑA
          </p>

          <h2>
            Ser parte de un símbolo
            <br />
            también es construirlo.
          </h2>

          <p>
            El MADdeM está creciendo.
            <br />
            Empresas, organizaciones e instituciones pueden formar parte
            de su historia desde el origen.
          </p>

          <a
            href="https://maddem-app.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="maddem-button maddem-button-primary"
          >
            APP MADdeM
          </a>

        </div>

      </section>

    </main>
  )
}

export default Maddem