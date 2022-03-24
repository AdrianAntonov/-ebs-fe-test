// import styles from "./ProductsList.module.css";
import Table from "react-bootstrap/Table";
import { BsSortAlphaDown } from "react-icons/bs";
import { BsSortAlphaDownAlt } from "react-icons/bs";
import { BsSortNumericDown } from "react-icons/bs";
import { BsSortNumericDownAlt } from "react-icons/bs";
import styles from "./ProductsList.module.css";

function ProductsListTable({ properties }) {
  const {
    listItem,
    productsItem,
    setProductsAlphabeticalOrder,
    setProductsPriceOrder,
    productOrder,
    priceOrder,
  } = properties;

  return (
    <Table striped hover>
      <thead className={styles.head}>
        <tr>
          <th className="table-light">
            {` Category `}
            <button
              type="button"
              data-name="category"
              onClick={setProductsAlphabeticalOrder}
            >
              Sort
            </button>
            {productOrder ? <BsSortAlphaDownAlt /> : <BsSortAlphaDown />}
          </th>
          <th className="table-light">Name</th>
          <th className="table-light">
            {` Price `}
            <button
              type="button"
              data-name="price"
              onClick={setProductsPriceOrder}
            >
              Sort
            </button>
            {priceOrder ? <BsSortNumericDownAlt /> : <BsSortNumericDown />}
          </th>
          <th className="table-light">Actions</th>
        </tr>
      </thead>
      <tbody>{listItem.length > 0 ? listItem : productsItem}</tbody>
    </Table>
  );
}

export default ProductsListTable;
