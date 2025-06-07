function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row gap-2">
          <div className="col-12 col-md-12 col-lg-5">
            <img src="./img/logo2.png" width="100px" alt="logo" />
            <h1 className="fw-bold">
              Pemerintahan <br />
              Kabupaten Karo
            </h1>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <h2 className="fw-bold">Ikuti Kami</h2>
            <p>
              <img src="./img/logo/facebook.png" width="25px" alt="" />
              Dinas PUTR Kabupaten Karo
            </p>
            <p>
              <img src="./img/logo/social.png" width="25px" alt="" />
              Dinas PUTR Kabupaten Karo
            </p>
            <p>
              <img src="./img/logo/youtube.png" width="25px" alt="" />
              Dinas PUTR Kabupaten Karo
            </p>
          </div>
          <div className="col-12 col-md-5 col-lg-3">
            <h2 className="fw-bold">Hubungi Kami</h2>
            <p>
              <img src="./img/logo/email.png" width="25px" alt="" />
              <a href="mailto:dinasputrkabkaro@gmail.com">
                dinasputrkabkaro@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
