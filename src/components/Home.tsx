// src/components/Home.tsx
import './Home.css';
// ← import your image asset
import profilePic from '../data/profilepic.jpg';

export default function Home() {
  return (
    <header className="hero">
      {/* Avatar */}
      <img
        src={profilePic}
        alt="Nissy Carolin Pakalapati"
        className="hero-avatar"
      />

      {/* Name */}
      <h1 className="hero-title">
        Nissy Carolin Pakalapati
      </h1>
      <p className="hero-subtitle">
        Software Engineer • Python, React, AWS
      </p>
    </header>
  );
}
