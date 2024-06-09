import { EyeIcon, ThumbsUpIcon, ThumbsDownIcon } from "@/app/components/Icons";
import Link from 'next/link';
import { Post as PostType } from "@/app/types";

interface PostProps {
    post: PostType;
}

export default function Post({ post }: PostProps) {
    return (
        <article className="bg-white rounded-lg shadow-md p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    <Link href={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                </h2>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <EyeIcon />
                        <span>{post.views} views</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <ThumbsUpIcon />
                    <span>{post.reactions.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <ThumbsDownIcon />
                    <span>{post.reactions.dislikes}</span>
                </button>
            </div>
        </article>
    );
}
