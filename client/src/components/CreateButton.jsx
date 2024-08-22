import { AppContext } from "../context"
import { useContext } from "react"
export const CreateButton = () => {
  const { navPrudctHandlerComponent } = useContext(AppContext)
  return (
    <div className="createButton-div">
      <button id="createButton" onClick={navPrudctHandlerComponent}>create</button>
    </div>
  )
}