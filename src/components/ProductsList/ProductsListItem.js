import { useContext } from "react";
import context from "../../context/appContext";
import styles from "./ProductsList.module.css";
import { BsTrash } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";

function ProductsListItem({ item: { id, name, category, price } }) {
  const { addItemToCart, subtractCartItem, removeItemFromCart } =
    useContext(context);

  return (
    <tr key={id} className={styles.item}>
      <td>{category.name}</td>
      <td>{name}</td>
      <td>{`$${price}`}</td>
      <td>
        <BsDashCircle
          className={styles.sign}
          onClick={() => subtractCartItem(id)}
        />
        <BsPlusCircle
          className={styles.sign}
          onClick={() => addItemToCart(id)}
        />

        <BsTrash
          className={styles.sign_delete}
          onClick={() => removeItemFromCart(id)}
        />
      </td>
    </tr>
  );
}

export default ProductsListItem;
