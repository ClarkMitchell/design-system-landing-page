export default function Footer() {
  return (
    <footer>
      <div className="footer__header">
        <img
          className="footer__logo"
          src="/images/logo.svg"
          alt="Insure logo"
        />
        <div className="socials">
          <img src="/images/icon-facebook.svg" alt="facebook letter f icon" />
          <img src="/images/icon-twitter.svg" alt="twitter bird icon" />
          <img src="/images/icon-pinterest.svg" alt="pinterest letter p icon" />
          <img src="/images/icon-instagram.svg" alt="instagram camera icon" />
        </div>
      </div>
      <hr className="full" />
      <div className="links">
        <div className="links__group">
          <h4>Our Company</h4>
          <a href="#">How We Work</a>
          <a href="#">Why Insure?</a>
          <a href="#">Check Price</a>
          <a href="#">Reviews</a>
        </div>
        <div className="links__group">
          <h4>Help Me</h4>
          <a href="#">FAQ</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookies</a>
        </div>
        <div className="links__group">
          <h4>Contact</h4>
          <a href="#">Sales</a>
          <a href="#">Support</a>
          <a href="#">Live Chat</a>
        </div>
        <div className="links__group">
          <h4>Others</h4>
          <a href="#">Careers</a>
          <a href="#">Press</a>
          <a href="#">Licenses</a>
        </div>
      </div>
    </footer>
  );
}
