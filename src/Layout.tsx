import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <nav style={{ marginBottom: "1rem" }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/resources">Resources</Link>
      </nav>
      <Outlet />
      <footer
        style={{
          marginTop: "2rem",
          borderTop: "1px solid #ccc",
          paddingTop: "1rem",
        }}
      >
        <p>© 2024 UniStudyGuide</p>
      </footer>
    </div>
  );
};

export default Layout;
