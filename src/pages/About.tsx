// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";
import { UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md max-w-screen-md">
      {/* 見出し */}
      <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600 text-center mb-8">
        UniStudyGuide!について
      </h1>

      {/* 運営者情報とサイト概要 */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-2" />
          運営者は情報系大学2年生
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
          私は情報系の大学2年生として、日々プログラミングやIT技術、機械学習、データ分析などを学んでいます。
          学ぶ中で「学生が本当に使いやすく、力を伸ばせる教材」を見つけることは簡単ではありませんでした。
          UniStudyGuide!は、そんな経験を活かし、学生目線で「理解しやすい」「ステップアップしやすい」と感じた学習教材を紹介するために作られたサイトです。
        </p>
      </div>

      {/* サイトの目的 */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-2" />
          サイトの目的
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
          「何から始めれば良いの？」という疑問に応えるため、
          プログラミング初心者向け入門書からITスキルを底上げするオンライン講座、
          さらには機械学習・データ分析に特化した教材まで網羅しています。
          忙しい大学生活でも、ここで紹介する教材なら効率的かつ効果的にスキルアップが可能です。
        </p>
      </div>

      {/* 信頼性と透明性 */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center justify-center">
          <UserGroupIcon className="h-6 w-6 text-blue-500 mr-2" />
          信頼性と透明性
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
          紹介する教材は、私自身が学ぶ中で「良い」と実感したものや、
          同世代からの評判が高いものを中心にピックアップしています。
          また、当サイトはAmazonアソシエイト・プログラムを利用しており、
          リンク経由で商品が購入されると紹介料が発生する場合があります。
          その収益は、新たな教材開拓やサイトの改善に活用し、常に価値ある情報を提供できるよう努めます。
        </p>
      </div>

      {/* 使用技術スタック */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center">
          使用している技術について
        </h2>
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
          このサイトは、最新のフロントエンド技術を用いて構築しています。
          メインのフレームワークには、コンポーネント指向で開発しやすい
          <span className="font-semibold text-blue-600">React</span>を採用。
          スタイリングにはユーティリティファーストな
          <span className="font-semibold text-blue-600">Tailwind CSS</span>
          を利用し、 シンプルかつ統一感のあるデザインを効率的に実現しています。
          これらの技術により、レスポンシブ対応はもちろん、軽快なパフォーマンスを発揮し、
          ユーザーが快適に教材を閲覧できる環境を整えています。
        </p>
      </div>

      {/* アクションボタン */}
      <div className="flex justify-center mt-12">
        <Link
          to="/resources"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center text-base sm:text-lg"
        >
          教材一覧をみる
        </Link>
      </div>
    </div>
  );
};

export default About;
