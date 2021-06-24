import './styles.css';

import menu from './menu.json'; //импорт данных
import makeMarkup from './templates/menu.handlebars'; //шаблон для генерации разметки

const refs = {
  ulRef: document.querySelector('.js-menu'),
  checkboxRef: document.querySelector('#theme-switch-toggle'),
};

refs.ulRef.innerHTML = makeMarkup(menu); // генерим разметку для всех данных

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//проверка текущей темы при загрузки страницы
window.onload = checkTheme();

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme');
  if (localStorageTheme !== null && localStorageTheme === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    refs.checkboxRef.checked = true;
  }
}

//отслеживаем нажатие чекбокса переключения темы
refs.checkboxRef.addEventListener('change', changeTheme);

function changeTheme(e) {
  if (this.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
