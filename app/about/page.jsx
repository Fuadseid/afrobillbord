import { CardContainer, CardBody, CardItem } from "../ui/CardContainer";
const b2bProducts = [
  {
    id: 1,
    productName: "Industrial IoT Monitoring Platform",
    imageUrl: "/th (3).jpg",
    category: "Industry 4.0",
    description: "Real-time equipment monitoring with predictive maintenance alerts.",
    price: "$2,500/month",
    features: ["50+ machine integrations", "Custom dashboards", "API access"],
    vendor: "TechNova Solutions"
  },
  {
    id: 2,
    productName: "Bulk Office Furniture Package",
    imageUrl: "/th (5).jpg",
    category: "Corporate Supplies",
    description: "Ergonomic workstation sets for teams of 50+ employees.",
    price: "$299/station (min. 50 units)",
    features: ["3-year warranty", "White-glove delivery", "Brand customization"],
    vendor: "FurniPro"
  },
  {
    id: 3,
    productName: "Enterprise Cloud Storage",
    imageUrl: "/th (6).jpg",
    category: "SaaS",
    description: "Secure document management with advanced permissions.",
    price: "$8/user/month",
    features: ["1TB storage/user", "GDPR compliant", "Version history"],
    vendor: "CloudSecure Inc."
  },
  {
    id: 4,
    productName: "Commercial Coffee Machine Lease",
    imageUrl: "/th (9).jpg",
    category: "Food Service",
    description: "Premium espresso machines with maintenance included.",
    price: "$150/month",
    features: ["Unlimited repairs", "Bean supply discounts", "Usage analytics"],
    vendor: "BrewMaster Commercial"
  },
  {
    id: 5,
    productName: "Fleet Management Software",
    imageUrl: "/th (3).jpg",
    category: "Logistics",
    description: "GPS tracking and maintenance scheduling for vehicle fleets.",
    price: "$45/vehicle/month",
    features: ["Fuel monitoring", "Driver scoring", "Custom reporting"],
    vendor: "RouteOptima"
  },
  {
    id: 6,
    productName: "Industrial Air Compressor",
    imageUrl: "/th (8).jpg",
    category: "Manufacturing",
    description: "200HP rotary screw compressor with energy recovery system.",
    price: "$28,500",
    features: ["80% energy savings", "Remote monitoring", "5-year warranty"],
    vendor: "AirPower Technologies"
  }
];
function About() {
  return (
    <div className="max-w-7xl  mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Products
      </h1>
      
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        {b2bProducts.map((product) => (
          <CardContainer
            key={product.id}
            containerClassName="bg-gray-50 hover:shadow-xl transition-all duration-300 bg-white  dark:bg-black/0 border rounded-2xl"
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

                {/* Description */}
                <CardItem translateZ="20" className="mb-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {product.description}
                  </p>
                </CardItem>

                {/* Features List */}
                <CardItem translateZ="10" className="mt-auto">
                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardItem>

                {/* CTA Button */}
                <CardItem translateZ="10" className="mt-auto">
                  <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-sm text-center transition-colors duration-300 dark:bg-blue-700 dark:hover:bg-blue-800">
                    Request Demo
                  </button>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default About;