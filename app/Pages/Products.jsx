"use client";

import { CardContainer, CardBody, CardItem } from "../ui/CardContainer";
import { FaAngleRight } from "react-icons/fa";
import {  useState } from "react";
import { motion } from "framer-motion";
const b2bProducts = [
  {
    id: 1,
    productName: "Industrial IoT Monitoring Platform",
    imageUrl: "/th (3).jpg",
    category: "Industry 4.0",
    description: "Real-time equipment monitoring with predictive maintenance alerts.",
    price: "$2,500/month",
    minAmount: "$2,000",
    maxAmount: "$3,000",
    features: ["50+ machine integrations", "Custom dashboards", "API access"],
    vendor: "TechNova Solutions",
    supplierName: "TechNova Industrial Solutions Inc."
  },
  {
    id: 2,
    productName: "Bulk Office Furniture Package",
    imageUrl: "/th (5).jpg",
    category: "Corporate Supplies",
    description: "Ergonomic workstation sets for teams of 50+ employees.",
    price: "$299/station",
    minAmount: "$14,950", // 50 units minimum
    maxAmount: "$29,900", // 100 units maximum
    features: [
      "3-year warranty",
      "White-glove delivery",
      "Brand customization"
    ],
    vendor: "FurniPro",
    supplierName: "FurniPro Office Solutions Ltd."
  },
  {
    id: 3,
    productName: "Enterprise Cloud Storage",
    imageUrl: "/th (6).jpg",
    category: "SaaS",
    description: "Secure document management with advanced permissions.",
    price: "$8/user/month",
    minAmount: "$800/month", // 100 users minimum
    maxAmount: "Custom",
    features: ["1TB storage/user", "GDPR compliant", "Version history"],
    vendor: "CloudSecure Inc.",
    supplierName: "CloudSecure Technologies"
  },
  {
    id: 4,
    productName: "Commercial Coffee Machine Lease",
    imageUrl: "/th (9).jpg",
    category: "Food Service",
    description: "Premium espresso machines with maintenance included.",
    price: "$150/month",
    minAmount: "$1,800/year",
    maxAmount: "$3,600/year",
    features: ["Unlimited repairs", "Bean supply discounts", "Usage analytics"],
    vendor: "BrewMaster Commercial",
    supplierName: "BrewMaster Catering Equipment"
  },
  {
    id: 5,
    productName: "Fleet Management Software",
    imageUrl: "/th (3).jpg",
    category: "Logistics",
    description: "GPS tracking and maintenance scheduling for vehicle fleets.",
    price: "$45/vehicle/month",
    minAmount: "$540/year", // 1 vehicle
    maxAmount: "$5,400/year", // 10 vehicles
    features: ["Fuel monitoring", "Driver scoring", "Custom reporting"],
    vendor: "RouteOptima",
    supplierName: "RouteOptima Logistics Solutions"
  },
  {
    id: 6,
    productName: "Industrial Air Compressor",
    imageUrl: "/th (8).jpg",
    category: "Manufacturing",
    description: "200HP rotary screw compressor with energy recovery system.",
    price: "$28,500",
    minAmount: "$28,500", // single unit
    maxAmount: "$85,500", // 3 units
    features: ["80% energy savings", "Remote monitoring", "5-year warranty"],
    vendor: "AirPower Technologies",
    supplierName: "AirPower Industrial Equipment Co."
  }
];


function About() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {b2bProducts.map((product) => (
          <CardContainer
            key={product.id}
            containerClassName="bg-gray-50 hover:shadow-xl transition-all duration-300 bg-white dark:bg-black/0 border rounded-2xl"
            className="bg-white dark:bg-gray-800 h-full border border-gray-200 dark:border-gray-700"
          >
            <CardBody className="flex flex-col h-full p-0 overflow-hidden">
              {/* Image with Category Badge */}
              <CardItem translateZ="50" className="relative">
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  {product.category}
                </span>
              </CardItem>

              {/* Content Area */}
              <div className="p-5 flex flex-col h-full">
                {/* Product Name & Price */}
                <CardItem translateZ="30">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {product.productName}
                    </h3>
                    <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-200">
                      {product.price}
                    </span>
                  </div>
                </CardItem>

                {/* Supplier Info */}
                <CardItem translateZ="20" className="mb-2">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Supplier: <span className="font-medium">{product.supplierName}</span>
                  </p>
                </CardItem>

                {/* Price Range */}
                <CardItem translateZ="20" className="mb-4">
                  <div className="flex gap-2 text-sm">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-200">
                      Min: {product.minAmount}
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded dark:bg-orange-900 dark:text-orange-200">
                      Max: {product.maxAmount}
                    </span>
                  </div>
                </CardItem>

                {/* Features List */}
                <CardItem translateZ="10" className="mt-auto">
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg
                          className="w-3 h-3 text-green-500 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardItem>

                {/* CTA Button */}
                <CardItem translateZ="10" className="mt-auto">
                  <button
                    onClick={() => handleViewDetail(product)}
                    className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm text-center transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-800 flex items-center justify-center gap-2"
                  >
                    View detail <FaAngleRight />
                  </button>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-bold dark:text-white">
                    {selectedProduct.productName}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Supplier: {selectedProduct.supplierName}
                  </p>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.productName}
                  className="w-full h-48 object-contain bg-gray-100 dark:bg-gray-700 rounded-lg"
                />
                <div>
                  <div className="mb-4">
                    <h3 className="font-semibold dark:text-white mb-2">Pricing</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm dark:bg-green-900 dark:text-green-200">
                        {selectedProduct.price}
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm dark:bg-purple-900 dark:text-purple-200">
                        Min: {selectedProduct.minAmount}
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm dark:bg-orange-900 dark:text-orange-200">
                        Max: {selectedProduct.maxAmount}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {selectedProduct.description}
                  </p>
                  
                  <div>
                    <h3 className="font-semibold dark:text-white mb-2">Features:</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default About;