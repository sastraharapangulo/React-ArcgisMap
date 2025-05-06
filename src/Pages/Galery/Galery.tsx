import React from "react";
import Hero from "../../Components/Hero/Hero";

function Galery() {
  return (
    <>
      <Hero title="GALERI KEGIATAN" />
      <div className="layanan container">
        <h2 className="text-center fw-bold m-4">
          DOKUMENTASI KEGIATAN TA.2023
        </h2>
        <div className="mb-5">
          <h3>
            Penggantian Jembatan pada Ruas Jalan Bintang Meriah - Perbesi Kec.
            Kutabuluh (DAU SG)
          </h3>
          <img
            src="./img/galeri/image1.png"
            style={{ maxWidth: "90vw" }}
            alt=""
          />
        </div>
        <div className="mb-5">
          <h3>
            Pembangunan jembatan Pada Ruas Jalan Kuta rayat - Kebayaken Kec.
            Namanteran (DAU SG)
          </h3>
          <img
            src="./img/galeri/image2.png"
            style={{ maxWidth: "90vw" }}
            alt=""
          />
        </div>
        <div className="mb-5">
          <h3>
            Penanganan Long Segment Sp.Empat - Sp. Gurukinayan Kec. Simpang
            Empat/Kec. Payung (DAK Penugasan Tematik Penguatan Destinasi
            Pariwisata Prioritas)
          </h3>
          <img
            src="./img/galeri/image3.png"
            style={{ maxWidth: "90vw" }}
            alt=""
          />
          <img
            src="./img/galeri/image4.png"
            style={{ maxWidth: "90vw" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Galery;
