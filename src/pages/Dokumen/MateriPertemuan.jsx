import React, { useState } from "react";

const MateriPertemuan = () => {
  const data = [{ id: "", text: "" }];

  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 4;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = data.slice(firstIndex, lastIndex);
  const page = Math.ceil(data.length / recordPerPage);
  const numbers = [...Array(page + 1).keys()].slice(1);

  return (
    <div className="mx-auto mb-10 p-10 h-screen  ">
      <h1 className="font-bold text-3xl py-4 uppercase">Materi Pertemuan</h1>
      <div className="pt-8">
        <table className=" leading-10 w-full m-auto text-center">
          <thead className="bg-cyan-900 text-white text-xl h-10">
            <th>Judul</th>
            <th>Link</th>
          </thead>
          <tbody>
            {records.map((data, i) => (
              <tr key={i}>
                <td className="">{data.text}</td>
                <td className="pl-20"></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-20 text-center">
          <ul className="inline-flex -space-x-px">
            {numbers.map((n, i) => (
              <li
                className={`px-3 py-2 leading-tight text-gray-800 bg-white border border-gray-300 hover:text-gray-100 hover:bg-gray-700 ${
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

export default MateriPertemuan;
