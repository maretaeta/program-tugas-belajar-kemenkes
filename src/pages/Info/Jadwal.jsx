import React from "react";
import data from "../Info/DataJadwal";
import { MdLocationOn } from "react-icons/md";

const Jadwal = () => {
  return (
    <div className="p-10">
      <h1 className="uppercase font-bold text-2xl justify-items-center text-center pb-10">
        jadwal recruitment
      </h1>
      <div className="w-full">
        <div className="border-l-4 border-gray-950 ml-3 mt-3 py-8 space-y-14">
          {data.cardData.map((data, i) => (
            <div className="relative" key={i}>
              <div className="absolute top-5 -left-3.5 bg-blue-600 h-6 w-6 rounded-full border-4 border-white"></div>
              <div className="pl-10">
                <span className="text-lg font-bold opacity-40 tracking-widest">
                  {data.tgl}
                </span>
                <h3 className="text-2xl text-gray-600 font-semibold tracking-wide mb-2">
                  {data.title}
                </h3>
                <div className="flex">
                  <MdLocationOn className="text-2xl" />
                  <p className="text-gray-500 text-lg">{data.pelaksana}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jadwal;
