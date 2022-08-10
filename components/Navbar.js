import React from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css"
import getConfig from 'next/config'

export default function Navbar() {
  return (
    <div>
      <nav
        className={`${styles.headerTop} navbar navbar-expand-lg bg-light`}
      >
        <Link href="/">
          <a className="navbar-brand">
            User Management v{process.env.APP_VERSION}
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
    </div>
  );
}
