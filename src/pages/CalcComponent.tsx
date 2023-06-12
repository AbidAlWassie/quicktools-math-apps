export default function CalcComponent() {
  const pageUrl = window.location.href;
  const pageName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1);
  const calcName = pageName.replace(/%20/g, ' ');
  const calcClass = pageName.replace(/%20/g, '_').toLowerCase();

  return (
    <div className={calcClass}>
      <h2 className="font-bold text-3xl py-4">{calcName}</h2>
      <p>Calc Stuff</p>
    </div>
  )
}