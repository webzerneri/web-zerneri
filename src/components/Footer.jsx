import { Link } from 'react-router-dom'

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="footer-instagram-icon"
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">

        {/* PROYECTOS */}

        <div className="footer-column">
          <h3>PROYECTOS</h3>

          <Link to="/proyectos/maddem">
            MADdeM
          </Link>

          <Link to="/proyectos/espacio-de-encuentros">
            Espacio de Encuentros
          </Link>

          <Link to="/proyectos/pescador">
            El Pescador de Mosca
          </Link>

          <Link to="/proyectos/contador-de-nietos">
            Contador de Nietos
          </Link>

          <Link to="/proyectos/general-belgrano">
            Monumento al General Belgrano
          </Link>

          <Link to="/proyectos/ronda-de-mujeres">
            Ronda de Mujeres
          </Link>

          <Link to="/proyectos/la-mapuche">
            La Mapuche
          </Link>

          <Link to="/proyectos/mujer-originaria">
            Monumento a Osvaldo Bayer
          </Link>
        </div>


        {/* RESIDENCIA */}

        <div className="footer-column">
          <h3>RESIDENCIA</h3>

          <Link to="/residencia-c421">
            C421
          </Link>
        </div>


        {/* OBRA */}

        <div className="footer-column">
          <h3>OBRA</h3>

          <Link to="/esculturas">
            Esculturas
          </Link>

          <Link to="/monumentos">
            Monumentos
          </Link>

          <Link to="/murales">
            Murales
          </Link>

          <Link to="/pinturas">
            Pinturas
          </Link>

          <Link to="/instalaciones">
            Performance
          </Link>

          
        </div>


        {/* GESTIÓN CULTURAL */}

        <div className="footer-column">
          <h3>GESTIÓN CULTURAL</h3>

          <Link to="/gestion-cultural">
            Gestión cultural
          </Link>
        </div>


        {/* TRAYECTORIA */}

        <div className="footer-column">
          <h3>TRAYECTORIA</h3>

          <Link to="/biografia">
            Biografía
          </Link>

          <Link to="/investigacion">
            Investigación
          </Link>
        </div>


        {/* CONTACTO */}

        <div className="footer-column">
          <h3>CONTACTO</h3>

          <a
            href="https://www.instagram.com/andreszerneri/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram de Andrés Zerneri"
            title="Instagram de Andrés Zerneri"
          >
            <InstagramIcon />
          </a>

          <a href="mailto:zerneriandres3@gmail.com">
            Email
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 ANDRÉS ZERNERI</span>
      </div>
    </footer>
  )
}

export default Footer