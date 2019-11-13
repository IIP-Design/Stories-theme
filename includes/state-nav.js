const menuItems = document.getElementsByClassName('menu-item-type-custom has-children');
const menuItemsArray = [...menuItems];

const overlay = document.getElementsByClassName('nav__overlay');

const makeNavVisible = item => {
  console.log('clicked');
  const subItems = item.children;
  const subItemsArray = [...subItems];

  if (overlay && overlay[0].classList.contains('is-visible')) {
    if (subItemsArray) {
      // subItemsArray.forEach(item => {
      //   if (item.classList.contains('nav__secondary-nav')) {
      //     item.classList.remove('is-visible');
      //     item.classList.add('is-hidden');
      //   } else {
      //     item.classList.remove('selected');
      //   }
      // });
    }

    // overlay[0].classList.remove('is-visible');
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

const bureauList = document.querySelector('.nav__bureaus-offices-list');

const activateSubmenu = item => {
  const els = [...item.children];
  if (els) {
    els.forEach(el => {
      if (el.tagName.toLowerCase() === 'ul') {
        if (el.classList.contains('is-hidden')) {
          el.classList.remove('is-hidden', 'is-cloaked');
          el.setAttribute('style', 'display: block');
        }
      } else if (el.tagName.toLowerCase() === 'button') {
        if (!el.classList.contains('selected')) {
          el.classList.add('selected');
        }
      }
    });
  }
};

const deactivateSubmenu = item => {
  const els = [...item.children];
  if (els) {
    els.forEach(el => {
      if (el.tagName.toLowerCase() === 'ul') {
        if (!el.classList.contains('is-hidden')) {
          el.classList.add('is-hidden', 'is-cloaked');
          el.setAttribute('style', '');
        }
      } else if (el.tagName.toLowerCase() === 'button') {
        if (el.classList.contains('selected')) {
          el.classList.remove('selected');
        }
      }
    });
  }
};

const toggleSubmenu = bureau => {
  // Set all menu items as inactive
  const allMenuItems = [...bureau.parentNode.children];
  allMenuItems.forEach(item => {
    item.classList.add('is-inactive');
    deactivateSubmenu(item);
  });

  // Reset selected item as active
  bureau.classList.remove('is-inactive');

  // Active selected item submenu
  activateSubmenu(bureau);
};

if (bureauList) {
  const bureaus = [...bureauList.children];

  bureaus.forEach(bureau => {
    return bureau.addEventListener('click', () => toggleSubmenu(bureau));
  });
}
