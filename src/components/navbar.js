import React from "react";

export default () => (
  <div class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a href="../" class="navbar-brand" style={{ fontWeight: `bold` }}>
        <span style={{ color: `teal` }}>Z</span>airza
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="nav navbar-nav ml-auto" style={{ fontWeight: `bold` }}>
          <li class="nav-item">
            <a class="nav-link" href="/">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/projects">
              PROJECTS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              WHAT WE DO
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/team">
              THE TEAM
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/faq">
              FAQs
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
