import { useState } from 'react'
import './App.css'

function App() {
  const [tab, setTab] = useState('inicio')

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <div className="brand">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" />
              <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
            </svg>
            CodeXpress Global
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
            <section className="hero wrap">
              <div>
                <div className="eyebrow">Caza · Tiro deportivo · Seguridad</div>
                <h1>Equipamiento serio para quienes se lo toman en serio.</h1>
                <p className="lead">
                  Más de 15 años asesorando a cazadores, deportistas y coleccionistas
                  en la Región Metropolitana. Asesoría técnica, stock permanente y
                  todos los trámites en regla.
                </p>
              </div>
              <div className="hero-art" aria-hidden="true">
                <svg viewBox="0 0 320 320" fill="none">
                  <circle cx="160" cy="160" r="130" stroke="#3a3f45" strokeWidth="1" />
                  <circle cx="160" cy="160" r="95" stroke="#3a3f45" strokeWidth="1" />
                  <circle cx="160" cy="160" r="4" fill="#c9a36a" />
                  <path d="M160 20v55M160 245v55M20 160h55M245 160h55" stroke="#a9803f" strokeWidth="2" />
                  <circle cx="160" cy="160" r="60" stroke="#a9803f" strokeWidth="1.4" />
                </svg>
              </div>
            </section>

            <section className="wrap">
              <div className="section-head">
                <div className="kicker">Catálogo</div>
                <h2>Cuatro líneas, un mismo estándar.</h2>
                <p>Todo lo que ofrecemos pasa por control de calidad y asesoría personalizada antes de salir del local.</p>
              </div>
              <div className="cats">
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z" /></svg>
                  <h3>Caza</h3>
                  <p>Equipos y accesorios para salidas de campo, con asesoría según terreno y presa.</p>
                </div>
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" /></svg>
                  <h3>Tiro deportivo</h3>
                  <p>Material homologado para práctica y competencia en polígonos autorizados.</p>
                </div>
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v6c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6z" /></svg>
                  <h3>Seguridad</h3>
                  <p>Soluciones de resguardo para hogar y predio, con instalación y capacitación.</p>
                </div>
                <div className="cat">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="4" width="16" height="16" rx="1" /><path d="M4 9h16M9 9v11" /></svg>
                  <h3>Accesorios</h3>
                  <p>Óptica, mantención, cajas de transporte y todo lo necesario para el cuidado del equipo.</p>
                </div>
              </div>
            </section>
          </>
        )}

        {tab === 'nosotros' && (
          <section className="wrap">
            <div className="section-head">
              <div className="kicker">Nosotros</div>
              <h2>Una tienda con estándares de industria.</h2>
            </div>
            <div className="about-grid">
              <div>
                <p>
                  CodeXpress Global nace como una tienda especializada en el rubro de tiro
                  deportivo, caza y coleccionismo, atendiendo a clientes particulares,
                  clubes de tiro y entidades autorizadas.
                </p>
                <p>
                  Trabajamos solo con proveedores certificados y no vendemos nada sin la
                  asesoría correspondiente. Si es tu primera compra, te acompañamos en
                  todo el proceso de trámites ante la autoridad competente.
                </p>
                <div className="stat-row">
                  <div><strong>15</strong><span>años en el rubro</span></div>
                  <div><strong>+20</strong><span>marcas representadas</span></div>
                  <div><strong>100%</strong><span>trámites en regla</span></div>
                </div>
              </div>
              <div className="values">
                <div className="value">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v6c0 5-3 7.5-7 9-4-1.5-7-4-7-9V6z" /></svg>
                  <div><h3>Todo en regla</h3><p>Asesoramos y verificamos cada trámite legal antes de cerrar una venta.</p></div>
                </div>
                <div className="value">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M9 12l2 2 4-4" /></svg>
                  <div><h3>Asesoría real</h3><p>Nuestro equipo tiene formación técnica y experiencia de terreno, no solo de mesón.</p></div>
                </div>
                <div className="value">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 20V10l8-6 8 6v10" /><path d="M9 20v-6h6v6" /></svg>
                  <div><h3>Trato cercano</h3><p>Un servicio serio, responsable y con atención personalizada en cada visita.</p></div>
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
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.7 2.2z" /></svg>
                <div><strong>Teléfono</strong>+56 9 1234 5678</div>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16v16H4z" /><path d="M4 6l8 7 8-7" /></svg>
                <div><strong>Correo</strong>contacto@codexpressglobal.cl</div>
              </li>
            </ul>
          </section>
        )}
      </main>

      <footer>
        <div className="wrap foot-inner">
          <div className="brand">CodeXpress Global</div>
          <div>© 2026 CodeXpress Global. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}

export default App