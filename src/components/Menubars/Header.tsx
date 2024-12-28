"use client";

import { useRouter } from 'next/navigation';
import { FC } from 'react';

const Header: FC = () => {
  const router = useRouter();

  const handleLogout = (): void => {
    router.push('/login');
  };

  return (
    <header className="bg-gray-950 text-white p-4 fixed top-0 left-64 right-0 z-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Admin Dashboard</h1>
        <button onClick={handleLogout} className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"> Logout</button>
      </div>
    </header>
  );
};

export default Header;
