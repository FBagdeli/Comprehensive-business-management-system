import { useContext } from "react"
import { AppContext } from "../context"
import { ActionButtons } from "./ActionButtons"

export const ProductsContent = () => {
const { productsContent } = useContext(AppContext)
const products = productsContent.products || []
console.log('products', products)
  return (
    <table className="main-content-table">
      <thead>
        <tr>
          <th>Code</th>
          <th>Type</th>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock</th>
          <th>Controls</th>
        </tr>
      </thead>

      {products.map((product, index) => {
        return (
          <tbody key={index}>
            <tr className="table-rows">
              <td>{product.code}</td>
              <td>{product.type}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.inStock}</td>
              <td>
                <ActionButtons />
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  )
}