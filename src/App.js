import { numberData } from "./data/numberData";

import Aside from "./components/Aside";
import Header from "./components/Header";
import Number from "./components/Number";
import Card from "./components/Card";

import "./App.css";

function App() {
  return (
    <div className="layout">
      <Aside />
      <Header />
      <main className="layout-main">
        <section className="top-data">
          {numberData.map((item) => (
            <Number key={item.id} {...item} />
          ))}
        </section>
        {/* <Dialog /> */}
        <section className="quick-actions">
          <h2>Quick Actions</h2>
          <Card />
        </section>
      </main>
    </div>
  );
}

export default App;
