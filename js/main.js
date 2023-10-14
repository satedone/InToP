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


// Отримайте необхідні елементи для всіх трьох кнопок і модального вікна
let modal = document.getElementById("myModal");
let btn1 = document.getElementById("openModalBtn1");
let btn2 = document.getElementById("openModalBtn2");
let btn3 = document.getElementById("openModalBtn3");
let btn4 = document.getElementById("openModalBtn4");
let btn5 = document.getElementById("openModalBtn5");
let span = document.getElementsByClassName("close")[0];

// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = "block";
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = "none";
}

// Додайте обробники подій для всіх трьох кнопок
btn1.onclick = openModal;
btn2.onclick = openModal;
btn3.onclick = openModal;
btn4.onclick = openModal;
btn5.onclick = openModal;

// Закриття модального вікна при натисканні на "x"
span.onclick = closeModal;

// Закриття модального вікна при натисканні на поза вікном
window.onclick = function(event) {
  if (event.target == modal) {
    closeModal();
  }
}

// Додайте обробник подій для клавіші "ESC"
document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});


document.getElementById('sendToTelegramButton').addEventListener('click', function () {
  // Зчитайте дані з полів форми
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;

  // Створіть об'єкт з даними, які ви хочете відправити
  var formData = new FormData();
  formData.append('name', name);
  formData.append('phone', phone);

  // Виконайте AJAX-запит і передайте дані форми
  var xhr = new XMLHttpRequest();
  xhr.open('POST', './send.php', true);
  xhr.send(formData);

  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          // Отримали успішну відповідь від сервера (HTTP статус 200)
          var response = xhr.responseText;
          // Можливо, додайте код для обробки відповіді тут, якщо потрібно
          console.log(response);
      } else if (xhr.readyState === 4) {
          // Виникла помилка під час виконання запиту
          console.error('Помилка при виконанні запиту до сервера');
      }
  };
});
