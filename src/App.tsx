import { Navbar, CalculatorCard, PageNav } from "./components";
import images from './constants/images';

function App() {

  const financialData = [
    { name: 'Investment Calculator', img: images.profit_80 },
    { name: 'Salary Calculator', img: images.cash_80 },
    { name: 'Interest Calculator', img: images.increase_80 },
  ];
  
  const unitConversionData = [
    { name: 'Mass & Weight', img: images.weight_kg_80 },
    { name: 'Length', img: images.length_80 },
    { name: 'Volume', img: images.front_view_80 },
  ];

  const AreaCalculatorData = [
    { name: 'Land & Area', img: images.weight_kg_80 },
    { name: 'Volume', img: images.length_80 },
    { name: 'Geometry', img: images.front_view_80 },
  ];

  const timeCalculatorData = [
    { name: 'Time Between', img: images.time_80 },
    { name: 'Date Between', img: images.calendar_80 },
    { name: 'Age & Death', img: images.heart_with_pulse_80 },
  ];

  const MathCalculatorData = [
    { name: 'Standard Calculator', img: images.calculator_80 },
    { name: 'Scientific Calculator', img: images.fx },
    { name: 'Energy Converter', img: images.flash_on_80 },
  ];

  const computingCalculatorsData = [
    { name: 'Data Calculator', img: images.hdd_80 },
    { name: 'Color Converter', img: images.rgb_color_wheel_80 },
    { name: 'Binary Calculator', img: images.binary_80 },
  ];

  // const JustForFunData = [
  //   { name: 'Data Calculator', img: images.hdd_80 },
  //   { name: 'Color Converter', img: images.rgb_color_wheel_80 },
  //   { name: 'Binary Calculator', img: images.binary_80 },
  // ];

  return (
    <>
      <Navbar/>
      <PageNav/>
      <div className="container mx-auto">
        <div className="cards grid grid-cols-3 gap-x-[14rem]">
          <CalculatorCard data-title="Financial" data-type="financial" data-items={financialData} />
          <CalculatorCard data-title="Time" data-type="time" data-items={timeCalculatorData} />
          <CalculatorCard data-title="Area & Length" data-type="AreaLength" data-items={AreaCalculatorData} />
          <CalculatorCard data-title="Unit Conversion" data-type="unitConversion" data-items={unitConversionData} />
          <CalculatorCard data-title="Math" data-type="Math" data-items={MathCalculatorData} />
          <CalculatorCard data-title="Computing" data-type="Computing" data-items={computingCalculatorsData} />
          {/* <CalculatorCard data-title="User Customs" data-type="JIF" data-items={JustForFunData} /> */}
        </div>
      </div>
    </>
  );
}

export default App;
