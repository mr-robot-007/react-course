import { useState } from "react";
import "./App.css";

const goals = [
  {
    title: "be active",
    howOften: "2 times a week",
    tag: "#FED8B1",
  },
  {
    title: "be active",
    howOften: "2 times a week",
    tag: "#ffd67d",
  },
  {
    title: "be active",
    howOften: "2 times a week",
    tag: "#a6dcf7",
  },
  {
    title: "be active",
    howOften: "2 times a week",
    tag: "#aaf2b9",
  },
  {
    title: "be active",
    howOften: "2 times a week",
    tag: "#c8bdf2",
  },
];

function App() {
  // const [goals,setGoals] = useState([]);
  return (
    <div className="App">
      <Header />
      <Goals />
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <div>PROFILE</div>
      <div className="active">GOALS</div>
      <div>PROGRESS</div>
    </div>
  );
}

function Goals() {
  return (
    <div className="Goals">
      {goals.map((goal) => (
        <Goal title={goal.title} howOften={goal.howOften} tag={goal.tag} />
      ))}
      <button className="btn">+</button>
    </div>
  );
}
function Goal({ title, howOften, tag }) {
  return (
    <div className="Goal" style={{ backgroundColor: tag }}>
      <input type="checkbox"/>
      <div className="goalmini">
        <h3>{title}</h3>
        <p>{howOften}</p>
      </div>
    </div>
  );
}



export default App;
