document.getElementById('currencyForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var currency = document.getElementById('currency').value;
  var amount = document.getElementById('amount').value;
  var result = currency * amount;
  document.getElementById('result').innerText = `Hasil Konversi: Rp.${result}`;
});