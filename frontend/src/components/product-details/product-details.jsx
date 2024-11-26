import { Box, Rating, Typography } from "@mui/material";
import { Button, Heading, Text } from "@radix-ui/themes";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation(); //useParams()
  const { _id, title, price, image, category, description, rating } = state;
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const currentItem = cartData.filter((each) => each._id === _id);

  const [quantity, setQuanity] = useState(
    currentItem[0] ? currentItem[0].quantity : 0
  );

  const handleAddtoCart = async () => {
    if (quantity === 0) {
      const updatedCartData = cartData.filter(
        (each) => each._id !== __staticRouterHydrationDataid
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      enqueueSnackbar("Item Removed cart", { variant: "warning" });
      return;
    }
    if (currentItem.length > 0) {
      // If item already exists in the cart
      const updatedCartData = cartData.filter((each) => each._id !== _id);
      updatedCartData.push({ quantity, _id, title, price, image });
      localStorage.setItem("cart", JSON.stringify(updatedCartData));
      setCartData(updatedCartData);
      enqueueSnackbar("Item Quantity updated", { variant: "success" });
    } else {
      // Item not there in cart
      cartData.push({ quantity, _id, title, price, image });
      localStorage.setItem("cart", JSON.stringify(cartData));
      setCartData(cartData);
      enqueueSnackbar("Item Added in the cart", { variant: "success" });
    }
  };

  return (
    <div key={_id} className="d-flex border border-secondary rounded p-4 m-3">
      <div className="border border-secondary rounded p-4">
        <img src={image} className="w-100" height={600} />
      </div>
      <div className="d-flex flex-column" style={{ marginLeft: 60, gap: 15 }}>
        <div>
          <Heading> {title}</Heading>
        </div>

        <Text style={{ width: "50vw" }}>{description}</Text>

        <div>
          <Text>
            <b>Category:</b> {category}
          </Text>
        </div>
        <Text>
          <b>Price:</b> {price}
        </Text>
        <Box className="d-flex">
          <Rating value={rating.rate} precision={0.5} readOnly />
          <Typography>({rating.count} Reviews)</Typography>
        </Box>

        <div className="d-flex align-items-center" style={{}}>
          <Button
            variant="outline"
            onClick={() => {
              if (quantity > 0) {
                setQuanity(quantity - 1);
              }
            }}
          >
            -
          </Button>
          <Typography className="mx-3"> Qty: {quantity}</Typography>
          <Button variant="outline" onClick={() => setQuanity(quantity + 1)}>
            +
          </Button>
        </div>
        <div>
          <Button onClick={handleAddtoCart}> Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
