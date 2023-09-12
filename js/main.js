// Отримуємо кнопки та блок кнопок
const buttons = document.querySelectorAll(".button-group button");
const buttonGroup = document.querySelector(".button-group");

// Додаємо обробник подій для кожної кнопки
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Знімаємо клас "active" з усіх кнопок
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Додаємо клас "active" до клікнутої кнопки
    button.classList.add("active");
  });
});

// Ініціалізуємо першу кнопку як активну
buttons[0].classList.add("active");













// Отримайте необхідні елементи
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Відкриття модального вікна при натисканні на кнопку
btn.onclick = function() {
  modal.style.display = "block";
}

// Закриття модального вікна при натисканні на "x"
span.onclick = function() {
  modal.style.display = "none";
}

// Закриття модального вікна при натисканні на поза вікном
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
