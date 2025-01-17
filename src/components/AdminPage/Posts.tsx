"use client"

import useDeletePost from "@/hooks/post/useDeletePost";
import { useGetPosts } from "@/hooks/post/useGetPosts";
import { Post } from "@prisma/client";
import { useState, useEffect } from "react";

interface Submission {
    name: string;
    email: string;
    phoneNumber: string;
    collegeName?: string;
    category: string;
    content: string;
}

// const submissions: Submission[] = [
//     {
//         name: "John Doe",
//         email: "john@example.com",
//         phoneNumber: "123-456-7890",
//         collegeName: "Harvard University",
//         category: "Article",
//         content: "This is a sample article about technology trends."
//     },
//     {
//         name: "Jane Smith",
//         email: "jane@example.com",
//         phoneNumber: "987-654-3210",
//         collegeName: "",
//         category: "Poetry",
//         content: "The trees sway in the gentle breeze..."
//     },
//     {
//         name: "Sam Green",
//         email: "sam@example.com",
//         phoneNumber: "555-555-5555",
//         collegeName: "Stanford University",
//         category: "Stories",
//         content: "Once upon a time, in a faraway land..."
//     }
// ];

type CardProps = {
    author: string;
    category: string;
    content: string;
    createdAt: Date;
    id: string;
    imageUrl: string;
    title: string;
    updatedAt: Date;
};

const Card: React.FC<CardProps> = ({ author, category, content, createdAt, id, imageUrl, title, updatedAt }) => {

    const delmutation = useDeletePost();
    const handlePostDelete = async (id: string) => {
        const res = window.confirm("Are you sure you want to delete this post?");
        if (res) {
            delmutation.mutate({ id: id });
        }
    }

    return (
        <div className="max-w-sm rounded-lg shadow-lg bg-white border border-gray-200 w-5/12">
            <img
                src={imageUrl}
                alt="Card Image"
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
                <div className="flex justify-between items-center text-gray-500 text-sm">
                    <span>{category}</span>
                    <span>{new Date(createdAt).toLocaleDateString()}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800 hover:text-gray-600 transition">
                    {title}
                </h2>
                <p className="mt-2 text-gray-600 text-wrap text-sm">{content}</p>
                <div className="mt-4">
                    <span className="text-sm text-gray-500">Author:</span>
                    <span className="ml-2 text-gray-800 font-medium">{author}</span>
                </div>
            </div>
            <div className="control flex justify-between p-4 border-t border-gray-500">
                {/* <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Edit</button> */}
                <button onClick={() => handlePostDelete(id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
            </div>
        </div>
    );
};


const Posts: React.FC = () => {



    const posts = useGetPosts();
    console.log(posts.data)
    return (
        <div className="p-10 text-white">
            <h2 className="text-3xl mb-5">Review User Submissions</h2>
            <div className="space-y-6 flex flex-wrap gap-2">
                {
                    posts.isError ? <p>Error fetching posts</p> : posts.isLoading ? <p>Loading...</p> : posts.data.posts.length===0 ?<p>
                        No posts to display
                    </p> :posts.data.posts?.map((post: Post, index: number) => <Card
                        id={post.id}
                        title={post.title}
                        category={post.category}
                        content={post.content}
                        createdAt={post.createdAt}
                        updatedAt={post.updatedAt}
                        imageUrl={post.imageUrl!}
                        author={post.author}
                    />)
                }
            </div>
        </div>
    );
};

export default Posts;
