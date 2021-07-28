import React from "react";
import { Link } from "gatsby";

const Layout = ({ children }) => (
  <div className="limiter">
    <nav>
      <Link to="/">
        <span className="un">Všechny příspěvky</span>
      </Link>
    </nav>
    {children}
  </div>
);

export default Layout;
