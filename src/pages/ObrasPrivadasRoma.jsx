import { useEffect, useState } from 'react'
import './ObrasPrivadasRoma.css'

const obras = [
  '20x20.jpg',
  '24_18.jpg',
  '24_18_.jpg',
  '40x30.jpg',
  '40x30_.jpg',
  '40x30__.jpg',
  '45x35.jpg',
  '50x40.jpg',
  '50x40_.jpg',
  '50x40_SILUETA.jpg',
  '50x50.jpg',
  '70x50.jpg',
  '70x50_.jpg',
  '70x50_APLAUSO.jpg',
  '70x50_CALMA.jpg',
  '88x30 HOMBRE PANTALON ROJO.jpg',
  '98x98.jpg',
  '99x98_HIJA DE INACAYAL.jpg',
  '100x70_RESISTIR.jpg',
  '100x90.jpg',
  '100x90_DINERO.jpg',
  '100x90_MOVIMIENTO.jpg',
  '100x90_SALIR.jpg',
  '100x90_SENSACION.jpg',
  '100x100.jpg',
  '108x78.jpg',
  '120x100.jpg',
  '120x100_.jpg',
  '120x120_ESTAMOS_BIEN.jpg',
  '146x106_FUTURO.jpg',
]

const basePath = '/images/projects/obras-privadas-roma/'

function ObrasPrivadasRoma() {
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    if (!selectedImage) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [selectedImage])

  return (
    <main className="roma-page">

      <section className="roma-intro">
        <div className="roma-intro-line" />

        <h1>
          OBRAS
          <br />
          PRIVADAS
          <br />
          EN ROMA
        </h1>

        <div className="roma-gold-line" />

        <p>
          Obras pertenecientes
          <br />
          a colecciones privadas
          <br />
          en Roma.
        </p>
      </section>

      <section
        className="roma-gallery"
        aria-label="Obras privadas en Roma"
      >
        {obras.map((obra, index) => (
          <button
            className={`roma-artwork roma-artwork-${index + 1}`}
            key={`${obra}-${index}`}
            type="button"
            onClick={() => setSelectedImage(obra)}
            aria-label={`Ver obra ${index + 1}`}
          >
            <img
              src={`${basePath}${encodeURIComponent(obra)}`}
              alt={`Obra de Andrés Zerneri ${index + 1}`}
              loading={index < 6 ? 'eager' : 'lazy'}
            />
          </button>
        ))}
      </section>

      {selectedImage && (
        <div
          className="roma-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la obra"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="roma-lightbox-close"
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar"
          >
            ×
          </button>

          <img
            className="roma-lightbox-image"
            src={`${basePath}${encodeURIComponent(selectedImage)}`}
            alt="Obra ampliada de Andrés Zerneri"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

    </main>
  )
}

export default ObrasPrivadasRoma