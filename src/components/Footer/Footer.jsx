import "./Footer.css";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__name">Developed by Ray Harris</p>
      <p className="footer__year">{footerYear}</p>
    </footer>
  );
}

export default Footer;
