import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProduct(response.recipes);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="bg-gray-100  mt-5">
      <div>
        {product.length > 0 ? (
          <div className=" p-2  flex flex-wrap gap-5  justify-center  border-red-500">
            {product.map((item) => {
              return (
                <div
                  onClick={() => {
                    navigate("/productDescription",{
                      state:item
                    });
                  }}
                  key={item.id}
                  className=" rounded-t-xl   bg-white  w-56  h-72
                  hover:shadow-md rounded-sm hover:shadow-gray-950  "
                >
                  <div>
                    <img
                      className=" rounded-t-xl  w-56"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className=" pl-2 ">
                    <p>{item.name}</p>
                    <p className="text-orange-400 font-bold">
                      Rs.{item.caloriesPerServing}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Menu;
