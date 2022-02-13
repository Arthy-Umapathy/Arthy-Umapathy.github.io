import React from "react";
import { Fragment } from "react/cjs/react.production.min";

export default function Navbar() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-md bg-primary navbar-dark fixed-top"
        style={{
          background: "linear-gradient(to left, #333399 0%, #0099cc 100%)",
        }}
      >
        <a href="#intro" className="navbar-brand">
          Arthy Umapathy
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Hire me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
