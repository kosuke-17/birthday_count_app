const birthdaydate="7 October 2021";
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");


function birthdayCountdown(){
  const bdate = new Date(birthdaydate);
  const todaysdate = new Date();
  const tseconds = (bdate - todaysdate)/1000;
  const tdays = Math.floor(tseconds/3600/24);
  const thours = Math.floor(tseconds/3600)%24;
  const tmin = Math.floor(tseconds/60)%60;
  const tsec = Math.floor(tseconds)%60;
  days.innerHTML = tdays;
  hours.innerHTML = hours;
  minutes.innerHTML = minutes;
  seconds.innerHTML = seconds;
}
birthdayCountdown();
setInterval(birthdayCountdown, 1000);