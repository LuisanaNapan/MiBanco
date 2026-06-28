import { Phone, Mail, MapPin } from 'lucide-react'
import Logo from '../ui/Logo.jsx'

const COLS = [
  {
    title: 'Productos',
    links: ['Cuenta de Ahorros', 'Cuenta Sueldo', 'Crédito de Consumo', 'Crédito Microempresa', 'Tarjeta de Débito'],
  },
  {
    title: 'Mi Banco',
    links: ['Nosotros', 'Trabaja con nosotros', 'Memoria anual', 'Sostenibilidad', 'Sala de prensa'],
  },
  {
    title: 'Ayuda',
    links: ['Centro de ayuda', 'Ubícanos', 'Reclamos', 'Transparencia', 'Tasas y tarifas'],
  },
]

export default function PublicFooter() {
  return (
    <footer className="lp-footer" id="footer">
      <div className="lp-footer-inner">
        <div className="lp-footer-brand">
          <Logo size={40} variant="light" subtitle="BANCA DIGITAL" />
          <p>Operaciones 100% en línea, seguras y a tu alcance.</p>
          
          <div className="lp-social" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '15px' }}>
            
            {/* Contenedor Facebook */}
            <a href="#footer" aria-label="Facebook" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)', // Fondo sutil circular
                color: 'rgba(255, 255, 255, 0.85)',
                transition: 'background-color 0.2s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </div>
            </a>

            {/* Contenedor Instagram */}
            <a href="#footer" aria-label="Instagram" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.85)',
                transition: 'background-color 0.2s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </div>
            </a>

            {/* Contenedor Twitter */}
            <a href="#footer" aria-label="Twitter" style={{ textDecoration: 'none' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                color: 'rgba(255, 255, 255, 0.85)',
                transition: 'background-color 0.2s'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </div>
            </a>

          </div>
        </div>

        {COLS.map((c) => (
          <div className="lp-footer-col" key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.links.map((l) => (
                <li key={l}><a href="#footer">{l}</a></li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lp-footer-col">
          <h4>Contacto</h4>
          <ul className="lp-contact">
            <li><Phone size={15} /> Banca telefónica: (01) 311-9000</li>
            <li><Mail size={15} /> contacto@mibanco.pe</li>
            <li><MapPin size={15} /> Av. Los Andes 123, Lima</li>
          </ul>
        </div>
      </div>

      <div className="hb-franja-top" />
      <div className="lp-footer-legal">
        © 2026 Mi Banco — Banca por Internet. Demo educativo. Supervisado por la SBS.
      </div>
    </footer>
  )
}