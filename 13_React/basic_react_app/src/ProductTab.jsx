import Product from "./Product.jsx";

function ProductTab() {
    let option = ["high-tech","Durable","Fast"]
    //Using objects
    // let option2 = {a:"smooth",b:"long-lasting"}
    //<Product title="pen" price={10}  features={{a:"smooth",b:"long-lasting"}}/>         
  return (
    //passing props to a component
    // {} is used to pass props which is not string
    <div>
      <Product title="Laptop" price={10000} features={option} />
      <Product title="Mobile" price={5000} features={option} />
      <Product title="pen" price={10}  features={["smooth","long-lasting"]}/>  
    </div>
  );
}
export default ProductTab;
