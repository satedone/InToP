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
