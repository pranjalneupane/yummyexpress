import { createContext, useReducer } from "react";
import { Bounce, toast } from "react-toastify";
export const CartContext = createContext();

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "AddToCart": {
      // 1.data collect
      // 2.check  product is exit or not
      // 3. if exit do not do anythings   >>return state
      // 4.if not exit >> add product to the cart array also also add( qty key and value )
      // 5.add product to the cart array

      const isExit = state.cart.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExit) {
        return state;
      } else {
        const newProduct = { ...action.payload, qty: 1 };
        toast.success(action.payload.name + "Is added to the cart", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return {
          cart: [...state.cart, newProduct],
        };
      }
    }
    case "Increment": {
      // steps
      // 1. collect id
      // 2 . check id on state or cart
      // 3.if match with exiting  product
      //  4. qty increase
      // 5. return new state
      const updateCart = state.cart.map((item) => {
        return item.id === action.payload
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
      return {
        cart: updateCart,
      };
    }
    case "Decrement": {
      // steps
      // 1. collect id
      // 2 . check id on state or cart
      // 3.if match with exiting  product
      //  4. qty increase
      // 5. return new state

      const updateCart = state.cart.map((item) => {
        return item.id === action.payload && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item;
      });
      return {
        cart: updateCart,
      };
    }
    case "DeleteItem": {
      // Steps
      // 1. id collect payload or dispatch (f)
      // 2. then filter item except that id which is provided by user
      // 3. then return the updated update items or cart
      const updatedCart = state.cart.filter((item) => {
        return item.id !== action.payload;
      });

      return {
        cart: updatedCart,
      };
    }
    case "ClearCart": {
      // steps
      // 1 collect action
      // 2. return empty array or cart

      return {
        cart: [],
      };
    }
    default: {
      return state;
    }
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// add to cart
// qty ++(increment )
// qty --(increment )
// delete cart item
// total amount
// total qty
