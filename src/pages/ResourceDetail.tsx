// src/pages/ResourceDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourceDetail: React.FC = () => {
  const { id } = useParams();
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="container mx-auto p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Resource Not Found
        </h2>
        <p className="text-gray-700 mb-6">指定のリソースは存在しません。</p>
        <Link to="/resources" className="text-blue-500 hover:underline">
          Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      {/* タイトル */}
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        {resource.title}
      </h1>

      {/* 画像がある場合は表示 */}
      {resource.imageUrl && (
        <div className="flex justify-center mb-6">
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="max-w-xs rounded shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      )}

      {/* 説明文 */}
      <p className="text-lg text-gray-700 mb-6">{resource.description}</p>

      {/* 外部リンク */}
      <p>
        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Visit Resource
        </a>
      </p>

      {/* 戻るリンク */}
      <div className="mt-6">
        <Link to="/resources" className="text-blue-500 hover:underline">
          ← Back to Resources
        </Link>
      </div>
    </div>
  );
};

export default ResourceDetail;
