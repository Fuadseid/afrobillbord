"use client";
import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { companiesData } from "../../data/companiesdata";
import CompanyDetailSection from "./CompanyDetailSection";
const CompanyDetail = () => {
  const params = useParams();
  const router = useRouter();
  const companyId = parseInt(params.id);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const company = companiesData.find((company) => company.id === companyId);

  const toggleProductSelection = (product) => {
    setSelectedProducts((prev) => {
      if (prev.some((p) => p.name === product.name)) {
        return prev.filter((p) => p.name !== product.name);
      } else {
        return [...prev, product];
      }
    });
  };

  const handleOrder = () => {
    // In a real app, you would send this to your backend
    console.log("Order placed for:", selectedProducts);
    setOrderPlaced(true);
    setSelectedProducts([]);
    setTimeout(() => setOrderPlaced(false), 3000);
  };

  if (!company) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-20 pt-28 text-center">
          <h1 className="text-3xl font-bold mb-4">Company Not Found</h1>
          <button
            onClick={() => router.back()}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Back to Companies
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-20 pt-28"
      >

        <motion.div
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="mb-8"
        >
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Companies
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8"
        >
          <div className="p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-lg border border-gray-200 dark:border-gray-700"
                />
              </motion.div>

              <div className="flex-1">
                <motion.h1
                  className="text-3xl md:text-4xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {company.name}
                </motion.h1>

                <motion.div
                  className="flex flex-wrap gap-2 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
                    {company.category}
                  </span>
                </motion.div>

                <motion.p
                  className="text-lg mb-6 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {company.description}
                </motion.p>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-2">Founded</h3>
                    <p>{company.founded}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-2">Employees</h3>
                    <p>{company.employees}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-500 dark:text-gray-400 mb-2">Headquarters</h3>
                    <p>{company.headquarters}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-8 md:p-10">
            <h2 className="text-2xl font-bold mb-6">Products</h2>

            <div className="space-y-4">
              {company.products.map((product, index) => (
                <motion.div
                  key={`${product.name}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`p-4 rounded-lg border ${
                    selectedProducts.some(p => p.name === product.name)
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30'
                      : 'border-gray-200 dark:border-gray-700'
                  }`}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => toggleProductSelection(product)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                      <div className="mt-2 flex gap-2">
                        <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                          {product.category}
                        </span>
                        <span className="text-sm px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
                          Since {product.launchYear}
                        </span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={selectedProducts.some(p => p.name === product.name)}
                      onChange={() => toggleProductSelection(product)}
                      className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {selectedProducts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg"
              >
                <h3 className="font-semibold mb-4">Selected Products ({selectedProducts.length})</h3>
                <ul className="mb-4 space-y-2">
                  {selectedProducts.map((product) => (
                    <li key={product.name} className="flex justify-between">
                      <span>{product.name}</span>
                      <button
                        onClick={() => toggleProductSelection(product)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <motion.button
                  onClick={handleOrder}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                >
                  Place Order
                </motion.button>
              </motion.div>
            )}

            {orderPlaced && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-lg"
              >
                Order placed successfully!
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.main>
    <CompanyDetailSection
    company={{
      name: "ABC Manufacturing",
      description:
        "Leading supplier of quality products with 10+ years of experience in the industry.",
      products: [
        {
          id: 1,
          name: "Premium Cotton T-Shirts",
          category: "Apparel",
          price: 4.99,
          moq: "100 pieces",
          image: "/images/shirt.jpg",
        },
        {
          id: 2,
          name: "Wireless Earbuds",
          category: "Electronics",
          price: 12.5,
          moq: "50 pieces",
          image: "/images/earbuds.jpg",
        },
      ],
      services: [
        {
          id: 1,
          name: "Private Labeling",
          description: "Custom branding for your products",
          benefits: [
            "No minimum order quantity",
            "Fast turnaround time",
            "Custom packaging options",
          ],
        },
      ],
      faqs: [
        {
          id: 1,
          question: "What is your minimum order quantity?",
          answer:
            "Our MOQ varies by product but typically starts at 50 units.",
        },
        {
          id: 2,
          question: "Do you offer international shipping?",
          answer:
            "Yes, we ship worldwide with DHL, FedEx, and other major carriers.",
        },
      ],
    }}
  />
    </div>
  );
};

export default CompanyDetail;
