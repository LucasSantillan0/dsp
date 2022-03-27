import Image from "next/image";

const RoundedImage = ({ src, width, height, className}) => {
  return (
    <Image
      className={` rounded-md ${className}`}
      src={src}
      alt="Picture of the author"
      width={width}
      height={height}
    />
  );
};

export default RoundedImage;