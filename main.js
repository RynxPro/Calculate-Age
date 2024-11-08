// The Current Time and Date
let todayDate = new Date();
let currentYear = todayDate.getFullYear();
let currentMonth = todayDate.getMonth();
let currentDay = todayDate.getDate();

// Output
console.log(todayDate);
console.log(currentYear);
console.log(currentMonth);
console.log(currentDay);

// declare variables
let button = document.getElementById("doMath");

// calculate the age
doMath.addEventListener("click", function () {
  console.log("you clicked the button");
  // The User's Time and Date
  const userDateValue = document.getElementById("yourDate").value;
  console.log(userDateValue);
  let userDate = new Date(document.getElementById("yourDate").value);
  let userYear = userDate.getFullYear();
  let userMonth = userDate.getMonth();
  let userDay = userDate.getDate();

  // Output
  console.log(userDate);
  console.log(userYear);
  console.log(userMonth);
  console.log(userDay);
  let resultYear = currentYear - userYear;
  if (userMonth > currentMonth) {
    resultYear = resultYear - 1;
  }
  document.getElementById("age").innerHTML = resultYear;
});
