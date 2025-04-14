"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../Component/Button";

function Hero() {
  // State for Unsplash images
  const [heroImage, setHeroImage] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Fetch Unsplash images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        // Main hero image (modern dashboard/ecommerce)
        const heroRes = await fetch(
          "https://source.unsplash.com/random/1600x900/?dashboard,analytics,ecommerce,technology&orientation=landscape"
        );
        setHeroImage(heroRes.url);

        // Avatar images
        const avatarUrls = await Promise.all(
          [1, 2, 3, 4].map(() =>
            fetch(
              "https://source.unsplash.com/random/100x100/?portrait,person"
            ).then((res) => res.url)
          )
        );
        setAvatars(avatarUrls);
      } catch (error) {
        console.error("Error loading images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative w-full min-h-screen max-h-[1200px] mx-auto overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-800 dark:to-gray-950 opacity-100 dark:opacity-50 z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
        <div className="flex flex-col lg:flex-row h-full items-center gap-8 lg:gap-12">
          {/* Left Content - Text Section */}
          <motion.div
            className="w-full lg:w-1/2 py-12 md:py-16 lg:py-24 xl:py-32"
            variants={itemVariants}
          >
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 mb-6 font-medium text-sm"
              >
                <span>New Platform</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              >
                <span className="block">Transform Your</span>
                <span className="text-blue-600 dark:text-blue-400">
                  B2B Commerce
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 md:mb-10"
              >
                Our cutting-edge platform connects suppliers and buyers with
                seamless wholesale transactions. Experience procurement
                redefined with real-time analytics and global reach.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Button
                  color="text-white dark:text-gray-100"
                  className="w-full sm:w-auto px-8 py-3.5 text-lg font-medium"
                  bgColor="bg-blue-600 hover:bg-blue-700 focus-visible:outline-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Get Started Free
                </Button>
                <Button
                  color="text-blue-600 dark:text-blue-400"
                  className="w-full sm:w-auto px-8 py-3.5 text-lg font-medium"
                  bgColor="bg-transparent border-2 border-blue-600 hover:bg-blue-50 focus-visible:outline-blue-200 dark:border-blue-400 dark:hover:bg-blue-900/20"
                >
                  Watch Demo
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-gray-800 bg-gray-300 dark:bg-gray-700 overflow-hidden relative"
                    >
                      {loading ? (
                        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-600 animate-pulse" />
                      ) : (
                        <Image
                          src={avatar}
                          alt={`User ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="40px"
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  <p className="font-medium">Trusted by 15,000+ businesses</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm">5.0 (3.2k reviews)</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Image Section */}
          <motion.div
            className="w-full lg:w-1/2 h-[500px] sm:h-[600px] lg:h-full relative"
            variants={itemVariants}
          >
            <div className="absolute inset-0 lg:left-0 overflow-hidden rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700/50">
              {loading ? (
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-300 dark:bg-gray-700 rounded-full mb-4" />
                    <div className="h-4 w-32 bg-gray-300 dark:bg-gray-700 rounded" />
                  </div>
                </div>
              ) : (
                <>
                  <Image
                    src={heroImage}
                    alt="Modern B2B commerce dashboard"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    onError={() => setLoading(true)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                </>
              )}

              {/* Floating Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg max-w-xs hidden lg:block backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 dark:bg-green-900/50 p-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-green-600 dark:text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">
                      Order Completed
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      $12,450.00
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="absolute top-8 right-8 bg-white dark:bg-gray-800 px-3 py-2 rounded-full shadow-md flex items-center gap-2"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  Live Analytics
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;
