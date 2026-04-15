import "./Product.css";
import Prices from "./Prices";

function Product({ title, idx }) {
  let oldPrice = ["12,495", "11,900", "1,599", "599"];
  let newPrice = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 Dpi", "5 Programmable Buttons"],
    ["made for iPad pro","intutive surface"],
    ["intutive surface","made for iPad pro"],
    ["Wireless","Optical orientation"]
  ];

  return (
    <div className="Product">
      <h4>{title}</h4>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>

      <div className="product-price">
        <Prices oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
      </div>
    </div>
  );
}

export default Product;
