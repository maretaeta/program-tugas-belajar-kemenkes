import React, { useState } from "react";
import data from "../../pages/Data/DataInstitusi.json";

const InstitusiDipilih = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 12;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const page = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  return (
    <div className="mx-auto mb-10 p-10 h-screen">
      <h1 className="text-3xl font-bold py-5 uppercase">
        INSTITUSI PENDIDIKAN YANG BISA DIPILIH
      </h1>
      <div className="text-gray-5 00 pb-5 ">
        <p>
          Institusi pendidikan penyelenggara tugas belajar diprioritaskan
          institusi pendidikan negeri/perguruan tinggi negeri yang program
          studinya terakreditasi minimal B atau setara sesuai peraturan
          perundang-undangan. Kecuali perguruan tinggi swasta yang ditunjuk oleh
          Kementerian Kesehatan (Prodi S1 Farmasi dan profesi Apoteker di
          Universitas Pancasila).
        </p>
        <span className="italic">
          daftar akreditasi dapat dilihat pada website :
          <a href="ban-pt.kemdiknas.go.id" className="underline">
            ban-pt.kemdiknas.go.id/direktori.php
          </a>
        </span>
      </div>
      {records.map((a, i) => (
        <div className="px-5">
          <div className="flex gap-5 leading-8">
            <p>{a.id}</p>
            <p>{a.text}</p>
          </div>
        </div>
      ))}
      <div className="pt-20 text-center">
        <ul className="inline-flex -space-x-px">
          <li className="px-3 py-2 ml-0 leading-tight text-white bg-gray-800 rounded-l-lg border border-gray-300  hover:bg-gray-600">
            <a href="#" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`px-3 py-2 leading-tight text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                currentPage === n ? "active" : ""
              } `}
              key={i}
            >
              <a href="#" onClick={() => changePage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className="px-3 py-2 leading-tight text-white bg-gray-800 rounded-r-lg border border-gray-300 hover:bg-gray-600">
            <a href="#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1);
    }
  }
};

export default InstitusiDipilih;
