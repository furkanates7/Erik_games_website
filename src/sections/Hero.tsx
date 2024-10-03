'use client';
import { motion } from 'framer-motion';
import erik from '../assets/erik_image_2.png';
import eriktext from '../assets/erik_text.png';
import Image from 'next/image';

export default function Hero(): JSX.Element {

  return (
    <section className="pt-8 pb-10 md:pb-10 md:pt-5 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)] overflow-x-clip">
      <div className="container">
        <div className="md:grid md:grid-cols-2 items-center">
          {/* Left Column */}
            <div className="flex flex-col md:items-start justify-center items-center h-full lg:ml-20">
            <Image src={eriktext} alt="Erik Games" className="mt-6" width={300} height={200} />
            <div className="tag mt-6">Development Studio</div>
            <div className="flex gap-1 items-center mt-6">
              <button className="btn btn-primary">Games</button>
              <button className="btn gap-1 hover:text-white">Assets</button>
            </div>
            </div>

          {/* Right Column */}
            <div className="flex justify-center h-full relative mt-20 sm:mt-10 md:mt-0">
              <motion.img
              src={erik.src}
              alt="Erik Image"
              className="h-auto w-full max-w-md md:h-[400px] md:w-auto"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 3,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'mirror',
              }}
              />
            </div>
        </div>
        
      </div>
    </section>
  );
};
