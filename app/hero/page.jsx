"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Component/Button";
function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full   h-[745px] mx-auto  overflow-hidden shadow-xl"
    >
      <Image
        src="/hero.png"
        alt="Professional B2B e-commerce platform connecting businesses"
        fill
        className="object-cover mt-0 top-0"
        priority
        quality={100}
        sizes="100vw,  (max-width: 1200px) 75vw, 50vw"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0  bg-black/80 flex flex-col items-center justify-center p-8 text-center">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          Come to us and Streamline Your B2B
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl text-white max-w-2xl mb-8"
        >
          The premier platform for wholesale transactions and business
          procurement
        </motion.p>
{/*         <div className="flex flex-col md:flex-row gap-4">
          <Button color="text-white " className="w-56 px-2 py-3 " bgColor="dark:bg-blue-900 bg-blue-600 hover:bg-blue-700" text>
            View Product
          </Button>{" "}
          <Button className="w-56 px-2 py-3 " color="text-white " bgColor="dark:bg-blue-900 bg-blue-600 hover:bg-blue-700">
            Sell Product
          </Button>
        </div> */}
      </div>
    </motion.div>
  );
}

export default Hero;
