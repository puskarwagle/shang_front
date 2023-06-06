import '../css/App.css';

import { FaLaptop } from 'react-icons/fa';

function SideBar() {
  return (
    <div className="SideBar bg-light">
      <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: '280px'}}>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
            < FaLaptop />
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
            < FaLaptop />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
            < FaLaptop />
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
            < FaLaptop />
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-link text-white">
            < FaLaptop />
              Customers
            </a>
          </li>
        </ul>

      </div>
    </div>
  );
}

export default SideBar;