import { useContext } from "react";
import { AppContext } from "../context";
import { ActionButtons } from "./ActionButtons.jsx";

export const CustomersContent = () => {
  const { customerContent } = useContext(AppContext);
  const customers = customerContent.persons || [];

  return (
    <table className="main-content-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Controls</th>
        </tr>
      </thead>

      {customers.map((customer, index) => {
        return (
          <tbody key={index}>
            <tr className="table-rows">
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>
                <ActionButtons />
              </td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};
