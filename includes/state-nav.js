const menuItems = document.getElementsByClassName('menu-item-type-custom has-children');
const menuItemsArray = [...menuItems];

const overlay = document.getElementsByClassName('nav__overlay');

const makeNavVisible = item => {
  console.log('clicked');
  const subItems = item.children;
  const subItemsArray = [...subItems];

  if (overlay && overlay[0].classList.contains('is-visible')) {
    if (subItemsArray) {
      subItemsArray.forEach(item => {
        if (item.classList.contains('nav__secondary-nav')) {
          item.classList.remove('is-visible');
          item.classList.add('is-hidden');
        } else {
          item.classList.remove('selected');
        }
      });
    }

    overlay[0].classList.remove('is-visible');
  } else if (overlay && !overlay[0].classList.contains('is-visible')) {
    overlay[0].classList.add('is-visible');

    if (subItemsArray) {
      subItemsArray.forEach(item => {
        if (item.classList.contains('nav__secondary-nav')) {
          item.classList.remove('is-hidden');
          item.classList.remove('is-visible');
        } else {
          item.classList.add('selected');
        }
      });
    }
  }
};

if (menuItems) {
  menuItemsArray.forEach(item => {
    return item.addEventListener('click', () => makeNavVisible(item));
  });
}
