interface CalculatorCardProps {
  'data-title': string;
  'data-type': string;
  'data-items': { name: string; img: string }[];
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (!event.currentTarget.getAttribute('href')) {
    event.preventDefault();
  }
  // else {
  //   console.log(event.currentTarget.getAttribute('href'));
  // }
}

const CalculatorCard = ({ 'data-title': title, 'data-type': type, 'data-items': items }: CalculatorCardProps) => {
  return (
    <div className="card my-2 max-w-[320px]">
      <h2 className="text-4xl font-bold my-3">{title}</h2>
      <ul className={`section ${type}`}>
        {items.map((item, index) => (
          <li key={index} className="my-2 bg-gray-700 flex h-14 rounded-md">
            <img src={item.img} alt={item.img} width={56} height={56} className='p-2' draggable="false"/>
            <a href={item.name} onClick={handleClick} className="w-full h-full flex items-center px-2 font-semibold text-2xl" draggable="false">{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorCard;
