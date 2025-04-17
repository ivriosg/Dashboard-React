import { cardData } from "../data/cardData";
import Button from "./Button";
import { SquarePlus } from "lucide-react";

export default function Card() {
  return (
    <div className="quick-actions__cards">
      {cardData.map((item) => {
        return (
          <div className="card-block">
            <div className="card-block__top">
              <div className="content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="card-block__icon">
                <img src="https://placehold.co/50" alt={item.title} />
              </div>
            </div>
            <div className="card-block--btn">
              <Button
                icon={<SquarePlus size={18} />}
                showIcon={item.showIcon}
                concept={item.buttonLabel}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
