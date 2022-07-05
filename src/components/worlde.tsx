import Box from "./Box";

export default function Wordle() {
  return (
    <div>
      <Box value='a' status='present' />
      <Box value='b' status='absent' />
    </div>
  )
}