import { useContext } from "react";
import { AppContext } from "../context";
import { Link } from "react-router-dom";
export const AsideUl = () => {
  const {
    productsHandler,
    customerHandler,
    supplierHandler,
    dashboardHandler,
    invoicesHandler
  } = useContext(AppContext);
  return (
    <ul className="aside-ul">
      <li onClick={dashboardHandler}>
        <Link to="/">
          <p>Dashboard</p>
        </Link>
      </li>
      <li onClick={productsHandler}>
        <Link to="/products">
          <p>Products</p>
        </Link>
      </li>
      <li onClick={customerHandler}>
        <Link to="/customers">
          <p>Customers</p>
        </Link>
      </li>
      <li onClick={supplierHandler}>
        <Link to="/suppliers">
          <p>Suppliers</p>
        </Link>
      </li>
      <li onClick={invoicesHandler}>
        <Link to="/invoices">
          <p>Invoices</p>
        </Link>
      </li>
      <li>
        <Link to="/invoices/new">
          <p>New Invoices</p>
        </Link>
      </li>
    </ul>
  );
};
