import { Play } from "lucide-react";
import React, { useRef } from "react";
import {motion, useScroll, useTransform} from 'framer-motion';

export default function Announcement() {

  const contRef = useRef(null);

  const {scrollYProgress} = useScroll();
  
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);


  return (
    <div ref={contRef} className="container mx-auto">
      <motion.section style={{scaleX: scale}} transition={{ease:'easeInOut'}} className="w-full bg-[#FBF7F4] py-16 px-8 flex justify-between items-center rounded-2xl my-40">
        <div className="text">
          <h2 className="font-bold text-4xl mb-4">
            See the new <br /> Mac mini in action
          </h2>
          <p className="text-blue-500 flex gap-4">
            <a href="#" className="flex text-[16px] items-center">Watch the Announcement <Play size={18} /></a>
            <a href="#" className="flex text-[16px] items-center"> Watch in ASL Sickkkkkkkk <Play size={18} /></a>
          </p>
        </div>
        <div className="image">
            <img src="./banner_hello__bic3h8czgxaq_large.jpg" alt="" />
        </div>
      </motion.section>
    </div>
  );
}
