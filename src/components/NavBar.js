import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand fs-1 fst-italic text-secondary" href="#">W</a>
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
    </div>
  </div>
</nav>

    );
}

export default Navbar;