import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contact">
        ¿Hace falta tu K-Drama favorito?
        <br />
        <a
          href="https://wa.me/573026929375"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbeme por WhatsApp 💬
        </a>
      </div>

      <div className="footer-copyright">
        © 2025 <span>KDramaVibes</span> | Hecho con 💜 por Mayra Sánchez
      </div>
    </footer>
  );
};

export default Footer;
