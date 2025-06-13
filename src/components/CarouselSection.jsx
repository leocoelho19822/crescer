// eslint-disable-next-line
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import car1 from "../assets/parentalidade_blog.jpg";
import car2 from "../assets/fundoapp.svg";
import car3 from "../assets/aguedarua.svg";

export default function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
  };

  return (
   <section className="mt-1 max-w-screen-xl mx-auto px-4 relative z-10">
      <Slider {...settings} className="rounded-3xl overflow-hidden">
      <div className="relative aspect-[6/5] sm:h-[75vh]">
        <img src={car1} className="w-full h-full object-cover rounded-3xl" alt="Slide 1" />

        {/* Texto sobreposto alinhado ao fundo */}
        <div className="absolute bottom-0 left-0 w-full px-4 sm:px-16 pb-6 text-center">
          <p className="text-white text-xl sm:text-3xl font-semibold bg-black/50 p-4 rounded-xl shadow-lg max-w-4xl mx-auto">
            A base de um desenvolvimento saudável começa com afeto e presença.
          </p>
        </div>
      </div>

  

        <div className=" relative aspect-[6/5] sm:h-[75vh]">
          <img src={car3} className="w-full h-full object-cover rounded-3xl" alt="Slide 3" />

          {/* Texto sobreposto alinhado ao fundo */}
          <div className="absolute bottom-0 left-0 w-full px-4 sm:px-16 pb-6 text-center">
            <p className="text-white text-xl sm:text-3xl font-semibold bg-black/50 p-4 rounded-xl shadow-lg max-w-4xl mx-auto">
              Parentalidade com propósito: eventos que aproximam, informam e inspiram.
            </p>
          </div>
        </div>
      </Slider>
    </section>



  );
}
