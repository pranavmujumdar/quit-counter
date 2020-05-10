const data = {
    years: null,
    months: null,
    weeks: null,
    days: null,
    hours: null,
    minutes: null,
    seconds: null,
    savings: null,
    dollars: null,
    cents: null,
    dailyCost: 4.764,
    time: 1588975200000 // new Date(2019, 8, 24, 19)
  };
  

const progresses = document.querySelectorAll(".progress[fraction]");


 update();

function update() {
  const now = new Date().getTime();
  const seconds = (now - data.time) / 1000;
  data.years = seconds / 31556952;
  data.months = seconds / 2592000;
  data.weeks = seconds / 604800;
  data.days = seconds / 86400;
  data.hours = seconds / 3600;
  data.minutes = seconds / 60;
  data.seconds = seconds;
  updatePies();
requestAnimationFrame(update);
}
//setInterval(update,1000);

function updatePies() {
  const radius = 25;
  const circumference = radius * 2 * Math.PI;
  progresses.forEach(progress => {
    const value = data[progress.getAttribute("fraction")];
    const complete = Math.floor(value);
    let v = complete.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    if (complete < 10) v = value.toFixed(2);
    if (complete < 1) v = value.toFixed(3);
    progress.querySelector("h2").innerText = v;
    const percent = Math.round((value - complete) * 100 * 10) / 10;
    const offset = circumference - (percent / 100) * circumference;
    progress.querySelector(
      ".left"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="100" width="100" viewBox="0 0 100 100">
    <circle class="bg" r="${radius}" cx="50" cy="50" />
    <circle
      class="prog"
      r="${radius}"
      cx="50"
      cy="50"
      stroke-dasharray="${circumference} ${circumference}"
      stroke-dashoffset="${offset}"
    />
  </svg>`;
  });
}

// var days =  document.getElementById("days");
// var daysElapsed = null;
// var LastSmoked = new Date(2020, 04, 08, 12, 00, 00, 000);
// var date = new Date(2020, )

// function findTimeElapsed() {
//     const now = new Date();
//     console.log(now);
//     console.log(LastSmoked);
//     const secondsElapsed = (now - LastSmoked.getTime())/1000;
//     daysElapsed = secondsElapsed/(24*60*60);
//     updateTimes();
// }
// function updateTimes() {
//     days.innerText = Math.floor(daysElapsed);
// }
// findTimeElapsed();
