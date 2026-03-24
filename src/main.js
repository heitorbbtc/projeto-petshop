"use strict"

// Configuração do dayjs
import "./libs/dayjs.js"

// CSS
import "./styles/global.css"
import "./styles/form.css"
import "./styles/main.css"
import "./styles/register.css"
import "./styles/title.css"

// JS
import "./modules/schedules/cancel.js"
import "./modules/form/submit.js"
import "./modules/page-load.js"
import "./modules/form/date-change.js"

const newScheduleBtn = document.getElementById("new-schedule")
const registerSection = document.getElementById("register")

newScheduleBtn.addEventListener("click", () => {
  registerSection.style.display = "block"
})