// Header
let lastScrollY = window.scrollY;
const headerBig = document.querySelector('.header-big');

window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
 
        headerBig.style.transition = 'transform 0.3s';
    } else {
     
    }
    lastScrollY = window.scrollY;
});


// Dropdown
document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.form__dropdown');
  
    dropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.form__dropdown-button');
      const options = dropdown.querySelectorAll('.form__dropdown-content a');
  
      button.addEventListener('click', function (event) {
        event.preventDefault();
        dropdown.classList.toggle('dropdown--open');
      });
  
      options.forEach(option => {
        option.addEventListener('click', function (event) {
          event.preventDefault();
          button.textContent = this.getAttribute('data-value');
          dropdown.classList.remove('dropdown--open');
        });
      });
  
      document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove('dropdown--open');
        }
      });
    });
});

// Stage Tabs
const tabButtons = document.querySelectorAll('.stage__tabs-button');
const tabPanes = document.querySelectorAll('.stage__pane');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');

    tabButtons.forEach(btn => btn.classList.remove('stage__tabs-button_active'));
    tabPanes.forEach(pane => pane.classList.remove('stage__pane_active'));

    button.classList.add('stage__tabs-button_active');
    document.getElementById(targetTab).classList.add('stage__pane_active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".custom-dropdown");

  dropdowns.forEach(function(dropdown) {
      const selected = dropdown.querySelector(".custom-dropdown__selected");
      const options = dropdown.querySelector(".custom-dropdown__options");
      const optionItems = options.querySelectorAll(".custom-dropdown__option");

      // Открытие/закрытие выпадающего списка при клике на выбранный элемент
      selected.addEventListener("click", function() {
          if (dropdown.classList.contains("open")) {
              dropdown.classList.remove("open");
              options.style.display = "none";
          } else {
              closeAllDropdowns();  // Закрываем все открытые списки перед открытием текущего
              dropdown.classList.add("open");
              options.style.display = "block";
          }
      });

      // Выбор опции
      optionItems.forEach(function(option) {
          option.addEventListener("click", function() {
              const color = option.getAttribute("data-color");

              // Убираем все цветовые классы
              selected.classList.remove("red", "yellow", "green");

              // Добавляем нужный цветовой класс
              if (color === "red") {
                  selected.classList.add("red");
              } else if (color === "yellow") {
                  selected.classList.add("yellow");
              } else if (color === "green") {
                  selected.classList.add("green");
              }

              // Закрываем выпадающий список и убираем класс "open" для стрелки
              dropdown.classList.remove("open");
              options.style.display = "none";
          });
      });

      // Закрытие выпадающего списка при клике вне его
      document.addEventListener("click", function(event) {
          if (!dropdown.contains(event.target)) {
              dropdown.classList.remove("open");
              options.style.display = "none";
          }
      });
  });

  // Функция для закрытия всех открытых dropdowns
  function closeAllDropdowns() {
      const allOptions = document.querySelectorAll(".custom-dropdown__options");
      const allDropdowns = document.querySelectorAll(".custom-dropdown");
      
      allOptions.forEach(function(option) {
          option.style.display = "none";
      });
      
      allDropdowns.forEach(function(dropdown) {
          dropdown.classList.remove("open"); // Убираем класс "open" у всех dropdowns
      });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".earn__tab");
  const contents = document.querySelectorAll(".earn__content-item");

  tabs.forEach(tab => {
      tab.addEventListener("click", function () {
          // Убираем активный класс со всех табов
          tabs.forEach(item => item.classList.remove("earn__tab--active"));
          // Добавляем активный класс к текущему табу
          this.classList.add("earn__tab--active");

          // Скрываем весь контент
          contents.forEach(content => content.classList.remove("earn__content-item--active"));
          // Показываем контент, связанный с текущим табом
          const activeContent = document.getElementById(this.getAttribute("data-tab"));
          activeContent.classList.add("earn__content-item--active");
      });
  });
});


document.getElementById('addRowBtn').addEventListener('click', function() {
  // Select the plan__main container
  const planMainContainer = document.querySelector('.plan__main');
  
  // Count the number of existing rows
  const rowCount = planMainContainer.querySelectorAll('.plan__main-row').length + 1; // +1 for the new row
  
  // Create a new div element for the new row
  const newRow = document.createElement('div');
  newRow.classList.add('plan__main-row');
  
  // Set the inner HTML for the new row (full HTML structure)
  newRow.innerHTML = `
      <div class="plan__main-row-number">${rowCount}</div> <!-- Dynamic numbering -->
      <div class="plan__main-row-tasks">
          <input type="text" placeholder="Введите текст">
      </div>
      <div class="plan__main-row-competence">
          <div class="dropdown form__dropdown">
              <button type="button" class="dropdown__button form__dropdown-button">Выберите</button>
              <div class="dropdown__content form__dropdown-content">
                  <a href="#" class="dropdown__link form__dropdown-link" data-value="Все делаю сам">Все делаю сам</a>
                  <a href="#" class="dropdown__link form__dropdown-link" data-value="Первые сотрудники">Первые сотрудники</a>
                  <a href="#" class="dropdown__link form__dropdown-link" data-value="Постоянный контроль">Постоянный контроль</a>
                  <a href="#" class="dropdown__link form__dropdown-link" data-value="Управление 10 мин">Управление 10 мин</a>
              </div>
          </div>
      </div>
      <div class="plan__main-row-urgency">
          <input type="checkbox" id="styled-checkbox-${Date.now()}">
          <label for="styled-checkbox-${Date.now()}"></label>
      </div>
      <div class="plan__main-row-months">
          <div class="month-grid">
              <input type="checkbox" class="cube-checkbox" id="cube-${Date.now()}">
              <label for="cube-${Date.now()}" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube-${Date.now()}-1">
              <label for="cube-${Date.now()}-1" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube-${Date.now()}-2">
              <label for="cube-${Date.now()}-2" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube-${Date.now()}-3">
              <label for="cube-${Date.now()}-3" class="cube"></label>
          </div>
      </div>
      <div class="plan__main-row-months">
          <div class="month-grid">
              <input type="checkbox" class="cube-checkbox" id="cube1-${Date.now()}">
              <label for="cube1-${Date.now()}" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube1-${Date.now()}-1">
              <label for="cube1-${Date.now()}-1" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube1-${Date.now()}-2">
              <label for="cube1-${Date.now()}-2" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube1-${Date.now()}-3">
              <label for="cube1-${Date.now()}-3" class="cube"></label>
          </div>
      </div>
      <div class="plan__main-row-months">
          <div class="month-grid">
              <input type="checkbox" class="cube-checkbox" id="cube2-${Date.now()}">
              <label for="cube2-${Date.now()}" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube2-${Date.now()}-1">
              <label for="cube2-${Date.now()}-1" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube2-${Date.now()}-2">
              <label for="cube2-${Date.now()}-2" class="cube"></label>
              <input type="checkbox" class="cube-checkbox" id="cube2-${Date.now()}-3">
              <label for="cube2-${Date.now()}-3" class="cube"></label>
          </div>
      </div>
  `;

  // Append the new row to the plan__main container
  planMainContainer.appendChild(newRow);
});






  