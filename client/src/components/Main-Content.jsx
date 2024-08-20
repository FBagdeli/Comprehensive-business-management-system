import { useContext } from "react";
import { AppContext } from "../context";
import { ActionButtons } from "./actionButtons";

export const MainContent = () => {
  const { mainContent } = useContext(AppContext);
  console.log("test", mainContent);
  const persons = mainContent.persons ? mainContent.persons : [];

  return (
    <div className="main-content">
      <table className="main-content-table">
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Controls</th>
        </tr>
        {persons.map((person, index) => {
          return (
            <tr key={index} className="table-rows">
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>
                <ActionButtons />
              </td>
            </tr>
          );
        })}
      </table>

      {/* <ul className="">
        {
          persons.map((person, index) => {
             return <li key={index}><p>{person.firstName} {person.lastName}</p></li>
          })
        }
      </ul> */}
    </div>
  );
};
