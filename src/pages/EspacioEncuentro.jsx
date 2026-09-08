import './EspacioEncuentro.css'

const sections = [
  {
    number: '01',
    title: '¿Qué es y qué propone?',
    text: [
      'Espacio de Encuentro es una propuesta de mobiliario público que transforma un sector del espacio urbano en un lugar pensado para encontrarse, conversar y permanecer.',
      'Cuatro sillones de gran presencia visual, realizados con terminación de pátina verde, conforman un espacio abierto que invita a sentarse, compartir y disfrutar del entorno.',
      'La propuesta busca incorporar diseño, identidad y experiencia al espacio público, generando un punto reconocible dentro de la ciudad.',
    ],
  },
  {
    number: '02',
    title: '¿Qué recibe el municipio?',
    text: [
      'El municipio incorpora una intervención artística y de mobiliario urbano pensada para permanecer en el espacio público.',
    ],
    list: [
      '2 sillones o más de diseño escultórico.',
      'Realización artesanal en cemento moldeado.',
      'Terminación con pátina verde natural.',
      'Diseño pensado específicamente para el espacio público.',
      'Una intervención que puede ser utilizada libremente por vecinos y visitantes.',
      'Una obra que transforma un sector del paisaje en un espacio de encuentro.',
    ],
  },
  {
    number: '03',
    title: 'Una obra para ser vivida',
    text: [
      'Es una obra, es mobiliario urbano y es un espacio de encuentro.',
      'La disposición abierta de los sillones favorece la conversación y permite que distintas personas puedan apropiarse del espacio de manera espontánea.',
      'Un lugar para detenerse, compartir un mate, conversar, descansar o simplemente disfrutar del paisaje.',
      'La obra no impone una forma de uso. Cada persona puede encontrar en ella su propio modo de habitar el espacio.',
    ],
  },
  {
    number: '04',
    title: 'Integración al paisaje',
    text: [
      'Espacio de Encuentro está pensado para integrarse al paisaje sin competir con él.',
      'La materialidad, la escala y la terminación de los sillones permiten que la intervención dialogue con parques, paseos, costaneras y otros espacios públicos.',
      'Durante el día, la obra se integra naturalmente al entorno. Por la noche, la iluminación permite construir una nueva escena y prolongar la experiencia del espacio público.',
    ],
  },
]

function EspacioEncuentro() {
  return (
    <main className="espacio-page">
      <section className="espacio-hero">
        <img
          src="/images/projects/espacio-de-encuentro/hero-espacio-encuentro.png"
          alt="Espacio de Encuentro junto a un paisaje de lago y montaña"
          className="espacio-hero-image"
        />
        <div className="espacio-hero-overlay" />

        <div className="espacio-hero-content">
          <p className="espacio-kicker">ANDRÉS ZERNERI · PROYECTO</p>
          <h1>ESPACIO<br />DE ENCUENTRO</h1>
          <p className="espacio-hero-subtitle">
            ARTE · PAISAJE · COMUNIDAD
          </p>
        </div>

        <div className="espacio-hero-bottom">
          <span>UNA OBRA PARA SENTARSE · UN LUGAR PARA ENCONTRARSE</span>
        </div>
      </section>

      <section className="espacio-intro">
        <div className="espacio-container">
          <p className="espacio-label">ESPACIO DE ENCUENTRO</p>

          <div className="espacio-intro-grid">
            <h2>
              El encuentro
              <br />
              es la actividad.
            </h2>

            <p>
              Espacio de Encuentro propone incorporar al espacio público un
              lugar especialmente diseñado para favorecer la conversación,
              el encuentro y la reflexión.
            </p>
          </div>

          <p className="espacio-lead">
            El proyecto combina arte, paisaje y comunidad mediante un conjunto
            de mobiliario escultórico que se integra al entorno y transforma un
            sector del espacio público en un punto de encuentro cotidiano.
          </p>
        </div>
      </section>

      <section className="espacio-image-section">
        <div className="espacio-container">
          <img
            src="/images/projects/espacio-de-encuentro/espacio-encuentro-paisaje.png"
            alt="Espacio de Encuentro instalado en un parque junto al agua"
          />
          <p>
            Una intervención simple que agrega identidad al lugar y genera
            nuevas formas de encuentro entre las personas.
          </p>
        </div>
      </section>

      <section className="espacio-sections">
        <div className="espacio-container">
          {sections.map((section) => (
            <article className="espacio-text-section" key={section.number}>
              <div className="espacio-section-number">{section.number}</div>

              <div>
                <h2>{section.title}</h2>

                {section.text.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="espacio-full-image">
        <img
          src="/images/projects/espacio-de-encuentro/espacio-encuentro-atardecer.png"
          alt="Espacio de Encuentro iluminado al atardecer"
        />
      </section>

      <section className="espacio-monolito">
        <div className="espacio-container">
          <div className="espacio-monolito-grid">
            <div>
              <p className="espacio-label">05 · UN VALOR AGREGADO QUE PERMANECE</p>
              <h2>Una obra con identidad propia.</h2>
            </div>

            <div>
              <p>
                Si bien las plazas son un lugar natural de encuentro, esta
                instalación artística propone destacar y resguardar un espacio
                destinado especialmente al diálogo, al encuentro y a la reflexión.
              </p>
              <p>
                Cada instalación incorpora un pequeño elemento de identificación
                que vincula la obra con la ciudad que la recibe.
              </p>
              <p>
                Un monolito de cemento sostiene una placa de acrílico grabada
                con el nombre de la obra, el nombre del artista y el nombre de
                la ciudad.
              </p>
              <p>
                La placa incorpora además un código QR que permite acceder a un
                video especialmente realizado por Andrés Zerneri para esa ciudad,
                en el que el artista explica el significado de la obra y el valor
                de ese espacio para la comunidad.
              </p>
            </div>
          </div>

          <img
            src="/images/projects/espacio-de-encuentro/espacio-encuentro-monolito.png"
            alt="Sillón escultórico y monolito identificatorio de Espacio de Encuentro"
            className="espacio-monolito-image"
          />
        </div>
      </section>

      <section className="espacio-community">
        <div className="espacio-container">
          <img
            src="/images/projects/espacio-de-encuentro/espacio-encuentro-comunidad.png"
            alt="Personas conversando en Espacio de Encuentro"
          />
        </div>
      </section>

      <section className="espacio-artist">
        <div className="espacio-container">
          <div className="espacio-artist-grid">
            <div>
              <p className="espacio-label">06 · ANDRÉS ZERNERI</p>
              <h2>Una obra con identidad propia.</h2>
            </div>

            <div className="espacio-artist-copy">
              <h3>Artista plástico y escultor</h3>
              <p>
                Andrés Zerneri es un artista argentino cuya obra se desarrolla
                principalmente en torno al paisaje, la memoria, la identidad y
                los símbolos que construyen una comunidad.
              </p>
              <p>
                Cuenta con una extensa trayectoria en la realización de
                monumentos, esculturas e intervenciones destinadas al espacio
                público y al patrimonio cultural.
              </p>

              <h3>Algunos proyectos y antecedentes</h3>
              <ul>
                <li>Autor del Monumento a Juana Azurduy.</li>
                <li>
                  Fundador y director del Museo de Arte Contemporáneo de Villa
                  La Angostura (MAC).
                </li>
                <li>Autor del monumento a los Hermanos Emiliozzi, en Olavarría.</li>
                <li>
                  Autor del monumento en homenaje al docente Carlos Fuentealba,
                  en Chos Malal.
                </li>
                <li>Obras y proyectos desarrollados para instituciones públicas y privadas.</li>
                <li>
                  Parte de su producción integra actualmente una exposición
                  permanente en Roma, Italia.
                </li>
              </ul>

              <p className="espacio-artist-final">
                Su trabajo busca crear obras que no solamente ocupen un lugar,
                sino que puedan formar parte de la identidad y de la memoria de
                las comunidades que las reciben.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="espacio-specs">
        <div className="espacio-container">
          <div className="espacio-specs-grid">
            <div>
              <p className="espacio-label">07 · REALIZACIÓN Y PLAZOS</p>
              <h2>Hecho artesanalmente.</h2>
              <p>
                Los sillones son realizados artesanalmente por Andrés Zerneri
                en su atelier. Cada pieza es desarrollada en cemento moldeado y
                terminada individualmente con pátina verde natural, cuidando la
                textura y el carácter escultórico de la obra.
              </p>

              <div className="espacio-table">
                <div><strong>2 sillones</strong><span>20 días</span></div>
                <div><strong>4 sillones</strong><span>30 días</span></div>
                <div><strong>Más de 4</strong><span>A definir según cantidad</span></div>
              </div>
            </div>

            <img
              src="/images/projects/espacio-de-encuentro/espacio-encuentro-ficha-tecnica.png"
              alt="Ficha técnica con vistas y medidas aproximadas de los sillones"
            />
          </div>
        </div>
      </section>

      <section className="espacio-investment">
        <div className="espacio-container">
          <p className="espacio-label">08 · INVERSIÓN</p>
          <div className="espacio-investment-grid">
            <h2>$2.750.000 + IVA</h2>
            <p>por sillón</p>

            <div className="espacio-investment-copy">
              <p>
                El valor corresponde a la realización de cada sillón escultórico
                en cemento moldeado, con terminación en pátina verde natural.
              </p>

              <div className="espacio-prices">
                <div>
                  <strong>2 sillones</strong>
                  <span>$5.500.000 + IVA</span>
                </div>
                <div>
                  <strong>4 sillones</strong>
                  <span>$11.000.000 + IVA</span>
                </div>
              </div>

              <p>
                La cantidad de sillones puede adaptarse a las características y
                dimensiones del espacio público seleccionado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="espacio-download">
        <div className="espacio-container">
          <p className="espacio-label">DOSSIER DEL PROYECTO</p>
          <h2>Todo el proyecto,<br />en detalle.</h2>
          <p>
            Descargá el dossier completo de Espacio de Encuentro con la
            propuesta, antecedentes, realización, plazos e inversión.
          </p>

          <a
            href="/documents/dossier-espacio-de-encuentro.pdf"
            target="_blank"
            rel="noreferrer"
            className="espacio-download-button"
          >
            DESCARGAR DOSSIER <span>↓</span>
          </a>
        </div>
      </section>

      <section className="espacio-cierre">
        <p className="espacio-cierre-kicker">09 · CIERRE</p>
        <h2>ESPACIO DE ENCUENTRO</h2>
        <p>
          Una obra para sentarse.<br />
          Un lugar para encontrarse.<br />
          Una intervención que transforma el paisaje cotidiano.
        </p>
        <span>ANDRÉS ZERNERI · ARTISTA PLÁSTICO Y ESCULTOR</span>
      </section>
    </main>
  )
}

export default EspacioEncuentro
