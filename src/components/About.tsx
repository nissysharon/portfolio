// src/components/About.tsx
import './About.css';

export default function About() {
  return (
    <section className="about-container">
      <h2>About Me</h2>

      {/* ───── Experience (Timeline) ───── */}
      <div className="about-section">
        <h3>Experience</h3>
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-date">August 2024 – May 2025</div>
            <div className="timeline-content">
              <strong>Graduate Research Developer</strong><br/>
              Arizona State University — Tempe, AZ
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-date">July 2022 – July 2023</div>
            <div className="timeline-content">
              <strong>Software Engineer</strong><br/>
              Tata Consultancy Services — Hyderabad, India
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-date">August 2021 – December 2021</div>
            <div className="timeline-content">
              <strong>Frontend Web Developer Intern</strong><br/>
              LetsGrowMore — Hyderabad, India
            </div>
          </li>
        </ul>
      </div>

      {/* ───── Education (Timeline) ───── */}
      <div className="about-section">
        <h3>Education</h3>
        <ul className="timeline">
          <li className="timeline-item">
            <div className="timeline-date">August 2023 – May 2025</div>
            <div className="timeline-content">
              <strong>MS in Information Technology</strong><br/>
              Arizona State University — Tempe, AZ
            </div>
          </li>
          <li className="timeline-item">
            <div className="timeline-date">September 2018 – May 2022</div>
            <div className="timeline-content">
              <strong>BTech in Computer Science & Engineering</strong><br/>
              JNTU Vardhaman College — India
            </div>
          </li>
        </ul>
      </div>

      {/* ───── Certifications ───── */}
      <div className="about-section">
        <h3>Certifications</h3>
        <ul>
          <li>AWS Academy Cloud Architecting – AWS Academy Graduate</li>
          <li>Microsoft Azure Fundamentals (AZ-900)</li>
          <li>Google Cloud Professional Cloud Architect – GCP Badges</li>
        </ul>
      </div>

      {/* ───── Volunteer & Achievements ───── */}
      <div className="about-section">
        <h3>Volunteer & Achievements</h3>
        <ul>
          <li>
            IEEE CS Student Branch, Vardhaman College — Organized 10+ workshops, hackathons & seminars (2019–2021)
          </li>
          <li>Best Volunteer Award, IEEE CS SB Vardhaman College (2021)</li>
        </ul>
      </div>
    </section>
  );
}
