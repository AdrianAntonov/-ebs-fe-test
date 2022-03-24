import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

export function fetchProducts() {
  return axios.get(`${BASE_URL}/products/`).then((response) => response);
}
