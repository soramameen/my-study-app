import React from "react";
import { Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourcesInfo: React.FC = () => {
  const infoResources = resources.filter((r) => r.category === "info");

  return (
    <div>
      <h2>情報系リソース</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {infoResources.map((r) => (
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
            <Link to={`/resources/${r.id}`}>{r.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/resources">← カテゴリー選択に戻る</Link>
    </div>
  );
};

export default ResourcesInfo;
