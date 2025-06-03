// eslint-disable-next-line
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car1 from "../assets/car4.webp";
import car2 from "../assets/car5.webp";
import car3 from "../assets/car6.webp";

export default function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="mt-20 px-10 relative z-10">
    <Slider {...settings} className="rounded-3xl overflow-hidden">
        <div className="h-[50vh]"> {/* ✅ Ajustando para ocupar toda a altura da tela */}
        <img src={car1} className="w-full h-full object-cover rounded-3xl" alt="Slide 1" />
        </div>
        <div className="h-[50vh]">
        <img src={car2} className="w-full h-full object-cover rounded-3xl" alt="Slide 2" />
        </div>
        <div className="h-[50vh]">
        <img src={car3} className="w-full h-full object-cover rounded-3xl" alt="Slide 3" />
        </div>
    </Slider>
    </section>

  );
}
