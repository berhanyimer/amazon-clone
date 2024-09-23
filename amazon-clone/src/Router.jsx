import { BrowserRouter as Router ,Routes ,Route } from "react-router-dom"
import Landing from "./Pages/Landing/Landing";
import Payment from "./Pages/Payment/Payment";
import Order from "./Pages/Orders/Order";
import Cart from "./Pages/Cart/Cart";
import Result from "./Pages/Result/Result";
import ProductDetail from "./Pages/ProductDetail/ProductDetail"
import Product from "./Componenets/Product/product";
import Loader from "./Componenets/Loader/Loader";
import Auth from "./pages/Auth/Auth";
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="auth" element={<Auth />} />
        <Route path="payment" element={<Payment />} />
        <Route path="order" element={<Order />} />
        <Route path="Product" element={<Product />} />
        <Route path="category/:categoryName" element={<Result />} />
        <Route path="Loader" element={<Loader />} />
        <Route path="products/:productID" element={<ProductDetail />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;

