import React, { useState } from "react";

const Daftar = () => {
  const [value, setValue] = useState("");
  return (
    <div className="max-w-7xl md:mx-auto mx-5 ">
      <div className="my-16">
        <h1 className="text-xl font-semibold pb-3">
          Angkatan Tahun 2023 Gelombang 2
        </h1>
        <p>Dibuka : 26 April 2023 | Ditutup : 03 Mei 2023</p>
      </div>
      <form className="container bg-slate-300">
        <div className="">
          <h1 className="bg-blue-600 mb-4 pl-5">Formulir Pendaftaran Online</h1>
        </div>
        <div className="">
          <div className="pb-5 mx-5">
            <p>Ketentuan Pengisian :</p>
            <p>
              Lengkapi formulir pendaftaran di bawah ini dengan data anda yang
              sebenarnya. Kotak dengan tanda (*) wajib diisi
            </p>
            <p>
              Penulisan gunakan huruf kapital, Kecuali penulisan gelar sesuai
              atuaran
            </p>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 ">
            <div className="mx-5">
              <p>Status Pelamar * :</p>
              <p className="text-red-600">Requester status</p>
            </div>
            <div className="">
              <select
                className="rounded-md border-gray-300 border-2 block mt-2"
                id="question"
                onChange={(e) => setValue(e.target.value)}
                value={value}
              >
                <option value="">Pilih Status</option>
                <option value={"true"}>Parsial</option>
                <option value={"false"}>Baru</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Nama Lengkap * :</p>
              <p className="text-red-600">Full Name</p>
            </div>
            <div className="mt-1">
              <input
                className="border border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Nama Lengkap Tanpa Gelar"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Gelar SKCPNS :</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Depan"
              />
              <input
                className="border border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Belakang"
              />
              <p className="text-red-500 text-sm pt-2">
                * Ditulis Sesuai Gelar Resmi
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Gelar SK Terakhir :</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Depan"
              />
              <input
                className="border border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Gelar Belakang"
              />
              <p className="text-red-500 text-sm pt-2">
                * Ditulis Sesuai Gelar Resmi
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Tempat Lahir * :</p>
              <p className="text-red-500 text-sm italic">* Birth Place</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Kota Saja"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Tanggal Lahir * :</p>
              <p className="text-red-500 text-sm italic">* Birth Day</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" Tanggal-Bulan-Tahun"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>NIP * :</p>
              <p className="text-red-500 text-sm italic">* NIP</p>
            </div>
            <div className="mt-1 grid">
              <div className="md:flex gap-2 grid">
                <input
                  className="border mb-3 border-gray-400 w-32 placeholder-gray-300"
                  placeholder=" XXXXXXX"
                />
                <input
                  className="border mb-3 border-gray-400 w-24 placeholder-gray-300"
                  placeholder=" XXXX"
                />
                <input
                  className="border mb-3 border-gray-400 w-20 placeholder-gray-300"
                  placeholder=" XX "
                />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>NO KTP * :</p>
              <p className="text-red-500 text-sm italic">* NIK</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" XXXXXXXXXXXXXX"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 border-b border-b-gray-600 pt-4">
            <div className="mx-5">
              <p>Alamat Sesuai KTP * :</p>
              <p className="text-red-500 text-sm italic">* Address</p>
            </div>
            <div className="mt-1 grid">
              <input
                className="border mb-3 border-gray-400 md:w-64 placeholder-gray-300"
                placeholder=" XXXXXXXXXXXXXX"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Daftar;
