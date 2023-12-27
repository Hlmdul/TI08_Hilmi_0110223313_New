const imagePicker = document.getElementById("imagePicker");
const displayImage = document.getElementById("displayImage");

imagePicker.addEventListener("change", function () {
  displayImage.src = "img/" + imagePicker.value + ".jpg";
});
