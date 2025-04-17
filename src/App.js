import Aside from "./components/Aside";
import Header from "./components/Header";
import Number from "./components/Number";
import Card from "./components/Card";

import { SquarePlus } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="layout">
      <Aside />
      <Header />
      <main className="layout-main">
        <section className="top-data">
          <Number number="120" concept="Total Contracts" />
          <Number number="56" concept="Active Contracts" />
          <Number number="64" concept="Signed Contracts" />
          <Number number="97,559 SAR" concept="Total Due Amount" />
        </section>
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <div className="quick-actions__cards">
            <Card
              title="Create New Product"
              description="Start a new product for SME"
              icon={<SquarePlus size={18} />}
              showIcon={true}
              buttonLabel="Add Product"
            />
            <Card
              title="Add Offer"
              description="Add a special offer for SMEs"
              icon={<SquarePlus size={18} />}
              showIcon={true}
              buttonLabel="Create Offer"
            />
            <Card
              title="Manage Discuounts"
              description="View and update discounts"
              icon={<SquarePlus size={18} />}
              showIcon={true}
              buttonLabel="Add Discount"
            />
            <Card
              title="Contracts"
              description="Review all contracts"
              icon={<SquarePlus size={18} />}
              showIcon={false}
              buttonLabel="View"
            />
            <Card
              title="View Packages"
              description="Manage SME packages"
              icon={<SquarePlus size={18} />}
              showIcon={false}
              buttonLabel="View"
            />
            <Card
              title="Organizations"
              description="Manage SME organizations"
              icon={<SquarePlus size={18} />}
              showIcon={false}
              buttonLabel="View"
            />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
