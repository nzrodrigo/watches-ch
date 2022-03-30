import 'bootstrap/dist/css/bootstrap.min.css';
import CarWidget from './CarWidget';


const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fs-1 fst-italic text-secondary" href="#">Watches</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Analogicos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Digitales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Smartwatches</a>
        </li>
      </ul>
      <div class="ms-auto ">
        <CarWidget />
      </div>
    </div>
  </div>
</nav>

    );
}

export default Navbar;