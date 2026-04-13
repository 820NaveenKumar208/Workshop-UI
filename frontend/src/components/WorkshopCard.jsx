import { Link } from 'react-router-dom';

export default function WorkshopCard({ workshop }) {
  return (
    <article className="workshop-card">
      <div className="workshop-card__header">
        <p className="workshop-tag">{workshop.tag}</p>
        <h3>{workshop.title}</h3>
      </div>
      <p className="workshop-card__description">{workshop.description}</p>
      <div className="workshop-card__footer">
        <span className="workshop-date">{workshop.date}</span>
        <Link to="/register" className="button button--secondary">
          Register
        </Link>
      </div>
    </article>
  );
}
