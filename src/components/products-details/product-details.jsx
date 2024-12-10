import { Rating, Typography } from "@mui/material";
import { Box, Button, Heading, Text } from "@radix-ui/themes";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const { id, title, price, category, image, description, rating } = state;
   const[cartData,setCartData]=useState(JSON.parse(localStorage.getItem("cart")) || [] );

   const currentItem= cartData.filter((each)=>each.id === id);
  

  const [quantity, setQuantity] = useState(currentItem[0] ? currentItem[0].quantity : 0);
  const handleAddtoCart=async()=>{
   if(quantity===0){
    const updatedCartData= cartData.filter((each)=>each.id !== id);
    localStorage.setItem("cart",JSON.stringify(updatedCartData));
    enqueueSnackbar("Item Removed From Cart",{variant:'warning'});
    return;
   }
   //  if item alreday exist in cart,  
   if(currentItem.length >0){
    const updatedCartData= cartData.filter((each)=>each.id !==id);
    updatedCartData.push({quantity,id,title,price,image});
    localStorage.setItem("cart",JSON.stringify(updatedCartData));
    setCartData(updatedCartData);
    enqueueSnackbar("Item Quantity Updated ",{variant:'success'});
   }
   //  Item not there in cart
   else{
    cartData.push({quantity,id,title,price,image});
    localStorage.setItem("cart",JSON.stringify(cartData));
    setCartData(cartData);
    enqueueSnackbar("Item Added To Cart",{variant:'success'});
   }
  }
  return (
    <div className="d-flex  border border-secondary rounded p-4 m-3">
      <div className="border border-secondary rounded p-4">
        <img src={image} className="w-100" height={600} />
      </div>
      <div className="d-flex  flex-column " style={{ marginLeft: 60, gap: 20 }}>
        <div>
          <Heading>{title}</Heading>
        </div>

        <div>
          <Text>{description}</Text>
        </div>

        <div>
          <Text>
            <b> Category:</b>
            {category}
          </Text>
        </div>

        <div>
          <Text>
            <b> Price:</b>
            {price}
          </Text>
        </div>

        <Box className="d-flex ">
          <Rating value={rating.rate} precision={0.5} readOnly />
          <Typography>({rating.count}) Reviews</Typography>
        </Box>

        <div className="d-flex align-item-center">
          <Button
            variant="outline"
            onClick={() => {
              if (quantity > 0) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </Button>
          <Typography className="mx-3">Qty:{quantity}</Typography>
          <Button variant="outline" onClick={() => setQuantity(quantity + 1)}>
            +
          </Button>
        </div>

        <div>
          <Button onClick={handleAddtoCart}>Add To Cart</Button>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
