import { useState } from "react";
import { mockList } from "../mockList";

interface rowProps {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

function GroceryList() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        setFilterText={setFilterText}
        setInStockOnly={setInStockOnly}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        mockList={mockList}
      />
    </div>
  );
}

export default GroceryList;

// Search Bar
interface searchBarProps {
  setFilterText: React.Dispatch<React.SetStateAction<string>>;
  setInStockOnly: React.Dispatch<React.SetStateAction<boolean>>;
  filterText: string;
  inStockOnly: boolean;
}

function SearchBar(p: searchBarProps) {
  return (
    <form>
      <input
        type="text"
        value={p.filterText}
        onChange={(e) => p.setFilterText(e.target.value)}
        placeholder="Search..."
      />
      <label>
        <input
          checked={p.inStockOnly}
          onChange={(e) => p.setInStockOnly(e.target.checked)}
          type="checkbox"
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
}
// Search Bar

// Product Category Row
function ProductCategoryRow({ category }: { category: string }) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}
// Product Category Row

// Product Table
interface ProductTableProps {
  mockList: rowProps[];
  filterText: string;
  inStockOnly: boolean;
}

function ProductTable(p: ProductTableProps) {
  // Product Row
  function ProductRow({ product }: { product: rowProps }) {
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
  // Product Row
  const rows: JSX.Element[] = [];
  let lastCategory: null | string = null;

  p.mockList.forEach((product) => {
    if (product.name.toLowerCase().indexOf(p.filterText.toLowerCase()) === -1) {
      return;
    }
    if (p.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />,
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}
// Product Table
