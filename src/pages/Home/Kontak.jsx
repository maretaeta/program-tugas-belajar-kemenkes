import React from "react";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

const Kontak = () => {
  return (
    <div className="mx-5 max-w-4xl justify-center lg:mx-auto mt-16 relative z-20">
      <div className="md:flex gap-20 ">
        <div className="text-center max-w-5xl mx-auto py-10">
          <h1 className="font-bold text-3xl pb-5 text-center">TERHUBUNG DENGAN KAMI</h1>
          <div className="mx-auto  grid justify-center">
            <div className=" flex pb-4 gap-1">
              <p className="text-2xl text-blue-600">
                <HiLocationMarker />
              </p>
              <p className="text-start">Jl. Hang Jebat Raya F3, Kebayoran Baru Jakarta, 12120</p>
            </div>
            <div className="flex pb-4 gap-2">
              <p className="text-2xl text-blue-600">
                <HiPhone />
              </p>
              <p>021 7258057 ext 4045, 2037</p>
            </div>
            <div className="flex pb-4 gap-2">
              <p className="text-2xl text-blue-600">
                <HiMail />
              </p>
              <p>tubel.kemenkes1@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="container bg-blue-600 max-w-lg mx-auto">
          <div className="mx-5 text-white py-5">
            <h1 className="font-extrabold text-xl">KONTAK KAMI</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="gap-7 grid">
              <input
                type="text"
                className="my-5 w-full bg-transparent outline-none placeholder-gray-100 border-b-2"
                placeholder="Fullname"
              />
              <input
                type="text"
                className="my-5 w-full bg-transparent outline-none placeholder-gray-100 border-b-2"
                placeholder="Email"
              />
              <input
                type="text"
                className="my-5 w-full bg-transparent outline-none placeholder-gray-100  border-b-2"
                placeholder="Profesi"
              />
              <input
                type="text"
                className="my-5 w-full bg-transparent outline-none placeholder-gray-100  border-b-2"
                placeholder="Perihal"
              />
              <input
                type="text"
                className="my-5 w-full bg-transparent outline-none placeholder-gray-100  border-b-2 pb-10"
                placeholder="Your Message"
              />
            </div>
            <button className="bg-white font-semibold px-4 py-2 mt-2 rounded-full text-blue-600">Send</button>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Kontak;
