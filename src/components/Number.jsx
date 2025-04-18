export default function Number({ id, number, concept }) {
  return (
    <div className="number-card" key={id}>
      <span className="number-card__number">{number}</span>
      <p className="number-card__concept">{concept}</p>
    </div>
  );
}
