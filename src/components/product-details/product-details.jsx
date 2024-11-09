import { Button, Heading, Text } from "@radix-ui/themes";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const { id, title, price, image, category, description, rating } = state;
  return (
    <div key={id} className="d-flex border border-secondary rounded p-4 m-3">
      <div className="border border-secondary rounded p-4">
        <img src={image} className="w-100" height={600} />
      </div>
      <div className="d-flex flex-column" style={{ marginLeft: 60 }}>
        <div style={{ marginLeft: 6 }}>
          <Heading> {title}</Heading>
        </div>

        <Text className="m-2" style={{ width: "50vw" }}>
          {description}
        </Text>

        <div>
          <Text className="m-2">
            <b>Category:</b> {category}
          </Text>
        </div>
        <Text className="m-2">
          <b>Price:</b> {price}
        </Text>
        <div className="m-2">
          <Button> Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
