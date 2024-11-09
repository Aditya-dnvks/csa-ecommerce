import { Card } from "react-bootstrap";
import "./products.css";
import { Button, Heading, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

const Products = (props) => {
  const { products } = props;

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center">
        {products.map((each) => {
          const { id, title, price, image, category, description, rating } =
            each;
          return (
            <div
              className="col-3 card-container p-4 m-3"
              onClick={() =>
                navigate(`/products/${id}`, {
                  state: {
                    id,
                    title,
                    price,
                    image,
                    category,
                    description,
                    rating,
                  },
                })
              }
              key={id}
            >
              <Card.Body className="d-flex flex-column justify-content-space-around">
                <img src={image} className="w-100" height={300} />
                <Heading className="heading text-center mt-3">{title}</Heading>

                <div className="text-center">
                  <Button
                    className="mt-3"
                    onClick={() =>
                      navigate(`/products/${id}`, {
                        state: {
                          id,
                          title,
                          price,
                          image,
                          category,
                          description,
                          rating,
                        },
                      })
                    }
                  >
                    View Details
                  </Button>
                </div>
              </Card.Body>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
