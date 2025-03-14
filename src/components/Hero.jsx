import React from 'react'
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <div className='hero h-screen bg-[#f9f9f9] py-12 relative mt-[60px]'>
        <picture className='w-full mx-auto absolute top-[120px] left-0 grid place-items-center'>
            <source srcset='./hero_mac_mini_1.jpg, ./hero_mac_mini_1.jpg 2x' media='(min-width: 0px)' />
            <motion.img initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.7, ease: 'easeInOut'}} className='size-[440px]' src="./hero_mac_mini.jpg" alt="Mac Mini Hero Image" />
        </picture>
      <section className='text-center'>
        <div className="releaseDate">
            <p className='text-[14px] text-center text-gray-700'>
            Now through April 2, get extra trade‑in credit toward a new Mac with Apple Trade In.* Shop Mac
            </p>
        </div>
      </section>
      <div className="size-[500px] mx-auto"></div>
      <motion.section initial={{opacity:0, y:100, scale: 0.4}} whileInView={{opacity:1, y:0, scale:1}} transition={{duration:0.7, ease: 'easeInOut'}} className="titleTexts text-center">
        <h1 className='max-w-[500px] mx-auto text-4xl font-bold bg-[url(./siri_gradient_endframe__bckop9a3mmpe_large.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent'>Hello, Apple Intelligence.</h1>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-semi-bold py-2 px-4 rounded-full my-4'>Buy</button>
        <h4 className='font-medium text-xl'>From $599 or $49.91/mo. for 12 mo.**</h4>
        <p className='text-lg text-gray-600'>Apple Intelligence Now Available</p>
      </motion.section>
    </div>
  )
}
