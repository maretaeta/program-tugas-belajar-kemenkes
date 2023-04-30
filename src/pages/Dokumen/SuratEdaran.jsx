import { useState } from "react";
import React from "react";

const SuratEdaran = () => {
  const data = [
    { id: 1, text: "Surat Edaran Tubel Tahun 2023" },
    { id: 2, text: "Surat Edaran Tubel PNS Tahun 2022" },
    { id: 3, text: "Surat Edaran Tubel FETP Tahun 2021" },
    { id: 4, text: "Surat Edaran Tubel 2021 Gel II" },
    { id: 5, text: "Pemberitahuan Batas usia Tugas Belajar" },
    { id: 6, text: "SE Tugas Belajar Double Degree Tahun 2021" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const page = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  return (
    <div className="mx-auto mb-10 p-10 h-screen  ">
      <h1 className="font-bold text-3xl py-4 uppercase">Surat Edaran</h1>
      <div className="pt-8">
        <table className=" leading-10 w-full m-auto text-center">
          <thead className="bg-gray-800 text-white text-xl h-10">
            <th>Judul</th>
            <th>Link</th>
          </thead>
          <tbody>
            {records.map((data, i) => (
              <tr key={i}>
                <td className="">{data.text}</td>
                <td className="pl-20">
                  <a href="src\assets\suratEdaran.pdf" download>
                    <button className="bg-cyan-800 text-white rounded-full text-center h-8 text-base w-32">
                      Download
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-20 text-center">
          <ul className="inline-flex -space-x-px">
            {numbers.map((n, i) => (
              <li
                className={`px-3 py-2 leading-tight text-gray-800 bg-white border border-gray-400 hover:text-gray-100 hover:bg-gray-700 ${
                  currentPage === n ? "active" : ""
                } `}
                key={i}
              >
                <a href="#" onClick={() => changePage(n)}>
                  {n}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  function changePage(id) {
    setCurrentPage(id);
  }
};

export default SuratEdaran;
