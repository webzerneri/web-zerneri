import { useParams } from 'react-router-dom'

const works = {
  'juana-azurduy': {
    title: 'JUANA AZURDUY',
    type: 'MONUMENTO',
    location: 'BUENOS AIRES, ARGENTINA',
    year: '2015',
    material: 'BRONCE',
    weight: '25 TONELADAS',
    height: '9,5 METROS',
    cover: '/images/works/juana-azurduy/juana-azurduy.jpg',

    finished: [
      '/images/works/juana-azurduy/Juana1.png',
      '/images/works/juana-azurduy/Juana2.jpg',
      '/images/works/juana-azurduy/Juana3.png',
    ],

    process: [],
  },

  'che-guevara': {
    title: 'ERNESTO CHE GUEVARA',
    type: 'MONUMENTO',
    location: 'ROSARIO, SANTA FE, ARGENTINA',
    year: '2008',
    material: 'BRONCE',
    weight: '—',
    height: '4 METROS',
    cover: '/images/works/che-guevara/monimg01.jpg',

    finished: [
      '/images/works/che-guevara/monimg02.jpg',
      '/images/works/che-guevara/monimg03.jpg',
      '/images/works/che-guevara/monimg04.jpg',
    ],

    process: [],
  },

  'pioneros-plottier': {
    title: 'LOS PIONEROS DE PLOTTIER',
    type: 'MONUMENTO',
    location: 'PLOTTIER, NEUQUÉN, ARGENTINA',
    year: '2019',
    material: '—',
    weight: '—',
    height: '—',
    cover: '/images/works/pioneros-plottier/monimg01.jpg',

    finished: [
      '/images/works/pioneros-plottier/monimg02.jpg',
      '/images/works/pioneros-plottier/monimg03.jpg',
      '/images/works/pioneros-plottier/monimg04.jpg',
    ],

    process: [],
  },

  'hermanos-emiliozzi': {
    title: 'HERMANOS EMILIOZZI',
    type: 'MONUMENTO',
    location: 'OLAVARRÍA, BUENOS AIRES, ARGENTINA',
    year: '2025',
    material: '—',
    weight: '—',
    height: '—',
    cover: '/images/works/hermanos-emiliozzi/monimg01.jpg',

    finished: [
      '/images/works/hermanos-emiliozzi/monimg02.jpg',
      '/images/works/hermanos-emiliozzi/monimg03.jpg',
      '/images/works/hermanos-emiliozzi/monimg04.jpg',
    ],

    process: [],
  },

  'mujer-originaria': {
    title: 'MUJER ORIGINARIA',
    type: 'MONUMENTO',
    location: 'ARGENTINA',
    year: 'EN DESARROLLO',
    material: 'BRONCE',
    weight: '—',
    height: '—',
    cover: '/images/works/mujer-originaria/monimg01.jpg',

    finished: [
      '/images/works/mujer-originaria/monimg02.jpg',
      '/images/works/mujer-originaria/monimg03.jpg',
      '/images/works/mujer-originaria/monimg04.jpg',
    ],

    process: [],
  },
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="instagram-icon"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="17.5"
        cy="6.7"
        r="1"
        fill="currentColor"
      />
    </svg>
  )
}

function WorkPage() {
  const { slug } = useParams()
  const work = works[slug]

  if (!work) {
    return (
      <main className="work-page work-not-found">
        <h1>OBRA NO ENCONTRADA</h1>
      </main>
    )
  }

  return (
    <main className="work-page">
      <header className="work-header">
        <h1>{work.title}</h1>
      </header>

      <div className="work-divider" />

      <section className="work-intro">
        <h2>{work.title}</h2>

        <div className="work-details">
          <p>{work.type}</p>
          <p>{work.location}</p>
          <p>{work.year}</p>
          <p>{work.material}</p>
          <p>{work.weight}</p>
          <p>{work.height}</p>
        </div>

        <div className="work-social">
          <a
            href="https://www.instagram.com/andreszerneri/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Andrés Zerneri"
            title="Instagram de Andrés Zerneri"
          >
            <InstagramIcon />
          </a>
        </div>
      </section>

      <section className="work-gallery">
        <div className="work-gallery-image">
          <img src={work.cover} alt={work.title} />
        </div>

        {work.finished.map((image, index) => (
          <div className="work-gallery-image" key={image}>
            <img
              src={image}
              alt={`${work.title} - obra terminada ${index + 1}`}
            />
          </div>
        ))}
      </section>

      {work.process.length > 0 && (
        <section className="work-process">
          <h2>PROCESO</h2>

          <div className="work-gallery">
            {work.process.map((image, index) => (
              <div className="work-gallery-image" key={image}>
                <img
                  src={image}
                  alt={`${work.title} - proceso ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}

export default WorkPage