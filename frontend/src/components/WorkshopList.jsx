import WorkshopCard from './WorkshopCard.jsx';

export default function WorkshopList({ workshops }) {
  return (
    <div className="workshop-grid">
      {workshops.map((workshop) => (
        <WorkshopCard key={workshop.id} workshop={workshop} />
      ))}
    </div>
  );
}
