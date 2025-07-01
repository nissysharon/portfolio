// src/components/Projects.tsx
import projects from '../data/projects';
import ProjectCard from './ProjectCard';
import './Projects.css';

export default function Projects() {
  return (
    <section className="projects-container">
      <h2>Projects</h2>
      <p className="projects-disclaimer">
        * Click any card to flip for details *
      </p>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            tech={p.tech}
            desc={p.desc}
            url={p.url}
            image={p.image}
          />
        ))}
      </div>
    </section>
  );
}
