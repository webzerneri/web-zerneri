import { useEffect, useState } from 'react'
import './Esculturas.css'

function Esculturas() {
  const sculptures = [
    '/images/works/esculturas/esc01.jpg',
    '/images/works/esculturas/esc02.jpg',
    '/images/works/esculturas/esc03.jpg',
    '/images/works/esculturas/esc04.jpg',
    '/images/works/esculturas/esc05.jpg',
    '/images/works/esculturas/esc06.jpg',
    '/images/works/esculturas/esc07.jpg',
    '/images/works/esculturas/esc08.jpg',
    '/images/works/esculturas/esc09.jpg',
    '/images/works/esculturas/esc10.jpg',
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? sculptures.length - 1 : current - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((current) =>
      current === sculptures.length - 1 ? 0 : current + 1
    )
  }

  const openLightbox = () => {
    setLightboxOpen(true)
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
    <main className="category-page sculptures-page">
      <section className="category-content">

        <div className="sculptures-header">
          <h1>ESCULTURAS</h1>

          <span className="sculptures-count">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(sculptures.length).padStart(2, '0')}
          </span>
        </div>

        <div className="sculptures-viewer">

          <button
            type="button"
            className="sculptures-nav sculptures-nav-prev"
            onClick={goToPrevious}
            aria-label="Escultura anterior"
          >
            ←
          </button>

          <button
            type="button"
            className="sculpture-image-button"
            onClick={openLightbox}
            aria-label={`Ver escultura ${currentIndex + 1} en tamaño completo`}
          >
            <img
              src={sculptures[currentIndex]}
              alt={`Andrés Zerneri - escultura ${currentIndex + 1}`}
              className="sculpture-main-image"
            />
          </button>

          <button
            type="button"
            className="sculptures-nav sculptures-nav-next"
            onClick={goToNext}
            aria-label="Escultura siguiente"
          >
            →
          </button>

        </div>

        <div className="sculptures-thumbnails" aria-label="Seleccionar escultura">
          {sculptures.map((image, index) => (
            <button
              type="button"
              key={image}
              className={`sculpture-thumbnail ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver escultura ${index + 1}`}
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
          className="sculptures-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Escultura ${currentIndex + 1} de ${sculptures.length}`}
          onClick={closeLightbox}
        >
          <button
            type="button"
            className="sculptures-lightbox-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            ×
          </button>

          <button
            type="button"
            className="sculptures-lightbox-nav sculptures-lightbox-prev"
            onClick={(event) => {
              event.stopPropagation()
              goToPrevious()
            }}
            aria-label="Escultura anterior"
          >
            ←
          </button>

          <img
            src={sculptures[currentIndex]}
            alt={`Andrés Zerneri - escultura ${currentIndex + 1}`}
            className="sculptures-lightbox-image"
            onClick={(event) => event.stopPropagation()}
          />

          <button
            type="button"
            className="sculptures-lightbox-nav sculptures-lightbox-next"
            onClick={(event) => {
              event.stopPropagation()
              goToNext()
            }}
            aria-label="Escultura siguiente"
          >
            →
          </button>

          <span className="sculptures-lightbox-counter">
            {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(sculptures.length).padStart(2, '0')}
          </span>
        </div>
      )}
    </main>
  )
}

export default Esculturas