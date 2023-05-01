import React, { useState } from "react";
import Video from "./Video";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const cardIsi = [
    {
      question: "Apa itu Perhimpunan Ahli Kesehatan Kerja Indonesia?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.",
    },
    {
      question:
        "Bagaimana saya menghubungi Perhimpunan Ahli Kesehatan Kerja Indonesia?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.",
    },
    {
      question:
        "Apa saja layanan dari Perhimpunan Ahli Kesehatan Kerja Indonesia?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.",
    },
    {
      question: "Mengapa saya harus menggunakan web PAKKI ini?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.",
    },
    {
      question: "Cara mendaftar web PAKKI",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. nihil doloribus voluptate ea molestiae! Non quod, similique omnis maiores blanditiis voluptatem pariatur eaque aut quia praesentium accusantium, iusto, asperiores at.",
    },
  ];

  return (
    <div name="Faq" className="max-w-7xl mx-5 flex xl:mx-auto py-9 ">
      <div className="">
        <div className=" mx-auto gap-10">
          <div className="text-center md:text-center">
            <h1 className="pb-5 pt-10 text-4xl font-bold text-center">
              Masih Bingung dan ada Pertanyaan ?
            </h1>
            <p className="text-lg md:mr-16 pb-7">
              Tenang, Kami akan membantu anda !
            </p>
          </div>
        </div>
        <div className="lg:flex gap-9 ">
          <div className="pb-10">
            {cardIsi.map((faq_info, i) => (
              <div
                className="border-gray-100 rounded m-[15px] shadow-md overflow-hidden mx-auto mb-4"
                key={i}
              >
                <div
                  className="flex items-center justify-between p-4 cursor-pointer "
                  onClick={() => toggleAccordion(i)}
                >
                  <p className="md:text-xl text-lg mx-7 font-semibold">
                    {faq_info.question}{" "}
                  </p>
                  <svg
                    className={`w-6 h-6 transition-transform transform ${
                      activeIndex === i ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                    />
                  </svg>
                </div>
                {activeIndex === i && (
                  <div className="px-10 pb-4">{faq_info.answer}</div>
                )}
              </div>
            ))}
          </div>
          <Video />
        </div>
      </div>
    </div>
  );
}

export default Faq;
