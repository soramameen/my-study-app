import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>お探しのページは存在しません。</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default NotFound;
