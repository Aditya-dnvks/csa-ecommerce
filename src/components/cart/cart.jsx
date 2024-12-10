import { useState } from "react";
import CartDetails from "../cart-details/cart-details";
import { Button } from "react-bootstrap";
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
      if (each.id !== id) {
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
      const updatedCartData = cartData.filter((each) => each.id !== id);
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      setCartData(updatedCartData);
      return;
    }
    const filteredCart = cartData.map((each) => {
      if (each.id !== id) {
        return each;
      } else {
        return { ...each, quantity: each.quantity - 1 };
      }
    });

    localStorage.setItem("cart", JSON.stringify(filteredCart));
    setCartData(filteredCart);
  };

  const removeItem = (id) => {
    const updatedCartData = cartData.filter((each) => each.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
  };

  return (
    <>
      <div className="p-3 container-fluid">
        <div className="row">
          <h4>Your Cart</h4>
          <div className="col-8">
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
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-file-formats--state-no-items-zero-page-added-states-pack-design-development-illustrations-4610092.png" />
                <h3>Add Products To Cart</h3>
              </div>
            )}
          </div>
          {cartData.length > 0 && 
          <div className="col-4 p-4 border border-secondary h-100 d-flex justify-content-between">
            <div>
              <h4> Cart Summary</h4>
              <h6>
                <b>Sub Total ({cartData.length} Items):</b>
                {cartTotal.toFixed(2)}
              </h6>
              <p>Select Payment Method</p>
              <Button>Proceed to buy</Button>
            </div>
            <ShoppingCartIcon style={{ height: 100, width: 100 }} />
          </div> }
        </div>
      </div>
    </>
  );
};

export default Cart;
