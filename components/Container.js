import Image from "next/dist/client/image";
import logo from '../producto0/logo-removebg-preview.png'
export default function Container({ children, className }) {
  return (
    <div className="bg-slate-200 w-screen h-screen absolute top-0">
      <div className= " flex justify-center items-center my-3">
      <Image
      src={logo}
      alt='logo'
      width={70}
      height={70}
      /></div>
      <div className={`md:rounded-md md:flex md:w-8/12 bg-white w-full  md:h-5/6 mx-auto rounded-t-3xl h-full ${className}`}>
        {children}
      </div>
    </div>
  );
}
