"use client";

import useUserPost from '@/hooks/post/useUserPost';
import { Category } from '@prisma/client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { FiSend } from 'react-icons/fi';

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
      content
    }, {
      aaaaa
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
    <div className="pb-20 pt-12 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-6xl bg-transparent rounded-xl sm:p-8 space-y-6 transition-all"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Submit Your Content
        </h2>

        {/* Name  */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="w-full">
            <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">First Name</label>
            <input
              disabled={userPost.isPending}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
          <div className="w-full">
            <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Last Name</label>
            <input
              disabled={userPost.isPending}

              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Email</label>
          <input
            disabled={userPost.isPending}

            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        {/* title */}
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Title</label>
          <input
            disabled={userPost.isPending}

            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>
        {/* Mobile Number */}
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Mobile Number</label>
          <input
            disabled={userPost.isPending}

            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* School/College */}
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">College/School Name (if studying)</label>
          <input
            disabled={userPost.isPending}

            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
            required
          />
        </div>

        {/* Dropdown */}
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Submission Type</label>
          <select
            disabled={userPost.isPending}

            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
          >
            {categories.map((item, i) => <option value={item.value}>{item.label}</option>)}
            {/* <option value="Poetry">Poetry</option>
            <option value="Stories">Stories</option> */}
          </select>
        </div>

        {/* Content */}
        <div>
          <label className="block text-lg font-semibold mb-1 text-gray-700 dark:text-gray-300">Content</label>
          <textarea
            disabled={userPost.isPending}

            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full px-3 py-2 rounded-md h-32 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 focus:ring focus:ring-yellow-500 focus:border-yellow-500"
            placeholder="Write your content here..."
            required
          />
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <button
            disabled={userPost.isPending}

            type="submit"
            className="flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold bg-yellow-600 text-white hover:bg-yellow-700 transition-all ease-in-out duration-200 focus:ring focus:ring-yellow-400"
          >
            <FiSend className="text-white" />
            <span>{
              userPost.isPending ? 'Submitting...' : 'Submit'
            }</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
