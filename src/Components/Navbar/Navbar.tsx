function Navbar() {
  return (
    <div>
      <div className="fixed-top">
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="menu">
            <div className="line"></div>
            <div className="line2"></div>
            <div className="line2"></div>
          </div>
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="./">
                    Beranda
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Layanan Kami
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="./bina-marga">
                        Bina Marga
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="./tata-ruang">
                        Tata Ruang
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Cipta Karya
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Bangunan Gedung dan Bina Kontruksi
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Sumber Daya Air
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        UPT Workshop
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./#galeri">
                    Galeri
                  </a>
                </li>
              </ul>
            </div>
            <a className="navbar-brand" href="./">
              <img src="./img/Logo.png" alt="logo" width="200px" />
            </a>
          </div>
        </nav>
        <div className="divider"></div>
      </div>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
        style={{ maxWidth: "75vw" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            <a className="navbar-brand" href="#">
              <img src="./img/Logo.png" alt="logo" width="200px" />
            </a>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="./">
                Beranda
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                aria-expanded="true"
              >
                Layanan Kami
              </a>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <a className="nav-link" href="./bina-marga">
                    Bina Marga
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="nav-link" href="./tata-ruang">
                    Tata Ruang
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="nav-link" href="#">
                    Cipta Karya
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="nav-link" href="#">
                    Bangunan Gedung dan Bina Kontruksi
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="nav-link" href="#">
                    Sumber Daya Air
                  </a>
                </li>
                <li className="list-group-item">
                  <a className="nav-link" href="#">
                    UPT Workshop
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./#galeri">
                Galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Navbar;
