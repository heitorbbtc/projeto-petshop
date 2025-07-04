import dayjs from "dayjs";

// Selecionar as sessões
const periodMorning = document.getElementById("schedules-morning")
const periodAfternoon = document.getElementById("schedules-afternoon")
const periodNight = document.getElementById("schedules-night")

export function schedulesShow({dailySchedules}){
  try {
    // Limpar a lista
    periodMorning.innerHTML = ""
    periodAfternoon.innerHTML = ""
    periodNight.innerHTML = ""

    // Renderizar os agendamentos por periodo
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li")
      const time = document.createElement("span")
      const space = document.createElement("div")
      const client = document.createElement("p")
      const service = document.createElement("p")
      const remove = document.createElement("p")
      const strong = document.createElement("strong")

      // Adicionando as classes 
      item.classList.add("schedule")
      time.classList.add("schedule-hour")
      space.classList.add("space")
      client.classList.add("client")
      service.classList.add("service")
      
      client.textContent = schedule.name 
      service.textContent = schedule.service
      remove.textContent = "Remover item"
      strong.textContent = ` / ${schedule.pet}`
      item.dataset.id = schedule.id

      remove.classList.add("remove")

      item.append(time, space)
      space.append(client, service, remove)
      client.append(strong)

      const today = dayjs().format("YYYY-MM-DD")
      const horarioCompleto = dayjs(`${today}T${schedule.scheduleHour}`)
      time.textContent = horarioCompleto.format("HH:mm")


      const hour = horarioCompleto.hour() 

      // Renderizar o agendamento na seção (manhã, tarde, noite)
      if (hour <= 12) {
        periodMorning.appendChild(item)
      } else if (hour > 12 && hour <= 18) {
        periodAfternoon.appendChild(item)
      } else {
        periodNight.append(item)
      }
    });


  } catch (error) {
    console.log(error);
    alert("Não foi possivel exibir os agendamentos")
    
  }
}