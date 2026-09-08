import './Prensa.css'

const videos = [
  {
    id: 'X_BYg7k6aJQ',
    title: 'El arte como trinchera',
    eyebrow: 'UNIVERSIDAD NACIONAL DE LA MATANZA',
    meta: '14 minutos · Dirección: Diego Abregu',
    description:
      'Un recorrido por la vida y obra del artista plástico Andrés Zerneri, su compromiso social y su visión del arte como herramienta de transformación.',
  },
  {
    id: 'iTWE92GszQE',
    title: 'Registro audiovisual',
    eyebrow: 'ANDRÉS ZERNERI',
    meta: 'YouTube',
    description: '',
  },
  {
    id: 'g2DhJcwBQrM',
    title: 'Registro audiovisual',
    eyebrow: 'ANDRÉS ZERNERI',
    meta: 'YouTube',
    description: '',
  },
]

const pressItems = [
  {
    source: 'EL DIGITAL NEUQUÉN',
    date: '03 SEP 2026',
    title: 'Malvinas, con relieve en el corazón',
    description:
      'Una nota sobre “Soberanía desde la Paz”, la obra que Andrés Zerneri realizará junto al Centro de Veteranos de Guerra de Neuquén, con participación de escuelas durante los días 15, 16 y 17 de septiembre.',
    link: 'https://eldigitalneuquen.com.ar/2026/09/03/malvinas-con-relieve-en-el-corazon/',
    type: 'ARTÍCULO',
  },
  {
    source: 'MARIANO MANSILLA',
    date: 'VIDEO · INSTAGRAM',
    title: 'Soberanía desde la Paz',
    description:
      'Video de Mariano Mansilla sobre la iniciativa del Estudio Jurídico Mariano Mansilla y Asociados junto al Centro de Veteranos de Malvinas de Neuquén, que adquirieron la obra para su realización en el marco de esta propuesta colectiva.',
    link: 'https://www.instagram.com/reel/Dct_B_FTZIL/?igsi=MWpZcZ3Nzb2tsdDBl',
    type: 'VIDEO',
  },
  {
    source: 'DIARIO RÍO NEGRO',
    date: '07 SEP 2026',
    title: 'Arte entre lagos y bosques',
    description:
      'Una mirada a C-421, la casa taller de Villa La Angostura que ya recibió a unos 150 artistas, y al trabajo de Andrés Zerneri alrededor del arte, la memoria, la soberanía y los derechos humanos.',
    link: 'https://www.rionegro.com.ar/sociedad/arte-entre-lagos-y-bosques-la-casa-taller-de-villa-la-angostura-que-ya-recibio-a-150-artistas-4707202/',
    type: 'ARTÍCULO',
  },
  {
    source: 'LA ANGOSTURA DIGITAL',
    date: '08 SEP 2026',
    title: 'Entrevista: Andrés Zerneri y una Residencia Artística que no deja de crecer',
    description:
      'Entrevista a Andrés Zerneri sobre C-421, su crecimiento y la construcción de una red de residencias artísticas en Villa La Angostura.',
    link: 'https://www.laangosturadigital.com.ar/2026/09/08/entrevista-andres-zerneri-y-una-residencia-artitica-que-no-deja-de-crecer-en-villa-la-angostura/',
    type: 'ENTREVISTA',
  },
]

function Prensa() {
  return (
    <main className="prensa-page">
      <section className="prensa-hero">
        <img
          className="prensa-hero-image"
          src="/images/prensa/hero-prensa.jpg"
          alt="Taller de artista con esculturas y material de prensa"
        />

        <div className="prensa-hero-overlay" />

        <div className="prensa-hero-content">
          <p className="prensa-hero-kicker">ANDRÉS ZERNERI</p>
          <h1>PRENSA</h1>
          <p className="prensa-hero-subtitle">
            MEDIOS · DOCUMENTALES · EXPOSICIONES · PUBLICACIONES
          </p>
        </div>

        <div className="prensa-hero-bottom">
          <span>OBRA · TERRITORIO · MEMORIA</span>
        </div>
      </section>

      <section className="prensa-intro">
        <div className="prensa-container">
          <p className="prensa-section-label">01 · PRENSA Y MEDIOS</p>

          <div className="prensa-intro-grid">
            <h2>
              La obra,
              <br />
              en diálogo.
            </h2>

            <p>
              Una selección de documentales, registros audiovisuales,
              exposiciones y publicaciones vinculadas a la trayectoria
              artística y cultural de Andrés Zerneri.
            </p>
          </div>
        </div>
      </section>

      <section className="prensa-videos">
        <div className="prensa-container">
          <div className="prensa-section-heading">
            <p className="prensa-section-label">02 · AUDIOVISUAL</p>
            <h2>En primera persona</h2>
          </div>

          <div className="prensa-video-grid">
            {videos.map((video) => (
              <article className="prensa-video-card" key={video.id}>
                <div className="prensa-video-frame">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                <div className="prensa-video-info">
                  <p className="prensa-video-eyebrow">{video.eyebrow}</p>
                  <h3>{video.title}</h3>
                  <p className="prensa-video-meta">{video.meta}</p>

                  {video.description && (
                    <p>{video.description}</p>
                  )}

                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="prensa-video-link"
                  >
                    VER EN YOUTUBE <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prensa-medios">
        <div className="prensa-container">
          <div className="prensa-section-heading">
            <p className="prensa-section-label">03 · MEDIOS</p>
            <h2>La obra en las noticias</h2>
          </div>

          <div className="prensa-medios-grid">
            {pressItems.map((item) => (
              <article className="prensa-media-card" key={item.link}>
                <div className="prensa-media-top">
                  <p className="prensa-media-source">{item.source}</p>
                  <p className="prensa-media-date">{item.date}</p>
                </div>

                <div className="prensa-media-body">
                  <p className="prensa-media-type">{item.type}</p>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="prensa-media-link"
                >
                  VER PUBLICACIÓN <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prensa-documental">
        <div className="prensa-container">
          <div className="prensa-documental-grid">
            <div>
              <p className="prensa-section-label">04 · DOCUMENTAL</p>
              <h2>Juana, bronce y Libertad</h2>
            </div>

            <div className="prensa-documental-copy">
              <p className="prensa-highlight">CANAL ENCUENTRO · 2015</p>
              <p>
                Serie documental de 4 capítulos de 26 minutos sobre la
                realización del Monumento a Juana Azurduy. Dirección:
                Pablo Lecaros.
              </p>
              <p>
                Una mirada al proceso creativo, técnico y humano detrás de
                la obra en bronce más grande de Argentina.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="prensa-editorial">
        <div className="prensa-container">
          <div className="prensa-editorial-grid">
            <article className="prensa-editorial-card">
              <p className="prensa-section-label">05 · EXPOSICIONES</p>
              <h2>Exhibiciones recientes</h2>

              <div className="prensa-list">
                <div>
                  <strong>2024</strong>
                  <p>
                    “Cuerpos Resilientes” — Museo Gregorio Álvarez,
                    Neuquén.
                  </p>
                </div>

                <div>
                  <strong>2024</strong>
                  <p>
                    “Identidades Imaginarias” — Galería Contemporary
                    Artshop, Roma, Italia.
                  </p>
                </div>

                <div>
                  <strong>2019–2024</strong>
                  <p>
                    Exposiciones en Alemania (Stuttgart, Düsseldorf,
                    Karlsruhe), Francia (París, Tours) y España
                    (Barcelona).
                  </p>
                </div>
              </div>
            </article>

            <article className="prensa-editorial-card">
              <p className="prensa-section-label">06 · PUBLICACIONES</p>
              <h2>Textos y ediciones</h2>

              <p>
                Capítulos en libros sobre arte público, monumentos y
                espacio urbano publicados por Editorial de la Facultad de
                Filosofía y Letras (UBA) y Ediciones EDUNLa.
              </p>

              <p>
                Ilustraciones de tapa para publicaciones de ética, cine y
                bioética.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="prensa-cierre">
        <p>OBRA · TERRITORIO · MEMORIA · PARTICIPACIÓN</p>
      </section>
    </main>
  )
}

export default Prensa