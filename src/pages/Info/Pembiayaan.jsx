import React from "react";
import biaya1 from "../../assets/biaya1.png";
import biaya2 from "../../assets/biaya2.jpg";
import biaya3 from "../../assets/biaya3.png";

const Pembiayaan = () => {
  const dataIsi = [
    {
      id: 1,
      img: biaya1,
      text: "Pembiayaan program tugas belajar SDM Kesehatan bersumber pada APBN Kementerian Kesehatan yang dialokasikan pada DIPA Satuan Kerja Pusat Peningkatan Mutu SDMK Badan PPSDM Kesehatan yang disesuaikan dengan anggaran yang tersedia pada tahun anggaran berjalan.",
    },
    {
      id: 2,
      img: biaya2,
      text: "Peserta yang akan dibiayai adalah peserta yang tercantum dalam SK penetapan Bantuan Tugas Belajar SDMK.",
    },
    {
      id: 3,
      img: biaya3,
      text: "Pembiayaan Program Tugas Belajar SDMK Kesehatan berlaku sejak Gasal 2020 sampai dengan masa pendidikan sesuai kurikulum.",
    },
    {
      id: 4,
      img: biaya1,
      text: "Komponen dan besaran bantuan biaya tugas belajar yang diberikan kepada peserta adalah :",
      choise:
        "a. Biaya Pendidikan yang ditetapkan sesuai Pola Tarif yang Resmi (SK  Rektor atau ketentuan peraturan perundangan) terdiri dari SPP dan Biaya Sumbangan Pembangunan",
      choise2:
        "b. Biaya Non Pendidikan yang ditetapkan sesuai dengan Peraturan Kementerian Keuangan yang terdiri biaya hidup, biaya bantuan refensi atau buku",
      choise3:
        "c. Biaya Bantuan penelitian yang ditetapkan oleh Kuasa Pengguna Anggaran (KPA) Pusat Peningkatan Mutu.",
      choise4:
        "d. Biaya Bantuan lainnya yang terdiri biaya kedatangan dan kepulangan",
    },
  ];

  return (
    <div className="mx-auto mb-10 p-10">
      <h1 className="text-3xl font-bold py-5 uppercase">Pembiayaan</h1>

      {dataIsi.map((data, i) => (
        <div className="py-5 p-8 ">
          <div className="bg-white border-2 border-red-700 rounded-xl" key={i}>
            <div className="bg-red-700 rounded-xl w-8 text-white text-center">
              {data.id}
            </div>
            <div className="flex p-2 gap-6">
              <img src={data.img} className="w-28 h-20" />
              <div className="border-l-2 border-gray-900 h-24"></div>
              <div>
                <p className="">{data.text}</p>
                <ol>
                  <li>{data.choise}</li>
                  <li>{data.choise2}</li>
                  <li>{data.choise3}</li>
                  <li>{data.choise4}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pembiayaan;
