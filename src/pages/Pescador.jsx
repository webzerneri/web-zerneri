import './Pescador.css'

function Pescador() {
  return (
    <main className="pescador-page">

      <section className="pescador-hero">
        <img
          src="/images/projects/pescador/hero-pescador.png"
          alt="Monumento al Pescador de Mosca frente a un lago de la Patagonia"
          className="pescador-hero-image"
        />
        <div className="pescador-hero-overlay" />

        <div className="pescador-hero-content">
          <p className="pescador-kicker">ANDRÉS ZERNERI · PROYECTO</p>
          <h1>
            EL PESCADOR
            <br />
            DE MOSCA
          </h1>
          <p className="pescador-hero-subtitle">
            ARTE · NATURALEZA · IDENTIDAD
          </p>
        </div>

        <div className="pescador-hero-bottom">
          <span>MONUMENTO AL PESCADOR DE MOSCA</span>
          <span>PROPUESTA ESCULTÓRICA</span>
        </div>
      </section>

      <section className="pescador-intro">
        <div className="pescador-container">
          <p className="pescador-label">01 · PROPUESTA ESCULTÓRICA</p>
          <div className="pescador-intro-grid">
            <h2>
              Una figura que
              <br />
              aparece y desaparece.
            </h2>
            <div>
              <p>
                El Pescador de Mosca es una propuesta escultórica que celebra
                la pasión por la pesca con mosca y su vínculo con la identidad
                de la Patagonia.
              </p>
              <p>
                La figura de un pescador se integra al paisaje sin interrumpir
                la vista, permitiendo que el entorno continúe siendo
                protagonista.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pescador-concepto">
        <div className="pescador-container">
          <div className="pescador-concepto-grid">
            <div>
              <p className="pescador-label">02 · CONCEPTO</p>
              <h2>
                La obra cambia
                <br />
                con la mirada.
              </h2>
            </div>
            <div className="pescador-copy">
              <p>
                El diseño trabaja sobre la relación entre figura, paisaje y
                punto de vista. La utilización de secciones verticales hace
                que la percepción de la obra cambie según el lugar desde
                donde se observa.
              </p>
              <p>
                Desde determinadas posiciones, la figura adquiere una presencia
                sólida. Desde otras, las chapas se separan visualmente y la
                escultura pierde densidad hasta integrarse con el paisaje.
              </p>
              <p className="pescador-highlight">
                La obra no se presenta como un volumen cerrado, sino como una
                presencia que aparece y desaparece en relación con el
                observador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pescador-gallery">
        <div className="pescador-container">
          <div className="pescador-gallery-heading">
            <div>
              <p className="pescador-label">03 · LA OBRA EN EL PAISAJE</p>
              <h2>Una escultura para distintos lugares.</h2>
            </div>
            <p>
              La propuesta puede incorporarse a espacios públicos y entornos
              naturales, modificando su relación con el paisaje según el lugar
              de emplazamiento.
            </p>
          </div>

          <div className="pescador-gallery-grid">
            <figure className="pescador-gallery-large">
              <img
                src="/images/projects/pescador/pescador-plaza.png"
                alt="El Pescador de Mosca en una plaza urbana"
              />
              <figcaption>ESPACIO PÚBLICO · VISTA DIURNA</figcaption>
            </figure>

            <figure>
              <img
                src="/images/projects/pescador/pescador-jardin.png"
                alt="El Pescador de Mosca en un entorno verde"
              />
              <figcaption>ENTORNO VERDE</figcaption>
            </figure>

            <figure>
              <img
                src="/images/projects/pescador/pescador-plaza-noche.png"
                alt="El Pescador de Mosca iluminado de noche en una plaza"
              />
              <figcaption>PRESENCIA NOCTURNA · ESPACIO URBANO</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pescador-aparicion">
        <div className="pescador-container">
          <div className="pescador-aparicion-grid">
            <div className="pescador-aparicion-image-wrap">
              <img
                src="/images/projects/pescador/pescador-documentacion.png"
                alt="Documentación gráfica del Monumento al Pescador de Mosca"
                className="pescador-aparicion-image"
              />
            </div>
            <div className="pescador-aparicion-copy">
              <p className="pescador-label">04 · APARICIÓN DE LA FIGURA</p>
              <h2>
                El observador
                <br />
                completa la obra.
              </h2>
              <p>
                La figura del pescador se revela progresivamente a medida que
                el observador se desplaza alrededor de la obra.
              </p>
              <p>
                Desde el frente, las láminas se contemplan prácticamente desde
                su espesor y la figura resulta sutil y parcialmente
                imperceptible. Hacia los laterales, las diferentes secciones
                adquieren mayor presencia visual.
              </p>
              <p>
                El volumen escultórico se construye a partir de la sucesión de
                láminas de diferentes tamaños que, vistas desde distintos
                ángulos, conforman gradualmente el cuerpo y la silueta del
                pescador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pescador-noche">
        <div className="pescador-container">
          <div className="pescador-noche-grid">
            <div>
              <p className="pescador-label">05 · PRESENCIA NOCTURNA</p>
              <h2>
                Una segunda
                <br />
                experiencia del lugar.
              </h2>
              <p>
                La iluminación incorporada desde la base permite generar una
                nueva experiencia de la obra durante la noche.
              </p>
              <p>
                La luz recorre la estructura y proyecta sombras sobre el
                entorno, modificando la percepción de la figura según el punto
                de vista.
              </p>
            </div>

            <figure>
              <img
                src="/images/projects/pescador/pescador-lago-noche.png"
                alt="El Pescador de Mosca iluminado durante la noche frente a un lago"
              />
              <figcaption>PRESENCIA NOCTURNA · ENTORNO NATURAL</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="pescador-materialidad">
        <div className="pescador-container">
          <div className="pescador-materialidad-grid">
            <div>
              <p className="pescador-label">06 · MATERIALIDAD Y DIMENSIONES</p>
              <h2>
                Acero, transparencia
                <br />
                y paisaje.
              </h2>
              <p>
                La estructura combina chapas de acero CORTEN con un soporte
                interno mínimo oculto. La terminación prevista es de oxidación
                natural.
              </p>
            </div>

            <div className="pescador-specs">
              <div><strong>MATERIAL PRINCIPAL</strong><span>Acero CORTEN</span></div>
              <div><strong>ESPESOR DE CHAPAS</strong><span>2–3 mm</span></div>
              <div><strong>SEPARACIÓN ENTRE CHAPAS</strong><span>60 mm · centro a centro</span></div>
              <div><strong>ESTRUCTURA</strong><span>Soporte interno mínimo oculto</span></div>
              <div><strong>BASE</strong><span>Pedestal de hormigón</span></div>
              <div><strong>ALTURA TOTAL</strong><span>2,70 m</span></div>
              <div><strong>ANCHO MÁXIMO</strong><span>1,10 m</span></div>
              <div><strong>PROFUNDIDAD MÁXIMA</strong><span>0,90 m</span></div>
              <div><strong>PESO ESTIMADO</strong><span>Aproximadamente 220 kg</span></div>
              <div><strong>TERMINACIÓN</strong><span>Oxidación natural</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pescador-dossier">
        <div className="pescador-container">
          <div className="pescador-dossier-grid">
            <div>
              <p className="pescador-label">07 · DOSSIER DE PROYECTO</p>
              <h2>
                Toda la propuesta,
                <br />
                en detalle.
              </h2>
              <p>
                El dossier reúne la propuesta escultórica, el concepto, el
                sistema constructivo, la presencia nocturna, la materialidad,
                las dimensiones y la documentación gráfica del proyecto.
              </p>
              <a
                href="/images/projects/pescador/dossier-el-pescador.pdf"
                className="pescador-dossier-button"
                target="_blank"
                rel="noreferrer"
              >
                VER / DESCARGAR DOSSIER
                <span>↓</span>
              </a>
            </div>

            <div className="pescador-dossier-cover">
              <img
                src="/images/projects/pescador/pescador-tapa-dossier.png"
                alt="Tapa del dossier de proyecto El Pescador de Mosca"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pescador-cierre">
        <div className="pescador-container">
          <p>MONUMENTO AL PESCADOR DE MOSCA</p>
          <h2>
            EL PESCADOR
            <br />
            DE MOSCA
          </h2>
          <span>ANDRÉS ZERNERI · ARTISTA PLÁSTICO Y ESCULTOR</span>
        </div>
      </section>

    </main>
  )
}

export default Pescador
