"use client"

import useAddUserPostDelete from "@/hooks/post/useAddUserPostDelete";
import useApprovePost from "@/hooks/post/useApprovePost";
import { useGetUserPosts } from "@/hooks/post/useGetUserPosts";
import { UserPost } from "@prisma/client";
import { useState, useEffect } from "react";

interface Submission {
  name: string;
  email: string;
  phoneNumber: string;
  collegeName?: string;
  category: string;
  content: string;
}

const submissions: Submission[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    phoneNumber: "123-456-7890",
    collegeName: "Harvard University",
    category: "Article",
    content: "This is a sample article about technology trends."
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    phoneNumber: "987-654-3210",
    collegeName: "",
    category: "Poetry",
    content: "The trees sway in the gentle breeze..."
  },
  {
    name: "Sam Green",
    email: "sam@example.com",
    phoneNumber: "555-555-5555",
    collegeName: "Stanford University",
    category: "Stories",
    content: "Once upon a time, in a faraway land..."
  }
];

const ReviewPost: React.FC = () => {


  const posts = useGetUserPosts();
  const aproveMutation = useApprovePost()
  const deleteMutation = useAddUserPostDelete()
  const handleApprove = (id: string) => {
    const res = window.confirm("Are you sure you want to approve this post?")
    if (res) {
      aproveMutation.mutate({ id })
    }
  }
  const handleDelete = (id: string) => {
    const res = window.confirm("Are you sure you want to delete this post?")
    if (res) {
      deleteMutation.mutate({ id })
    }
  }
  return (
    <div className="p-10 text-white">
      <h2 className="text-3xl mb-5">Review User Submissions</h2>
      <div className="space-y-6">
        {
          posts.isError ? (<p>Error</p>) :
            posts.isLoading ? (
              <p>Loading...</p>) :
              posts.data.length === 0 ? (
                <p>No submissions to review.</p>
              ) : (
                posts.data.map((post: UserPost, index: number) => (
                  <div key={index} className="bg-gray-700 p-5 rounded shadow">
                    <h3 className="text-2xl mb-2">{post.category}</h3>
                    <p><strong>Author Name:</strong> {post.firstName}</p>
                    <p><strong>Email:</strong> {post.email}</p>
                    <p><strong>Phone Number:</strong> {post.mobileNo}</p>
                    {post.college && <p><strong>College Name:</strong> {post.college}</p>}
                    <p><strong>Content:</strong> {post.content}</p>
                    <div className="controlBox gap-2 flex">
                      <button className="bg-green-500 p-2 rounded text-white" onClick={() => handleApprove(post.id)} >Approve</button>
                      <button className="bg-red-500 p-2 rounded text-white" onClick={() => handleDelete(post.id)}>Delete</button>
                    </div>
                  </div>
                ))
              )}
      </div>
    </div>
  );
};

export default ReviewPost;
