import { cardData } from "../data/cardData";
import { SquarePlus } from "lucide-react";
import Button from "./Button";

export default function Card() {
  return (
    <div className="quick-actions__cards">
      {cardData.map((item) => {
        return (
          <div className="card-block" key={item.id}>
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
                clas={item.clas}
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
