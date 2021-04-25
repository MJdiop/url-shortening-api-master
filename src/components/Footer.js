import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo">
        <h1>Shortly</h1>
      </div>
      <div className="content-links">
        <ul>
          <h4>Features</h4>
          <li className="links">
            <a href="/">Link Shortening</a>
          </li>
          <li className="links">
            <a href="/">Branded Links</a>
          </li>
          <li className="links">
            <a href="/">Analytics</a>
          </li>
        </ul>

        <ul>
          <h4>Resources</h4>
          <li className="links">
            <a href="/">Blog</a>
          </li>
          <li className="links">
            <a href="/">Developers</a>
          </li>
          <li className="links">
            <a href="/">Support</a>
          </li>
        </ul>

        <ul>
          <h4>Company</h4>
          <li className="links">
            <a href="/">About</a>
          </li>
          <li className="links">
            <a href="/">Our Team</a>
          </li>
          <li className="links">
            <a href="/">Careers</a>
          </li>
          <li className="links">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>

      <div className="social">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-pinterest"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </footer>
  );
};

export default Footer;
