import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"
import { openingHours } from "../schedules/opening-hours.js"
import { schedulesDay } from "../schedules/load.js"

// Buscando os input do form usando a DOM
const form = document.querySelector("form")
const selectedDateForm = document.getElementById("date")
const selectedDateMain = document.getElementById("date-selector")
const personName = document.getElementById("person-name")
const petName = document.getElementById("pet-name")
const personTell = document.getElementById("person-tell")
const description = document.getElementById("description")
const hours = document.getElementById("hour")


// Data atual para o input, para formatar o input
const inputToday = dayjs().format("YYYY-MM-DD")

//Carrega a data atual / Define a data mínima como sendo a data atual
selectedDateForm.value = inputToday
selectedDateForm.min = inputToday

selectedDateMain.value = inputToday
selectedDateMain.min = inputToday

schedulesDay(selectedDateMain.value || inputToday)

personTell.oninput = () => {
  let value = personTell.value.replace(/\D/g, "")

  personTell.value = value
}

openingHours.forEach((hour) => {
  const option = document.createElement("option")
  option.value = hour;
  option.textContent = hour;
  hours.appendChild(option)
  
})

form.onsubmit = async (event) => {
  event.preventDefault()
  try {

    const dateMain = selectedDateMain.value
    // recuperando o valor de cada input do formulario 
    const name = personName.value
    const pet = petName.value
    const tell = personTell.value
    const service = description.value
    const date = selectedDateForm.value
    const scheduleHour = hours.value
    const id = String(new Date().getTime())


    // Faz o agendamento
    await scheduleNew({
    name,
    pet,
    tell,
    service,
    date,
    scheduleHour,
    id
  });

  await schedulesDay(selectedDateMain.value || inputToday)

  } catch (error) {
    console.log(error);
    alert("Não foi possivel realizar o agendamento")
    
  }
    
}