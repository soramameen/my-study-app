import React from "react";
import { Link, Outlet } from "react-router-dom";

const Resources: React.FC = () => {
  return (
    <div>
      <h1>Resources</h1>
      <p>下記のカテゴリーから学習リソースをお選びください：</p>
      <ul>
        <li>
          <Link to="/resources/all">すべてのリソース</Link>
        </li>
        <li>
          <Link to="/resources/info">情報系リソース</Link>
        </li>
        <li>
          <Link to="/resources/math">数学系リソース</Link>
        </li>
        <li>
          <Link to="/resources/stats">統計学系リソース</Link>
        </li>
      </ul>

      {/* ここで子ルートを表示するためのOutletが必要 */}
      <Outlet />
    </div>
  );
};

export default Resources;
