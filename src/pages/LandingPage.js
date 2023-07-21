import React from "react";

const LandingPage = () => {
  return (
    <>
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto">
          <h1 className="text-white text-4xl font-bold">Pet Services</h1>
        </div>
      </header>
      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">Dog Walking</h3>
              <p>Professional dog walking services.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">Pet Grooming</h3>
              <p>Expert pet grooming for all breeds.</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <h3 className="text-xl font-bold mb-2">Pet Sitting</h3>
              <p>Trusted pet sitting services for your furry friends.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg">
                "My dog loves the daily walks! Thank you, Pet Services!"
              </p>
              <p className="font-bold mt-2">- John Doe</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-md">
              <p className="text-lg">
                "The grooming service was excellent, and my cat looks adorable!"
              </p>
              <p className="font-bold mt-2">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-blue-500 py-4">
        <div className="container mx-auto text-center">
          <p className="text-white">
            © 2023 Pet Services. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
