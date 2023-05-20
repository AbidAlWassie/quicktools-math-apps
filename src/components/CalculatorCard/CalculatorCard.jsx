import React from 'react';

function handleClick(event) {
  if (!event.target.getAttribute('href')) {
    // Perform the desired action when the link is clicked
    event.preventDefault();
  }
}

const CalculatorCard = ({ type, items, links }) => {
  return (
    <div className="card bg-gray-700 my-2 w-[270px]">
      <h2 className="text-2xl font-bold">{type}</h2>
      <ul className={`section ${items}`}>
        {links.map((links, index) => (
          <li key={index} className="px-2 py-2 flex space-y-4">
            <a href="" onClick={handleClick}>{links}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalculatorCard;