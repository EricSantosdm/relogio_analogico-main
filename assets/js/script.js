const hoursE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minute");
const secondsE1 = document.getElementById("second");
const dateE1 = document.getElementById("date");
const timeE1 = document.getElementById("time");
const toggle = document.getElementById("toggle2");



const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];
const months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Mai",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dez",
];

function isDayTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  return hour >= 6 && hour < 18;
}

function updateClock() {
  const time = new Date();
  const day = time.getDay();
  const date = time.getDate();
  const month = time.getMonth();
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour > 12 ? "PM" : "AM";

  dateE1.innerHTML = `${days[day]}, ${date} ${months[month]}`;
  timeE1.innerHTML = `${hour}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

  hoursE1.style.transform = `translate(-50%, -100%) rotateZ(${hour * 30}deg)`;
  minutesE1.style.transform = `translate(-50%, -100%) rotateZ(${minutes * 6}deg)`;
  secondsE1.style.transform = `translate(-50%, -100%) rotateZ(${seconds * 6}deg)`;

  const html = document.querySelector("html");
  const mode = document.querySelector(".mode");

  if (isDayTime()) {
    html.classList.remove("dark");
    html.classList.add("light");
    mode.innerHTML = "Dark Mode";
    toggle.classList.remove("active");
  } else {
    html.classList.remove("light");
    html.classList.add("dark");
    mode.innerHTML = "Light Mode";
    toggle.classList.add("active");
  }
}

setInterval(updateClock, 1000);
updateClock();
