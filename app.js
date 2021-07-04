// Get the current date in correct format
function startDate() {
  const date = new Date();
  const currentDate = date.toLocaleDateString('en-ES',{weekday: 'long', day: 'numeric', year: 'numeric', month: 'long'})
  document.querySelector("#current-date").innerHTML = currentDate
}


// Format the hours, minutes and seconds as 00:00:00
function formatTime(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

// Display current time in timer view
function startTime() {
  const today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  hour = formatTime(hour);
  minute = formatTime(minute);
  second = formatTime(second);

  document.querySelector("#current-time").innerHTML = hour + ":" + minute + ":" + second;
  setTimeout(function () {
    startTime();
  }, 500);
  startDate()
}


startTime();
