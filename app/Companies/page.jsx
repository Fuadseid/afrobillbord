"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { staggerContainer } from '../utils/motion';
import { companiesData } from '../data/companiesdata';
const companyCategories = [
  { id: 'all', name: 'All Companies' },
  { id: 'tech', name: 'Technology' },
  { id: 'manufacturing', name: 'Manufacturing' },
  { id: 'healthcare', name: 'Healthcare' },
  { id: 'finance', name: 'Finance' },
  { id: 'retail', name: 'Retail' },
  { id: 'energy', name: 'Energy' },
  { id: 'transportation', name: 'Transportation' },
];



// Animation variants


const companyCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.3 }
  }
};

const categoryButtonVariants = {
  inactive: { scale: 1 },
  active: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  }
};

export default function Companies() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCompanies = companiesData.filter(company => {
    const matchesCategory = activeCategory === 'all' || company.category === activeCategory;
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="flex relative h-full top-20"
    >
      {/* Sidebar Navigation */}
      <motion.div 
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-white dark:text-white mt-4 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 p-4"
      >
        <h2 className="text-xl font-bold mb-6 dark:text-white">Categories</h2>
        <ul className="space-y-2">
          {companyCategories.map(category => (
            <motion.li 
              key={category.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.button
                onClick={() => setActiveCategory(category.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
                variants={categoryButtonVariants}
                animate={activeCategory === category.id ? "active" : "inactive"}
              >
                {category.name}
              </motion.button>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold dark:text-white mb-4">Companies Directory</h1>
          
          {/* Search Bar */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="relative max-w-md"
          >
            <input
              type="text"
              placeholder="Search companies..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <motion.svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ rotate: searchQuery ? 10 : 0 }}
              transition={{ type: "spring" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Companies List - Single Column */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="space-y-6"
        >
          <AnimatePresence>
            {filteredCompanies.map((company, index) => (
              <motion.div
                key={company.id}
                variants={companyCardVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover="hover"
                custom={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 w-full"
              >
                <div className="p-6 flex items-start">
                  <motion.img
                    src={company.logo}
                    alt={company.name}
                    className="w-16 h-16 object-contain mr-6"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl font-semibold dark:text-white mb-2"
                      whileHover={{ color: "#3b82f6" }}
                    >
                      <Link href={`/companies/${company.id}`} className="hover:underline">
                        {company.name}
                      </Link>
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 dark:text-gray-300 mb-3"
                      whileHover={{ x: 5 }}
                    >
                      {company.description}
                    </motion.p>
                    <div className="flex justify-between items-center">
                      <motion.span 
                        className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full dark:bg-blue-900 dark:text-blue-200"
                        whileHover={{ scale: 1.1 }}
                      >
                        {companyCategories.find(c => c.id === company.category)?.name}
                      </motion.span>
                      <motion.div whileHover={{ x: 5 }}>
                      <Link href={`/Companies/${company.id}`}>
                            <span className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
                              View Details →
                            </span>
                          </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        <AnimatePresence>
          {filteredCompanies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <p className="text-gray-500 dark:text-gray-400">
                No companies found matching your criteria
              </p>
              <motion.button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Reset Filters
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}