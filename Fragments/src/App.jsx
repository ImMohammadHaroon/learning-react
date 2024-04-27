import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  let foodItem = ["Salad" , "Milk" , "Beaf" , "Dall", "Green Vegitable", "Ghee"]
  return (
    <>
      <h1>Healthy Food</h1>
      {foodItem.map(item =>( <li key ={item}className="list-group-item">{item}</li>) )}
        
    </>
   
  );
}

export default App;
