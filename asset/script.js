var timeNow = moment().format("MMMM Do YYYY");

var arr = [9, 10, 11, 12, 1, 2, 3, 4, 5];
var currentTime = parseInt(moment.format("h"));
$("#currentDay").text(timeNow);

var string = document.querySelector(".token");
var storage = string;
var pressBtn = document.querySelector(".saveBtn");

pressBtn.addEventListener("click", function () {
  localStorage.setItem("storage", storage);
});

for (var i = 0; i < arr.length; i++) {
  var time = arr[i];
  if (time === currentTime) {
    $("input").addClass("present");
  } else if (time < currentTime) {
    $("input").addClass("past");
  } else if (time > currentTime) {
    $("input").addClass("future");
  }
}
