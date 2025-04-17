import { numberData } from "../data/numberData";

export default function Number() {
  return (
    <section className="top-data">
      {numberData.map((item) => (
        <div className="number-card" key={item.id}>
          <span className="number-card__number">{item.number}</span>
          <p className="number-card__concept">{item.concept}</p>
        </div>
      ))}
    </section>
  );
}
