import { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { MdDelete } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useContext(CartContext);
  const navigate = useNavigate();
  // console.log(state.cart);
  const totalAmount = state.cart.reduce((acc, item) => {
    return acc + item.qty * item.caloriesPerServing;
  }, 0);

  const totalQty = state.cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  return (
    <div className="bg-gray-100">
      <div className="">
        {state.cart.length > 0 ? (
          <div className="flex gap-3 p-5">
            <div>
              <button
                onClick={() => {
                  dispatch({ type: "ClearCart" });
                }}
                className=" ml-[750px] underline  p-2 text-xl "
              >
                Delete All
              </button>
              {state.cart.map((cart) => {
                return (
                  <div
                    key={cart.id}
                    className="flex  my-4 pr-4 bg-white justify-between items-center w-[900px]  "
                  >
                    <div className="flex items-center gap-5">
                      <img className="h-32" src={cart.image} alt="" />
                      <div className="  w-96">
                        <h1 className="text-2xl">{cart.name}</h1>
                      </div>
                    </div>
                    <div>
                      <h1 className="text-2xl text-orange-500   ">
                        Rs.{cart.caloriesPerServing}
                      </h1>
                      <MdDelete
                        onClick={() => {
                          dispatch({ type: "DeleteItem", payload: cart.id });
                        }}
                        size={30}
                        color="red"
                      />
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => {
                          dispatch({ type: "Decrement", payload: cart.id });
                        }}
                        className="bg-gray-400 w-10 h-10  hover:bg-gray-300  "
                      >
                        -
                      </button>
                      <span>{cart.qty}</span>
                      <button
                        onClick={() => {
                          dispatch({ type: "Increment", payload: cart.id });
                        }}
                        className="bg-gray-400 w-10 h-10   hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className=" border-green-500 h-[300px] ml-10  flex flex-col  gap-7 p-5 bg-white w-96 ">
              <h1 className="text-2xl"> Order Summary</h1>
              <h1>Subtotal ({totalQty} items)</h1>
              <h1>Total Rs.{totalAmount}</h1>
              <button
                onClick={() => {
                  navigate("/payment", { state: { totalAmount: totalAmount } });
                }}
                className="bg-orange-500 mt-5 text-white p-2.5"
              >
                Proceed to check Out ({totalQty})
              </button>
            </div>
          </div>
        ) : (
          <div className=" w-96 m-auto flex gap-5  p-5  flex-col  items-center">
            <img
              className="h-48"
              src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--depletion-status-erasure-wiping-e-commerce-pack-shopping-illustrations-8286415.png"
              alt=""
            />
            <h1 className="text-xl">There are no items in this cart</h1>

            <NavLink
              to="/menu"
              className=" border-2  hover:bg-amber-200 border-amber-300 p-3"
            >
              Continue Shopping
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
