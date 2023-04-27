import React from "react";

const Ketentuan = () => {
  return (
    <div className="max-w-7xl mx-auto mb-10 p-5 h-screen">
      <div className="font-bold text-center text-3xl p-5">
        <h1>Ketentuan dan Persyaratan</h1>
      </div>
      <div className="py-5">
        <table className="w-full m-auto border-2 leading-10">
          <thead className="bg-cyan-950 text-white font-bold">
            <tr>
              <th rowSpan="2" className="p-1">
                No
              </th>
              <th rowSpan="2">Jenis SDM Kesehatan</th>
              <th colSpan="2">Usia</th>
              <th rowSpan="2">Gol Minimal</th>
            </tr>
            <tr>
              <th>DTPK</th>
              <th>Non DPTK</th>
            </tr>
          </thead>
          <tbody className="text-center bg-slate-300  ">
            <tr>
              <td rowSpan="6">1</td>
              <td colSpan="4" className="p-3 font-semibold text-lg">
                Tenaga Kesehatan
              </td>
            </tr>
            <tr>
              <td>DIII→DIV/SI</td>
              <td>47 tahun</td>
              <td>42 tahun</td>
              <td>IIc</td>
            </tr>
            <tr>
              <td>DIII→S1+Profesi</td>
              <td>46 tahun</td>
              <td>42 tahun</td>
              <td>IIc</td>
            </tr>
            <tr>
              <td>DIV/SI → Profesi</td>
              <td>48 tahun</td>
              <td>43 tahun</td>
              <td>IIc</td>
            </tr>
            <tr>
              <td>SI→SII</td>
              <td>47 tahun</td>
              <td>47 tahun</td>
              <td>IIa</td>
            </tr>
            <tr>
              <td>SI→SII+Spesialis</td>
              <td>46 tahun</td>
              <td>46 tahun</td>
              <td>IIa</td>
            </tr>

            <tr>
              <td rowSpan="5">2</td>
              <td colSpan="4" className="p-3 font-semibold text-lg">
                Non Tenaga Kesehatan (Peneliti, Widya Iswara, Audiitor, dll)
              </td>
            </tr>
            <tr>
              <td>DIII→SI</td>
              <td>37 tahun</td>
              <td>25 tahun</td>
              <td>IIc</td>
            </tr>
            <tr>
              <td>DIII→S1</td>
              <td>37 tahun</td>
              <td>25 tahun</td>
              <td>IIc</td>
            </tr>
            <tr>
              <td>SI → SII</td>
              <td>42 tahun</td>
              <td>37 tahun</td>
              <td>IIIa</td>
            </tr>
            <tr>
              <td>SII→SIII</td>
              <td>47 tahun</td>
              <td>40 tahun</td>
              <td>IIIb</td>
            </tr>

            <tr>
              <td rowSpan="2">3</td>
              <td colSpan="4" className="p-3 font-semibold text-lg ">
                Dosen Poltekkes Kemenkes
              </td>
            </tr>
            <tr>
              <td>SII→SIII</td>
              <td>50 tahun</td>
              <td>50 tahun</td>
              <td>IIIb</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ketentuan;
