import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";

function Login() {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="shadow-2xl m-auto p-5  my-10  shadow-gray-800 w-96  gap-y-8 h-96  flex flex-col  justify-center  items-center">
      <form>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="outline-none border  w-80 p-3 rounded-2xl"
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="outline-none border p-3  w-80 rounded-2xl"
          type="password"
          placeholder="Enter YOur password"
        />
        <br />
        <button className=" text-2xl text-white  mt-5 bg-orange-500 w-80 p-3  ">
          Login
        </button>
      </form>
      <button
        onClick={() => {
          loginWithRedirect();
        }}
        className="underline text-green-500  flex items-center justify-center gap-2 text-2xl"
      >
        <FcGoogle size={32} /> Login With Google
      </button>
    </div>
  );
}

export default Login;
