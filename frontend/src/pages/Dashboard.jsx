import PageLayout from '../components/PageLayout.jsx';

export default function Dashboard({ darkMode, onToggleDarkMode }) {
  return (
    <PageLayout darkMode={darkMode} onToggleDarkMode={onToggleDarkMode}>
      <section className="section section--hero section--small" id="top">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Dashboard</p>
            <h1>Your profile overview</h1>
            <p className="section-copy">
              A focused profile area that summarizes your activity and next steps.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--dashboard">
        <div className="container dashboard-grid">
          <div className="profile-card">
            <p className="profile-title">Student Profile</p>
            <p className="profile-value">Alex Sharma</p>
            <p className="profile-meta">Workshop attendee since 2025</p>
          </div>
          <div className="profile-card">
            <p className="profile-title">Next workshop</p>
            <p className="profile-value">Data Visualization</p>
            <p className="profile-meta">June 3, 2026</p>
          </div>
          <div className="profile-card">
            <p className="profile-title">Progress</p>
            <p className="profile-value">7 workshops completed</p>
            <p className="profile-meta">Keep learning with new sessions</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
