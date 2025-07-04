import { schedulesDay } from "../schedules/load.js"

// Seleciona o input de date
const selectedDate = document.getElementById("date")
const selectDate = document.getElementById("date-selector")


selectedDate.onchange = () => {
  const date = selectedDate.value
  schedulesDay(date)
}

// (opcional) Se quiser que o form também atualize a agenda quando mudar:
selectDate.onchange = () => {
  const date = selectDate.value
  schedulesDay(date)
}

