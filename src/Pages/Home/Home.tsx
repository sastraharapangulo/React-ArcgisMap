import React from "react";
import Hero from "../../Components/Hero/Hero";

function Home() {
  return (
    <div>
      <Hero />

      <div className="layanan container">
        <h3 className="text-center fw-bold m-4">Layanan Kami</h3>
        <div className="row">
          <div className="card-layanan position-relative col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <a href="./bina-marga" className="text-decoration-none">
              <div
                className="card position-relative shadow mb-5 rounded"
                style={{ width: "22rem", maxWidth: "90vw" }}
              >
                <img
                  src="./img/card/bina_marga.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1 text-center d-flex align-items-end justify-content-center">
                  <h4 className="fw-bold mb-0">Bina Marga</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="card-layanan position-relative col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <a href="#" className="text-decoration-none">
              <div
                className="card position-relative shadow mb-5 rounded"
                style={{ width: "22rem", maxWidth: "90vw" }}
              >
                <img
                  src="./img/card/cipta_karya.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1 text-center d-flex align-items-end justify-content-center">
                  <h4 className="fw-bold mb-0">Cipta Karya</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="card-layanan position-relative col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <a href="#" className="text-decoration-none">
              <div
                className="card position-relative shadow mb-5 rounded"
                style={{ width: "22rem", maxWidth: "90vw" }}
              >
                <img
                  src="./img/card/bangunan.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1 text-center d-flex align-items-end justify-content-center">
                  <h5 className="fw-bold mb-0">
                    Bangunan Gedung dan <br />
                    Bina Konstruksi
                  </h5>
                </div>
              </div>
            </a>
          </div>
          <div className="card-layanan position-relative col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <a href="#" className="text-decoration-none">
              <div
                className="card position-relative shadow mb-5 rounded"
                style={{ width: "22rem", maxWidth: "90vw" }}
              >
                <img
                  src="./img/card/sda.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1 text-center d-flex align-items-end justify-content-center">
                  <h4 className="fw-bold mb-0">Sumber Daya Air</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="card-layanan position-relative col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <a href="./tata-ruang" className="text-decoration-none">
              <div
                className="card position-relative shadow mb-5 rounded"
                style={{ width: "22rem", maxWidth: "90vw" }}
              >
                <img
                  src="./img/card/tata_ruang.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1 text-center d-flex align-items-end justify-content-center">
                  <h4 className="fw-bold mb-0">Tata Ruang</h4>
                </div>
              </div>
            </a>
          </div>
          <div className="card-layanan position-relative col-12 col-md-6 col-xl-4 d-flex justify-content-center">
            <a href="#" className="text-decoration-none">
              <div
                className="card position-relative shadow mb-5 rounded"
                style={{ width: "22rem", maxWidth: "90vw" }}
              >
                <img
                  src="./img/card/upt.png"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body p-1 text-center d-flex align-items-end justify-content-center">
                  <h4 className="fw-bold mb-0">UPT Workshop</h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="galeri" id="galeri">
        <h3 className="text-center fw-bold m-4">Galeri Kegiatan</h3>
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          <div
            className="card shadow mb-3 rounded"
            style={{ width: "18rem", maxWidth: "90vw" }}
          >
            <img
              src="./img/galeri/image1.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5>DOKUMENTASI KEGIATAN TA.2023</h5>
              <a href="./galeri" className="text-decoration-none">
                Lihat selengkapnya...
              </a>
            </div>
          </div>
          <div
            className="card shadow mb-3 rounded"
            style={{ width: "18rem", maxWidth: "90vw" }}
          >
            <img
              src="./img/galeri/image3.png"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5>DOKUMENTASI KEGIATAN TA.2023</h5>
              <a href="./galeri" className="text-decoration-none">
                Lihat selengkapnya...
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Home;
