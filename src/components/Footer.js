import logoAdalab from '../images/logo-adalab.png';
function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <small>Awesome profile-cards @2022</small>
          <img
            className="footer__logofoot"
            src={logoAdalab}
            alt="Logo Adalab"
          />
        </div>
      </footer>
    </>
  );
}

export default Footer;
