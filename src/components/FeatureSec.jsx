import React from "react";

const FeatureSec = () => {
  return (
    <div>
      <section className="container mx-auto my-[8rem]">
        <div className="top text-center">
          <h4 className="text-3xl font-semibold mb-[1rem]">Design</h4>
          <h1 className="text-6xl text-black font-black">
            Looks small. <span className="text-[#147d89]">Lives Large.</span>
          </h1>
          <p className="text-[#57585e] text-xl font-medium max-w-[700px] mx-auto mt-[1rem]">
            Introducing the far mightier, way tinier, all-new Mac mini. Five by
            five inches of pure power and purpose. Redesigned around Apple
            silicon to unleash the full speed and capabilities of M4 and M4 Pro
            chips. With a wide array of ports, now on the front and back. Mac
            mini is the definition of efficiency — and the first carbon neutral
            Mac. It truly is the little Mac that could.
          </p>
        </div>

        <div className="botto-sec grid grid-cols-2 relative w-full h-[400px] place-items-center">
          <div className="bottm-image absolute grid place-items-center -top-[200px]">
            <img
              className="w-full h-[700px] rounded-2xl mt-[3rem] object-contain"
              src="./mac-mini-s.png"
              alt=""
            />
            <div className="absolute text-6xl text-[#57585e] font-bold left-[125px] -rotate-90">
              5"
            </div>
            <div className="absolute text-6xl text-[#57585e] font-bold bottom-[120px]">
              5"
            </div>
          </div>

          <div className="sideInfo absolute right-[230px] top-[120px] max-w-[300px]">
            <h2 className="text-4xl font-bold">
              <span className="text-[#147d89]">1/20</span> the size yet up to{" "}
              <span className="text-[#147d89]">6x</span> faster
            </h2>
            <p className="text-[#57585e] text-xl font-medium mt-[1rem]">
              compared with the top-selling PC desktop in its price range.3
            </p>
          </div>
        </div>
      </section>

      <div className="bg-[#F5F5F7] py-[8rem]">
        <section className="container mx-auto grid grid-cols-1 xl:grid-cols-2 place-items-center gap-10 text-center">
          <div className="left grid place-items-center gap-4">
            <h2 className="text-4xl font-bold">2x USB-C Headphone jack</h2>
            <img src="./front-mac.jpg" alt="" />
            <h4 className="text-xl font-medium text-[#57585E]">Front Ports</h4>
          </div>

          <div className="right grid place-items-center gap-4">
            <h2 className="text-4xl font-bold">HDMI Ethernet 3x Thunderbolt</h2>
            <img src="./back-mac.jpg" alt="" />
            <h4 className="text-xl font-medium text-[#57585E]">Back Ports</h4>
          </div>
        </section>
      </div>

      <div className="bg-[#F5F5F7]">
        <section className="container mx-auto my-[8rem] flex flex-col items-center justify-center py-[6rem]">
            <div className="top flex-1">
                <h2 className="text-6xl font-black mb-[1rem]">
                    Built to <span className="text-[#147d89]">chill</span>
                </h2>
                <p className="text-[#57585e] text-xl font-medium max-w-[700px] mt-[1rem]">
                Putting this much power in such a small space took a whole new thermal architecture. Within Mac mini, air is guided to different levels of the system, and all of it flows through the foot. Combined with Apple silicon’s unmatched power efficiency, this allows Mac mini to breeze through intensive workloads at outrageous speeds. It’s calm, cool, and perfected.
                </p>
            </div>
            <div className="bottom-image flex-1">
                <img className="w-full h-[700px] rounded-2xl mt-[3rem] object-contain" src="./design_thermal_stati-mac.jpg" alt="" />
            </div>
        </section>
      </div>
    </div>
  );
};

export default FeatureSec;
