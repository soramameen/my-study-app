// src/pages/About.tsx
import React from "react";
import { Link } from "react-router-dom";

import { UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"; // Heroicons をインポート

const About: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* 見出し */}
      <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
        About UniStudyGuide!
      </h1>

      {/* セクション1: サイトの目的 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-2" />
          サイトの目的
        </h2>
        <p className="text-lg text-gray-700">
          UniStudyGuide!は、情報学、数学、統計学を専攻する学生や専門家のために、厳選された高品質な学習資料を提供するプラットフォームです。私たちの目標は、学習者一人ひとりが効率的かつ効果的に学びを深めることをサポートすることです。
        </p>
      </div>

      {/* セクション2: チーム紹介 */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <UserGroupIcon className="h-6 w-6 text-blue-500 mr-2" />
          私たちのチーム
        </h2>
        <p className="text-lg text-gray-700 mb-4">
          UniStudyGuide!の背後には、多様なバックグラウンドを持つ教育者、開発者、デザイナーが集結しています。私たちは、教育の質を向上させるために協力し、常に新しいリソースを提供しています。
        </p>
        <p className="text-lg text-gray-700">
          チームのメンバーは、それぞれの専門分野で豊富な経験を持ち、学習者のニーズに応えるために尽力しています。
        </p>
      </div>

      {/* セクション3: 私たちのビジョン */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center">
          <AcademicCapIcon className="h-6 w-6 text-blue-500 mr-2" />
          私たちのビジョン
        </h2>
        <p className="text-lg text-gray-700">
          UniStudyGuide!は、すべての学習者がアクセス可能で信頼性の高いリソースを提供することで、学びの障壁を取り除きます。私たちのビジョンは、教育を通じて社会全体の知識基盤を強化し、持続可能な成長を促進することです。
        </p>
      </div>

      {/* アクションボタン */}
      <div className="flex justify-center mt-12">
        <Link
          to="/resources"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center"
        >
          学習リソースを探索する
        </Link>
      </div>
    </div>
  );
};

export default About;
