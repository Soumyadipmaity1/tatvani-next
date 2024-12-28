"use client"

import { useState, ChangeEvent, FormEvent } from "react";

interface Advertise {
  shopName: string;
  address: string;
  googleMapLink: string;
  description: string;
  image: File | null;
}

const AddAdvertise: React.FC = () => {
  const [advertise, setAdvertise] = useState<Advertise>({
    shopName: "",
    address: "",
    googleMapLink: "",
    description: "",
    image: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAdvertise({ ...advertise, [name]: value });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAdvertise({ ...advertise, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(advertise);
    // submission logic 
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl mb-5">Add New Advertisement</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Shop Name</label>
          <input
            type="text"
            name="shopName"
            value={advertise.shopName}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Address</label>
          <input
            type="text"
            name="address"
            value={advertise.address}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Google Map Location Link</label>
          <input
            type="url"
            name="googleMapLink"
            value={advertise.googleMapLink}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Description</label>
          <textarea
            name="description"
            value={advertise.description}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded h-32"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Shop Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <button type="submit" className="bg-blue-500 px-4 py-2 mt-4 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddAdvertise;
