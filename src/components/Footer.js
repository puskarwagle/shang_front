import '../css/App.css';
// import { BsArrowRight } from 'react-icons/bs';


function Footer() {
  return (
    <section className="Footer container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">Home</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">Features</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">Pricing</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">FAQs</a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link px-2 text-body-secondary">About</a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2023 Company, Inc</p>
      </footer>
    </section>
  );
}

export default Footer;