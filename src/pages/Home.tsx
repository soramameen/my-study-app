// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const Home: React.FC = () => {
  const bookResources = resources.filter(
    (r) => r.recommended === true && r.imageUrl
  );

  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      {/* メイン見出し */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 text-center mb-8">
        UniStudyGuide! － 大学生のための学習リソース案内
      </h1>

      <h2 className="text-center mb-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
        プログラミング、IT基礎、機械学習、Pythonなど、あなたの学びを後押しする教材を厳選。
        忙しい大学生活でも、効率的にスキルを身につけられるリソースが揃っています。
      </h2>

      {/* 書籍カルーセル */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          おすすめ教材ピックアップ
        </h2>
        <p className="text-center text-gray-700 mb-4 text-base sm:text-lg leading-relaxed max-w-prose mx-auto">
          初心者向け入門書から専門的な参考書、オンライン講座まで。気になるアイテムで、新たな一歩を踏み出そう。
        </p>
        <div className="overflow-x-auto whitespace-nowrap flex space-x-4 p-4 border rounded-md shadow-inner">
          {bookResources.map((book) => (
            <div key={book.id} className="flex-none inline-block">
              <a
                href={book.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-32 text-center"
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-32 h-auto mb-2 rounded shadow hover:shadow-lg transition-shadow duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* サイトの特徴 */}
      <div className="text-base sm:text-lg text-gray-700 mb-8 space-y-6 leading-relaxed max-w-prose mx-auto">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            UniStudyGuide!の魅力
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">大学生目線で厳選</span> -
              実践的なITスキル、プログラミングやデータ分析から最新の機械学習まで、学生が本当に使える情報を集約。
            </li>
            <li>
              <span className="font-semibold">多彩な教材形式</span> -
              書籍、動画、オンライン講座、チュートリアルなど、一歩ずつ成長できるコンテンツを豊富に用意。
            </li>
            <li>
              <span className="font-semibold">わかりやすい構成</span> -
              シンプルなナビゲーションですぐにお目当ての情報へアクセス可能。
            </li>
            <li>
              <span className="font-semibold">随時アップデート</span> -
              トレンド技術や新刊もフォローし、常に最新の学習情報をチェックできる。
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            なぜUniStudyGuide!？
          </h2>
          <p>
            学習は将来への投資。プログラミング初心者向けガイドからIT業界へのキャリア提案、機械学習へのステップまで、UniStudyGuide!が次のアクションを明確にします。
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">一歩踏み出そう</h2>
          <p>
            自分の興味や目標に合った分野からはじめてみてください。スキル習得への道のりを、よりシンプルかつ確実なものにしましょう。
          </p>
        </div>
      </div>

      {/* アクションリンク */}
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/resources/all"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center w-48 text-base sm:text-lg"
        >
          学習リソースを探索
        </Link>
        <Link
          to="/contact"
          className="text-blue-500 hover:underline text-base sm:text-lg"
        >
          お問い合わせ
        </Link>

        <p className="text-sm text-gray-500 mt-8 max-w-prose text-center">
          ※当サイトはAmazonアソシエイト・プログラムを利用しています。
          リンク経由で商品を購入いただくと、運営者に紹介料が支払われる場合があります。
        </p>
      </div>
    </div>
  );
};

export default Home;
