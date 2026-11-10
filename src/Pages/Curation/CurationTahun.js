import React, { useEffect, useState } from "react";
import CustomNavbar from "../../components/CustomNavbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer/Footer";
import FooterData from "../../components/Footer/FooterData";
import { ambilBerkasKurasi, berkasTampil } from "../../lib/kurasiApi";
import "../../assets/css/Kurasi.css";

/**
 * Berkas kurasi satu edisi, dibaca langsung dari dasbor IYSA — pola yang sama
 * dengan bisf.or.id/Curation/:tahun. Judul kartu = nama dokumen, nama berkas
 * kecil di bawahnya; berkas per kategori disembunyikan bila ada berkas
 * gabungannya (lihat lib/kurasiApi.js).
 */
const CurationTahun = ({ match }) => {
  const tahun = match.params.tahun;
  const [berkas, setBerkas] = useState(null);
  const [galat, setGalat] = useState(false);

  useEffect(() => {
    let batal = false;
    setBerkas(null);
    setGalat(false);
    ambilBerkasKurasi(tahun)
      .then((d) => { if (!batal) setBerkas(berkasTampil(d)); })
      .catch(() => { if (!batal) setGalat(true); });
    return () => { batal = true; };
  }, [tahun]);

  return (
    <div className="body_wrapper">
      <CustomNavbar slogo="sticky_logo" mClass="menu_four" nClass="w_menu ml-auto mr-auto" />
      <Breadcrumb
        breadcrumbClass="breadcrumb_area"
        imgName="background/img2.WebP"
        Ptitle={`Curation ${tahun}`}
        Pdescription="Puspresnas curation documents"
      />
      <section className="kurasi-section">
        <div className="kurasi-container">
          {berkas === null && !galat && <p className="kurasi-kabar">Loading…</p>}
          {galat && <p className="kurasi-kabar">The document list could not be loaded. Please try again shortly.</p>}
          {berkas !== null && berkas.length === 0 && (
            <p className="kurasi-kabar">No documents have been published for this edition yet.</p>
          )}
          {berkas !== null && berkas.length > 0 && (
            <>
              <p className="kurasi-ringkas">{berkas.length} documents</p>
              <div className="kurasi-kartu-grid">
                {berkas.map((f, i) => {
                  const Kartu = f.url ? "a" : "div";
                  const props = f.url ? { href: f.url, target: "_blank", rel: "noreferrer" } : {};
                  return (
                    <Kartu className="kurasi-kartu" key={i} {...props}>
                      {f.jenis === "dokumentasi" && <span className="kurasi-badge">Dokumentasi</span>}
                      <h2>{f.slot}</h2>
                      <p className="kurasi-nama">{f.nama}</p>
                    </Kartu>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
      <Footer FooterData={FooterData} />
    </div>
  );
};

export default CurationTahun;
