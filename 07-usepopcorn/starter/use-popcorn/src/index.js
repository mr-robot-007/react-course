import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import './index.css';
import App from './App';

function Test() {
  const [movieRating,setMovieRating] = useState(0);
  return (
    <div>
        <StarRating color="blue" onSetRating = {setMovieRating} />
      <p>
        This movie is rated {movieRating} stars
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <App />
    // {/* <StarRating
    //   maxRating={5}
    //   messages={["Terrible", "Bad", "Average", "Good", "Excellent"]}
    // /> */}
    // {/* <StarRating
    //   maxRating={5}
    //   size={24}
    //   color="red"
    //   className="test"
    //   defaultRating={3}
    // /> */}
    // {/* <Test /> */}
  // </React.StrictMode>
);
