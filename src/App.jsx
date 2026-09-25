import { useState } from 'react'
import './App.css'
import printerImg from './assets/hero/printer.jpg'
import cartridgeImg from './assets/hero/cartridge.jpg'

const slides = [
  {
    eyebrow: 'Impresión industrial portátil',
    title: 'Marca fechas, códigos y logos donde tú necesites.',
    text: 'Impresora de inyección de tinta portátil de 12.7mm, con batería de 8 horas. Imprime sobre plástico, vidrio, aleaciones y tuberías de acero.',
  },
  {
    eyebrow: 'Pantalla táctil de 4.3"',
    title: 'Control simple, resultados precisos.',
    text: 'Interfaz táctil intuitiva con soporte para 28 idiomas, pensada para uso en campo, bodegas y líneas de producción.',
  },
  {
    eyebrow: 'Resolución de 600 DPI',
    title: 'Impresión nítida a solo 3mm de distancia.',
    text: 'Códigos QR, códigos de barra, fechas de vencimiento, logotipos y texto variable, con la calidad que exige la industria.',
  },
]

function App() {
  const [tab, setTab] = useState('inicio')
  const [slide, setSlide] = useState(0)

  const nextSlide = () => setSlide((s) => (s + 1) % slides.length)
  const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length)

  const current = slides[slide]

  const LogoIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M4 9h13a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6l-2 5-1.5-5H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2z" fill="currentColor"/>
      <rect x="7" y="11" width="8" height="4" rx="0.5" fill="white"/>
    </svg>
  )

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-mark">
            <LogoIcon width="20" height="20" />
          </div>
          <nav className="links">
            <button className={tab === 'inicio' ? 'active' : ''} onClick={() => setTab('inicio')}>Inicio</button>
            <button className={tab === 'nosotros' ? 'active' : ''} onClick={() => setTab('nosotros')}>Nosotros</button>
            <button className={tab === 'contacto' ? 'active' : ''} onClick={() => setTab('contacto')}>Contacto</button>
          </nav>
        </div>
      </header>

      <main>
        {tab === 'inicio' && (
          <>
            <section className="hero" style={{ backgroundImage: `url(${printerImg})` }}>
              <button className="hero-arrow left" onClick={prevSlide} aria-label="Anterior">‹</button>
              <button className="hero-arrow right" onClick={nextSlide} aria-label="Siguiente">›</button>

              <div className="hero-inner wrap">
                <div className="eyebrow">{current.eyebrow}</div>
                <h1>{current.title}</h1>
                <p className="lead">{current.text}</p>
              </div>

              <div className="hero-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={i === slide ? 'dot active' : 'dot'}
                    onClick={() => setSlide(i)}
                    aria-label={`Ir a diapositiva ${i + 1}`}
                  />
                ))}
              </div>
            </section>

            <section className="wrap">
              <div className="section-head">
                <div className="kicker">Ficha técnica</div>
                <h2>Todo lo que necesitas para codificar en terreno.</h2>
                <p>Una impresora pensada para producción, bodega y logística, sin depender de una toma de corriente.</p>
              </div>
              <div className="cats">
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="6" y="2" width="12" height="20" rx="2" /><path d="M10 6h4" /></svg>
                  <h3>Batería de 8 horas</h3>
                  <p>Uso continuo en campo, almacenes o líneas de producción, sin conexión eléctrica constante.</p>
                </div>
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 15h18" /></svg>
                  <h3>Pantalla táctil 4.3"</h3>
                  <p>Interfaz intuitiva compatible con 28 idiomas para operar en cualquier entorno.</p>
                </div>
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="7" height="7" /><rect x="14" y="7" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /></svg>
                  <h3>QR, códigos y fechas</h3>
                  <p>Impresión variable de códigos QR, de barra, logotipos y texto sobre distintas superficies.</p>
                </div>
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
                  <h3>600 DPI, cartuchos libres</h3>
                  <p>Resolución nítida a 3mm de distancia, con cartuchos de 12.7mm sin cifrado ni restricción de fabricante.</p>
                </div>
              </div>
            </section>

            <section className="wrap">
              <div className="section-head">
                <div className="kicker">Productos</div>
                <h2>Lo que vendemos, con la calidad que exige la industria.</h2>
                <p>Equipos y consumibles originales Yaomatec, listos para uso continuo en terreno.</p>
              </div>
              <div className="products">
                <div className="product-card">
                  <img src={printerImg} alt="Impresora portátil Yaomatec" />
                  <div className="product-info">
                    <h3>Impresora de inyección de tinta portátil</h3>
                    <p>
                      Equipo portátil para marcar fechas de vencimiento, códigos QR, códigos
                      de barra y logotipos sobre botellas plásticas, vidrio, piezas metálicas
                      y tuberías de acero. Pantalla táctil de 4.3", batería para toda la
                      jornada y resolución de hasta 600 DPI, con impresión nítida a solo 3 mm
                      de distancia.
                    </p>
                  </div>
                </div>
                <div className="product-card">
                  <img src={cartridgeImg} alt="Cartucho de tinta Yaomatec W3T10B" />
                  <div className="product-info">
                    <h3>Cartucho de tinta</h3>
                    <p>
                      Cartucho compatible con la línea de impresoras portátiles Yaomatec,
                      formulado para alta adherencia y secado rápido. Tinta eco-solvente,
                      en formato compacto de 12.7 mm, listo para instalar y sin
                      restricciones de fabricante.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {tab === 'nosotros' && (
          <section className="wrap">
            <div className="section-head">
              <div className="kicker">Nosotros</div>
              <h2>Distribuidores de equipos de codificación industrial.</h2>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  Nos especializamos en equipos de codificación e impresión
                  industrial portátil, para empresas de manufactura, logística
                  y envasado que necesitan marcar sus productos en terreno.
                </p>
                <p>
                  Trabajamos con proveedores certificados y ofrecemos asesoría técnica
                  antes y después de la compra, incluyendo soporte para consumibles
                  y mantención de los equipos.
                </p>
                <div className="stat-row">
                  <div><strong>8h</strong><span>de batería continua</span></div>
                  <div><strong>28</strong><span>idiomas soportados</span></div>
                  <div><strong>600</strong><span>DPI de resolución</span></div>
                </div>
              </div>
              <div className="values">
                <div className="value">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
                  <div><h3>Calidad garantizada</h3><p>Equipos probados para uso industrial continuo, con respaldo técnico real.</p></div>
                </div>
                <div className="value">
                  <LogoIcon width="22" height="22" />
                  <div><h3>Uso versátil</h3><p>Compatible con plástico, vidrio, aleaciones y tuberías de acero.</p></div>
                </div>
                <div className="value">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 20V10l8-6 8 6v10" /><path d="M9 20v-6h6v6" /></svg>
                  <div><h3>Trato cercano</h3><p>Asesoría personalizada según tu tipo de producción y superficie a marcar.</p></div>
                </div>
              </div>
            </div>
          </section>
        )}

        {tab === 'contacto' && (
          <section className="wrap">
            <div className="section-head">
              <div className="kicker">Contacto</div>
              <h2>Escríbenos o llámanos.</h2>
            </div>
            <ul className="info-list">
              <li>
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.2z" /></svg>
                </div>
                <div>
                  <strong>Teléfono</strong>
                  <a href="tel:+56998920709">+56 9 9892 0709</a>
                </div>
              </li>
              <li>
                <div className="icon-badge">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16v16H4z" /><path d="M4 6l8 7 8-7" /></svg>
                </div>
                <div>
                  <strong>Correo</strong>
                  <a href="mailto:contacto@codexpressglobal.cl">contacto@codexpressglobal.cl</a>
                </div>
              </li>
            </ul>
          </section>
        )}
      </main>

      <footer>
        <div className="wrap foot-inner">
          <div>© 2026 · Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

export default App