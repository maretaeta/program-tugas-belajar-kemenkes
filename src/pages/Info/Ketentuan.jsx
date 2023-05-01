import React from "react";
import Tabel1 from "./Tabel/Tabel1";

const Ketentuan = () => {
  return (
    <div className="mx-auto mb-10 p-10 ">
      <h1 className="font-bold text-3xl py-4">Ketentuan dan Persyaratan</h1>

      {/* BAGAN A */}
      <div className="pt-5">
        <h1 className="font-semibold text-xl ">
          A. Ketentuan dan Persyaratan Calon Peserta Tugas Belajar SDM Kesehatan
        </h1>
        <ol className="list-decimal pl-11 text-lg leading-8">
          <li>PNS Kementerian Kesehatan.</li>
          <li>
            PNS tenaga kesehatan yang bertugas di Dinas Kesehatan Prov/Kab/Kota,
            Rumah Sakit, Puskesmas dan jaringan layanan Puskesmas.
          </li>
          <li>
            Masa kerja minimal 1 tahun terhitung sejak diangkat sebagai PNS.
          </li>
          <li>
            Telah penyesuaian Ijazah
            <span className="italic">
              {" "}
              (gelar terakhir tercantum dalam SK Kepangkatan atau Surat
              Pencantuman Gelar Pendidikan terakhir atau surat keterangan proses
              pecantuman gelar)
            </span>
            .
          </li>
          <li>Usia maksimal pada 1 September 2020 bagi :</li>
          <Tabel1 />

          <li>
            Bagi PNS yang menduduki jabatan struktural bersedia diberhentikan
            dari jabatan strukturalnya.
          </li>
          <li>
            Bagi PNS yang menduduki jabatan fungsional bersedia dibebaskan
            sementara dari jabatan fungsionalnya
          </li>
          <li>
            Tidak pernah gagal dalam tugas belajar sebelumnya bagi peserta yang
            sudah pernah tugas belajar.
          </li>
          <li>
            Tidak pernah mengundurkan diri setelah ditetapkan dalam Surat
            Keputusan Tugas Belajar.
          </li>
          <li>
            Bagi calon peserta yang sudah pernah mengikuti tugas belajar
            sebelumnya harus telah mengabdikan diri minimal 2N (N=masa
            pendidikan tugas belajar sebelumnya).
          </li>
          <li>
            Belum memiliki gelar sesuai dengan jenjang pendidikan yang akan
            ditempuh (Tidak diberikan untuk mendapatkan gelar kedua pada strata
            yang sama jika sudah pernah tugas belajar) kecuali untuk profesi.
          </li>
          <li>
            Tidak sedang menjalani hukuman disiplin tingkat sedang atau berat.
          </li>
          <li>
            Hanya diperuntukan untukkelas regular dan tidak diperuntukkan untuk
            kelas-kelas: Kelas eksekutif, kelas karyawan, kela skhusus, kelas
            jarak jauh, kelas yang bukan diselenggarakan di perguruan tinggi
            induk
          </li>
          <li>Tidak sedang dalam proses pindah ke instansi lain.</li>
        </ol>
      </div>
    </div>
  );
};

export default Ketentuan;

// {data.dataKetentuan.map((data, i) => (
//   <div>
//     <ol className="list-decimal pl-11 text-lg" key={i}>
//       <li>{data.text}</li>
//     </ol>
//   </div>
// ))}
