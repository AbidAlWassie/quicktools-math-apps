import React from 'react';

interface CalculatorCardProps {
  'data-category': string;
  'data-items': string;
  'data-icons': string;
  'data-links': string[];
}

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  if (!event.currentTarget.getAttribute('href')) {
    event.preventDefault();
  }
}

const CalculatorCard = ({ 'data-category': category, 'data-items': items, 'data-icons': icons, 'data-links': links }: CalculatorCardProps) => {
  return (
    <div className="card my-2 max-w-[320px]">
      <h2 className="text-4xl font-bold my-3">{category}</h2>
      <ul className={`section ${items}`}>
        {links.map((link, index) => (
          <li key={index} className="my-2 bg-gray-700 flex h-14 rounded-md">
            <img src={icons} alt={icons} width={56} height={56}/>
            <a href="" onClick={handleClick} className="w-full h-full flex items-center px-2 font-semibold text-2xl">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorCard;
