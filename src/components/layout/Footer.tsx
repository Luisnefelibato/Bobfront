import { Link } from 'react-router-dom';
import '../../styles/layout.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>Bob</h3>
          <p>Gerente de Proyectos Financieros para Construcción</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-links-group">
            <h4>Navegación</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/chat">Chat</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Creado por  Luisfercode@2025 - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;