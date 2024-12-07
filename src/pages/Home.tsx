// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import image from "../images/image.png"; // 画像をインポート

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      {/* 見出し */}
      <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
        ようこそ、UniStudyGuide!へ
      </h1>

      {/* 画像の表示 */}
      <div className="flex justify-center mb-8">
        <img
          src={image}
          alt="Study Resources"
          className="w-64 h-auto rounded shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </div>

      {/* 説明文と特徴 */}
      <div className="text-lg text-gray-700 mb-8 space-y-6">
        {/* 主な特徴 */}
        <div>
          <h2 className="text-2xl font-bold mb-4">主な特徴</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">多彩なカテゴリー</span>
              <span>
                {" "}
                -
                あなたの学習ニーズに合わせた豊富なリソースを、簡単に見つけることができます。
              </span>
            </li>
            <li>
              <span className="font-semibold">信頼性の高いコンテンツ</span>
              <span>
                {" "}
                -
                専門家によって選定された最新の資料や教材を提供。質の高い情報で学びをサポートします。
              </span>
            </li>
            <li>
              <span className="font-semibold">
                ユーザーフレンドリーなデザイン
              </span>
              <span>
                {" "}
                -
                直感的なナビゲーションと洗練されたデザインで、必要な情報にすばやくアクセス可能。
              </span>
            </li>
            <li>
              <span className="font-semibold">定期的な更新</span>
              <span>
                {" "}
                -
                新しいリソースが定期的に追加され、常に最新の学習内容に対応しています。
              </span>
            </li>
          </ul>
        </div>

        {/* なぜUniStudyGuide!を選ぶのか */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            なぜUniStudyGuide!を選ぶのか？
          </h2>
          <p>
            UniStudyGuide!は、単なるリソースの集積ではありません。私たちは、学習者一人ひとりの成長を支援することを使命としています。効率的な学習計画の立案や、深い理解を促進するためのツールとして、あなたの学びを強力にサポートします。
          </p>
        </div>

        {/* 今すぐ始めましょう */}
        <div>
          <h2 className="text-2xl font-bold mb-4">今すぐ始めましょう</h2>
          <p>
            UniStudyGuide!を活用して、あなたの学習目標を達成しましょう。下記のカテゴリーから興味のある分野を選び、充実した学びの旅をスタートしてください。
          </p>
        </div>
      </div>

      {/* アクションリンク */}
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/resources"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center w-48"
        >
          学習リソースを探索する
        </Link>
        <Link to="/contact" className="text-blue-500 hover:underline">
          お問い合わせ
        </Link>
      </div>
    </div>
  );
};

export default Home;
