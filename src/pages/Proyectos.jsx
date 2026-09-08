import { Link } from 'react-router-dom'
import './Proyectos.css'

const projects = [
  {
    id: 1,
    title: 'MADdeM',
    subtitle: 'Proyecto',
    image: '/images/projects/maddem/maddem-card.jpg',
    link: '/proyectos/maddem',
  },
  {
    id: 2,
    title: 'ESPACIO DE ENCUENTRO',
    subtitle: 'Proyecto',
    image: '/images/projects/espacio-de-encuentro/espacio-card.png',
    link: '/proyectos/espacio-de-encuentro',
  },
  {
    id: 3,
    title: 'EL PESCADOR DE MOSCA',
    subtitle: 'Proyecto',
    image: '/images/projects/pescador/hero-pescador.png',
    link: '/proyectos/pescador',
  },
  {
    id: 4,
    title: 'CONTADOR DE NIETOS',
    subtitle: 'Proyecto',
    image: '/images/projects/contador-de-nietos/hero-contador-de-nietos.png',
    link: '/proyectos/contador-de-nietos',
  },
  {
    id: 5,
    title: 'RONDA DE MUJERES',
    subtitle: 'Proyecto',
    image: '/images/projects/ronda-de-mujeres/hero-ronda-de-mujeres.webp',
    link: '/proyectos/ronda-de-mujeres',
  },
  {
    id: 6,
    title: 'SOBERANÍA DESDE LA PAZ',
    subtitle: 'Proyecto',
    image: '/images/projects/soberania-desde-la-paz/soberania-card.jpg',
    link: '/soberania-desde-la-paz',
  },
]

function Proyectos() {
  return (
    <main className="projects-page">
      <section className="projects-content">

        <header className="projects-header">
          <h1>PROYECTOS</h1>
        </header>

        <div className="projects-grid">
          {projects.map((project) => (
            <Link
              to={project.link}
              className="project-card"
              key={project.id}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>

              <div className="project-info">
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </main>
  )
}

export default Proyectos