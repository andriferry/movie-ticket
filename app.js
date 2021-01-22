let seats = document.querySelectorAll("#seat");
let container = document.querySelector(".container");
let selectedMovie = document.querySelector("#movie");
let screenImage = document.querySelector(".screen");
let price = document.querySelector("#price");
let totalSeat = document.querySelector("#totalseat");

let ticketPrice = +selectedMovie.value;

function updateSelectedSeat() {
  const selectSeat = document.querySelectorAll(".rowseat .selected").length;

  totalSeat.textContent = selectSeat;
  price.textContent = selectSeat * ticketPrice;
}

selectedMovie.addEventListener("change", function (params) {
  console.log(params.target.value);
  ticketPrice = +params.target.value;
});

container.addEventListener("click", function (param) {
  if (
    param.target.id === "seat" &&
    !param.target.classList.contains("occupied")
  ) {
    param.target.classList.toggle("selected");
    updateSelectedSeat();
  }
});

selectedMovie.addEventListener("change", function (e) {
  ticketPrice = +e.target.value;
  updateSelectedSeat();
});
