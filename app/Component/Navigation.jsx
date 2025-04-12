"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import ToggleButton from "./ToggleButton";
import Searchinput from "./Searchinput";
function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#hero", text: "Home" },
    { href: "#about", text: "About us" },
    { href: "#products", text: "Products" },
    { href: "#supplier", text: "Supplier" },
    { href: "https://afro-train.com/", text: "Learn" },
  ];

  return (
    <>
      <div className=" w-full  fixed top-4 z-50">
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex dark:bg-black/20 text-base rounded-2xl  bg-blue-600/50   dark:border-white/10 justify-between items-center p-6 md:p-10 h-14 backdrop-blur-sm  text-white font-sans max-w-6xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{
              scale: 1.05,
              color: "#F3F4F6",
              textShadow: "0px 0px 8px rgba(255,255,255,0.4)",
            }}
            transition={{
              delay: 0.1 ,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="hover:text-white  text-xl ">
              AfroBillbord
            </Link>
          </motion.div>
          <Searchinput/>

          {/* Desktop Navigation */}
          <div className="hidden md:flex  gap-6 lg:gap-8 items-center">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffff",
                  textShadow: "0px 0px 8px rgba(255,255,255,0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href={link.href}
                  className="text-lg font-medium tracking-wide transition-all duration-300 hover:text-gray-200"
                >
                  {link.text}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-px bg-white"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            <ToggleButton />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 45, y: 5 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-slate-500 dark:bg-white mb-1.5"
              />
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-slate-500 dark:bg-white mb-1.5"
              />
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: -45, y: -5 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-slate-500 dark:bg-white"
              />
            </button>
          </div>
        </motion.nav>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 bg-slate-500/90 dark:bg-black/90 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden"
            >
              <button
                onClick={toggleMenu}
                className="absolute top-6 right-6 text-white text-2xl"
                aria-label="Close menu"
              >
                &times;
              </button>

              <div className="flex flex-col items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.1 * index,
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                    exit={{ opacity: 0, y: 20 }}
                    whileHover={{
                      scale: 1.05,
                      color: "#F3F4F6",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-xl font-medium"
                  >
                    
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="block py-2 px-4 text-white"
                    >
                      {link.text}
                    </Link>
                  </motion.div>
                ))}


                <ToggleButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer to prevent content from being hidden behind fixed nav */}
      <div className="h-15 "></div>
    </>
  );
}

export default Navigation;
