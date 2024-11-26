import { Typography } from "@mui/material";
import { Button } from "@radix-ui/themes";
import DeleteIcon from "@mui/icons-material/Delete";

const CartDetails = (props) => {
  const { cartItem, addQuantity, removeQuantity, removeItem } = props;

  const { _id, quantity, image, title, price } = cartItem;

  return (
    <div className="border border-secondary rounded d-flex justify-content-between align-items-center w-100 p-3 gap-4">
      <div className="d-flex">
        <img src={image} width={100} height={100} />
        <div className="mx-4">
          <Typography variant="h5">{title} </Typography>
          <div className="d-flex">
            <Button
              variant="outline"
              onClick={() => removeQuantity(_id, quantity)}
            >
              -
            </Button>
            <Typography className="mx-3"> Qty: {quantity}</Typography>
            <Button variant="outline" onClick={() => addQuantity(_id)}>
              +
            </Button>
          </div>

          <p>
            <b>Price:</b> {price}
          </p>
        </div>
      </div>

      <DeleteIcon
        style={{ height: 30, width: 30 }}
        onClick={() => removeItem(_id)}
      />
    </div>
  );
};

export default CartDetails;
