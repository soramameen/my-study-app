// src/pages/ResourcesProgramming.tsx
import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourcesProgramming: React.FC = () => {
  const programmingResources = resources.filter(
    (r) => r.category === "programming"
  );

  return (
    <div className="container mx-auto p-6">
      {/* 見出し */}
      <h2 className="text-2xl font-bold text-center mb-6">プログラミング</h2>

      {/* リソースリスト */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {programmingResources.map((r) => (
          <li
            key={r.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center hover:shadow-lg transition-shadow duration-300"
          >
            {r.imageUrl && (
              <img
                src={r.imageUrl}
                alt={r.title}
                className="w-12 h-auto mr-4 object-contain"
              />
            )}
            <Link
              to={`/resources/${r.id}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              {r.title}
            </Link>
          </li>
        ))}
      </ul>

      {/* 戻るリンク */}
      <div className="mt-8 text-center">
        <Link to="/resources" className="text-blue-500 hover:underline">
          ← カテゴリー選択に戻る
        </Link>
      </div>
    </div>
  );
};

export default ResourcesProgramming;
