"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Powering Africa's B2B Trade
        </motion.h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          AfroBillbord connects 5,000+ businesses with trusted suppliers across healthcare, manufacturing, and infrastructure sectors.
        </p>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <StatCard value="500+" label="Verified Suppliers" />
        <StatCard value="10,000+" label="Monthly Transactions" />
        <StatCard value="24h" label="Avg. Response Time" />
        <StatCard value="15+" label="African Countries" />
      </div>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            To simplify B2B procurement in Africa by eliminating middlemen, reducing costs by up to 30%, and ensuring transparent transactions.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <CheckIcon className="text-green-500 mt-1 mr-2" />
              <span>100% supplier verification</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="text-green-500 mt-1 mr-2" />
              <span>Secure payment escrow</span>
            </li>
            <li className="flex items-start">
              <CheckIcon className="text-green-500 mt-1 mr-2" />
              <span>Dedicated compliance team</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Team CTA */}
      <section className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">Join Our Network</h3>
        <p className="mb-6 max-w-2xl mx-auto">
          Whether you're a supplier or buyer, AfroBillbord helps you grow with Africa's fastest-growing B2B platform.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium">
          Get Started
        </button>
      </section>
    </div>
  );
}

// Reusable components
function StatCard({ value, label }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm text-center"
    >
      <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">{value}</p>
      <p className="text-gray-500 dark:text-gray-400">{label}</p>
    </motion.div>
  );
}

function CheckIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
  );
}