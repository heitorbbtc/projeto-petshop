import dayjs from "dayjs";
import { openingHours } from "../schedules/opening-hours.js";

const hours = document.getElementById("hour")


export function hoursLoad({date, dailySchedules }) {

    hours.innerHTML = ""

    // Obtem a lista de horários ocupados
    const unavailableHours =  dailySchedules.map((schedule) => schedule.scheduleHour) 
    console.log(unavailableHours);
     

    const now = dayjs();

    const opening = openingHours.map((hour) => {

    const horarioCompleto = dayjs(`${date}T${hour}`);
    const isHourPast = horarioCompleto.isBefore(now);

    const available = !unavailableHours.includes(hour) && !isHourPast


    return({
      hour,
      available,
    })
  })

  hours.innerHTML = ""; // limpa todos os <option> antigos
  opening.forEach(({ hour, available }) => {
    const option = document.createElement("option"); // cria sempre um novo <option>

    option.textContent = hour;
    option.value = hour;

    if (!available) {
      option.disabled = true; // desabilita o horário indisponível
      option.style.color = "#333"; // deixa visualmente mais claro que está desativado
    }

    hours.append(option); // adiciona ao <select>


    
  })
  


}