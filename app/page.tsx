'use client'

import {useEffect, useState} from "react";
import Post from "@/app/components/Post";
import {Post as PostType} from "@/app/types";
import axiosInstance from "@/utils/axiosInstance";

export default function Home() {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
                const response = await axiosInstance.get('/posts');
                setPosts(response.data.posts);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch posts.');
            }
        };

        fetchPosts();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }


    return (
        <div className="home-container mt-10">
            {posts.map(post => (
                <Post
                    key={post.id}
                    post={post}
                />
            ))}
        </div>
    );
}
