import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
  faBitcoin,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "TypeScript",
  "JavaScript",
  "Python",
  "Java",
  "Ruby",
  "HTML5",
  "CSS3",
  "SASS",
  "React",
  "Next.js",
  "Node.js",
  "Express.js",
  "SpringBoot",
  "Ruby on Rails",
  "FastAPI",
  "Flask",
  "MongoDB",
  "PostgreSQL",
  "Elasticsearch",
  "Appwrite",
  "Firebase",
  "Supabase",
  "Postman",
];

const labelsSecond = [
  "Solidity",
  "OpenZeppelin",
  "IPFS",
  "ThirdWeb",
  "NFT storage",
  "Alchemy",
  "Infura",
  "Opensea",
  "Metamask",
  "Rainbow Wallet",
  "Remix",
  "Hardhat",
  "Garnache",
  "Web3.js",
  "Ethers.js",
];

const labelsThird = [
  "Git",
  "Bash",
  "Linux",
  "GitHub Actions",
  "GitLab CI/CD",
  "Docker",
  "Kubernetes",
  "Helm",
  "Argo",
  "AWS",
  "GCP",
  "DigitalOcean",
];

const labelsFourth = [
  "Python",
  "OpenAI",
  "LangChain",
  "Ollama",
  "Pandas",
  "Qdrant",
  "Hugging Face",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Web Development</h3>
            <p>
              Proficient in full-stack development using JavaScript, TypeScript,
              React, Next.js, Node.js, Express, Spring Boot, and Flask, with
              hands-on experience in building scalable, high-performance
              applications.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faBitcoin} size="3x" />
            <h3>Blockchain Development</h3>
            <p>
              Experienced in smart contract development, building decentralized
              applications (dApps) on EVM chains and Solana, and working with
              Web3 libraries (Web3.js, Ethers.js) and blockchain infrastructure
              tools like Alchemy and Infura.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>DevOps & Automation</h3>
            <p>
              Strong background in containerization, CI/CD pipelines (GitLab
              CI/CD, Argo Workflows), cloud infrastructure (AWS, GCP,
              DigitalOcean), and automation scripting for streamlined
              deployments and scalable architectures.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>GenAI & LLM</h3>
            <p>
              Skilled in leveraging OpenAI APIs, LangChain, and Qdrant to
              develop AI-powered applications, including chatbots, NLP systems,
              and intelligent search solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFourth.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
