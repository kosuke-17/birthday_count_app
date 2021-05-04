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
  hours.innerHTML = thours;
  minutes.innerHTML = tmin;
  seconds.innerHTML = tsec;
}
birthdayCountdown();
setInterval(birthdayCountdown, 1000);

function celebration(){
  const balloon = document.createElement("div");
  const balloon1 = document.createElement("div");
  const heart = document.createElement("div");
  balloon.classList.add("balloon");
  balloon1.classList.add("balloon1");
  heart.classList.add("heart");
  balloon.style.left = Math.random()*100+"vw";
  balloon.style.animationDuration = Math.random()*2+3;
  balloon.innerText = "🎈";
  document.body.appendChild(balloon);
  setTimeout(()=>{
    balloon.remove();
  }, 5000);
}
setInterval(celebration,300);