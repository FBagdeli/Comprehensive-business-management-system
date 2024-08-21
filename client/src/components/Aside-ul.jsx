import { useContext } from "react";
import { AppContext } from "../context";

export const AsideUl = () => {
  const { productHandler, customerHandler, supplierHandler } = useContext(AppContext);
  return (
    <ul className="aside-ul">
      <li onClick={productHandler}>
        <p>Dashboard</p>
      </li>
      <li onClick={productHandler}>
        <p>Products</p>
      </li>
      <li onClick={customerHandler}>
        <p>Customers</p>
      </li>
      <li>
        <p onClick={supplierHandler}>Suppliers</p>
      </li>
      <li>
        <p>Invoices</p>
      </li>
      <li>
        <p>New Invoice</p>
      </li>
    </ul>
  );
};
