"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
       <div className="p-6 sm:p-0 flex  justify-center items-center bg-gray-50 dark:bg-gray-900 transition-all" suppressHydrationWarning={true}>
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-3xl rounded-lg sm:p-8 space-y-6 transition-all"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-yellow-400 mb-4">
          Contact Us
        </h2>
        
        {/* Name */}
        <div>
          <label className="block text-lg mb-1 text-gray-700 dark:text-gray-300">Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500" 
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500" 
            required
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-lg mb-1 text-gray-700 dark:text-gray-300">Subject</label>
          <input 
            type="text" 
            name="subject" 
            value={formData.subject} 
            onChange={handleChange} 
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500" 
            required
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-lg mb-1 text-gray-700 dark:text-gray-300">Message</label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            className="w-full px-4 py-2 rounded-md h-32 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500" 
            placeholder="Write your message here..." 
            required
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold bg-yellow-600 text-white hover:bg-yellow-700 transition-all ease-in-out duration-200 focus:ring focus:ring-yellow-400"
          >
            <FiSend className="text-white" />
            <span>Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
