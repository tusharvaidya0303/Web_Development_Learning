import "./Product.css";
function Product({title, price, features}) {
  //price = 1 becomes default price if not passed
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>price : {price}</p>
      <p>{features}</p>
    </div>
  );
}

export default Product;
