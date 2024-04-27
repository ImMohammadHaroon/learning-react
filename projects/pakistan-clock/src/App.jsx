import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import ClockTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css"






function App () {

  return <div>
    <ClockHeading/>
    <ClockSlogan/>
    <ClockTime/>
  </div>
}

export default App; 