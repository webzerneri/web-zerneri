import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <a href="/" className="site-brand" aria-label="Andrés Zerneri - Inicio">
          <img
  className="brand-mark"
  src="/images/branding/az-logo.png"
  alt=""
/>

          <span className="brand-divider"></span>

          <span className="brand-name">ANDRÉS ZERNERI</span>
        </a>

        <button
          className={`menu-button ${menuOpen ? 'open' : ''}`}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
        <a href="#inicio" onClick={() => setMenuOpen(false)}>
          INICIO
        </a>

        <a href="#obra" onClick={() => setMenuOpen(false)}>
          OBRA
        </a>

        <a href="#proyectos" onClick={() => setMenuOpen(false)}>
          PROYECTOS
        </a>

        <a href="#residencia" onClick={() => setMenuOpen(false)}>
          RESIDENCIA C421
        </a>

        <a href="#biografia" onClick={() => setMenuOpen(false)}>
          BIOGRAFÍA
        </a>

        <a href="#prensa" onClick={() => setMenuOpen(false)}>
          PRENSA
        </a>

        <a href="#contacto" onClick={() => setMenuOpen(false)}>
          CONTACTO
        </a>
      </nav>
    </>
  )
}

export default Header