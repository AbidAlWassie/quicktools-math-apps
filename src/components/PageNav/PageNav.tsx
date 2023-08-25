const PageNav = () => {

  const pageUrl = window.location.href;
  const calcName = pageUrl.substring(pageUrl.lastIndexOf("/") + 1).replace(/%20/g, " ");

  return (
    <div className="bg-gray-800">
      <ul className="flex items-center space-x-2 py-2 rounded container mx-auto">
        <li className="text-gray-300 font-semibold">
          <a href="/" className="hover:underline" draggable="false">Home</a>
        </li>

        {calcName && (
        <li className="font-semibold mx-0">
          <span className="text-gray-400 px-2 font-bold">/</span>
          <a href="" className="text-gray-300 hover:underline" draggable="false">{calcName}</a>
        </li>
        )}
      </ul>
    </div>
  );
};

export default PageNav;
