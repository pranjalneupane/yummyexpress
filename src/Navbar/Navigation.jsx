import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { useAuth0 } from "@auth0/auth0-react";
import { Bounce, toast } from "react-toastify";

function Navigation() {
  const { user, isAuthenticated, logout } = useAuth0();
  const { state } = useContext(CartContext);
  console.log(state.cart);
  const totalQty = state.cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return (
    <div>
      <nav className="border  border-gray-200  flex  justify-around  items-center  p-4    ">
        <div className="flex  items-center  gap-x-2  ">
          <img
            className="h-10"
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/momos-894678.png"
            alt="logo"
          />
          <NavLink className="text-green-700   font-bold" to="/">
            momos
          </NavLink>
        </div>
        <div className="space-x-3 flex">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/allergyAdvice">Allergy Advice</NavLink>
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
                toast.success("user LogOut", {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
              }}
            >
              Logout
            </button>
          ) : (
            <div>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          )}
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/cart" className=" relative">
            <span className="bg-gray-200  absolute  left-3 bottom-5 rounded-full inline-block w-5 text-[12px] text-center h-5">
              {totalQty}
            </span>
            <GiShoppingCart size={"30px"} />
          </NavLink>
        </div>
        <div className=" flex  items-center   gap-x-2 ">
          <NavLink to="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F">
            <FaFacebook />
          </NavLink>
          <NavLink to="https://www.instagram.com/">
            <FaInstagram />
          </NavLink>
          <NavLink to="https://www.tiktok.com/en/">
            <FaTiktok />
          </NavLink>

          <NavLink
            to="/contact"
            className="bg-amber-700   p-1 rounded-2xl    w-24 text-center text-white h-9 "
          >
            Contact Us
          </NavLink>

          {isAuthenticated ? (
            <NavLink to="/userProfile">
              <img className="rounded-full h-10" src={user.picture} alt="" />
            </NavLink>
          ) : (
            <div>
              {/* <img className="h-12" src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740" alt="" /> */}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
