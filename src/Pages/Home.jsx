import { useNavigate } from "react-router-dom";
import circle from "../assets/circle.png";
import Momo from "../assets/momo.png";
import one from "../assets/one.jpg";
import { BsArrowRight } from "react-icons/bs";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const getProduct = async () => {
    let response = await fetch("https://dummyjson.com/recipes");
    response = await response.json();
    console.log(response.recipes);
    setProductList(response.recipes);

    let filter = response.recipes.filter((item) => {
      return item.cuisine === "American";
    });
    setFilterProduct(filter);
  };

  const filterProductItem = (c) => {
    let filter = productList.filter((item) => {
      return item.cuisine === c;
    });
    setFilterProduct(filter);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="">
      <div className="flex  justify-end">
        <div className="   mr-96 space-y-2  mt-20  p-2 ">
          <p>RESTAURANT</p>
          <h1 className="text-4xl">
            The{" "}
            <span
              className=" bg-center bg-size-[100px]  inline-block   text-white  bg-no-repeat "
              style={{ backgroundImage: `url(${one})` }}
            >
              #one
            </span>{" "}
            <br /> Momo Restaurant
          </h1>
          <p className="font-semibold">
            More than <span className="text-orange-500">20+ Varieties </span> of
            momo available for you
          </p>
          <button
            onClick={() => {
              navigate("/menu");
            }}
            className="bg-[#0C6967]  flex justify-center  gap-2  items-center p-3 text-white  rounded-4xl  "
          >
            Explore food Menu
            <BsArrowRight />
          </button>
        </div>
        <div className="    flex  overflow-hidden   ">
          <img className="h-[400px]   -mt-5 " src={circle} alt="" />
          <img
            className="h-52   absolute  top-32  right-20"
            src={Momo}
            alt=""
          />
        </div>
      </div>

      <div>box2</div>
      <div className="border  flex flex-col  p-2 items-center  ">
        <div>
          <h1 className="text-center  text-2xl">
            Our <span className="text-orange-700">Most Popular </span>Recipes
          </h1>
          <p>
            Browse through a varieties of recipes with fresh ingredients
            selected only from the best places
          </p>
        </div>
        <div className="space-x-2  my-3">
          <button
            className="border rounded-2xl w-20     p-1    "
            onClick={() => {
              filterProductItem("American");
            }}
          >
            American
          </button>
          <button
            className="border rounded-2xl w-20   p-1      "
            onClick={() => {
              filterProductItem("Italian");
            }}
          >
            Italian
          </button>
          <button
            className="border rounded-2xl w-20   p-1    "
            onClick={() => {
              filterProductItem("Greek");
            }}
          >
            Greek
          </button>
        </div>
        <div className="">
          <div>
            {filterProduct.length > 0 ? (
              <div className="flex  flex-wrap  px-14 justify-center p-5 gap-5">
                {filterProduct.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        navigate("/productDescription", {
                          state: item,
                        });
                      }}
                      key={item.id}
                      className="  p-3 shadow-2xl m-1  w-52 
                       shadow-gray-800 rounded-2xl flex flex-col items-center"
                    >
                      <img
                        className="h-28  rounded-2xl "
                        src={item.image}
                        alt=""
                      />
                      <h1>{item.name}</h1>
                      <h1>Rs.{item.caloriesPerServing}</h1>
                      <h1>{item.cuisine}</h1>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              navigate("/menu");
            }}
            className="bg-[#0C6967]  flex justify-center  gap-2  items-center p-3 rounded-3xl text-white"
          >
            Explore menu
            <BsArrowRight />
          </button>
        </div>
      </div>

      
    </div>
  );
}

export default Home;
