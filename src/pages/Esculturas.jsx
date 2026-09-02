import Footer from '../components/Footer'

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

  return (
    <>
      <main className="category-page sculptures-page">
        <section className="category-content">

          <h1>ESCULTURAS</h1>

          <div className="sculptures-gallery">
            {sculptures.map((image, index) => (
              <div className="sculpture-image" key={image}>
                <img
                  src={image}
                  alt={`Andrés Zerneri - escultura ${index + 1}`}
                />
              </div>
            ))}
          </div>

        </section>
      </main>

      <Footer />
    </>
  )
}

export default Esculturas