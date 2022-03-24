import { useContext } from "react";
import context from "../../context/appContext";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { cartList } = useContext(context);

  const cartItems = Object.keys(cartList).map((i) => (
    <CartItem key={i} i={i} />
  ));

  return (
    <div>
      {Object.keys(cartList).length > 0 ? (
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{cartItems}</tbody>
        </table>
      ) : (
        <p className={styles.text}>Your Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
