import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourcesMath: React.FC = () => {
  const mathResources = resources.filter((r) => r.category === "math");

  return (
    <div>
      <h2>数学系リソース</h2>
      <ul>
        {mathResources.map((r) => (
          <li key={r.id}>
            <Link to={`/resources/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/resources">← カテゴリー選択に戻る</Link>
    </div>
  );
};

export default ResourcesMath;
