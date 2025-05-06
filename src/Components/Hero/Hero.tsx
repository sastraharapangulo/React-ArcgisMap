import React from "react";

interface Props {
  title?: string;
}

function Hero({ title }: Props) {
  return (
    <div>
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col col-12 col-md-6">
              <img
                src="./img/layar3.png"
                className="layar"
                width="100%"
                alt=""
              />
              <div
                id="carouselExampleAutoplaying"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="./img/slide/Slide1.JPG"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./img/slide/Slide2.JPG"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="./img/slide/Slide3.JPG"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleAutoplaying"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="col col-12 col-md-6 d-flex align-items-center justify-content-center flex-wrap">
              <h1 className="hero-text text-center">
                Portal Dinas Pekerjaan Umum dan Tata Ruang Kabupaten Karo
              </h1>
              {title && (
                <h1
                  className="hero-text text-center"
                  style={{ fontSize: "calc(1.375rem + 3vw)" }}
                >
                  {title}
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default Hero;
