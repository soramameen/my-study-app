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
        UniStudyGuide!
      </h1>

      {/* 運営者情報を前面に出すキャッチコピー */}
      <p className="text-center mb-6 text-base sm:text-lg text-gray-700 leading-relaxed max-w-prose mx-auto">
        情報系の大学2年生である私が、現役学生の目線で厳選した学習教材を紹介するサイトへようこそ。
        <br />
        プログラミングやIT基礎、機械学習、Pythonといった分野で「どこから始めればいいの？」と思う方へ、
        <br />
        自分自身が試行錯誤しながら「これなら学びやすい」と感じた教材を厳選してお届けします。
      </p>

      {/* おすすめ教材ピックアップ */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
          おすすめ教材ピックアップ
        </h2>
        <p className="text-center text-gray-700 mb-4 text-base sm:text-lg leading-relaxed max-w-prose mx-auto">
          私自身が「この本や講座ならわかりやすい」「これなら忙しい大学生活でも続けられる」と感じたアイテムを揃えました。
          <br />
          初心者向けから専門的な内容まで、一歩ずつステップアップできるラインナップです。
        </p>
        <div className="overflow-x-auto whitespace-nowrap flex space-x-4 p-4 border rounded-md shadow-inner">
          {bookResources.map((book) => (
            <div key={book.id} className="flex-none inline-block">
              <Link
                to={`/resources/${book.id}`}
                className="block w-32 text-center"
              >
                <img
                  src={book.imageUrl}
                  alt={book.title}
                  className="w-32 h-auto mb-2 rounded shadow hover:shadow-lg transition-shadow duration-300"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* サイトの特徴 */}
      <div className="text-base sm:text-lg text-gray-700 mb-8 space-y-6 leading-relaxed max-w-prose mx-auto">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            なぜ私がこのサイトを作ったのか
          </h2>
          <p>
            私は情報系の大学2年生として、日々プログラミングやIT技術を学んでいます。
            その中で「初心者のうちに知っておけばよかった教材」や、「これを読んだら急に理解が深まった」という経験が何度もありました。
            このサイトでは、私が実際に利用したり、同世代の学生から評判を聞いた「大学生が本当に活用しやすい教材」を中心にまとめています。
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            選び方のポイント
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <span className="font-semibold">学生視点</span> -
              実践的なITスキル習得や、プログラミング初心者がつまずくポイントを考慮し、理解しやすいものを厳選。
            </li>
            <li>
              <span className="font-semibold">多様な形式</span> -
              書籍、動画講座、オンラインチュートリアルなど、好きな学び方が選べるコンテンツを用意。
            </li>
            <li>
              <span className="font-semibold">最新情報に対応</span> -
              常に新刊やトレンドの技術を追いかけ、学びの質と幅をアップデート。
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            あなたの次のステップへ
          </h2>
          <p>
            「なにから手をつければいいか分からない」そんなときは、このサイトが出発点になれれば嬉しいです。
            大学生という立場から、実際に感じた「学びやすさ」や「役立ち度」を軸に教材を選んでいるので、
            あなたもぜひ、ここから新しいスキル習得の一歩を踏み出してください。
          </p>
        </div>
      </div>

      {/* アクションリンク */}
      <div className="flex flex-col items-center space-y-4">
        <Link
          to="/resources/all"
          className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors duration-300 text-center w-48 text-base sm:text-lg"
        >
          教材一覧をみる
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
