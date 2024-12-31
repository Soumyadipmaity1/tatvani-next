"use client";

import useUserPost from '@/hooks/post/useAddUserPost';
import { Category } from '@prisma/client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FiSend, FiUpload } from 'react-icons/fi';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  school: string;
  category: Category;
  content: string;
  title: string;
}

const SubmissionForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    school: '',
    category: Category.Article,
    content: '',
    title: ''
  });
  const userPost = useUserPost();
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstName, lastName, email, mobile, school, category, content, title } = formData;
    userPost.mutate({
      firstName,
      lastName,
      email,
      mobileNo: mobile,
      college: school,
      category,
      title,
      content,
    }, {

      onSuccess: () => {
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          school: '',
          category: Category.Article,
          content: '',
          title: ''
        })
      }
    });

  };
  const categories = [
    { label: "Article", value: "Article" },
    { label: "Poetry", value: "Poetry" },
    { label: "Stories", value: "Stories" },
  ];
  return (
    <div className="pb-20 pt-12 flex justify-center items-center p-6 bg-gray-100 dark:bg-gray-800">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-6xl bg-white dark:bg-gray-700 rounded-xl shadow-lg sm:p-8 space-y-6 transition-all"
    >
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-pitch">
        Submit Your Content
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">First Name</label>
          <input
            disabled={userPost.isPending}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Last Name</label>
          <input
            disabled={userPost.isPending}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Email</label>
        <input
          disabled={userPost.isPending}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Title</label>
        <input
          disabled={userPost.isPending}
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Mobile Number</label>
        <input
          disabled={userPost.isPending}
          type="tel"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
          required
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">College/School Name (if studying)</label>
        <input
          disabled={userPost.isPending}
          type="text"
          name="school"
          value={formData.school}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Submission Type</label>
        <select
          disabled={userPost.isPending}
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
        >
          {categories.map((item, i) => <option key={i} value={item.value}>{item.label}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Content</label>
        <textarea
          disabled={userPost.isPending}
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-3 py-2 rounded-md h-32 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
          placeholder="Write your content here..."
          required
        />
      </div>

      <div>
        <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-200">Upload Image</label>
        <input
          disabled={userPost.isPending}
          type="file"
          name="image"
          // onChange={}
          className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 focus:ring focus:ring-blue-300 dark:focus:ring-blue-700 focus:border-blue-300 dark:focus:border-blue-700"
          accept="image/*"
        />
      </div>

      <div className="flex justify-center">
        <button
          disabled={userPost.isPending}
          type="submit"
          className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold bg-blue-500 text-white hover:bg-blue-600 transition-all ease-in-out duration-200 focus:ring focus:ring-blue-300"
        >
          {userPost.isPending ? <FiUpload className="animate-spin" /> : <FiSend />}
          <span>{userPost.isPending ? 'Submitting...' : 'Submit'}</span>
        </button>
      </div>
    </form>
  </div>
  );
};

export default SubmissionForm;
