import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)
    const data = await response.json()

    // Filtra os agendamentos da data exata
    const dailySchedule = data.filter((schedule) =>
      dayjs(schedule.date).isSame(dayjs(date), "day")
    )

    return dailySchedule
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar o agendamento")
  }
}