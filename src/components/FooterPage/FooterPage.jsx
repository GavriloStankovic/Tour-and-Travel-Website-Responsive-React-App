import React from "react";
import "./FooterPage.css";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const FooterPage = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>Trippy</h1>
          <p>Choose your favourite destination.</p>
        </div>
        <div className="footer-icons">
          <FaFacebook className="icon" />
          <FaInstagram className="icon" />
          <FaGithub className="icon" />
          <FaLinkedin className="icon" />
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <h1>Project</h1>
          <a href="https://react-icons.github.io/react-icons">Changelog</a>
          <a href="https://react-icons.github.io/react-icons">Status</a>
          <a href="https://react-icons.github.io/react-icons">License</a>
          <a href="https://react-icons.github.io/react-icons">All Versions</a>
        </div>
        <div>
          <h1>Community</h1>
          <a href="https://react-icons.github.io/react-icons">GitHub</a>
          <a href="https://react-icons.github.io/react-icons">Issues</a>
          <a href="https://react-icons.github.io/react-icons">Project</a>
          <a href="https://react-icons.github.io/react-icons">Twitter</a>
        </div>
        <div>
          <h1>Help</h1>
          <a href="https://react-icons.github.io/react-icons">Support</a>
          <a href="https://react-icons.github.io/react-icons">
            Troubleshooting
          </a>
          <a href="https://react-icons.github.io/react-icons">Contact Us</a>
        </div>
        <div>
          <h1>Others</h1>
          <a href="https://react-icons.github.io/react-icons">
            Terms of Service
          </a>
          <a href="https://react-icons.github.io/react-icons">Privacy Policy</a>
          <a href="https://react-icons.github.io/react-icons">License</a>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
