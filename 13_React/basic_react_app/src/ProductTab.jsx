import Product from "./Product.jsx";

function ProductTab() {
  return (
    //passing props to a component
    // {} is used to pass props which is not string
    <div>
      <Product title="Laptop" price={10000} />
      <Product title="Mobile" price={5000} />
      <Product title="pen" />
    </div>
  );
}
export default ProductTab;
