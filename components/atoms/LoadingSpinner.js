import s from "./LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-bounce w-full  mx-auto relative top-64">
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
    </div>
  );
}
