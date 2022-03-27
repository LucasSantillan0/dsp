import styles from "../styles/Home.module.css";
import Container from "./components/Container";
import SelectImages from "./components/molecules/SelectImages";
import image0 from '../producto0/0.webp'
import image1 from '../producto0/1.webp'
import image2 from '../producto0/2.webp'
import Price from "./components/atoms/Price";

export default function Home() {
  const images = [image0, image1, image2]
  return (
    <Container className={`flex py-8`}>
      <SelectImages images={images}/>
      <h1 className="font-bold text-4xl font-serif mx-auto mt-8 pl-6">Lenovo wireless headset</h1>
      <Price price={150}></Price>
    </Container>
  );
}
