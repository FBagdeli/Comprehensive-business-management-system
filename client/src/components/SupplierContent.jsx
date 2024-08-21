import { useContext } from "react"
import { AppContext } from "../context"
import { ActionButtons } from "./ActionButtons"

export const SupplierContent = () => {
  const { supplierContent } = useContext(AppContext)
  const suppliers = supplierContent.persons || []

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

      {suppliers.map((customer, index) => {
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
}