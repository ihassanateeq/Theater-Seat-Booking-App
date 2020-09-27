var container = document.querySelector('.container');

var seats = document.querySelectorAll('.row .seats:not(.occupied)');

var movieSelect = document.getElementById('movie');


var count = document.getElementById('count');

var total = document.getElementById('total');

var ticketPrice = movieSelect.value;


// Update Count & Total

function updateCountTotal() {
    var selectedSeats = document.querySelectorAll('.row .seat.selected');

    count.innerHTML = selectedSeats.length;

    console.log(ticketPrice);

    total.innerHTML = +ticketPrice * selectedSeats.length;
}

// Change

movieSelect.addEventListener('change', (e) => {
    ticketPrice = e.target.value;
    updateCountTotal();
})


// Event Listener

container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        e.target.classList.toggle('selected');

        updateCountTotal();
    }
})
