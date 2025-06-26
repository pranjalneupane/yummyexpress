import { CiFacebook } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import Momo from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <div className=" flex m-16 ml-36">
      <div className="w-96 ">
      <NavLink to="/" className="flex items-center gap-x-5 mb-8">
          <img src={Momo} alt="momo_image" className="h-10" />
          <span className="text-green-900 font-bold text-4xl">Momos</span>
        </NavLink>
        <p>
          Lorem ipsum dolor sit amet consectetur. Elit sem tempor egestas
          molestie. Volutpat quis egestas porttitor turpis sit in. Lorem nunc
          nullam morbi urna amet suspendisse nullam ac vivamus.
        </p>
      </div>
      <div className="flex ml-36">
      <div className=" flex flex-col  w-36 items-left gap-y-3">   
        <h1 className="text-green-900 font-bold text-2xl">Momos</h1>
        <NavLink to="/about">AboutUs</NavLink>
        <NavLink to="menu">Our Menu</NavLink>
        <NavLink to="services">Our Services</NavLink>
        <NavLink to="login">Log In</NavLink>
        <NavLink to="signup">Sign Up</NavLink>
        

        </div>
        <div className=" flex flex-col gap-x-5 w-36 ml-24 mr-24 items-left gap-y-3">   
        <span className="text-green-900 font-bold text-2xl">Legals</span>
        <NavLink to="menu">Terms & Conditions</NavLink>
        <NavLink to="menu">Privacy Policy</NavLink>
        <NavLink to="menu">Support</NavLink>

        </div>
        <div className=" ">   
        <h1 className="text-green-900 font-bold text-2xl">Follow Us</h1>
        <div className="flex flex-row gap-x-5 mt-5">
        <NavLink to ="https://facebook.com" target="_">
        <CiFacebook className="bg-black text-white rounded-full size-8" />
        </NavLink>
        <NavLink to ="https://instagram.com" target="_">
        <AiFillTikTok className="rounded-full size-8" />
        </NavLink>
        <NavLink to ="https://tiktok.com" target="_">
        <FaSquareInstagram className="rounded-full size-8" />
        </NavLink>
        </div>

        </div>
      </div>
    </div>
    <div className="text-center m-10 text-gray-400">
      <p>Copyright ©2023 Everest Momo Pvt Ltd. All Rights Reserved.</p>
    </div>
    </div>
  );
}

export default Footer;
