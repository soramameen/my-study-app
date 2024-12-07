// src/pages/Resources.tsx
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* 見出し */}
      <h1 className="text-3xl font-bold text-center mb-4">Resources</h1>

      {/* 説明文 */}
      <p className="text-center text-gray-600 mb-8">
        下記のカテゴリーから学習リソースをお選びください：
      </p>

      {/* カテゴリーリスト */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* カテゴリー項目 */}
        <li className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <Link
            to="/resources/all"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            すべてのリソース
          </Link>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <Link
            to="/resources/info"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            情報系リソース
          </Link>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <Link
            to="/resources/math"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            数学系リソース
          </Link>
        </li>
        <li className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
          <Link
            to="/resources/stats"
            className="text-xl font-semibold text-blue-600 hover:text-blue-800"
          >
            統計学系リソース
          </Link>
        </li>
      </ul>

      {/* 子ルートの表示 */}
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Resources;
