import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import PetForm from "../components/Pets";
import Footer from "../components/Footer";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const statistics = [
    { label: "Total Users", value: 1000 },
    { label: "Active Users", value: 750 },
    { label: "New Users", value: 50 },
    { label: "Revenue", value: "$5000" },
  ];

  const recentOrders = [
    { id: 1, customer: "John Doe", product: "Product 1", price: "$50.00" },
    { id: 2, customer: "Jane Smith", product: "Product 2", price: "$75.00" },
    { id: 3, customer: "Alex Johnson", product: "Product 3", price: "$100.00" },
    { id: 4, customer: "Sarah Adams", product: "Product 4", price: "$120.00" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="p-4 max-w-7xl mx-auto">
        <div className="bg-gray-100 min-h-screen">
          <PetForm />
          {/* Header */}
          <div className="mx-auto px-4 py-2 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          </div>
          {/* Main Content */}
          <main className="container mx-auto py-8">
            {/* Statistics */}
            <section className="bg-white rounded-lg shadow p-4 mb-8">
              <h2 className="text-xl font-bold mb-4">Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statistics.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-blue-500 text-white p-4 rounded-lg"
                  >
                    <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                    <p className="text-2xl">{stat.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Recent Orders */}
            <section className="bg-white rounded-lg shadow p-4">
              <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
              <div className="overflow-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left py-2 min-w-[150px]">Order ID</th>
                      <th className="text-left py-2 min-w-[150px]">Customer</th>
                      <th className="text-left py-2 min-w-[150px]">Product</th>
                      <th className="text-left py-2 min-w-[150px]">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders?.map((order) => (
                      <tr key={order.id} className={""}>
                        <td className="py-2">{order.id}</td>
                        <td className="py-2">{order.customer}</td>
                        <td className="py-2">{order.product}</td>
                        <td className="py-2">{order.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
