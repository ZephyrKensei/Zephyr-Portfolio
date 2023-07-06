
function Footer() {
  return (
    <footer className="footer">
      <a href="mailto:zephyrkensei@gmail.com"
        className="footer__link">zephyrkensei@gmail.com</a>
      <ul className="social-list">
          <li className="social-list__item">
              <a className="social-list__link"
                href="https://codepen.io/ZephyrKensei"
                target="_blank"
                rel="noreferrer">
              <i className="fa-brands fa-codepen"></i>
              </a>
          </li>
          <li className="social-list__item">
              <a className="social-list__link"
                href="https://app.netlify.com/teams/zephyrkensei/overview"
                target="_blank"
                rel="noreferrer">
              <i className="fa-solid fa-diamond"></i>
              </a>
          </li>
          <li className="social-list__item">
              <a className="social-list__link" 
                href="https://twitter.com/ZephyrKensei"
                target="_blank"
                rel="noreferrer">
              <i className="fa-brands fa-twitter"></i>
              </a>
          </li>
          <li className="social-list__item">
              <a className="social-list__link"
                href="https://github.com/ZephyrKensei"
                target="_blank"
                rel="noreferrer">
              <i className="fa-brands fa-github"></i>
              </a>
          </li>
      </ul>
    </footer>
  );
}

export default Footer;