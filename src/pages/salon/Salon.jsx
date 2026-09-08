import './Salon.css'

function Salon() {
  return (
    <main className="salon-page">

      <section className="salon-space">

        <img
          className="salon-image"
          src="/images/salon/salon.jpg"
          alt="Salón Andrés Zerneri"
        />

        {/* ACCESO TIENDA · DESACTIVADO POR AHORA */}

        {/*
        <Link
          to="/tienda"
          className="salon-access salon-access-tienda salon-access-door"
          aria-label="Entrar a la Tienda"
        />

        <Link
          to="/tienda"
          className="salon-access salon-access-tienda salon-access-sign"
          aria-label="Entrar a la Tienda"
        />

        <Link
          to="/tienda"
          className="salon-access salon-access-tienda salon-access-arrow"
          aria-label="Entrar a la Tienda"
        />
        */}

        {/* ACCESO GALERÍA · DESACTIVADO POR AHORA */}

        {/*
        <Link
          to="/galeria"
          className="salon-access salon-access-galeria salon-access-door"
          aria-label="Entrar a la Galería"
        />

        <Link
          to="/galeria"
          className="salon-access salon-access-galeria salon-access-sign"
          aria-label="Entrar a la Galería"
        />

        <Link
          to="/galeria"
          className="salon-access salon-access-galeria salon-access-arrow"
          aria-label="Entrar a la Galería"
        />
        */}

      </section>

      <section className="salon-caption">

        <p>
          “El arte es una forma de estar en el mundo.”
        </p>

        <img
          src="/images/salon/firma-zerneri.png"
          alt="Andrés Zerneri"
        />

      </section>

    </main>
  )
}

export default Salon