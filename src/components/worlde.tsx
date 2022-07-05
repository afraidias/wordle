import RowCompleted from "./rowCompleted";
import RowCurrent from "./rowCurrent";
import RowEmpty from "./rowEmpty";

export default function Wordle() {
  return (
    <div>
      <RowCompleted word="sabio" solution="break" />
      <RowCompleted word="sabio" solution="break" />
      <RowCompleted word="sabio" solution="break" />
      <RowCurrent word='sap' />
      <RowEmpty />
      <RowEmpty />
    </div>
  )
}