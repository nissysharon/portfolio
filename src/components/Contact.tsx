// @ts-nocheck
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <footer className="contact-footer">
      <h3>Contact Me</h3>
      <ul className="contact-list">
        <li>
          <FaEnvelope className="contact-icon" />
          <a href="mailto:nissycaroline7@gmail.com">
            nissycaroline7@gmail.com
          </a>
        </li>
        <li>
          <FaLinkedin className="contact-icon" />
          <a
            href="https://linkedin.com/in/nissy-carolin-pakalapati"
            target="_blank"
            rel="noopener noreferrer"
          >
            /nissy-carolin-pakalapati
          </a>
        </li>
        <li>
          <FaGithub className="contact-icon" />
          <a
            href="https://github.com/nissysharon"
            target="_blank"
            rel="noopener noreferrer"
          >
            @nissysharon
          </a>
        </li>
      </ul>
    </footer>
  );
}
