import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a
          href="/"
          className="site-brand"
          aria-label="Andrés Zerneri - Inicio"
          onClick={closeMenu}
        >
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
        <a href="/" onClick={closeMenu}>
          INICIO
        </a>
     
        <a href="/proyectos" onClick={closeMenu}>
          PROYECTOS
        </a>

        <a href="/residencias/c421" onClick={closeMenu}>
          RESIDENCIA C421
        </a>

{/*
<a href="/residencias/c421?postular=1" onClick={closeMenu}>
  C421 - POSTULACIÓN MEDIA BECA
</a>
*/}

 <a href="/#obra" onClick={closeMenu}>
          OBRA
        </a>
        
        <a href="/prensa" onClick={closeMenu}>
          PRENSA
        </a>
<a href="/biografia" onClick={closeMenu}>
          BIOGRAFÍA
        </a>

        
      </nav>
    </>
  )
}

export default Header
