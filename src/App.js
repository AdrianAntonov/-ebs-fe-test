import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AppProvider from "./context/AppProvider";
import Container from "./components/Container/Container";
import AppBar from "./components/AppBar/AppBar";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Container>
          <AppBar />
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Container>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
