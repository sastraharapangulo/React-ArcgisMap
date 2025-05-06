import React from "react";
import Hero from "../../Components/Hero/Hero";

function BinaMarga() {
  return (
    <div>
      <Hero title="BINA MARGA" />
      <div className="layanan container">
        <h2 className="text-center fw-bold m-4">Peta Jalan Kabupaten Karo</h2>
        <iframe
          src="https://www.arcgis.com/apps/instant/basic/index.html?appid=a2b913cbc2f3423c97d6658e090cca7e"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
        >
          iFrames are not supported on this page.
        </iframe>
      </div>
    </div>
  );
}

export default BinaMarga;
