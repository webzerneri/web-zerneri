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

<Link to="/proyectos/ronda-de-mujeres">
            Ronda de Mujeres
          </Link>

          <Link to="/soberania-desde-la-paz">
  Soberanía desde la Paz
</Link>

          <Link to="/proyectos/espacio-de-encuentro">
            Espacio de Encuentros
          </Link>

          <Link to="/proyectos/pescador">
            El Pescador de Mosca
          </Link>

          <Link to="/proyectos/contador-de-nietos">
            Contador de Nietos
          </Link>

          {/*
          <Link to="/proyectos/general-belgrano">
            Monumento al General Belgrano
          </Link>
          */}

          

          {/*
            <Link to="/proyectos/la-mapuche">
              Machi
             </Link>
           */}

          {/*
          <Link to="/proyectos/mujer-originaria">
            Monumento a Osvaldo Bayer
          </Link>
          */}
        </div>


        {/* RESIDENCIA */}

        <div className="footer-column">
          <h3>RESIDENCIA</h3>

          <Link to="/residencias/c421">
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

          <Link to="/pinturas">
            Pinturas
          </Link>
        </div>


        {/* GESTIÓN CULTURAL */}

        <div className="footer-column">
          <h3>GESTIÓN CULTURAL</h3>

          <Link to="/gestion-cultural">
            Gestión cultural
          </Link>
        </div>


        {/* BIOGRAFÍA */}

        <div className="footer-column">
          <Link
            to="/biografia"
            className="footer-section-title"
          >
            Biografía
          </Link>
        </div>


        {/* CONTACTO */}

        <div className="footer-column">
          <h3>CONTACTO</h3>

          <div className="footer-instagram-links">

            <a
              href="https://www.instagram.com/andreszerneri/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Andrés Zerneri"
              title="Instagram de Andrés Zerneri"
              className="footer-instagram-link"
            >
              <InstagramIcon />
              <span>Andrés Zerneri</span>
            </a>

            <a
              href="https://www.instagram.com/zerneriobras/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Obras"
              title="Instagram de Obras"
              className="footer-instagram-link"
            >
              <InstagramIcon />
              <span>Obras</span>
            </a>

            <a
              href="https://www.instagram.com/residencia.c421/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de C421"
              title="Instagram de C421"
              className="footer-instagram-link"
            >
              <InstagramIcon />
              <span>C421</span>
            </a>

          </div>

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