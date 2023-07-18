import React, { useState, useEffect } from "react";
import { ContextDatas } from "../context/mycontext"; 

const PetForm = () => {
  const { pets, setPets, email: username } = ContextDatas();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (pets?.length) localStorage.setItem(username, JSON.stringify(pets));
  }, [pets]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const pet = {
      name,
      email,
    };

    setPets([...pets, pet]);
    setName("");
    setEmail("");
    setSuccessMessage("Pet added successfully!");
  };

  return (
    <div className="mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">Store Pets</h1>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter pet's name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter customer's email"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Pet
          </button>
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </div>
      </form>

      <div className="max-w-7xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Customer Pets</h2>
        {pets.length === 0 ? (
          <p>No pets found</p>
        ) : (
          <ul className="bg-white rounded-lg shadow divide-y divide-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pets &&
              pets?.length &&
              pets?.map((pet, index) => (
                <li key={index} className="px-4 py-3">
                  <p className="text-gray-700">
                    <span className="font-bold">Name: </span>
                    {pet.name}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-bold">Email: </span>
                    {pet.email}
                  </p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PetForm;
