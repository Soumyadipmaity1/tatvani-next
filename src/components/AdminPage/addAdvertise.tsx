"use client"
import useAddAdvertisement from '@/hooks/advertisement/useAddAdvertisement';
import React, { useState, FormEvent } from 'react';

type CardProps = {
  author: string;
  category: string;
  content: string;
  createdAt: string;
  id: string;
  imageUrl: string;
  title: string;
  updatedAt: string;
};

const categories = [
  { label: "Article", value: "Article" },
  { label: "Poetry", value: "Poetry" },
  { label: "Stories", value: "Stories" },
];

const AddAdvertisment: React.FC<CardProps> = ({ author, category, content, createdAt, id, imageUrl, title, updatedAt }) => {
  const [advertise, setAdvertise] = useState({
    shopName: '',
    address: '',
    googleMapLink: '',
    description: '',
    image: null as File | null,
  });
  const advertiseMutation = useAddAdvertisement();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(advertise)
    const formData = new FormData();
    formData.append('shopName', advertise.shopName);
    formData.append('address', advertise.address);
    formData.append('googleMapLink', advertise.googleMapLink);
    formData.append('description', advertise.description);
    if (advertise.image) formData.append('image', advertise.image);

    // console.log('Submitting form with data:', advertise);
    // // Call your mutation or API function here
    // // Example:
    advertiseMutation.mutate(formData,
      //    {
      //   onSuccess: () => setAdvertise({ shopName: '', address: '', googleMapLink: '', description: '', image: null }),
      // }
    );

    // setAdvertise({ shopName: '', address: '', googleMapLink: '', description: '', image: null });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm rounded-lg shadow-lg bg-white border border-gray-200 w-5/12 p-4">
      <img
        src={imageUrl}
        alt="Card Image"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <label className="block text-sm text-gray-500 mb-2">Shop Name</label>
        <input
          type="text"
          value={advertise.shopName}
          onChange={(e) => setAdvertise({ ...advertise, shopName: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-gray-500 mb-2">Address</label>
        <input
          type="text"
          value={advertise.address}
          onChange={(e) => setAdvertise({ ...advertise, address: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-gray-500 mb-2">Google Map Link</label>
        <input
          type="text"
          value={advertise.googleMapLink}
          onChange={(e) => setAdvertise({ ...advertise, googleMapLink: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-gray-500 mb-2">Description</label>
        <textarea
          value={advertise.description}
          onChange={(e) => setAdvertise({ ...advertise, description: e.target.value })}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-gray-500 mb-2">Image</label>
        <input
          type="file"
          onChange={(e) => setAdvertise({ ...advertise, image: e.target.files?.[0] || null })}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mt-4 flex justify-end">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddAdvertisment;
