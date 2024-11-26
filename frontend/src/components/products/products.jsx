import { Card } from "react-bootstrap";
import "./products.css";
import { Button, Heading, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { FilterRounded } from "@mui/icons-material";

const Products = (props) => {
  const [searchText, setSearch] = useState("");
  const { products } = props; //de-strucute=tng props
  const [filteredProducts, setFilteredProducts] = useState(products);
  const x = 10;
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value); // re-render
    const filtered = products.filter((each) =>
      each.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container text-center">
      <TextField
        id="outlined-basic"
        label="Search Products"
        variant="outlined"
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
        value={searchText}
        style={{ width: "40%" }}
        onChange={handleChange}
      />
      <div className="row d-flex flex-wrap justify-content-center mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((each) => {
            const { _id, title, price, image, category, description, rating } =
              each;
            return (
              <div
                className="col-3 card-container p-4 m-3"
                onClick={() =>
                  navigate(`/products/${_id}`, {
                    state: {
                      _id,
                      title,
                      price,
                      image,
                      category,
                      description,
                      rating,
                    },
                  })
                }
                key={_id}
              >
                <Card.Body className="d-flex flex-column justify-content-space-around">
                  <img src={image} className="w-100" height={300} />
                  <Heading className="heading1 text-center mt-3">
                    {title}
                  </Heading>

                  <div className="text-center">
                    <Button
                      className="mt-3"
                      onClick={() =>
                        navigate(`/products/${_id}`, {
                          state: {
                            _id,
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
          })
        ) : (
          <div>No Products Found</div>
        )}
        {}
      </div>
    </div>
  );
};

export default Products;
