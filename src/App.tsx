// import './App.css'
import { Navbar, CalculatorCard } from "./components";
import images from './constants/images';

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
          <CalculatorCard data-category="Financial" data-items="financial" data-links={financialCalculators} data-icons={images.cash_80} />
          <CalculatorCard data-category="Time" data-items="time" data-links={timeCalculators} data-icons={images.calendar_80} />
          <CalculatorCard data-category="Area & Length" data-items="AreaLength" data-links={areaLengthCalculators} data-icons={images.length_80} />
          <CalculatorCard data-category="Unit Conversion" data-items="unitConversion" data-links={unitConversion} data-icons={images.weight_kg_80} />
          <CalculatorCard data-category="Math" data-items="Math" data-links={mathCalculators} data-icons={images.fx} />
          <CalculatorCard data-category="Computing" data-items="Computing" data-links={computingCalculators} data-icons={images.hdd_80} />
        </div>
      </div>
    </>
  );
}

export default App;
