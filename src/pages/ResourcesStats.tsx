import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourcesStats: React.FC = () => {
  const statsResources = resources.filter((r) => r.category === "stats");

  return (
    <div>
      <h2>統計学系リソース</h2>
      <ul>
        {statsResources.map((r) => (
          <li key={r.id}>
            <Link to={`/resources/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/resources">← カテゴリー選択に戻る</Link>
    </div>
  );
};

export default ResourcesStats;
