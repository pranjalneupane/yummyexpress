import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Menu from "./Pages/Menu";
import AllergyAdvice from "./Pages/AllergyAdvice";
import Services from "./Pages/Services";
import UserProfile from "./Pages/UserProfile";
import PageNotFound from "./Pages/PageNotFound";
import Navigation from "./Navbar/Navigation";
import ProductDescription from "./Pages/ProductDescription";
import Cart from "./Pages/Cart";
import Footer from "./Footer/Footer";
import Payment from "./Pages/Payment/Payment";
import Success from "./Pages/Payment/Success";
import Failure from "./Pages/Payment/Failure";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={<ProtectedRoutes components={<About />} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/menu"
          element={<ProtectedRoutes components={<Menu />} />}
        />
        <Route path="/allergyAdvice" element={<AllergyAdvice />} />
        <Route path="/services" element={<Services />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/productDescription" element={<ProductDescription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
