import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a href="https://magicmynt.com/" target="_blank" rel="noreferrer">
            <img src={mock01} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://magicmynt.com/" target="_blank" rel="noreferrer">
            <h2>Magic Mynt</h2>
          </a>
          <p>
            Magic Mynt is a no-code platform designed to empower creators to
            effortlessly create, launch, and manage NFT collections. The
            platform offers an end-to-end solution that includes features such
            as custom mint pages, trait mixers, collaboration tools,
            configurable mint lists, analytics, and on-chain revenue management.
            Magic Mynt adheres to decentralized standards, integrating with
            technologies like IPFS, MetaMask, OpenZeppelin, and built with
            Solidity, JS, TS and Next.js.
          </p>
        </div>

        <div className="project">
          <a
            href="https://inai-rita-platform.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock02} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://inai-rita-platform.ca/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>RITA INAI Platform</h2>
          </a>
          <p>
            The INAI RITA Platform is an ingredients management system developed
            for industries to provide insights into ingredient utilization in
            manufacturing processes. The platform features a full-stack
            application with a React frontend and a Node.js/Express backend,
            MongoDB as database. Deployment is managed using Docker on
            DigitalOcean, with performance optimization achieved via NGINX and
            user interaction telemetry and traffic analysis integrated through
            Google Analytics.
          </p>
        </div>

        <div className="project">
          <a href="https://expressionz.xyz/" target="_blank" rel="noreferrer">
            <img src={mock03} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a href="https://expressionz.xyz/" target="_blank" rel="noreferrer">
            <h2>Expressionz</h2>
          </a>
          <p>
            Expressionz is a platform that enables users to transform their
            Profile Picture (PFP) NFTs into custom emotes, allowing for unique
            self-expression across various messaging platforms. By converting
            digital assets into personalized emotes, users can convey emotions
            and reactions in a distinctive manner. The platform offers seamless
            integration, facilitating easy export of these emotes into favorite
            messenger applications such as Telegram and Discord.
          </p>
        </div>

        <div className="project">
          <a
            href="https://muvi-now.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock04} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://muvi-now.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>MuviNow</h2>
          </a>
          <p>
            MuviNow is a web application that allows users to search for movies.
            The platform is built using Vite, React, Appwrite and TMDB API,
            providing a responsive and user-friendly interface.
          </p>
        </div>

        <div className="project">
          <a
            href="https://block-media-uthi-phbt-nik4zo13f-kobby08s-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock05} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://block-media-uthi-phbt-nik4zo13f-kobby08s-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Skyvo.ai</h2>
          </a>
          <p>
            Skyvo.ai is a decentralized music streaming platform that allows
            users to upload and stream AI generated music. The platform
            emphasizes user-generated content, enabling artists to share their
            work directly with listeners.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
