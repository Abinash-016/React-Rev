import { useLocation } from "react-router-dom";

function Products() {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  return <h1>Category: {category}</h1>;
}

export default Products;
