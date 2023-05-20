// import './App.css'
// It's all blank when I add <CalculatorCard/> components
import { Navbar, CalculatorCard } from "./components";

function App() {

  const financialCalculators = ['Investment Calculator', 'Salary Calculator', 'Interest Calculator'];
  const timeCalculators = ['Time Between', 'Date Between', 'Age/Death'];
  const areaLengthCalculators = ['Land/Area', 'Volume', 'Geometry'];

  return (
    <>
    <Navbar/>
    <div className="cards flex space-x-4">
      <CalculatorCard type="Financial" items="financial" links={financialCalculators} />
      <CalculatorCard type="Time" items="time" links={timeCalculators} />
      <CalculatorCard type="Area & Length" items="AreaLength" links={areaLengthCalculators} />
    </div>
    </>
  )
}

export default App
