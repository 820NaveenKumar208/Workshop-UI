import PageLayout from '../components/PageLayout.jsx';
import Hero from '../components/Hero.jsx';
import { Link } from 'react-router-dom';

export default function Home({ darkMode, onToggleDarkMode }) {

  return (
    <PageLayout darkMode={darkMode} onToggleDarkMode={onToggleDarkMode}>
      <Hero ctaLink="/workshops" ctaText="Browse Workshops" />
      <section className="section section--home-intro">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Welcome</p>
            <h2>Start your next workshop journey</h2>
            <p className="section-copy">
              A clean, modern experience built for students and coordinators. Access workshop details, quick registration, and performance metrics all in one place.
            </p>
          </div>
          <div className="home-panels">
            <div className="feature-card">
              <p className="feature-title">Fast registration</p>
              <p className="feature-copy">Register in a few taps and return to learning quickly.</p>
            </div>
            <div className="feature-card">
              <p className="feature-title">Mobile-ready</p>
              <p className="feature-copy">Designed for students who book sessions on the go.</p>
            </div>
            <div className="feature-card">
              <p className="feature-title">Clear dashboard</p>
              <p className="feature-copy">See your upcoming workshops and progress at a glance.</p>
            </div>
          </div>
        </div>

        <div className="container home-cta">
          <Link to="/workshops" className="button button--primary">
            View Workshops
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}