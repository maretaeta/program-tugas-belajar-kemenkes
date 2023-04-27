import React from "react";
import Data from "./Data";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import { RiLoginBoxLine, RiCustomerService2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()
  const handleClickLogin = (i) => {
    navigate(`/Login`);
  };
  const handleClickDaftar = (i) => {
    navigate(`/Daftar`);
  };
  return (
    <div className="lg:mt-[-68px] mt-[-51px] md:mt-[-68px]">
      <Swiper
        direction="horizontal"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
        }}
        className="w-full h-full"
      >
        {Data.heroData.map((item, index) => (
          <SwiperSlide
            className="linear-bg relative rounded overflow-hidden"
            key={index}
          >
            <div className="">
              <img
                src={item.img}
                alt="movie"
                className="w-full h-[500px] md:h-[800px] object-cover"
              />
              <div className="">
                <div className="absolute bottom-0 right-0 left-0 flex flex-col md:py-64 py-16 justify-center mx-5">
                  <h1 className="text-white lg:text-4xl xl:text-5xl truncate capitalize font-sans sm:text-2xl text-lg font-bold ">
                    {item.title}
                  </h1>
                  <div className="flex-MovieItem">
                    <div className="flex gap-2 pt-[-16px] py-2 font-semibold lg:text-lg">
                      <div className="flex">
                        <p className="text-white text-xs lg:text-lg">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className="bg-transparent border-2 px-2 py-1 rounded-full text-white">{item.button}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-2 py-16 ">
        <div className="bg-blue-600 text-white text-center py-2 px-3 border-blue-600" onClick={() => handleClickDaftar(Header.i)}>
          <div className="flex justify-center text-4xl md:text-7xl">
            <RiCustomerService2Line />
          </div>
          <h1 className="md:text-xl">PENDAFTARAN</h1>
        </div>
        <div className="bg-blue-600  text-white py-2 md:px-10 px-11 border-blue-600" onClick={() => handleClickLogin(Header.i)}>
          <div className="flex justify-center md:text-7xl text-4xl">
            <RiLoginBoxLine />
          </div>
          <h1 className="md:text-xl text-center">LOGIN</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
