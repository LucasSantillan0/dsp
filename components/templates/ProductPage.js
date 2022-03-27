import Container from "../Container";
import Price from "../atoms/Price";
import SelectImages from "../molecules/SelectImages";
import Description from "../atoms/Description";
import RoundedButton from "../atoms/RoundedButton";

export default function ProductPage({ title, images, price, details }) {
  return (
    <Container className={`flex-row py-8`}>
      <SelectImages images={images} />
      <div className="flex-col px-4 bg-slate-200 w-full rounded-sm pb-4 rounded-tr-full md:rounded-sm md:w-4/12 md:mr-24">
        <h1 className="font-bold text-4xl font-serif mx-auto my-2 pt-4">
          {title}
        </h1>
        <div className="flex gap-8 mt-2 mb-4 justify-center">
          <RoundedButton text={"Buy it!"} className="text-xl font-serif-" />
          <Price price={price} />
        </div>
        <Description
          description={`Lenovo customized Bluetooth 5.0, strong signal connection stability and low latency, universal for Apple and Android phones.\n
          Equipped with double vibration tympanic membrane, 13mm large moving coil speaker, clear treble and deep bass\n
          In-ear design, better noise reduction effect \n
          Support voice calls, high-definition binaural call, with clear and noise-free and ambient noise reduction function\n
          The earphones are touch, you can switch the music up and down, increase and decrease the volume, answer calls and wake up the voice assistant on the earphones.\n
          It adopts life-level waterproof design, not afraid of splashing from sweat and rain, and it will accompany you when you travel outdoors at any time.`}
        />
      </div>
    </Container>
  );
}
