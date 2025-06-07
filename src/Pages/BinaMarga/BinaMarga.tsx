import { useState } from "react";
import Hero from "../../Components/Hero/Hero";

function BinaMarga() {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      <Hero title="BINA MARGA" />
      <div className="layanan container position-relative">
        <h2 className="text-center fw-bold m-4">Peta Jalan Kabupaten Karo</h2>

        {loading && (
          <div
            className="position-absolute top-50 start-50 translate-middle d-flex flex-wrap align-items-center"
            style={{ zIndex: 10 }}
          >
            <span>Loading...</span>
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        <iframe
          src="https://www.arcgis.com/apps/instant/basic/index.html?appid=a2b913cbc2f3423c97d6658e090cca7e"
          width="100%"
          height="600"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          onLoad={handleLoad}
          title="Peta Jalan Kabupaten Karo"
        >
          iFrames are not supported on this page.
        </iframe>
      </div>
    </div>
  );
}

export default BinaMarga;
