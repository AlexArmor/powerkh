const getPath = path => path.split('/').pop().split('.')[0];

let current = getPath(location.pathname);
if (current === '') {
  document
    .querySelector('.burger-menu__list')
    .firstElementChild.classList.add('active');
} else {
  const navElements = document.querySelectorAll(`.main-navigation a`);
  for (let el of navElements) {
    if (getPath(el.href) === current) {
      el.parentElement.classList.add('active');
    }
  }
}

import './burgerMenu';
