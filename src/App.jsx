import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Works from './components/Works'

import WorkPage from './pages/WorkPage'
import Biografia from './pages/Biografia'
import Monumentos from './pages/Monumentos'
import GestionCultural from './pages/GestionCultural'
import Esculturas from './pages/Esculturas'
import Maddem from './pages/projects/Maddem'
import ObrasPrivadasRoma from './pages/ObrasPrivadasRoma'
import SoberaniaDesdeLaPaz from './pages/SoberaniaDesdeLaPaz'
import ResidenciaC421 from './pages/ResidenciaC421'
import Prensa from './pages/Prensa'
import Salon from './pages/salon/Salon'
import Tienda from './pages/tienda/Tienda'
import EspacioEncuentro from './pages/EspacioEncuentro'
import ContadorNietos from './pages/ContadorNietos'
import Pescador from './pages/Pescador'
import RondaDeMujeres from './pages/RondaDeMujeres'
import Pinturas from './pages/Pinturas'
import Proyectos from './pages/Proyectos'




function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname])

  return null
}

function HomePage() {
  return (
    <main>
      <section className="hero-section" id="inicio">
        <Hero />

        <button
          className="view-more visible"
          onClick={() => {
            document.getElementById('obra')?.scrollIntoView({
              behavior: 'smooth',
            })
          }}
          aria-label="Ver más obras"
        >
          <span>VER MÁS</span>
          <span className="view-more-arrow">↓</span>
        </button>
      </section>

      <Works />
    </main>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Header />

      <Routes>

        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/obra/:slug"
          element={<WorkPage />}
        />

        <Route
          path="/biografia"
          element={<Biografia />}
        />

        <Route
          path="/monumentos"
          element={<Monumentos />}
        />

        <Route
          path="/gestion-cultural"
          element={<GestionCultural />}
        />

        <Route
          path="/esculturas"
          element={<Esculturas />}
        />

        <Route
          path="/proyectos/maddem"
          element={<Maddem />}
        />

        <Route
          path="/obras-privadas-roma"
          element={<ObrasPrivadasRoma />}
        />

        <Route
          path="/soberania-desde-la-paz"
          element={<SoberaniaDesdeLaPaz />}
        />

        <Route
          path="/residencias/c421"
          element={<ResidenciaC421 />}
        />

        <Route
          path="/prensa"
          element={<Prensa />}
        />

        <Route
          path="/salon"
          element={<Salon />}
        />

        <Route
          path="/tienda"
          element={<Tienda />}
        />

        <Route
          path="/proyectos/espacio-de-encuentro"
          element={<EspacioEncuentro />}
        />

        <Route
          path="/proyectos/contador-de-nietos"
          element={<ContadorNietos />}
        />

        <Route
          path="/proyectos/pescador"
          element={<Pescador />}
        />

        <Route
          path="/proyectos/ronda-de-mujeres"
          element={<RondaDeMujeres />}
        />
        <Route
           path="/pinturas"
           element={<Pinturas />}
        /> 
        <Route
           path="/proyectos"
           element={<Proyectos />}
        /> 
      </Routes>

      <Footer />
    </>
  )
}

export default App