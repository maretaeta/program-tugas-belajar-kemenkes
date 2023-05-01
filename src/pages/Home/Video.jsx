import React from "react";
import PropTypes from "prop-types";

const Video = ({ embedId }) => (
  <div className="">
    <h1 className="font-bold text-xl pb-5 text-center">
      Tonton video penjelasan tentang Tugas Belajar SDM Kesehatan
    </h1>
    <iframe
      src="https://www.youtube.com/embed/ryvxhJo5LMQ?feature=share"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="mx-auto w-72 md:w-[500px] lg:w-[600px] h-64 lg:h-96"
    />
  </div>
);

Video.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Video;
