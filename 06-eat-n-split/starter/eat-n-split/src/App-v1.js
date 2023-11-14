import { useState } from "react";
import "./App.css";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const [total, setTotal] = useState();

  function handleBillChange(value) {
    setBill(value);
    console.log(value);
  }

  function handleReset() {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <div>
      <p>
        How much was the bill ?
        <BillInput bill={bill} onBillChange={handleBillChange} />
      </p>
      <p>
        How did you like the service?
        <SelectPercentage
          percentage={percentage1}
          onPercentage={setPercentage1}
        />
      </p>
      <p>
        How did your friend like the service ?
        <SelectPercentage
          percentage={percentage2}
          onPercentage={setPercentage2}
        />
      </p>

      {bill ? (
        <div>
          <Output
            bill={bill}
            percentage1={percentage1}
            percentage2={percentage2}
          />
          <Reset onReset={handleReset} />
        </div>
      ) : null}
    </div>
  );
}

function BillInput({ bill, onBillChange }) {
  return (
    <div>
      <input
        type="text"
        value={bill}
        onChange={(e) => onBillChange(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onPercentage }) {
  function handlePercentageChange(value) {
    onPercentage(value);
  }
  return (
    <div>
      <select
        value={percentage}
        onChange={(e) => handlePercentageChange(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely Amazing(20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, percentage1, percentage2 }) {
  const avgPer = (percentage1 + percentage2) / 2;
  const tip = Math.floor(bill * (0.01 * avgPer));
  const total = (bill) + (tip);
  if (!bill) return <div></div>;
  return (
    <div>
      <h3>
        Your total is ${total} {`($${bill} + $${tip} tip)`}
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}

export default App;
