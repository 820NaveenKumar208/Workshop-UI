import PageLayout from '../components/PageLayout.jsx';

const stats = [
  { label: 'Total workshops', value: '24' },
  { label: 'Students registered', value: '1.2k' },
  { label: 'Upcoming sessions', value: '8' },
  { label: 'Average rating', value: '4.8 / 5' },
];

export default function Statistics({ darkMode, onToggleDarkMode }) {
  return (
    <PageLayout darkMode={darkMode} onToggleDarkMode={onToggleDarkMode}>
      <section className="section section--hero section--small" id="top">
        <div className="container split-grid">
          <div>
            <p className="eyebrow">Workshop Statistics</p>
            <h1>Track program performance</h1>
            <p className="section-copy">
              Simple, clean metrics to understand workshop activity and student engagement.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--stats">
        <div className="container stats-grid">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <p className="stat-label">{item.label}</p>
              <p className="stat-value">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
