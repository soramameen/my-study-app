// src/pages/ResourceDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourceDetail: React.FC = () => {
  const { id } = useParams();
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    return (
      <div className="container mx-auto p-4 text-center max-w-screen-md">
        <h2 className="text-xl sm:text-2xl font-bold text-red-600 mb-4">
          Resource Not Found
        </h2>
        <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
          お探しのリソースは見つかりませんでした。
        </p>
        <Link
          to="/resources"
          className="text-blue-500 hover:underline text-base sm:text-lg"
        >
          ← カテゴリー選択へ戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-600 mb-4 leading-relaxed">
        {resource.title}
        {resource.recommended && (
          <span className="ml-2 text-yellow-500 text-xl">★おすすめ</span>
        )}
      </h1>

      {resource.imageUrl && (
        <div className="flex justify-center mb-6">
          <img
            src={resource.imageUrl}
            alt={resource.title}
            className="max-w-xs rounded shadow-lg hover:shadow-2xl transition-shadow duration-300"
          />
        </div>
      )}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center text-base sm:text-lg"
        >
          Amazonでチェック
        </a>
      </div>

      {/* 説明文やarticle表示部分 */}
      {resource.article && (
        <div className="mb-8 bg-gray-50 p-4 rounded shadow-inner text-base sm:text-lg leading-relaxed">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            {resource.article.headline}
          </h2>
          <p className="text-sm text-gray-600 mb-2">
            <strong>こんな人におすすめ:</strong> {resource.article.target}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <strong>あまり向いていないかも:</strong>{" "}
            {resource.article.nottarget}
          </p>
          <p className="text-gray-700 mb-4">{resource.article.content}</p>
          <p className="text-green-700 mb-2">
            <strong>良い点:</strong> {resource.article.goodPoint}
          </p>
          <p className="text-red-700">
            <strong>惜しい点:</strong> {resource.article.badPoint}
          </p>
        </div>
      )}
      {/* 
      {resource.description && (
        <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
          {resource.description}
        </p>
      )} */}

      <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
        このリソースを活用し、あなたのスキルをもう一段階高めてみませんか？将来のキャリアや学業にプラスになる知識を、今ここで身につけましょう。
      </p>

      {/* 購入ボタン */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mb-8">
        <a
          href={resource.url}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center text-base sm:text-lg"
        >
          Amazonでチェック
        </a>
      </div>

      {/* 戻るリンク */}
      <div className="text-center">
        <Link
          to="/resources"
          className="text-blue-500 hover:underline text-base sm:text-lg"
        >
          ← カテゴリー選択へ戻る
        </Link>
      </div>
    </div>
  );
};

export default ResourceDetail;
