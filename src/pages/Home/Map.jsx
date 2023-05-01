import React from "react";

const Map = () => {
  return (
    <div className="relative mt-[-200px] z-10">
      <iframe
        id="iframe1"
        className=" w-full h-80"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.202030827458!2d106.79182151068498!3d-6.23708059372511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f140762c95c1%3A0x9bba00cd14d2f765!2sBalai%20Besar%20Pelatihan%20Kesehatan%20Jakarta%20(BBPK%20Jakarta)%20Kampus%20Hang%20Jebat!5e0!3m2!1sid!2sid!4v1681839600741!5m2!1sid!2sid"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
