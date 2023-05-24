// import './App.css'
import { Navbar, CalculatorCard } from "./components";

function App() {
  const financialCalculators = ['Investment Calculator', 'Salary Calculator', 'Interest Calculator'];
  const timeCalculators = ['Time Between', 'Date Between', 'Age/Death'];
  const areaLengthCalculators = ['Land/Area', 'Volume', 'Geometry'];
  const unitConversion = ['Mass/Weight', 'Length', 'Volume'];
  const mathCalculators = ['Standard Calculator', 'Scientific Calculator', 'Energy Converter'];
  const computingCalculators = ['Data Calculator', 'Color Converter', 'Binary Calculator'];

  return (
    <>
      <Navbar/>
      <div className="container mx-auto">
        <div className="cards grid grid-cols-3 gap-x-[14rem]">
          <CalculatorCard data-category="Financial" data-items="financial" data-links={financialCalculators} />
          <CalculatorCard data-category="Time" data-items="time" data-links={timeCalculators} />
          <CalculatorCard data-category="Area & Length" data-items="AreaLength" data-links={areaLengthCalculators} />
          <CalculatorCard data-category="Unit Conversion" data-items="unitConversion" data-links={unitConversion} />
          <CalculatorCard data-category="Math" data-items="Math" data-links={mathCalculators} />
          <CalculatorCard data-category="Computing" data-items="Computing" data-links={computingCalculators} />
        </div>
      </div>
    </>
  );
}

export default App;
