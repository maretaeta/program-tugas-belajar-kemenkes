import React from "react";
import logo from "../assets/logo_kemkes.png";

export const Footer = () => {
  return (
    <footer class="bg-cyan-950">
      <div class=" mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <img src={logo} className="w-56" />

          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2023 . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
