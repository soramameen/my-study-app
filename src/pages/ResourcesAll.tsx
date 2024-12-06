import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourcesAll: React.FC = () => {
  return (
    <div>
      <h2>すべてのリソース</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {resources.map((r) => (
          <li
            key={r.id}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            {r.imageUrl && (
              <img
                src={r.imageUrl}
                alt={r.title}
                style={{ width: "50px", height: "auto", marginRight: "10px" }}
              />
            )}
            <Link to={`/resources/${r.id}`}>
              {r.title} ({r.category})
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/resources">← カテゴリー選択に戻る</Link>
    </div>
  );
};

export default ResourcesAll;
