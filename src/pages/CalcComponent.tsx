export default function CalcComponent() {
  const pageUrl = window.location.href;
  const calcName = pageUrl.substring(pageUrl.lastIndexOf('/') + 1).replace(/%20/g, ' ');
  return (
    <div>
      <h2 className="font-bold text-3xl flex justify-center py-4">{calcName}</h2>
      <p>Calc Stuff</p>
    </div>
  )
}