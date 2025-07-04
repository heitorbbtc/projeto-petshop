import { apiConfig } from "./api-config.js";

export async function scheduleNew({name, pet, tell, service, date, scheduleHour, id}) {
  try {
    // Faz a requisição para enviar os dados dos agendamento
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json"
      },
      body: JSON.stringify({name, pet, tell, service, date, scheduleHour, id}),
    })

    alert("Agendamento realizado com suceso")
    
  } catch (error) {
    console.log(error);
    alert("Não foi possivel agendar, tente novamente mais tarde")
    
  }
}