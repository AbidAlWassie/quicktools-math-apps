export default function CalcComponent() {
  const pageUrl = window.location.href;
  const pageName = pageUrl.substring(pageUrl.lastIndexOf("/") + 1);
  const calcName = pageName.replace(/%20/g, " ");
  const calcClass = pageName.replace(/%20/g, "_").toLowerCase();

  const jsonString = '{"operation": "addition", "operands": [5, 1]}';
  const mathObject = JSON.parse(jsonString);
  
  let result;
  switch (mathObject.operation) {
    case 'addition':
      result = mathObject.operands.reduce((a: any, b: any) => a + b, 0);
      break;
    case 'subtraction':
      result = mathObject.operands.reduce((a: number, b: number) => a - b);
      break;
    case 'multiplication':
      result = mathObject.operands.reduce((a: number, b: number) => a * b, 1);
      break;
    case 'division':
      result = mathObject.operands.reduce((a: number, b: number) => a / b);
      break;
    default:
      console.log('Invalid operation');
      break;
  }
  
  console.log('Result:', result);
  
  return (
    <div className={calcClass}>
      <h2 className="font-bold text-3xl py-4">{calcName}</h2>
      <div id="mathSection">
        <input type="text" className=""/>
        <p>Output: {result}</p>
      </div>
    </div>
  )
}