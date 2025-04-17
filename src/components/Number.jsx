export default function Number({ number, concept }) {
  return (
    <div className="number-card">
      <span className="number-card__number">{number}</span>
      <p className="number-card__concept">{concept}</p>
    </div>
  );
}
