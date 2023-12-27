document.getElementById('form').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var departureTime = document.getElementById('departureTime').value;
  var destination = document.getElementById('destination').value;
  var ticketAmount = document.getElementById('ticketAmount').value;

  var nameError = document.getElementById('nameError');
  var emailError = document.getElementById('emailError');
  var departureTimeError = document.getElementById('departureTimeError');
  var destinationError = document.getElementById('destinationError');
  var ticketAmountError = document.getElementById('ticketAmountError');

  nameError.innerHTML = '';
  emailError.innerHTML = '';
  departureTimeError.innerHTML = '';
  destinationError.innerHTML = '';
  ticketAmountError.innerHTML = '';

  var output = document.getElementById('output');
  output.innerHTML = '';

  var hasError = false;

  if (name === '' || name.length > 30) {
    nameError.innerHTML = 'Nama Pelanggan is required and must be less than 30 characters.';
    hasError = true;
  }
  if (email === '' || !email.includes('@')) {
    emailError.innerHTML = 'Email is required and must be in the correct format.';
    hasError = true;
  }
  if (departureTime === '' || departureTime < '00:00' || departureTime > '23:59') {
    departureTimeError.innerHTML = 'Jam Keberangkatan is required and must be between 00:00 and 23:59.';
    hasError = true;
  }
  if (destination === '') {
    destinationError.innerHTML = 'Tujuan Keberangkatan is required.';
    hasError = true;
  }
  if (ticketAmount === '' || ticketAmount < 1 || ticketAmount > 10) {
    ticketAmountError.innerHTML = 'Jumlah Tiket is required and must be between 1 and 10.';
    hasError = true;
  }
  if (hasError) {
          output.innerHTML = 'Please fix the errors above.';
        } else {
          output.innerHTML = 'Form submitted successfully.';

          output.innerHTML += '<br><br>';
          output.innerHTML += 'Name: ' + name + '<br>';
          output.innerHTML += 'Email: ' + email + '<br>';
          output.innerHTML += 'Departure Time: ' + departureTime + '<br>';
          output.innerHTML += 'Destination: ' + destination + '<br>';
          output.innerHTML += 'Ticket Amount: ' + ticketAmount + '<br>';
        }
});
