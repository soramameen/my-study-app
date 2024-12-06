import React from "react";
import { useParams, Link } from "react-router-dom";
import { resources } from "../data/Resources";

const ResourceDetail: React.FC = () => {
  const { id } = useParams();
  const resource = resources.find((r) => r.id === id);

  if (!resource) {
    return (
      <div>
        <h2>Resource Not Found</h2>
        <p>指定のリソースは存在しません。</p>
        <Link to="/resources">Back to Resources</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{resource.title}</h1>
      {/* 画像がある場合は表示 */}
      {resource.imageUrl && (
        <div style={{ marginBottom: "1rem" }}>
          <img
            src={resource.imageUrl}
            alt={resource.title}
            style={{ maxWidth: "200px" }}
          />
        </div>
      )}
      <p>{resource.description}</p>
      <p>
        <a href={resource.url} target="_blank" rel="noreferrer">
          Visit Resource
        </a>
      </p>
      <Link to="/resources">Back to Resources</Link>
    </div>
  );
};

export default ResourceDetail;
