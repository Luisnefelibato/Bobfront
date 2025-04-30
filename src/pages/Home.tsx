import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

const Home = () => {
  const navigate = useNavigate();
  
  const handleChatRedirect = () => {
    navigate('/chat');
  };
  
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="blueprint-grid"></div>
        <div className="hero-content">
          <h1>Bob: Tu Gerente de Proyectos Financieros</h1>
          <p className="hero-subtitle">
            Experto en gestión financiera para proyectos de construcción, combinando conocimientos técnicos de ingeniería civil/arquitectura con estrategias avanzadas de financiamiento y control de riesgos.
          </p>
          
          <div className="hero-image-container">
            <img 
              src="/images/bob.png" 
              alt="Bob - Gerente Financiero" 
              className="hero-profile-image"
            />
            <div className="hero-badge">¡Consulta ahora!</div>
          </div>
          
          <div className="hero-cta">
            <button 
              className="btn btn-accent btn-lg" 
              onClick={handleChatRedirect}
            >
              Hablar con Bob
            </button>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <div className="features-header">
            <h2>Capacidades de Bob</h2>
            <p>
              Bob combina expertise técnico y financiero para ayudarte en cada fase de tu proyecto de construcción.
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="feature-title">Experiencia Técnica</h3>
              <p className="feature-description">
                Evaluación experta de diseños, materiales, costos estructurales y plazos constructivos basada en principios de ingeniería y arquitectura.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="feature-title">Planificación Financiera</h3>
              <p className="feature-description">
                Modelado de flujos de caja, análisis de rentabilidad (TIR, VAN, ROI) y evaluación de escenarios para proyectos residenciales y comerciales.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="feature-title">Gestión de Riesgos</h3>
              <p className="feature-description">
                Control de costos, cronogramas y riesgos mediante metodologías ágiles o predictivas para mantener tu proyecto dentro de presupuesto.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">Transforma tus Proyectos de Construcción</h2>
          <p className="cta-description">
            Obtén asesoría financiera especializada para maximizar la rentabilidad de tus proyectos inmobiliarios mientras mantienes el control de riesgos y costos.
          </p>
          <div className="cta-buttons">
            <button 
              className="btn btn-accent btn-lg" 
              onClick={handleChatRedirect}
            >
              Consultar a Bob
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;