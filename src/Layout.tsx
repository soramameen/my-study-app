import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ナビゲーションバー */}
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/resources" className="hover:text-gray-200">
              Resources
            </Link>
          </li>
        </ul>
      </nav>

      {/* メインコンテンツ */}
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white p-4 text-center border-t border-gray-700">
        <p>© 2024 UniStudyGuide</p>
      </footer>
    </div>
  );
};

export default Layout;
