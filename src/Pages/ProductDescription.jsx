import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

function ProductDescription() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state);
  const tags = location.state?.tags;
  const ingredients = location.state?.ingredients;
  const instructions = location.state?.instructions;
  const [qty, setQty] = useState(1);

  const { dispatch } = useContext(CartContext);
  const totalAmount = qty * location.state?.caloriesPerServing;

  return (
    <div className="  bg-gray-100 pt-10">
      <div className=" border-red-500  shadow-2xl   flex  w-[1100px]  bg-white   m-auto  gap-x-10 ">
        <div>
          <img className="h-72" src={location.state?.image} alt="" />
        </div>
        <div className=" border-y-amber-400  space-y-7  pt-4  ">
          <h1 className="text-2xl">{location.state?.name}</h1>
          <p className="  text-orange-500  text-2xl ">
            Rs.{location.state?.caloriesPerServing}
          </p>
          <div className="flex  gap-x-2">
            <h1>Quantity</h1>
            <button
              onClick={() => {
                setQty(qty + 1);
              }}
              className="bg-gray-500 rounded w-6 h-6 hover:bg-gray-200  "
            >
              +
            </button>
            <span> {qty} </span>
            <button
              onClick={() => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
              className="bg-gray-500 rounded w-6 h-6   hover:bg-gray-200"
            >
              -
            </button>
          </div>
          <div className="space-x-5 p-2">
            <button
              onClick={() => {
                navigate("/payment", { state: { totalAmount: totalAmount } });
              }}
              className="bg-sky-500   h-11 w-52 text-white  hover:bg-sky-400   "
            >
              Buy Now
            </button>
            <button
              onClick={() => {
                dispatch({ type: "AddToCart", payload: location.state });
              }}
              className="bg-orange-500  h-11 w-52 text-white   hover:bg-orange-400  "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white my-9  space-y-4 p-5">
        <div className="flex justify-center gap-5   ">
          <h1>Cuisine:{location.state?.cuisine}</h1>
          <h1>difficulty:{location.state?.difficulty}</h1>
          <h1>
            cookTimeMinutes:
            {location.state?.cookTimeMinutes}
          </h1>

          <h1>prepTimeMinutes:{location.state?.prepTimeMinutes}</h1>
          <h1>rating:{location.state?.rating}</h1>
          <h1>reviewCount:{location.state?.reviewCount}</h1>
          <h1>servings :{location.state?.servings}</h1>
        </div>

        <div className="flex justify-center">
          <div className="  w-[500px]">
            <h1 className="text-2xl font-extrabold"> ingredients</h1>
            <div>
              {ingredients.length > 0 ? (
                <div>
                  {ingredients.map((ingredients, index) => {
                    return (
                      <ul key={index}>
                        <li>{ingredients}</li>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                <div>loading..</div>
              )}
            </div>
          </div>

          <div className=" w-[500px]">
            <h1 className="text-2xl font-extrabold">instructions</h1>

            <div>
              {instructions.length > 0 ? (
                <div>
                  {instructions.map((instructions) => {
                    return (
                      <ul>
                        <li>{instructions}</li>
                      </ul>
                    );
                  })}
                </div>
              ) : (
                <div> loading..</div>
              )}
            </div>
          </div>
        </div>

        <div className="  flex w-[100px]   ml-96  gap-x-3">
          <h1> Tags:</h1>
          {tags.length > 0 ? (
            <div className="flex justify-center gap-5  ">
              {tags.map((item, index) => {
                return (
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                );
              })}
            </div>
          ) : (
            <div>Loading..</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
