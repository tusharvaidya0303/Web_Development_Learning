import "./Product.css";
function Product({title, price, features}) {
  //price = 1 becomes default price if not passed
  // let list = features.map((feature) => <li>{feature}</li>);
  return (
    <div className="Product">
      <h2>{title}</h2>
      <p>price : {price}</p>
      <p>{features.map((feature) => <li>{feature}</li>)}</p>
      {price >=10000 && <p>5% discount</p>}
      {/* //{price >=10000 ? <p>5% discount</p> : null} */}
    </div>
  );
}

export default Product;
