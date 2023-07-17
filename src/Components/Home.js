import { useEffect } from "react";
import * as AllFuntions from "../redux/actions/productsActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllFuntions.fetchProductsData());
  }, []);

  const products = useSelector((state) => {
    return state.products.data;
  });

  console.log(products.length);

  return (
    products.length>0 &&
    products.map((product, index) => {
      return (
        <div key={index}>
          <h1>{product.brand}</h1>
          <img src={product.images[0]} alt="" />
          <p>{product.description}</p>
        </div>
      );
    })
  );
};

export default Home;
