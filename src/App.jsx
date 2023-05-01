import React from "react";
import Home from "./pages/Home/Home";
import Alur from "./pages/Info/Alur";
import Pembiayaan from "./pages/Info/Pembiayaan";
import Ketentuan from "./pages/Info/Ketentuan";
import Pendaftaran from "./pages/Info/Pendaftaran";
import Prosedur from "./pages/Info/Prosedur";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Daftar from "./pages/Daftar";
import Dokumen from "./pages/Dokumen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import Pengumuman from "./pages/Pengumuman";
import Brosur from "./pages/Brosur";
import InstitusiDipilih from "./pages/Info/InstitusiDipilih";
import Jadwal from "./pages/Info/Jadwal";
import MateriPertemuan from "./pages/Dokumen/MateriPertemuan";
import Penelitian from "./pages/Dokumen/Penelitian";
import Peraturan from "./pages/Dokumen/Peraturan";
import SK from "./pages/Dokumen/SK";
import SuratEdaran from "./pages/Dokumen/SuratEdaran";
import TransportKedatangan from "./pages/Dokumen/TransportKedatangan";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Alur" element={<Alur />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Daftar" element={<Daftar />} />
          <Route path="/DownloadDokumen" element={<Dokumen />} />
          <Route path="/Pengumuman" element={<Pengumuman />} />
          <Route path="/Brosur" element={<Brosur />} />
          <Route path="/InstitusiDipilih" element={<InstitusiDipilih />} />
          <Route path="/Jadwal" element={<Jadwal />} />
          <Route path="/Ketentuan" element={<Ketentuan />} />
          <Route path="/Pembiayaan" element={<Pembiayaan />} />
          <Route path="/Pendaftaran" element={<Pendaftaran />} />
          <Route path="/Prosedur" element={<Prosedur />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Materi_Pertemuan" element={<MateriPertemuan />} />
          <Route path="/Penelitian" element={<Penelitian />} />
          <Route path="/Peraturan" element={<Peraturan />} />
          <Route path="/SK" element={<SK />} />
          <Route path="/Surat_Edaran" element={<SuratEdaran />} />
          <Route
            path="/Transportasi_Kedatangan"
            element={<TransportKedatangan />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
