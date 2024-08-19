import { useContext } from "react";
import { AppContext } from "../context";

export const MainContent = () => {
  const { mainContent } = useContext(AppContext);
  console.log('test',mainContent.persons)
  const persons = mainContent.persons ? mainContent.persons : []
  
  return (
    <div className="main-content">
      <ul>
        {
          persons.map((person, index) => {
             return <li key={index}><p>{person.firstName} {person.lastName}</p></li>
          })
        }
      </ul>
    </div>
  );
};
