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

refs.checkboxRef.addEventListener('change', changeTheme);

console.log(refs.checkboxRef);

function changeTheme(e) {
  const checkbox = e.currentTarget;

  console.log(checkbox);

  if (checkbox.checked) {
    document.body.classList.remove(Theme.LIGHT);
    document.body.classList.add(Theme.DARK);
  } else {
    document.body.classList.remove(Theme.DARK);
    document.body.classList.add(Theme.LIGHT);
  }
}
