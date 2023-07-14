import React, { useState } from "react";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    { id: 1, name: "Pet Shower", price: 25, category: "shower" },
    { id: 2, name: "Nail Cutting", price: 15, category: "nail_cutting" },
    { id: 3, name: "Surgery", price: 200, category: "surgery" },
    { id: 4, name: "Dental Cleaning", price: 50, category: "surgery" },
    { id: 5, name: "Vaccination", price: 30, category: "surgery" },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  const options = [
    { value: "all", label: "All" },
    { value: "nail_cutting", label: "Nail Cutting" },
    { value: "shower", label: "Shower" },
    { value: "surgery", label: "Surgery" },
  ];

  return (
    <div className="bg-white p-4 max-w-7xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Filter Services</h2>
      <div className="flex items-center mb-4">
        <div className="max-w-xs mx-auto">
          <div className="relative inline-flex">
            <svg
              className="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 412 232"
            >
              <path
                d="M412 0L206 232 0 0h412zM0 0l206 232L0 0z"
                fill="#648299"
                fillRule="evenodd"
              />
            </svg>
            <select
              className="border-2 border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center"
          >
            <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-700">Price: ${service.price}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
