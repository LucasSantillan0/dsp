export default function RoundedButton({ text, onClick, className }) {
  return <button onClick={(e) => onClick(e)} className={`rounded-md p-4 bg-slate-600 text-white font-bold hover:bg-slate-400 ease-in-out duration-150 hover:scale-105 ${className}`}>{text.toUpperCase()}</button>;
}
