// src/pages/ResourcesAll.tsx
import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const ResourcesAll: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* 見出し */}
      <h2 className="text-2xl font-bold text-center mb-6">すべてのリソース</h2>

      {/* リソースリスト */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {resources.map((r) => (
          <li
            key={r.id}
            className="bg-white rounded-lg shadow-md p-4 flex items-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
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
              className="flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <BookOpenIcon className="h-6 w-6 mr-2" /> {/* アイコンを追加 */}
              {r.title} ({r.category})
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

export default ResourcesAll;
