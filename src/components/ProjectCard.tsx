// src/components/ProjectCard.tsx
import { useState } from 'react';
import './ProjectCard.css';
import { Project } from '../data/projects';

export default function ProjectCard({ title, tech, desc, url, image }: Project) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card${flipped ? ' flipped' : ''}`}
      onClick={() => setFlipped((f) => !f)}
    >
      <div className="flip-card-inner">
        {/* FRONT */}
        <div className="flip-card-front">
          <img src={image} alt={`${title} preview`} className="card-image" />
          <div className="card-front-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{desc}</p>
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="card-link"
              >
                View →
              </a>
            )}
          </div>
        </div>

        {/* BACK */}
        <div className="flip-card-back">
          <h4 className="tech-heading">Tech Stack</h4>
          <ul className="tech-list">
            {tech.map((t) => (
              <li key={t} className="tech-item">{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
