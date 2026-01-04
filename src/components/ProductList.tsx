import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setproduct] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching Producs in", category);
    setproduct(["clothing", "HouseHold"]);
  }, [category]);
  return <div>Product-List</div>;
};

export default ProductList;

/*App.tsx
import { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [category, setCategory] = useState("");

  return (
    <>
      <div>
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          className="form-select"
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Households">Households</option>
        </select>
        <ProductList category={category} />
      </div>
    </>
  );
}

export default App;
*/
