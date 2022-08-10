import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: 40 }}
    >
      <Link href="/">
        <a className="navbar-brand" style={{ paddingLeft: 20 }}>
          User Management
        </a>
      </Link>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/users">
              <a className="nav-link">List Users</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/users/create">
              <a className="nav-link">Create User</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
