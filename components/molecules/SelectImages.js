import RoundedImage from "../atoms/RoundedImage";

import { useState } from "react";

export default function SelectImages({ images }) {
  //TODO: Make imports dinamic
  const [principalImage, setPrincipalImage] = useState(images[1]);

  console.log(images);
  return (
    <div className="ml-16">
      <div className="w-12/12 flex justify-center mb-12 mt-6">
        <RoundedImage src={principalImage} width={410} height={410} />
      </div>
      <ul className="flex gap-4">
        {images.map((image) => (
          <li key={image}>
            <button
            onClick={e=>setPrincipalImage(image)}
            className={`hover:scale-110 ease-out duration-300`}
            >
            <RoundedImage
              src={image}
              width={150}
              height={150}
              
            />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
