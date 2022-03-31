import styles from "../styles/Home.module.css";
import Container from "../components/Container";
import SelectImages from "../components/molecules/SelectImages";
import image0 from '../producto0/0.webp'
import image1 from '../producto0/1.webp'
import image2 from '../producto0/2.webp'
import Price from "../components/atoms/Price";
import ProductPage from "../components/templates/ProductPage";
import { useEffect, useState } from "react";

const apiUrl='http://localhost:3000/api'

export default function Home() {
  // TODO: get products with redux
  const [product, setProduct] = useState(null)
  useEffect(()=>{
    fetch('api/products')
    .then(response => response.json())
    .then(product => {
      setProduct(product[0])})

  }, [])
  return (
    <>
    {product && 
    
    <ProductPage
    images={product.images}
    title={product.title}
    price={product.price}
    />
    }
    </>
  );
}
