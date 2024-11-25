const productSchema = require("../model/productModel");

let data = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
];

const getProducts = async (request, response) => {
  // fetch data from mDB
  const allProducts = await productSchema.find();

  response.send(allProducts);
};

//authorization, authentication, middleware

const getProductsById = async (request, response) => {
  // path parameters

  // const newArr = data.find((each) => each.id == request.params.id);

  // if (!newArr) {
  //   response.status(404).send("Product with given ID not found");
  // }
  const singleProduct = await productSchema.findOne({ _id: request.params.id });
  response.send(singleProduct);
};

const postProducts = async (req, res) => {
  const newProduct = await productSchema.create(req.body);
  res.send(newProduct);
};

const updateProductById = async (req, res) => {
  // const index = data.findIndex((each) => each.id == req.params.id);

  // if (index === -1) {
  //   res.status(404).send("Product with given ID not found");
  // }

  // const updatedData = {
  //   ...data[index], // title : "mens"
  //   ...req.body, // title: "shoes"
  // };

  // data[index] = updatedData;

  const findProduct = await productSchema.findOne({
    _id: req.params.id,
  });

  if (!findProduct) {
    res.status(404).send("Product with given ID not found");
    return;
  }

  const updateProductsData = await productSchema.findOneAndUpdate(
    {
      _id: req.params.id,
    },
    req.body
  );

  res.send(updateProductsData);
};

const deleteProductById = async (req, res) => {
  // const index = data.findIndex((each) => each.id == req.params.id);

  // // throw error if ID not found
  // if (index === -1) {
  //   res.status(404).send("Product with given ID not found");
  // }

  // const updatedData = data.filter((each) => each.id != req.params.id);

  // data = updatedData;

  const findProduct = await productSchema.findOne({
    _id: req.params.id,
  });

  if (!findProduct) {
    res.status(404).send("Product with given ID not found");
    return;
  }

  const deleteData = await productSchema.deleteOne({ _id: req.params.id });

  res.send(deleteData);
};

module.exports = {
  getProducts,
  getProductsById,
  postProducts,
  updateProductById,
  deleteProductById,
};
