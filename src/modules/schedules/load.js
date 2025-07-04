import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hour-load.js";
import { schedulesShow } from "./show.js";

export async function schedulesDay(date) {
  if (!date) return;

  try {
    const dailySchedules = await scheduleFetchByDay({ date });

    schedulesShow({ dailySchedules });
    hoursLoad({ date, dailySchedules });
  } catch (error) {
    console.error("Erro ao carregar os agendamentos:", error);
    alert("Não foi possível carregar os agendamentos.");
  }
}