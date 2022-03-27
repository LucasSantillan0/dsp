import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import SelectImages from "../components/molecules/SelectImages";
import image0 from '../producto0/0.webp'
import image1 from '../producto0/1.webp'
import image2 from '../producto0/2.webp'
import Price from "../components/atoms/Price";
import ProductPage from "../components/templates/ProductPage";

export default function Home() {
  const images = [image0, image1, image2]
  return (
    <ProductPage
    images={images}
    title={'Lenovo wireless headset'}
    price={150}
    />
  );
}
