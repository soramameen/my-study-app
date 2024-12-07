// src/pages/Home.tsx
import React from "react";
import image from "../images/image.png"; // 画像をインポート

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* タイトル */}
      <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
        Welcome to UniStudyGuide!
      </h1>

      {/* 画像の表示 */}
      <img
        src={image}
        alt="Study Resources"
        className="w-64 h-auto mb-6 rounded shadow-lg hover:scale-105 transition-transform duration-300"
      />

      {/* 説明文 */}
      <p className="text-lg text-gray-700 text-center max-w-md">
        Enhance your study resources with our curated content tailored for
        information, mathematics, and statistics disciplines.
      </p>

      {/* アクションボタン */}
      <button className="mt-8 bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Home;
