"use client"

import { useState, ChangeEvent, FormEvent } from "react";

interface Post {
  title: string;
  author: string;
  content: string;
  category: string;
  image: File | null;
}

const AddPost: React.FC = () => {
  const [post, setPost] = useState<Post>({
    title: "",
    author: "",
    content: "",
    category: "", 
    image: null
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setPost({ ...post, image: e.target.files[0] });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post);
    // submission logic 
  };

  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl mb-5">Add New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2">Title</label>
          <input
           title="title"
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Author</label>
          <input
          title="author"
            type="text"
            name="author"
            value={post.author}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Content</label>
          <textarea
          title="content"
            name="content"
            value={post.content}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded h-32"
            required
          />
        </div>

        <div>
          <label className="block mb-2">Category</label>
          <select
          title="category"
            name="category"
            value={post.category}
            onChange={handleChange}
            className="w-full p-2 bg-gray-700 border border-gray-600 rounded"
          >
            <option value="Article">Article</option>
            <option value="Poetry">Poetry</option>
            <option value="Stories">Stories</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Related Image</label>
          <input
          title="image"
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

export default AddPost;
