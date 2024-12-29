"use client"

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

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Submission[]>([]);

    useEffect(() => {
        setPosts(submissions);
    }, []);

    // const 

    return (
        <div className="p-10 text-white">
            <h2 className="text-3xl mb-5">Review User Submissions</h2>
            <div className="space-y-6">
                {posts.length === 0 ? (
                    <p>No submissions to review.</p>
                ) : (
                    posts.map((post, index) => (
                        <div key={index} className="bg-gray-700 p-5 rounded shadow">
                            <h3 className="text-2xl mb-2">{post.category}</h3>
                            <p><strong>Author Name:</strong> {post.name}</p>
                            <p><strong>Email:</strong> {post.email}</p>
                            <p><strong>Phone Number:</strong> {post.phoneNumber}</p>
                            {post.collegeName && <p><strong>College Name:</strong> {post.collegeName}</p>}
                            <p><strong>Content:</strong> {post.content}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Posts;
