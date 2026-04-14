import "./App.css";
import Title from "./title.jsx";
import Product from "./Product.jsx";
import ProductTab from "./ProductTab.jsx";

function Description() {
  return <h3>I am title description!!</h3>;
}
const name = "tushar";
function App() {
  return (
    
    //Structuring Components
    <div>
      <ProductTab />
    </div>

    //cannot use class because it is a reserved word in js so use className.
    // <div className="App" id="app">
    //   <h1>This is a Component</h1>
    //   <p>inside which we have : </p>
    //   <Title />
    //   <Description />
    //   <Description />
    //   <p>2*2={2 * 2}</p>
    //   <p>hi, {name.toUpperCase()}</p>
    // </div>
    //interpolation jsx with curly braces

    // <>   //this is a fragment used to return multiple elements without wrapping them in an extra node eg:div.
    //   <h1>This is a Component</h1>
    //   <p>inside which we have : </p>
    //   <Title />
    //   <Description />
    //   <Description />
    // </>
  );
}

export default App;
