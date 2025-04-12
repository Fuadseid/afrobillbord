"use client";
import { motion } from "framer-motion";
import { CardContainer, CardBody, CardItem } from "../ui/CardContainer";

export const suppliers = [
  {
    id: 1,
    name: "MedEquip Solutions",
    logo: "/images/suppliers/medequip.jpg",
    category: "Medical Devices",
    rating: 4.8,
    products: ["Surgical Tools", "Diagnostic Equipment", "Sterilization Gear"],
    contact: "sales@medequip.com",
  },
  {
    id: 2,
    name: "PharmaSource International",
    logo: "/images/suppliers/pharmasource.jpg",
    category: "Pharmaceuticals",
    rating: 4.6,
    products: ["Generic Medicines", "Vaccines", "Biologics"],
    contact: "info@pharmasource.com",
  },
  {
    id: 3,
    name: "DentalCare Providers",
    logo: "/images/suppliers/dentalcare.jpg",
    category: "Dental Equipment",
    rating: 4.7,
    products: ["Dental Chairs", "X-ray Machines", "Sterilizers"],
    contact: "orders@dentalcare.com",
  },
  {
    id: 4,
    name: "LabTech Scientific",
    logo: "/images/suppliers/labtech.jpg",
    category: "Laboratory Equipment",
    rating: 4.9,
    products: ["Microscopes", "Centrifuges", "Analyzers"],
    contact: "support@labtech.com",
  },
  {
    id: 5,
    name: "SafeGuard Medical",
    logo: "/images/suppliers/safeguard.jpg",
    category: "PPE Supplies",
    rating: 4.5,
    products: ["N95 Masks", "Gloves", "Protective Gowns"],
    contact: "orders@safeguard.com",
  },
  {
    id: 6,
    name: "RehabPlus",
    logo: "/images/suppliers/rehabplus.jpg",
    category: "Rehabilitation",
    rating: 4.4,
    products: ["Therapy Tables", "Exercise Bikes", "Mobility Aids"],
    contact: "service@rehabplus.com",
  },
];

export function SupplierCard() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Supplier
      </h1>{" "}
      <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 p-4">
        {suppliers.map((supplier) => (
          <motion.div
            key={supplier.id}
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CardContainer
              containerClassName="hover:shadow-xl border rounded-md"
              className="bg-white dark:bg-gray-800 h-full"
            >
              <CardBody className="flex flex-col h-full p-4">
                {/* Supplier Logo */}
                <CardItem translateZ="50" className="mb-4">
                  <div className="h-32 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-lg">
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className="max-h-full max-w-full object-contain p-4"
                    />
                  </div>
                </CardItem>

                {/* Supplier Info */}
                <CardItem translateZ="30">
                  <h3 className="text-xl font-bold dark:text-white">
                    {supplier.name}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">
                    {supplier.category}
                  </p>
                </CardItem>

                {/* Rating */}
                <CardItem translateZ="20" className="mt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(supplier.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-500 dark:text-gray-300">
                      {supplier.rating.toFixed(1)}
                    </span>
                  </div>
                </CardItem>

                {/* Products */}
                <CardItem translateZ="10" className="mt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {supplier.products.map((product, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </CardItem>

                {/* Contact Button */}
                <CardItem translateZ="10" className="mt-auto pt-4">
                  <a
                    href={`mailto:${supplier.contact}`}
                    className="block w-full py-2.5 px-4 text-center bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                  >
                    Contact Supplier
                  </a>
                </CardItem>
              </CardBody>
            </CardContainer>
          </motion.div>
        ))}
      </div>
    </>
  );
}
