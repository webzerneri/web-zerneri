import { Link } from 'react-router-dom'

const works = [
  {
    id: 1,
    slug: 'juana-azurduy',
    title: 'JUANA AZURDUY',
    subtitle: 'Monumento',
    image: '/images/works/juana-azurduy/juana-azurduy-card.jpg',
    link: '/obra/juana-azurduy',
  },
  {
    id: 2,
    slug: 'maddem',
    title: 'MADdeM',
    subtitle: 'Proyecto',
    image: '/images/projects/maddem/maddem-card.jpg',
    link: '/proyectos/maddem',
  },
  {
    id: 3,
    slug: 'obras-privadas',
    title: 'OBRAS PRIVADAS EN ROMA',
    subtitle: 'Obras',
    image: '/images/projects/obras-privadas-roma/obras-privadas-card.jpg',
    link: '/obras-privadas-roma',
  },
  {
    id: 4,
    slug: 'soberania-desde-la-paz',
    title: 'SOBERANÍA DESDE LA PAZ',
    subtitle: 'Serie pictórica',
    image: '/images/projects/soberania-desde-la-paz/soberania-card.jpg',
    link: '/soberania-desde-la-paz',
  },
  {
    id: 5,
    slug: 'residencia-c421',
    title: 'C421',
    subtitle: 'Residencia artística',
    image: '/images/residencia-c421/c421-card.jpg',
    link: '/residencias/c421',
  },
  {
    id: 6,
    slug: 'salon',
    title: 'SALÓN',
    subtitle: 'Tienda y Galeria',
    image: '/images/salon/salon-card.jpg',
    link: '/salon',
  },
]

function Works() {
  return (
    <section className="works-section" id="obra">
      <div className="works-grid">
        {works.map((work) => {
          const content = (
            <>
              <div className="work-image-container">
                {work.image ? (
                  <img
                    src={work.image}
                    alt={work.title}
                    className="work-image"
                  />
                ) : (
                  <div className="work-placeholder">
                    <span>PRÓXIMAMENTE</span>
                  </div>
                )}
              </div>

              <div className="work-info">
                <h2>{work.title}</h2>

                {work.subtitle && (
                  <p>{work.subtitle}</p>
                )}
              </div>
            </>
          )

          return (
            <Link
              to={work.link}
              className="work-card"
              key={work.id}
            >
              {content}
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Works