import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo_kemkes.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [sticky, setSticky] = useState();

  //fungsi navbar responsive
  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  //fungsi router
  const navigate = useNavigate();
  const handleClickAlur = (i) => {
    navigate(`/Alur`);
  };
  const handleClickKetentuan = (i) => {
    navigate(`/Ketentuan`);
  };
  const handleClickPembiayaan = (i) => {
    navigate(`/Pembiayaan`);
  };
  const handleClickProsedur = (i) => {
    navigate(`/Prosedur`);
  };
  const handleClickJadwal = (i) => {
    navigate(`/Jadwal`);
  };
  const handleClickInstitusi = (i) => {
    navigate(`/InstitusiDipilih`);
  };
  const handleClickPendaftaran = (i) => {
    navigate(`/Pendaftaran`);
  };
  const handleClickPengumuman = (i) => {
    navigate(`/Pengumuman`);
  };
  const handleClickDokumen = (i) => {
    navigate(`/DownloadDokumen`);
  };
  const handleClickBrosur = (i) => {
    navigate(`/Brosur`);
  };
  const handleClickHome = (i) => {
    navigate(`/`);
  };

  return (
    <div className="sticky top-0 bg-cyan-950 justify-between drop-shadow-lg px-16 py-3 z-30">
      <div className="flex justify-between items-center w-full text-white">
        <div className="">
          <img
            src={logo}
            className="w-36 md:w-44"
            onClick={() => handleClickHome(Navbar.i)}
          />
        </div>
        <div className="lg:text-lg">
          <ul className="hidden md:flex font-semibold gap-3 md:gap-5">
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleClickHome(Navbar.i)}
              >
                Home
              </span>
            </li>
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    Informasi
                    <ChevronDownIcon
                      className="-mr-1 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleClickAlur(Navbar.i)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Alur Pendaftaran
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleClickKetentuan(Navbar.i)}
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Ketentuan dan Prasyarat
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleClickProsedur(Navbar.i)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Prosedur
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleClickPembiayaan(Navbar.i)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Pembiayaan
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleClickInstitusi(Navbar.i)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Institusi yang Dipilih
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => handleClickJadwal(Navbar.i)}
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Jadwal Rekrutmen
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span
                to="home"
                smooth={true}
                duration={500}
                onClick={() => handleClickDokumen(Navbar.i)}
              >
                Dokumen
              </span>
            </li>
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => handleClickPengumuman(Navbar.i)}
              >
                Pengumuman
              </span>
            </li>
            <li
              className="hover:text-subMain relative cursor-pointer transition-all 
            before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:rounded-full before:opacity-0 before:transition-all
            before:duration-500 before:bg-subMain hover:before:w-full hover:before:opacity-100"
            >
              <span
                to="about"
                smooth={true}
                offset={-200}
                duration={500}
                onClick={() => handleClickBrosur(Navbar.i)}
              >
                Brosur
              </span>
            </li>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu className="w-5" />
          ) : (
            <AiOutlineClose className="w-5" />
          )}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : " bg-cyan-950 text-white text-center w-full px-8"
        }
      >
        <li className="border-b-2 border-zinc-300 w-full py-2">
          <span
            onClick={() => handleClickHome(Navbar.i)}
            smooth={true}
            duration={500}
          >
            Home
          </span>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-2">
          <span
            onClick={() => handleClickSearch(Navbar.i)}
            smooth={true}
            offset={-200}
            duration={500}
          >
            Search
          </span>
        </li>
        <li className="border-b-2 border-zinc-300 w-full py-2">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Informasi
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Edit
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Duplicate
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Archive
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Move
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Share
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Add to favorites
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Delete
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
