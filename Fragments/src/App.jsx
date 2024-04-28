import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import FoodItems from "./components/FoodItem";
import ErrorMessage from "./ErrorMessage";

function App() {
  const foodItems = ["Salad", "Milk", "Beef", "Dal", "Green Vegetable", "Ghee"];
  return (
    <>
      <div className="p-3 mb-2 bg-dark-subtle text-dark-emphasis">
        <ErrorMessage />
        <FoodItems />
      </div>
    </>
  );
}

export default App;
