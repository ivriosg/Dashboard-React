import Button from "./Button";

export default function Card({
  title,
  description,
  image,
  icon,
  showIcon,
  buttonLabel,
}) {
  return (
    <div className="card-block">
      <div className="card-block__top">
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div className="card-block__icon">
          <img src="https://placehold.co/50" alt={title} />
        </div>
      </div>
      <div className="card-block--btn">
        <Button icon={icon} showIcon={showIcon} concept={buttonLabel} />
      </div>
    </div>
  );
}
