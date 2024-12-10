import { Card } from "react-bootstrap";
import "./products.css";
import { Box, Button, Flex, Heading, Text } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";
import { InputAdornment, Rating, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Products = (props) => {
  const { products } = props;
  const [searchText, setSearch] = useState(" ");
  const [filteredProducts, setFilteredProducts] = useState(products);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearch(e.target.value);
    const filtered = products.filter((each) =>
      each.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container text-center mt-2">
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

      <div className="row d-flex flex-wrap justify-content-center mt-3">
        {filteredProducts.length >0 ?  filteredProducts.map((each) => {
          const { id, title, price, category, image, description, rating } =
            each;
          return (
            <>
              <Card.Body
                className="col-3 card-container p-4 m-3 "
                onClick={() =>
                  navigate(`/products/${id}`, {
                    state: {
                      id,
                      title,
                      price,
                      category,
                      image,
                      description,
                      rating,
                    },
                  })
                }
              >
                <img src={image} className="w-100" height={300} />
                <Heading>{title}</Heading>
                {/* <Text className="mt-3">
                  <b>Category:</b>
                  {category}{" "}
                </Text> */}
                <div>
                  <Text className="mt-3">
                    <b>Price:</b>
                    {price}
                  </Text>
                </div> 

                {/* <Box className="d-flex ">
                  <Rating value={rating.rate} precision={0.5} readOnly />
                  <Typography>{rating.count}</Typography>
                </Box> */}
                <div>
                  <Button className="mt-3">View Details</Button>
                </div>
              </Card.Body>
            </>
          );
        }): ( <div className="text-center">
          <img src="https://www.13sqft.com/assets/images/no-product-found.svg"/>
        </div>) }
    
      </div>
    </div>
  );
};

export default Products;
