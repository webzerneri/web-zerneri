import { useState } from 'react'
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

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="footer-contact-icon"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <path
        d="M4 7l8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="footer-contact-icon"
    >
      <path
        d="M7.2 3.8l3 2.4-1.8 3.1c1 2.1 2.3 3.5 4.4 4.5l3.1-1.8 2.4 3c.6.8.5 1.9-.2 2.5l-1.3 1.1c-.7.6-1.7.8-2.6.5-5.7-1.8-9.8-5.9-11.6-11.6-.3-.9-.1-1.9.5-2.6l1.1-1.3c.6-.7 1.7-.8 2.5-.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PhoneContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const phone = '+54 11 3449 0093'

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phone)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 1500)
    } catch {
      // Si el navegador no permite copiar, no hacemos nada.
    }
  }

  return (
    <div className="footer-phone-wrapper">

      <button
        type="button"
        className="footer-semilla-icon"
        aria-label="Mostrar teléfono de Semilla Studio"
        title="Teléfono de Semilla Studio"
        onClick={() => setIsOpen(!isOpen)}
      >
        <PhoneIcon />
      </button>

      {isOpen && (
        <div className="footer-phone-popup">

          <span className="footer-phone-number">
            {phone}
          </span>

          <button
            type="button"
            className="footer-copy-phone"
            aria-label="Copiar teléfono"
            title="Copiar teléfono"
            onClick={handleCopy}
          >
            {copied ? '✓' : '⧉'}
          </button>

        </div>
      )}

    </div>
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


        {/* GESTIÓN CULTURAL + CONTACTO */}

        <div className="footer-column footer-cultural-column">

          <div className="footer-cultural-section">

            <h3>GESTIÓN CULTURAL</h3>

            <Link to="/gestion-cultural">
              Gestión cultural
            </Link>

          </div>


          <div className="footer-contact">

            <h3>CONTACTO</h3>

            <div className="footer-contact-grid">

              {/* ANDRÉS ZERNERI */}

              <a
                href="https://www.instagram.com/andreszerneri/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Andrés Zerneri"
                title="Instagram de Andrés Zerneri"
                className="footer-contact-item"
              >
                <InstagramIcon />
                <span>Andrés Zerneri</span>
              </a>


              {/* OBRAS */}

              <a
                href="https://www.instagram.com/zerneriobras/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Obras"
                title="Instagram de Obras"
                className="footer-contact-item"
              >
                <InstagramIcon />
                <span>Obras</span>
              </a>


              {/* C421 */}

              <a
                href="https://www.instagram.com/residencia.c421/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de C421"
                title="Instagram de C421"
                className="footer-contact-item"
              >
                <InstagramIcon />
                <span>C421</span>
              </a>


              {/* EMAIL */}

              <a
                href="mailto:zerneriandres3@gmail.com"
                aria-label="Email"
                title="Email"
                className="footer-contact-item"
              >
                <MailIcon />
                <span>Email</span>
              </a>

            </div>

          </div>

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

      </div>


      {/* COPYRIGHT + SEMILLA STUDIO */}

      <div className="footer-bottom">

        <span className="footer-copyright">
          © 2026 ANDRÉS ZERNERI
        </span>

        <div className="footer-semilla">

          <div className="footer-semilla-title">
            DISEÑO Y DESARROLLO POR SEMILLA STUDIO
          </div>

          <div className="footer-semilla-icons">

            {/* EMAIL */}

            <a
              href="mailto:semillastudio@outlook.com"
              aria-label="Email de Semilla Studio"
              title="semillastudio@outlook.com"
              className="footer-semilla-icon"
            >
              <MailIcon />
            </a>


            {/* TELÉFONO */}

            <PhoneContact />


            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/semillastudio.app/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Semilla Studio"
              title="@semillastudio.app"
              className="footer-semilla-icon"
            >
              <InstagramIcon />
            </a>

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer