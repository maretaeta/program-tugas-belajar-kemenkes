import React from "react";

const Brosur = () => {
  return (
    <div className="mx-auto mb-10 p-10 h-screen  ">
      <h1 className="font-bold text-3xl py-4 uppercase">Brosur</h1>
      <div className="p-10 leading-10 capitalize">
        <a href="src\assets\Penelitian.pdf" download>
          surat edaran menpan tentang batas usia maksimal pemberian tugas
          belajar bagi tenaga kesehatan
        </a>
        <hr className="h-1 bg-cyan-950 " />
        <a href="src\assets\Penelitian.pdf" download>
          Pengumuman hasil seleksi administrasi tugas belajar 2017 Pengumuman
        </a>
        <hr className="h-1 bg-cyan-950 " />
        <a href="src\assets\Penelitian.pdf" download>
          Perpanjangan Pendaftaran online Tubel 2017
        </a>
        <hr className="h-1 bg-cyan-950 " />
        <a href="src\assets\Penelitian.pdf" download>
          Penerima Program Tugas Belajar SDM Kesehatan 2014
        </a>
        <hr className="h-1 bg-cyan-950 " />
      </div>
    </div>
  );
};

export default Brosur;
