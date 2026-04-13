import { Link } from 'react-router-dom';

export default function Hero({ ctaLink = '/workshops', ctaText = 'Browse Workshops' }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy container">
        <p className="eyebrow">Modern learning for students</p>
        <h1>Workshop Booking Portal</h1>
        <p className="hero-description">
          Discover upcoming workshops, reserve your seat, and stay connected with easy scheduling.
        </p>
        <Link to={ctaLink} className="button button--primary">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
