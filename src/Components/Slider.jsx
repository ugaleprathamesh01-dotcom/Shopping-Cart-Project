import React from "react";
import "./Slider.css";

function Slider() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      data-interval="3000"
    >
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img
            src="https://m.media-amazon.com/images/G/31/img26/intel/ELP-Intel_1500x300._CB772671455_.gif"
            className="d-block w-100 slider-img"
            alt="Slide 1"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/G/31/img25/Camera/Fuji/Nov/Artboard_3_copy._CB778385968_.png"
            className="d-block w-100 slider-img"
            alt="Slide 2"
          />
        </div>

        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/G/31/IMG15/Laptop/Asusvivobok/1500-x-300._CB803151432_.jpg"
            className="d-block w-100 slider-img"
            alt="Slide 3"
          />
        </div>

        
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/G/31/img26/Camera/shutterbug/1500x300._CB788284038_.jpg"
            className="d-block w-100 slider-img"
            alt="Slide 4"
          />
        </div>

        
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/G/31/img26/Camera/boat/f1/launch/1500x300._CB787949697_.jpg"
            className="d-block w-100 slider-img"
            alt="Slide 5"
          />
        </div>

        
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/G/31/img26/evofox/deck2/s/Teaser_Banner_1500x300._CB788285229_.jpg"
            className="d-block w-100 slider-img"
            alt="Slide 6"
          />
        </div>

      </div>   {/* ✅ THIS closing div was missing */}

      {/* Controls */}
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </a>

      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </a>

    </div>
  );
}

export default Slider;
