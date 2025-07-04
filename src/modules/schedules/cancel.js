import {schedulesDay} from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"
const period = document.querySelectorAll(".schedule")

const selectedDateMain = document.getElementById("date-selector")
const inputToday = new Date().toISOString().split("T")[0]

// Gerar evendo de click para cada lista 

period.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("remove")) {
      // Obtem a li pai do elemento clicado
      const item = event.target.closest("li")
      const {id} = item.dataset
    

      if (id) {
        const isConfirm = confirm("Tem certeza que deseja cancelar este agendamento")

        if(isConfirm){
          await scheduleCancel({id})
          await schedulesDay(selectedDateMain.value || inputToday)
        }
      }
      
      
    }
    
  })
})
