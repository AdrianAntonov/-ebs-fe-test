import { useContext } from "react";
import context from "../../context/appContext";
import { BsTrash } from "react-icons/bs";
import { BsPlusCircle } from "react-icons/bs";
import { BsDashCircle } from "react-icons/bs";
import styles from "./Cart.module.css";

function CartItem({ i }) {
  const {
    products,
    cartList,
    addItemToCart,
    subtractCartItem,
    removeItemFromCart,
  } = useContext(context);

  const productsListItemId = [i - 1];

  return (
    <tr key={products[productsListItemId].id}>
      <td>{products[productsListItemId].category.name}</td>
      <td>{products[productsListItemId].name}</td>
      <td>{cartList[i]}</td>
      <td>{`$${(products[productsListItemId].price * cartList[i]).toFixed(
        2
      )}`}</td>
      <td>
        <button onClick={() => subtractCartItem(i)}>
          <BsDashCircle className={styles.sign} />
        </button>
        <button onClick={() => addItemToCart(i)}>
          <BsPlusCircle className={styles.sign} />
        </button>
        <button onClick={() => removeItemFromCart(i)}>
          <BsTrash className={styles.sign_delete} />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
