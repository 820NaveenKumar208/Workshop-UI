import WorkshopList from '../components/WorkshopList.jsx';
import PageLayout from '../components/PageLayout.jsx';
import workshopsData from '../data/workshops.js';

export default function Workshops({ darkMode, onToggleDarkMode }) {
  return (
    <PageLayout darkMode={darkMode} onToggleDarkMode={onToggleDarkMode}>
      <section className="section section--hero section--small" id="top">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Workshops</p>
            <h1>Explore upcoming learning sessions</h1>
            <p className="section-copy">
              Choose from curated workshops designed for students, beginners, and professionals.
            </p>
          </div>
          <div>
            <div className="info-panel">
              <p className="info-title">Why join?</p>
              <ul className="info-list">
                <li>Hands-on practical exercises</li>
                <li>Clear schedules and simple registration</li>
                <li>Designed for mobile-first learners</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--workshops" aria-labelledby="workshop-heading">
        <div className="container">
          <div className="section-header">
            <div>
              <p className="eyebrow">Available Workshops</p>
              <h2 id="workshop-heading">Browse our workshop collection</h2>
              <p className="section-copy">
                Explore the latest workshops and register right away with a modern, clean experience.
              </p>
            </div>
          </div>
          <WorkshopList workshops={workshopsData} />
        </div>
      </section>
    </PageLayout>
  );
}
