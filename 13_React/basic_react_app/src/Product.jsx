import "./Product.css";
function Product({title, price = 1}) {
  //price = 1 becomes default price if not passed
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>price : {price}</p>
    </div>
  );
}

export default Product;
