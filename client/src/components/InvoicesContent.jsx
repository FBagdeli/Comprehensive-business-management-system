import { useContext } from "react";
import { ActionButtons } from "./ActionButtons";
import { AppContext } from "../context";

export const InvoicesContent = () => {
  const { invoices } = useContext(AppContext);
  const invoicesData = invoices.data || []
  return (
    <div>
      <table className="main-content-table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Invoice Type</th>
            <th>Date</th>
            <th>Controls</th>
          </tr>
        </thead>

        {invoicesData.map((invoice, index) => {
          return (
            <tbody key={index}>
              <tr className="table-rows">
                <td>{invoice.personId}</td>
                <td>{invoice.type}</td>
                <td>{invoice.date.slice(0, 10)}</td>
                <td>
                  <ActionButtons />
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};
