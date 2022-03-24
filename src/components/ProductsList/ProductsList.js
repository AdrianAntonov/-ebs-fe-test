import { useContext, useState } from "react";
import ProductsListItem from "./ProductsListItem";
import context from "../../context/appContext";
import ProductsListTable from "./ProductsListTable";
import styles from "./ProductsList.module.css";

function ProductsList() {
  const [productOrder, setProductOrder] = useState(false);
  const [priceOrder, setPriceOrder] = useState(false);
  const { products } = useContext(context);
  const [list, setList] = useState(products);

  const toggleProductOrder = (arg) => {
    switch (arg) {
      case "category":
        setProductOrder((prev) => !prev);
        break;
      case "price":
        setPriceOrder((prev) => !prev);
        break;
      default:
        return;
    }
  };

  const setProductsAlphabeticalOrder = (e) => {
    if (!productOrder) {
      const arrList = [...products].sort((a, b) =>
        a.category.name > b.category.name ? 1 : -1
      );
      setList(arrList);
      toggleProductOrder(e.target.dataset.name);
    } else {
      const arrList = [...products].sort((a, b) =>
        a.category.name > b.category.name ? -1 : 1
      );
      toggleProductOrder(e.target.dataset.name);
      setList(arrList);
    }
  };

  const setProductsPriceOrder = (e) => {
    if (!priceOrder) {
      const arrList = [...products].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      setList(arrList);
      toggleProductOrder(e.target.dataset.name);
    } else {
      const arrList = [...products].sort((a, b) =>
        a.price > b.price ? -1 : 1
      );
      setList(arrList);
      toggleProductOrder(e.target.dataset.name);
    }
  };

  const listItem = list.map((i) => <ProductsListItem key={i.id} item={i} />);
  const productsItem = products.map((i) => (
    <ProductsListItem key={i.id} item={i} />
  ));

  const properties = {
    priceOrder,
    productOrder,
    setProductsPriceOrder,
    setProductsAlphabeticalOrder,
    productsItem,
    listItem,
  };

  return (
    <div className={styles.products}>
      <ProductsListTable properties={properties} />
    </div>
  );
}

export default ProductsList;
