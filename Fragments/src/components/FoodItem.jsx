import Item from "../item";

const FoodItems = () => {
  let foodItems = ["Salad", "Milk", "Beef", "Dal", "Green Vegetable", "Ghee"];
  return (
    <>
      <ul className="list-group list-group-flush">
        {foodItems.map((item) => (
          <Item key ={item}  foodItem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
