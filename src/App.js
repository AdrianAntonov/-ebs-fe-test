import { Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Container>
  );
}

export default App;
