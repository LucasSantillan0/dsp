export default function Container({ children, className }) {
  return (
    <div className="bg-slate-200 w-screen h-screen absolute top-0">
      <div className={`md:rounded-md md:flex md:w-8/12 bg-white w-full  md:h-5/6 mx-auto mt-16 rounded-t-3xl h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
