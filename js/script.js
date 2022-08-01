function countdown() {
  setInterval(function () {
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let timer = document.querySelectorAll(".timer-data h1");
  
    const launchDate = new Date(2022, 7, 5, 9, 0, 0, 0);
    const now = new Date();
    const distance = launchDate - now;
  
    if (distance <= 0) {
      timer.forEach((number) => {
        number.innerHTML = "0";
      });
    } else {
      days.innerHTML = Math.floor(distance / (1000 * 60 * 60 * 24));
      hours.innerHTML = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      minutes.innerHTML = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      seconds.innerHTML = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }, 1000);
}

countdown();
