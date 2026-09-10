import { useEffect, useState } from 'react'
import './Pinturas.css'

function Pinturas() {
  const paintings = [
    '/images/works/pinturas/100x100.jpg',
    '/images/works/pinturas/100x100_LA_SALUD_DE_LOS_MONOS_1.jpg',
    '/images/works/pinturas/100x100_LA_SALUD_DE_LOS_MONOS_2.jpg',
    '/images/works/pinturas/100x70_RESISTIR.jpg',
    '/images/works/pinturas/100x90 (copy 1).jpg',
    '/images/works/pinturas/100x90_DINERO.jpg',
    '/images/works/pinturas/100x90.jpg',
    '/images/works/pinturas/100x90_MOVIMIENTO.jpg',
    '/images/works/pinturas/100x90_SALIR.jpg',
    '/images/works/pinturas/100x90_SENSACION.jpg',
    '/images/works/pinturas/108x78.jpg',
    '/images/works/pinturas/110x100.jpg',
    '/images/works/pinturas/120x100 (copy 1).jpg',
    '/images/works/pinturas/120x100_ (copy 1).jpg',
    '/images/works/pinturas/120x100.jpg',
    '/images/works/pinturas/120x100_.jpg',
    '/images/works/pinturas/120x120_ESTAMOS_BIEN.jpg',
    '/images/works/pinturas/120x120.jpg',
    '/images/works/pinturas/120x80_FRONTERA.jpg',
    '/images/works/pinturas/146x106_FUTURO.jpg',
    '/images/works/pinturas/20260908_103658.jpg',
    '/images/works/pinturas/20260908_103838.jpg',
    '/images/works/pinturas/20260908_104053.jpg',
    '/images/works/pinturas/20260908_104306.jpg',
    '/images/works/pinturas/20x20.jpg',
    '/images/works/pinturas/24_18.jpg',
    '/images/works/pinturas/24_18_.jpg',
    '/images/works/pinturas/40x30.jpg',
    '/images/works/pinturas/40x30_.jpg',
    '/images/works/pinturas/40x30__.jpg',
    '/images/works/pinturas/45x35.jpg',
    '/images/works/pinturas/50x40.jpg',
    '/images/works/pinturas/50x40_.jpg',
    '/images/works/pinturas/50x40_SILUETA.jpg',
    '/images/works/pinturas/50x50.jpg',
    '/images/works/pinturas/70x50_APLAUSO.jpg',
    '/images/works/pinturas/70x50_CALMA.jpg',
    '/images/works/pinturas/70x50.jpg',
    '/images/works/pinturas/70x50_.jpg',
    '/images/works/pinturas/88x30 HOMBRE PANTALON ROJO.jpg',
    '/images/works/pinturas/98x98.jpg',
    '/images/works/pinturas/99x98_HIJA DE INACAYAL.jpg',

    '/images/works/pinturas/20250702_000407.jpg',
    '/images/works/pinturas/20250703_141808.jpg',
    '/images/works/pinturas/hombre.png',
    '/images/works/pinturas/niño.png',
    '/images/works/pinturas/obra-zerneri.png',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? paintings.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((current) =>
      current === paintings.length - 1 ? 0 : current + 1
    )
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (!lightboxOpen) {
        return
      }

      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        goToPrevious()
      }

      if (event.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [lightboxOpen])

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxOpen])

  return (
    <main className="category-page paintings-page">
      <section className="category-content">

        <div className="paintings-header">
          <h1>PINTURAS</h1>

          <span className="paintings-count">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(paintings.length).padStart(2, '0')}
          </span>
        </div>

        <div className="paintings-viewer">

          <button
            type="button"
            className="paintings-nav paintings-nav-prev"
            onClick={goToPrevious}
            aria-label="Pintura anterior"
          >
            ←
          </button>

          <button
            type="button"
            className="painting-image-button"
            onClick={() => setLightboxOpen(true)}
            aria-label={`Ver pintura ${currentIndex + 1} en tamaño completo`}
          >
            <img
              src={paintings[currentIndex]}
              alt={`Pintura de Andrés Zerneri ${currentIndex + 1}`}
              className="painting-main-image"
            />
          </button>

          <button
            type="button"
            className="paintings-nav paintings-nav-next"
            onClick={goToNext}
            aria-label="Pintura siguiente"
          >
            →
          </button>

        </div>

        <div
          className="paintings-thumbnails"
          aria-label="Seleccionar pintura"
        >
          {paintings.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`painting-thumbnail ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver pintura ${index + 1}`}
            >
              <img
                src={image}
                alt=""
                aria-hidden="true"
              />
            </button>
          ))}
        </div>

      </section>

      {lightboxOpen && (
        <div
          className="paintings-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Pintura ${currentIndex + 1} de ${paintings.length}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="paintings-lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            ×
          </button>

          <button
            type="button"
            className="paintings-lightbox-nav paintings-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              goToPrevious()
            }}
            aria-label="Pintura anterior"
          >
            ←
          </button>

          <img
            src={paintings[currentIndex]}
            alt={`Pintura de Andrés Zerneri ${currentIndex + 1}`}
            className="paintings-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="paintings-lightbox-nav paintings-lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              goToNext()
            }}
            aria-label="Pintura siguiente"
          >
            →
          </button>

          <span className="paintings-lightbox-counter">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(paintings.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </main>
  )
}

export default Pinturas