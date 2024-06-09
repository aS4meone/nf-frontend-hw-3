'use client'
import { useParams } from 'next/navigation';

import { useEffect, useState } from 'react';
import PostDetails from '@/app/components/PostDetails';
import axiosInstance from '@/utils/axiosInstance';
import { Post as PostType } from '@/app/types';

export default function PostPage() {
    const params = useParams();
    const { id } = params;  // Get the id from the route parameters
    const [post, setPost] = useState<PostType | null>(null);
    const [error, setError] = useState<string | null>(null);
    console.log('id' ,id)
    useEffect(() => {
        const fetchPost = async () => {
            if (!id) {
                setError('Invalid post ID.');
                return;
            }

            try {
                const token = localStorage.getItem('token');
                if (token) {
                    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }

                const response = await axiosInstance.get(`/posts/${id}`);
                setPost(response.data);
            } catch (err) {
                console.error(err);
                setError('Post not found.');
            }
        };

        fetchPost();
    }, [id]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!post) return <div className='mt-12'>Loading...</div>;

    return <PostDetails post={post} />;
}
