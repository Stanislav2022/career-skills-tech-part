import { CurrentCards } from "components/CurrentCards/CurrentCards";
import { StatusFilter } from "components/StatusFilter/StatusFilter";

export const CardsList = () => {
   
  return (
    <div >
      <StatusFilter/>
      <CurrentCards />
    </div>
  )
}