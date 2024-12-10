// src/pages/Home.tsx
import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const Home: React.FC = () => {
  // imageUrlを持つ書籍のみフィルタリング
  const bookResources = resources.filter((r) => r.imageUrl);

  return (
    <div className="container mx-auto p-6">
      {/* メイン見出し */}
      <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
        UniStudyGuide! － 大学生のための学習リソース案内
      </h1>

      <h2 className="text-center mb-6 text-lg text-gray-700">
        プログラミング、IT基礎、機械学習、Pythonまで、あなたの学びを後押しする教材がここに。
      </h2>

      {/* 書籍カルーセル */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          おすすめ教材ピックアップ
        </h2>
        <p className="text-center text-gray-700 mb-4">
          初心者向けの入門書から、専門性を深める参考書、活用度の高いオンライン講座まで、気になる一冊をチェックしよう。
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
      <div className="text-lg text-gray-700 mb-8 space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">UniStudyGuide!の魅力</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">大学生目線でのセレクション</span>{" "}
              -
              実践的なITスキルから、将来に役立つプログラミングやデータ分析、最新の機械学習トピックまで、学生が本当に使える情報を厳選。
            </li>
            <li>
              <span className="font-semibold">多彩な教材</span> -
              書籍、動画、オンライン講座、チュートリアルなど、多様な形式のリソースを整理。初心者も一歩ずつ成長できる。
            </li>
            <li>
              <span className="font-semibold">学びやすいデザイン</span> -
              直感的なナビゲーションで、探したいテーマをすぐに発見。忙しい学生生活の中で、効率的な学びをサポート。
            </li>
            <li>
              <span className="font-semibold">常に最新情報を更新</span> -
              トレンドの技術や新刊書籍をキャッチアップし、サイト内容を随時アップデート。学習計画に役立つ最新情報をチェックできる。
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">なぜUniStudyGuide!？</h2>
          <p>
            大学生にとって、学びは将来への投資。プログラミング初心者への入門ガイドから、IT業界を目指すキャリア相談、深い機械学習知識へのステップアップまで、
            UniStudyGuide!はあなたが「次に何を学べば良いか」を見極める指針となります。
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">一歩踏み出そう</h2>
          <p>
            自分のペースでスキルを積み上げられるように、分野別にリソースを充実させています。興味のある分野を選んで、充実した学習の旅を始めてみませんか？
          </p>
        </div>
      </div>

      {/* アクションリンク */}
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/resources/all"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center w-48"
        >
          学習リソースを探索
        </Link>
        <Link to="/contact" className="text-blue-500 hover:underline">
          お問い合わせ
        </Link>

        {/* Amazonアソシエイト使用明示 */}
        <p className="text-sm text-gray-500 mt-8">
          ※当サイトはAmazonアソシエイト・プログラムを利用しています。
          リンク経由で商品を購入いただくと、運営者に紹介料が支払われる場合があります。
        </p>
      </div>
    </div>
  );
};

export default Home;
