import React from 'react';

interface PostCardProps {
  id: number;
  title: string;
  body: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, body }) => {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white">
      <h2 className="font-bold text-lg mb-2">
        {id}. {title}
      </h2>
      <p className="text-gray-700">{body}</p>
    </div>
  );
};

export default PostCard;
