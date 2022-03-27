export default function Container({ children, className }) {
  return (
    <div className="bg-slate-200 w-screen h-screen absolute top-0">
      <div className={`bg-white w-9/12  h-5/6 mx-auto mt-16 rounded-md ${className}`}>
        {children}
      </div>
    </div>
  );
}
