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

// "use strict"






// TRANSLATE
let currentLanguage = 'en';
        
const languageToggle = document.getElementById('languageToggle');
const offersLink = document.getElementById('offers-link');
const generalLink = document.getElementById('general-link');
const contactsLink = document.getElementById('contacts-link');


function toggleLanguage() {
	if (currentLanguage === 'en') {
		currentLanguage = 'uk';
		languageToggle.textContent = 'EN'; 
		offersLink.textContent = 'Пропозиції';
		generalLink.textContent = 'Головне';
		contactsLink.textContent = 'Контакти';
	} else {
		currentLanguage = 'en';
		languageToggle.textContent = 'UK'; 
		offersLink.textContent = 'Offers';
		generalLink.textContent = 'General';
		contactsLink.textContent = 'Contacts';
	}
}


languageToggle.addEventListener('click', toggleLanguage);


toggleLanguage();




const form = document.querySelector('.form');
form.addEventListener('submit', function (e){
	e.preventDefault();
	sendMessage(form);
})

async function sendMessage(form) {
	const formData = new FormData(form);
	if (formData) {
		const url = './sendmessage.php';
		const response = await fetch(url, {
			method: "POST", 
			body: formData
		});
		if (response.ok){
			form.reset();
			alert('Form sent!');
		}else{
			alert('Error');
		}
	}
}