import ProductPage from "../components/templates/ProductPage";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/atoms/loadingSpinner";

const apiUrl = "http://localhost:3000/api";

export default function Home() {
  // TODO: get products with redux
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    fetch("api/products")
      .then((response) => response.json())
      .then((product) => {
        setLoading(false)
        setProduct(product[0]);
      });
  }, []);
  return (
    <>
    <LoadingSpinner />
      {product && (
        <ProductPage
          images={product.images}
          title={product.title}
          price={product.price}
        />
      )}
    </>
  );
}
