import { Link } from 'react-router-dom'

const monuments = [
  {
    id: 1,
    title: 'JUANA AZURDUY',
    location: 'Buenos Aires, Argentina',
    image: '/images/works/juana-azurduy/juana-azurduy.jpg',
    link: '/obra/juana-azurduy',
  },
  {
    id: 2,
    title: 'ERNESTO CHE GUEVARA',
    location: 'Rosario, Santa Fe, Argentina',
    image: '/images/works/che-guevara/monimg01.jpg',
    link: '/obra/che-guevara',
  },
  {
    id: 3,
    title: 'LOS PIONEROS DE PLOTTIER',
    location: 'Plottier, Neuquén, Argentina',
    image: '/images/works/pioneros-plottier/monimg01.jpg',
    link: '/obra/pioneros-plottier',
  },
  {
    id: 4,
    title: 'HERMANOS EMILIOZZI',
    location: 'Olavarría, Buenos Aires, Argentina',
    image: '/images/works/hermanos-emiliozzi/monimg01.jpg',
    link: '/obra/hermanos-emiliozzi',
  },
  {
    id: 5,
    title: 'MUJER ORIGINARIA',
    location: 'Argentina',
    image: '/images/works/mujer-originaria/monimg01.jpg',
    link: '/obra/mujer-originaria',
  },
]

function Monumentos() {
  return (
    <main className="category-page">
      <section className="category-content">

        <h1>MONUMENTOS</h1>

        <div className="category-grid">
          {monuments.map((monument) => {
            const content = (
              <>
                <div className="category-image-container">
                  {monument.image ? (
                    <img
                      src={monument.image}
                      alt={monument.title}
                      className="category-image"
                    />
                  ) : (
                    <div className="category-placeholder">
                      <span>PRÓXIMAMENTE</span>
                    </div>
                  )}
                </div>

                <div className="category-info">
                  <h2>{monument.title}</h2>
                  <p>{monument.location}</p>
                </div>
              </>
            )

            return (
              <Link
                to={monument.link}
                className="category-card"
                key={monument.id}
              >
                {content}
              </Link>
            )
          })}
        </div>

      </section>
    </main>
  )
}

export default Monumentos