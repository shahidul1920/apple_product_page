import React, { useEffect, useRef, useState } from "react";

const Slider = () => {
  const images = ["./01.jpg", "./1.jpg", "./2.jpg"];
  const [current, setCurrent] = useState(0);
  const slideRef = useRef(null);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  useEffect(()=>{
    if(slideRef.current){
      slideRef.current.style.transform = `translateX(-${current * 100}%)`;
    }
  },[current]);

  return (
    <div className="container mx-auto my-20">
      <h1 className="text-6xl font-bold text-left my-20">
        Get the highlights.
      </h1>
      <section className="overflow-hidden relative rounded-2xl">
        <div ref={slideRef} className="flex h-[700px] transition-transform duration-1000 ease-in-out">
          {images.map((image, i) => (
            <div
              key={i}
              className="w-full h-full bg-amber-500 flex-shrink-0 overflow-hidden"
            >
              <h1 className="text-black text-2xl text-center font-bold absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2">
                All‑new ultracompact design. Front and back ports. Fits, flexes,
                and flies in any setup.
              </h1>
              <img className="w-full h-full" src={image} alt="" />
            </div>
          ))}
        </div>
      </section>
      <div className="slider-nav flex items-center justify-center p-8 rounded-full bg-[#FBF7F4] max-w-[230px] mx-auto gap-5 my-6">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`slider-nav-item size-[14px] bg-[#292A2E] rounded-full block ${
              current === i ? "bg-[#FFD302]" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
