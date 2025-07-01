// src/data/projects.ts

export interface Project {
    title: string;
    desc: string;
    url: string;
    tech: string[];
    image: string;
  }
  
  const projects: Project[] = [
    {
      title: 'My Schedule Manager',
      desc: 'Full-stack task planner with JWT authentication.',
      tech: ['React', 'Flask', 'MongoDB', 'JWT', 'FastAPI', 'PostgreSQL'],
      url: '',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // coding desk
    },
    {
      title: 'PriceGuard',
      desc: 'Asynchronous price alerts with web scraping.',
      tech: ['Python', 'BeautifulSoup', 'PostgreSQL', 'REST API'],
      url: 'https://github.com/nissysharon/PriceGuard',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // Python code
    },
    {
      title: 'Vehicle Sales Data Insights',
      desc: 'Interactive Tableau dashboard for car sales trends.',
      tech: ['Tableau', 'MySQL', 'Pandas'],
      url: 'https://public.tableau.com/views/VehiclesalesDataVisualizations/Dashboard1',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // car dashboard
    },
    {
      title: 'School Churn Prediction',
      desc: 'Predict student dropouts with logistic regression.',
      tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Machine Learning Algorithms'],
      url: '',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // data science
    },
    {
      title: 'Secure AWS Web Hosting',
      desc: 'PHP app hosted on AWS EC2/RDS with IAM & Secrets Manager.',
      tech: ['AWS', 'PHP', 'MySQL'],
      url: '',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // cloud
    },
    {
      title: 'Cloud VPN',
      desc: 'Java-based VPN service with AES encryption.',
      tech: ['Java', 'AES', 'AWS EC2'],
      url: '',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // network
    },
    {
      title: 'Pat Placement System',
      desc: 'API-driven placement portal with PHP & MySQL.',
      tech: ['PHP', 'MySQL', 'RESTful APIs'],
      url: 'https://github.com/nissysharon/patproject',
      image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=400&q=80', // web dev
    },
  ];
  
  export default projects;
  