export default function Price({ price }) {
  return (
    <div>
      <div className="rounded-md bg-slate-900 h-fit px-2 py-1 w-fit ">
        <span className="text-white font-semibold whitespace-pre">
          {price} USD
        </span>
      </div>
      <span className="text-red-600 font-semibold whitespace-pre line-through">{price + price / 12} USD</span>
    </div>
  );
}
