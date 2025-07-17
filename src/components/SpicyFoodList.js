import React, { useState } from "react";

const spicyFoods = [
  { id: 1, name: "Buffalo Wings", heatLevel: 3, cuisine: "American" },
  { id: 2, name: "Mapo Tofu", heatLevel: 5, cuisine: "Sichuan" },
  { id: 3, name: "Green Curry", heatLevel: 4, cuisine: "Thai" },
  { id: 4, name: "Tacos", heatLevel: 2, cuisine: "Mexican" },
];

function getNewRandomSpicyFood() {
  const newFoods = [
    { name: "Vindaloo", heatLevel: 6, cuisine: "Indian" },
    { name: "Kimchi Stew", heatLevel: 5, cuisine: "Korean" },
    { name: "Jalapeño Poppers", heatLevel: 3, cuisine: "American" },
  ];
  const id = Date.now(); // unique id
  const randomFood = newFoods[Math.floor(Math.random() * newFoods.length)];
  return { id, ...randomFood };
}

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  const handleAddFood = () => {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood]);
  };

  const handleLiClick = (id) => {
    const updatedFoods = foods.map((food) =>
      food.id === id ? { ...food, heatLevel: food.heatLevel + 1 } : food
    );
    setFoods(updatedFoods);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const foodsToDisplay = foods.filter((food) => {
    return filterBy === "All" || food.cuisine === filterBy;
  });

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🌶️ Spicy Food List</h2>

      <div style={styles.controls}>
        <button onClick={handleAddFood} style={styles.button}>
          ➕ Add Food
        </button>

        <select onChange={handleFilterChange} style={styles.select}>
          <option value="All">All</option>
          <option value="American">American</option>
          <option value="Sichuan">Sichuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="Korean">Korean</option>
        </select>
      </div>

      <ul style={styles.list}>
        {foodsToDisplay.map((food) => (
          <li key={food.id} onClick={() => handleLiClick(food.id)} style={styles.listItem}>
            {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    padding: "1.5rem",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 0 12px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem",
    color: "#d43f00",
  },
  controls: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "1rem",
  },
  button: {
    padding: "0.5rem 1rem",
    backgroundColor: "#ff6600",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  select: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    background: "#f8f8f8",
    padding: "0.75rem",
    marginBottom: "0.5rem",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};

export default SpicyFoodList;
