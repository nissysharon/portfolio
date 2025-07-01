// src/components/Skills.tsx
import './Skills.css';

const skillCategories = [
  {
    title: 'Full-Stack Development',
    skills: [
      'Python',
      'Java',
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Flask',
      'FastAPI',
      'Express',
      'HTML',
      'CSS',
      'Object-Oriented Design',
      'Data Structures & Algorithms',
      'Microservices Architecture',
      'Distributed Systems',
    ],
  },
  {
    title: 'Data Science & AI',
    skills: [
      'Pandas',
      'NumPy',
      'Machine Learning Algorithms',
      'Scikit-Learn',
      'PySpark',
      'ETL Pipelines',
      'Tableau',
      'Power BI',
    ],
  },
  {
    title: 'DevOps & Cloud',
    skills: [
      'AWS (EC2, S3, RDS, Lambda, IAM)',
      'Azure App Service',
      'Docker',
      'Kubernetes',
      'CI/CD Pipelines',
      'GitHub Actions',
      'Jenkins',
    ],
  },
  {
    title: 'Tools & Practices',
    skills: [
      'Git',
      'MongoDB / NoSQL',
      'PostgreSQL',
      'MySQL',
      'Kafka',
      'Redis',
      'OAuth2.0 / JWT Authentication',
      'Agile (Jira)',
      'Secure Coding',
      'PyTest',
      'Postman',
      'Swagger/OpenAPI',
    ],
  },
];

export default function Skills() {
  return (
    <section className="skills-container">
      <h2>Skills</h2>
      {skillCategories.map(({ title, skills }) => (
        <div key={title} className="skills-category">
          <h3>{title}</h3>
          <ul className="skills-list">
            {skills.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
