import "./Dialog.css";

import Button from "./Button";
import { SquarePlus } from "lucide-react";

export default function Dialog() {
  return (
    <div className="dialog">
      <div className="dialog-backdrop"></div>
      <div className="dialog-content">
        <img src="https://placehold.co/80" className="dialog-img" />
        <p className="dialog-title">Product Added Successfully</p>
        <p className="dialog-description">
          Enhance this product by adding a special offer or dicscout, Or Click
          here to add a new product to the catalog.
        </p>
        <div className="dialog-buttons">
          <Button
            clas="blue"
            icon={<SquarePlus />}
            showIcon={true}
            concept="Add Offer"
            className="blue"
          />
          <Button
            icon={<SquarePlus />}
            showIcon={false}
            concept="Add Another Product"
          />
        </div>
      </div>
    </div>
  );
}
