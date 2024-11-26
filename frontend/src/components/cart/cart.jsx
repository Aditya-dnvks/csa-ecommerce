import { useState } from "react";
import CartDetails from "../cart-details/cart-details";
import { Button } from "@radix-ui/themes";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const cartTotal = cartData.reduce(
    (acc, each) => each.price * each.quantity + acc,
    0
  );

  const addQuantity = (id) => {
    const filteredCart = cartData.map((each) => {
      if (each._id !== id) {
        return each;
      } else {
        return { ...each, quantity: each.quantity + 1 };
      }
    });

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCartData(filteredCart);
  };

  const removeQuantity = (id, quantity) => {
    if (quantity === 1) {
      const updatedCartData = cartData.filter((each) => each._id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      setCartData(updatedCartData);
      return;
    }
    const filteredCart = cartData.map((each) => {
      if (each._id !== id) {
        return each;
      } else {
        return { ...each, quantity: each.quantity - 1 };
      }
    });

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCartData(filteredCart);
  };

  const removeItem = (id) => {
    const updatedCartData = cartData.filter((each) => each._id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  return (
    <div className="p-4 container-fluid">
      <div className="row">
        <h4> Your Cart</h4>
        <div className="col-8 gap-4">
          {cartData.length > 0 ? (
            cartData.map((each) => (
              <CartDetails
                cartItem={each}
                key={each.id}
                addQuantity={addQuantity}
                removeQuantity={removeQuantity}
                removeItem={removeItem}
              />
            ))
          ) : (
            <div className="text-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGh4_lufGYCTbAKTVAZ3YxtWIV06iQVPQQIg&s" />
              <h3> Add Items to Cart</h3>
            </div>
          )}
        </div>
        <div className="col-4 p-4 border border-secondary h-100 d-flex justify-content-between">
          <div>
            <h4> Cart Summary:</h4>
            {cartData.length > 0 ? (
              <>
                <h6>
                  <b>Sub Total ({cartData.length} items) : </b>
                  {cartTotal.toFixed(2)}
                </h6>
                <p>Select Payment Method</p>
                <Button>Proceed to buy</Button>
              </>
            ) : (
              <h6> Your cart is Empty</h6>
            )}
          </div>

          <ShoppingCartIcon style={{ height: 100, width: 100 }} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
