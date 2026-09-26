import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import './App.css'
import logoImg from './assets/logo-codexpress.jpg'

// ===== IMÁGENES: IMPRESORA PRINCIPAL =====
import printerImg from './assets/hero/printer.jpg'
import cartridgeImg from './assets/hero/cartridge.jpg'
import perfilImg from './assets/hero/producto_perfil.png'
import dimensionesImg from './assets/hero/producto_dimensiones_oficial.png'
import idiomasImg from './assets/hero/producto_idiomas.png'
import usosImg from './assets/hero/producto_usos_azul_1.png'
import materialesImg from './assets/hero/producto_materiales_grid.png'
import unboxingImg from './assets/hero/producto_unboxing_oficial.png'

// ===== IMÁGENES: IMPRESORA PORTÁTIL MINI =====
import xpbFrontalImg from './assets/hero/producto_frontal_limpio.png'
import xpbContenidosImg from './assets/hero/producto_contenidos_impresion.png'
import xpbMaterialesImg from './assets/hero/producto_materiales_variados.png'
import xpbDistanciaImg from './assets/hero/producto_distancia_idiomas_dpi.png'
import xpbAccesoriosImg from './assets/hero/producto_incluye_accesorios.png'

// ===== IMÁGENES: CARTUCHO NEGRO 42ML (temporales, pendiente foto real) =====
import cartuchoDetallesImg from './assets/hero/cartridge.jpg'
import cartuchoAguaImg from './assets/hero/cartridge.jpg'
import cartuchoParametrosImg from './assets/hero/cartridge.jpg'
import cartuchoComponentesImg from './assets/hero/cartridge.jpg'
import cartuchoAplicacionesImg from './assets/hero/cartridge.jpg'
import cartuchoPack3Img from './assets/hero/cartridge.jpg'

// ===== IMÁGENES: CARTUCHO 12.7 MM =====
import cartucho127Img1 from './assets/hero/cartucho_12_7mm_01.png'
import cartucho127Img2 from './assets/hero/cartucho_12_7mm_02.png'
import cartucho127Img3 from './assets/hero/cartucho_12_7mm_03.png'
import cartucho127Img4 from './assets/hero/cartucho_12_7mm_04.png'

// ===== SLIDES HERO =====
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

// ===== PRODUCTOS (EQUIPOS) =====
const products = [
  {
    id: 'impresora',
    category: 'equipo',
    name: 'Impresora de inyección de tinta portátil',
    tipo: 'Impresora portátil',
    tecnologia: 'Inyección de tinta',
    description:
      'Equipo portátil para marcar fechas de vencimiento, códigos QR, códigos de barra y logotipos sobre botellas plásticas, vidrio, piezas metálicas y tuberías de acero. Pantalla táctil de 4.3", batería para toda la jornada y resolución de hasta 600 DPI, con impresión nítida a solo 3 mm de distancia.',
    cover: 'printerImg',
    gallery: ['printerImg', 'perfilImg', 'dimensionesImg', 'idiomasImg', 'usosImg', 'materialesImg', 'unboxingImg'],
    specStrip: [
      { label: 'Ancho', value: '48 mm' },
      { label: 'Largo', value: '130 mm' },
      { label: 'Alto', value: '215 mm' },
      { label: 'Pantalla táctil', value: '4.3"' },
      { label: 'Idiomas', value: '28' },
    ],
    galleryDetails: [
      { img: 'perfilImg', title: 'Diseño ergonómico', text: 'Empuñadura pensada para usarse con una sola mano durante toda la jornada.', contain: false },
      { img: 'dimensionesImg', title: 'Medidas exactas', text: 'Compacta y liviana, cabe en cualquier caja de herramientas.', contain: true },
      { img: 'idiomasImg', title: '28 idiomas', text: 'Interfaz simple para equipos de trabajo de distintas nacionalidades.', contain: true },
      { img: 'usosImg', title: 'Imprime sobre casi todo', text: 'Plástico, vidrio, metal, papel, cartón y tuberías, entre otras superficies.', contain: true },
      { img: 'materialesImg', title: 'Resultados reales', text: 'Nítida en tapas, bolsas, etiquetas, cartón, logos y empaques.', contain: true },
      { img: 'unboxingImg', title: 'Qué incluye', text: 'Impresora, cargador, cable USB, base y líquido de limpieza, y manual.', contain: false },
    ],
  },
  {
    id: 'impresora-mini',
    category: 'equipo',
    name: 'Impresora de inyección de tinta portátil mini',
    tipo: 'Impresora portátil mini',
    tecnologia: 'Inyección de tinta térmica P5',
    description:
      'Impresora de inyección de tinta portátil de mano, de 12.7mm, para códigos QR, códigos de barras, fechas, números, logotipos y caducidad, con soporte para más de 25 idiomas. Cabezal de impresión térmico P5 con resolución de 300 a 600 DPI. Altura de impresión ajustable de 2 a 12.7 mm, de 1 a 5 líneas. Batería incorporada de 1500 mAh e interfaz Tipo-C, ideal para codificación móvil. Adecuada para plástico, cartón, madera, metal, cable, piedra y superficies irregulares.',
    cover: 'xpbFrontalImg',
    gallery: ['xpbFrontalImg', 'xpbContenidosImg', 'xpbMaterialesImg', 'xpbDistanciaImg', 'xpbAccesoriosImg'],
    specStrip: [
      { label: 'Resolución', value: '300-600 DPI' },
      { label: 'Altura de impresión', value: '2-12.7 mm' },
      { label: 'Líneas', value: '1-5' },
      { label: 'Distancia óptima', value: '2-5 mm' },
      { label: 'Idiomas', value: '+25' },
      { label: 'Batería', value: '1500 mAh' },
    ],
    galleryDetails: [
      { img: 'xpbContenidosImg', title: 'Amplia variedad de impresión', text: 'Permite imprimir códigos QR, códigos de barras, logotipos, números, fechas y otros contenidos.', contain: true },
      { img: 'xpbMaterialesImg', title: 'Compatible con distintos materiales', text: 'Imprime sobre cartón, plástico, tela, madera, metal y tuberías de PVC.', contain: true },
      { img: 'xpbDistanciaImg', title: 'Impresión de alta resolución', text: 'Resolución de hasta 600 DPI y distancia óptima de impresión de 2 a 5 mm.', contain: true },
      { img: 'xpbAccesoriosImg', title: 'Accesorios incluidos', text: 'Incluye lápiz táctil, destornillador, manual de usuario, placa de posicionamiento y cable de datos.', contain: true },
    ],
  },
]

// ===== INSUMOS =====
const supplies = [
  {
    id: 'cartucho',
    category: 'insumo',
    name: 'Cartucho de tinta',
    tipo: 'Consumible',
    tecnologia: 'Tinta eco-solvente',
    description:
      'Cartucho de tinta para impresora de inyección de tinta portátil, formulado para alta adherencia y secado rápido. Utiliza tinta ecosolvente y cuenta con un cabezal de 12.7 mm. Compatible con impresoras sin cifrado y diseñado para obtener una impresión clara, precisa y estable.',
    cover: 'cartridgeImg',
    gallery: ['cartridgeImg', 'cartucho127Img1', 'cartucho127Img2', 'cartucho127Img3', 'cartucho127Img4'],
    specStrip: [
      { label: 'Cabezal', value: '12.7 mm' },
      { label: 'Tinta', value: 'Ecosolvente' },
      { label: 'Secado', value: 'Rápido' },
      { label: 'Adherencia', value: 'Alta' },
      { label: 'Compatibilidad', value: 'Sin cifrado' },
    ],
    galleryDetails: [
      { img: 'cartucho127Img1', title: 'Cartucho de tinta 12.7 mm', text: 'Cartucho compacto para impresoras de inyección de tinta portátil, diseñado para una impresión clara y estable.', contain: true },
      { img: 'cartucho127Img2', title: 'Sistema de impresión', text: 'Diseño preparado para una instalación sencilla en impresoras portátiles compatibles.', contain: true },
      { img: 'cartucho127Img3', title: 'Diseño compacto', text: 'Formato compacto de 12.7 mm para equipos de impresión portátil.', contain: true },
      { img: 'cartucho127Img4', title: 'Boquilla de alta precisión', text: 'Cabezal diseñado para obtener una impresión clara, precisa y estable.', contain: true },
    ],
  },
  {
    id: 'cartucho-negro',
    category: 'insumo',
    name: 'Cartucho de tinta negra 42ML',
    tipo: 'Consumible',
    tecnologia: 'Tinta solvente resistente al agua',
    description:
      'Cartucho de tinta negra de 42 ML de capacidad, con tinta solvente de secado rápido, resistente al agua y a las manchas. Diseñado para impresión de 2 a 12.7 mm de altura y compatible con impresoras TIJ sin cifrado. Ofrece una resolución de 300 a 600 DPI y un chip estable para un reconocimiento preciso y consistente.',
    cover: 'cartuchoAguaImg',
    gallery: ['cartuchoAguaImg', 'cartuchoDetallesImg', 'cartuchoParametrosImg', 'cartuchoComponentesImg', 'cartuchoAplicacionesImg', 'cartuchoPack3Img'],
    specStrip: [
      { label: 'Capacidad', value: '42 ML' },
      { label: 'Altura de impresión', value: '2-12.7 mm' },
      { label: 'Resolución', value: '300-600 DPI' },
      { label: 'Distancia', value: '2-5 mm' },
      { label: 'Secado', value: '2-5 s' },
    ],
    galleryDetails: [
      { img: 'cartuchoDetallesImg', title: 'Cartucho de tinta negra', text: 'Carcasa resistente, capacidad de 42 ML, tinta de secado rápido y chip estable.', contain: true },
      { img: 'cartuchoAguaImg', title: 'Tinta solvente resistente', text: 'Tinta negra de secado rápido, resistente al agua y diseñada para mantener una impresión clara y duradera.', contain: true },
      { img: 'cartuchoParametrosImg', title: 'Parámetros técnicos', text: 'Resolución de 300 a 600 DPI, altura de impresión de hasta 12.7 mm y distancia recomendada de 2 a 5 mm.', contain: true },
      { img: 'cartuchoComponentesImg', title: 'Detalles del cartucho', text: 'Diseño compacto con chip de reconocimiento, cabezal de impresión y tinta solvente.', contain: true },
      { img: 'cartuchoAplicacionesImg', title: 'Amplia compatibilidad', text: 'Adecuado para plástico, vidrio, metal, cerámica, madera, papel, cartón y otras superficies.', contain: true },
      { img: 'cartuchoPack3Img', title: 'Pack de 3 cartuchos', text: 'Presentación de tres cartuchos de tinta negra con altura de impresión de 2 a 12.7 mm.', contain: true },
    ],
  },
]

const imageMap = {
  printerImg, cartridgeImg, perfilImg, dimensionesImg, idiomasImg, usosImg, materialesImg, unboxingImg,
  xpbFrontalImg, xpbContenidosImg, xpbMaterialesImg, xpbDistanciaImg, xpbAccesoriosImg,
  cartuchoDetallesImg, cartuchoAguaImg, cartuchoParametrosImg, cartuchoComponentesImg, cartuchoAplicacionesImg, cartuchoPack3Img,
  cartucho127Img1, cartucho127Img2, cartucho127Img3, cartucho127Img4,
}

// ===== MODAL DE PRODUCTO (compartido entre páginas) =====
function ProductPanel({ product, activePhoto, setActivePhoto, onClose }) {
  if (!product) return null
  return (
    <div className="product-overlay" onClick={onClose}>
      <div className="product-panel" onClick={(e) => e.stopPropagation()}>
        <button className="product-close" onClick={onClose} aria-label="Cerrar">✕</button>

        <div className="product-panel-gallery">
          <div className="panel-main-photo">
            <img src={imageMap[product.gallery[activePhoto]]} alt={product.name} />
          </div>
          {product.gallery.length > 1 && (
            <div className="panel-thumbs">
              {product.gallery.map((imgKey, i) => (
                <button key={`${imgKey}-${i}`} type="button" className={i === activePhoto ? 'thumb active' : 'thumb'} onClick={() => setActivePhoto(i)} aria-label={`Ver foto ${i + 1}`}>
                  <img src={imageMap[imgKey]} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-panel-info">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <div className="panel-specs">
            <div>
              <span>Tipo</span>
              <strong>{product.tipo}</strong>
            </div>
            <div>
              <span>Tecnología</span>
              <strong>{product.tecnologia}</strong>
            </div>
          </div>

          {product.specStrip && (
            <div className="panel-spec-strip">
              {product.specStrip.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}

          {product.galleryDetails && (
            <div className="panel-gallery-grid">
              {product.galleryDetails.map((d) => (
                <figure key={d.title} className="media-card">
                  <div className={d.contain ? 'media media-contain' : 'media'}>
                    <img src={imageMap[d.img]} alt={d.title} />
                  </div>
                  <figcaption>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          <a className="panel-cta" href="https://wa.me/56998920709" target="_blank" rel="noreferrer">
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}

// ===== PÁGINA: INICIO =====
function InicioPage({ openProductPanel }) {
  const [slide, setSlide] = useState(0)
  const nextSlide = () => setSlide((s) => (s + 1) % slides.length)
  const prevSlide = () => setSlide((s) => (s - 1 + slides.length) % slides.length)
  const current = slides[slide]

  return (
    <>
      <section className="hero">
        <button className="hero-arrow left" onClick={prevSlide} aria-label="Anterior">‹</button>
        <button className="hero-arrow right" onClick={nextSlide} aria-label="Siguiente">›</button>
        <div className="hero-inner wrap">
          <div className="eyebrow">{current.eyebrow}</div>
          <h1>{current.title}</h1>
          <p className="lead">{current.text}</p>
        </div>
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button key={i} className={i === slide ? 'dot active' : 'dot'} onClick={() => setSlide(i)} aria-label={`Ir a diapositiva ${i + 1}`} />
          ))}
        </div>
      </section>

      <div className="trust-bar">
        <div className="wrap trust-inner">
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
            <div>
              <strong>3 años de garantía</strong>
              <span>Respaldo real en cada equipo que vendemos.</span>
            </div>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M3 7l9-4 9 4" /><path d="M12 12v8" /></svg>
            <div>
              <strong>Insumos disponibles</strong>
              <span>Cartuchos y consumibles listos en Chile, sin depender del extranjero.</span>
            </div>
          </div>
          <div className="trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4z" /></svg>
            <div>
              <strong>Servicio técnico</strong>
              <span>Soporte antes y después de la compra, con asesoría local.</span>
            </div>
          </div>
        </div>
      </div>

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
          <div className="kicker">Equipos destacados</div>
          <h2>Lo que vendemos, con la calidad que exige la industria.</h2>
          <p>Equipos originales, listos para uso continuo en terreno.</p>
        </div>
        <div className="products">
          {products.map((p) => (
            <button key={p.id} type="button" className="product-card" onClick={() => openProductPanel(p)}>
              <img src={imageMap[p.cover]} alt={p.name} />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="product-more">Ver detalles y fotos →</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className="section-head">
          <div className="kicker">Insumos</div>
          <h2>Tintas y consumibles disponibles en Chile.</h2>
          <p>Cartuchos listos para instalar, sin depender de compras al extranjero.</p>
        </div>
        <div className="products supplies-grid">
          {supplies.map((p) => (
            <button key={p.id} type="button" className="product-card" onClick={() => openProductPanel(p)}>
              <img src={imageMap[p.cover]} alt={p.name} />
              <div className="product-info">
                <h3>{p.name}</h3>
                <p>{p.description}</p>
                <span className="product-more">Ver detalles y fotos →</span>
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  )
}

// ===== PÁGINA: NOSOTROS =====
function NosotrosPage() {
  return (
    <section className="wrap">
      <div className="section-head">
        <div className="kicker">Nosotros</div>
        <h2>Distribuidores de equipos de codificación industrial.</h2>
      </div>
      <div className="about-grid">
        <div>
          <p>Nos especializamos en equipos de codificación e impresión industrial portátil, para empresas de manufactura, logística y envasado que necesitan marcar sus productos en terreno.</p>
          <p>Trabajamos con proveedores certificados y ofrecemos asesoría técnica antes y después de la compra, incluyendo soporte para consumibles y mantención de los equipos.</p>
          <div className="stat-row">
            <div><strong>8h</strong><span>de batería continua</span></div>
            <div><strong>28</strong><span>idiomas soportados</span></div>
            <div><strong>600</strong><span>DPI de resolución</span></div>
          </div>
        </div>
        <div className="values">
          <div className="value">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" /><path d="M9 12l2 2 4-4" /></svg>
            <div><h3>3 años de garantía</h3><p>Respaldo real en cada equipo, no solo en el momento de la venta.</p></div>
          </div>
          <div className="value">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M3 7l9-4 9 4" /><path d="M12 12v8" /></svg>
            <div><h3>Insumos disponibles en Chile</h3><p>Cartuchos y consumibles sin depender de compras al extranjero.</p></div>
          </div>
          <div className="value">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4z" /></svg>
            <div><h3>Servicio técnico</h3><p>Asesoría personalizada antes y después de la compra, con soporte local.</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ===== PÁGINA: CONTACTO =====
function ContactoPage() {
  return (
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
  )
}

// ===== COMPONENTE PRINCIPAL =====
function App() {
  const [openProduct, setOpenProduct] = useState(null)
  const [activePhoto, setActivePhoto] = useState(0)
  const location = useLocation()

  const openProductPanel = (product) => {
    setOpenProduct(product)
    setActivePhoto(0)
  }
  const closeProductPanel = () => {
    setOpenProduct(null)
    setActivePhoto(0)
  }

  const isActive = (path) => location.pathname === path

  return (
    <div className="site">
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-mark">
            <img src={logoImg} alt="CodeXpress" className="nav-logo" />
          </div>
          <nav className="links">
            <Link className={isActive('/') ? 'active' : ''} to="/">Inicio</Link>
            <Link className={isActive('/nosotros') ? 'active' : ''} to="/nosotros">Nosotros</Link>
            <Link className={isActive('/contacto') ? 'active' : ''} to="/contacto">Contacto</Link>
          </nav>
        </div>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<InicioPage openProductPanel={openProductPanel} />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>

      <footer>
        <div className="wrap foot-inner">
          <div>© 2026 · Todos los derechos reservados.</div>
        </div>
      </footer>

      <ProductPanel
        product={openProduct}
        activePhoto={activePhoto}
        setActivePhoto={setActivePhoto}
        onClose={closeProductPanel}
      />
    </div>
  )
}

export default App