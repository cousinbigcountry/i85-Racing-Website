function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

//Roster
var myArray = [
  { number: 59, name: "Kyle Fountain", points: 331, wins: 0 },
  { number: 24, name: "James Fountain", points: 590, wins: 2 },
  { number: 7, name: "Chase Johnson", points: 393, wins: 1 },
  { number: 8, name: "Corey Tesnar", points: 376, wins: 1 },
  { number: "02", name: "Nicholas Maynard", points: 328, wins: 2 },
  { number: 23, name: "John-Michael Bryant", points: 292, wins: 0 },
  { number: 10, name: "Brandon McAbee", points: 247, wins: 0 },
  { number: 38, name: "Allan Hammerbeck", points: 154, wins: 0 },
  { number: 9, name: "Matthew Nicolini", points: 63, wins: 0 },
  { number: 77, name: "Bobby Kyle", points: 97, wins: 0 },
  { number: 0, name: "Mason Cothran", points: 30, wins: 0 },
];

//STANDINGS

$("th").on("click", function () {
  var column = $(this).data("column");
  var order = $(this).data("order");
  console.log("Column was clicked", column, order);

  if (order == "desc") {
    $(this).data("order", "asc");
    myArray = myArray.sort((a, b) => (a[column] > b[column] ? 1 : -1));
  } else {
    $(this).data("order", "desc");
    myArray = myArray.sort((a, b) => (a[column] < b[column] ? 1 : -1));
  }
  buildTable(myArray);
});

buildTable(myArray);
function buildTable(data) {
  var table = document.getElementById("myTable");
  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
          <td>${data[i].number}</td>
          <td>${data[i].name}</td>
          <td>${data[i].points}</td>
          <td>${data[i].wins}</td>
        </tr>`;
    table.innerHTML += row;
  }
}

var myArray2 = [
  { number: 59, name: "Kyle Fountain", points: 47, wins: 0 },
  { number: 24, name: "James Fountain", points: 107, wins: 3 },
  { number: 7, name: "Chase Johnson", points: 43, wins: 1 },
  { number: 8, name: "Corey Tesnar", points: 38, wins: 1 },
  { number: "02", name: "Nicholas Maynard", points: 34, wins: 2 },
  { number: 23, name: "John-Michael Bryant", points: 32, wins: 0 },
];
//Playoff Standings
$("th").on("click", function () {
  var column = $(this).data("column");
  var order = $(this).data("order");
  console.log("Column was clicked", column, order);

  if (order == "desc") {
    $(this).data("order", "asc");
    myArray2 = myArray2.sort((a, b) => (a[column] > b[column] ? 1 : -1));
  } else {
    $(this).data("order", "desc");
    myArray2 = myArray2.sort((a, b) => (a[column] < b[column] ? 1 : -1));
  }
  buildTable2(myArray2);
});

buildTable2(myArray2);
function buildTable2(data) {
  var table = document.getElementById("myTable2");
  table.innerHTML = "";

  for (var i = 0; i < data.length; i++) {
    var row = `<tr>
          <td>${data[i].number}</td>
          <td>${data[i].name}</td>
          <td>${data[i].points}</td>
          <td>${data[i].wins}</td>
        </tr>`;
    table.innerHTML += row;
  }
}

// Set the date we're counting down to
var countDownDate = new Date("May 27, 2024 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    "Next Race:" + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

/*------MENU------ */

const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");

[openMenuBtn, closeMenuBtn].forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
    menu.style.transition = "transform 0.5s ease";
  });
});

menu.addEventListener("transitioned", function () {
  this.removeAttribute("style");
});

menu.querySelectorAll(".dropdown > i").forEach((arrow) => {
  arrow.addEventListener("click", function () {
    this.closest(".dropdown").classList.toggle("active");
  });
});
