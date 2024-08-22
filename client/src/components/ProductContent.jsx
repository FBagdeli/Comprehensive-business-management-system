import { useContext } from "react";
import { AppContext } from "../context";
import { ActionButtons } from "./ActionButtons";
export const ProductContent = () => {
  const { productContent } = useContext(AppContext);

  return (
    <>
      <table className="main-content-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Type</th>
            <th>Name</th>
            <th>Price</th>
            <th>Jewelry Making Fee</th>
            <th>In Stock</th>
            <th>Desctiption</th>
            <th>Controls</th>
          </tr>
        </thead>

        <tbody>
          <tr className="table-rows">
            <td>{productContent.code}</td>
            <td>{productContent.type}</td>
            <td>{productContent.name}</td>
            <td>{productContent.price}</td>
            <td>{productContent.jewelryMakingFee}</td>
            <td>{productContent.inStock}</td>
            <td>{productContent.description}</td>
            <td>
              <ActionButtons />
            </td>
          </tr>
        </tbody>
      </table>

    </>
  );
};
