import { EyeIcon, ThumbsUpIcon, ThumbsDownIcon } from "@/app/components/Icons";
import { Post as PostType } from "@/app/types";

interface PostDetailsProps {
    post: PostType;
}

export default function PostDetails({ post }: PostDetailsProps) {
    return (
        <article className="bg-white rounded-lg shadow-md p-6 mt-12">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                    {post.title}
                </h1>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                        <EyeIcon />
                        <span>{post.views} views</span>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-4 mb-6">
                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <ThumbsUpIcon />
                    <span>{post.reactions.likes}</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
                    <ThumbsDownIcon />
                    <span>{post.reactions.dislikes}</span>
                </button>
            </div>
            <div className="prose prose-gray dark:prose-invert">
                <p>{post.body}</p>
            </div>
        </article>
    );
}
