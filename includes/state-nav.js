const menuItems = [...document.getElementsByClassName('menu-item-type-custom has-children')];
const overlay = document.getElementsByClassName('nav__overlay');

const showNavDropdown = item => {
  const els = [...item.children];

  if (item.classList.contains('yes')) {
    if (overlay && overlay[0].classList.contains('is-visible')) {
      overlay[0].classList.remove('is-visible');
    }

    if (els) {
      els.forEach(el => {
        if (el.tagName.toLowerCase() === 'ul') {
          if (el.classList.contains('is-visible')) {
            el.classList.remove('is-visible');
          }
          if (!el.classList.contains('is-hidden')) {
            el.classList.add('is-hidden');
          }
        } else if (el.tagName.toLowerCase() === 'button') {
          if (el.classList.contains('selected')) {
            el.classList.remove('selected');
          }
        }
      });
    }

    item.classList.remove('yes');
  } else {
    const allMenuItems = [...item.parentNode.children];

    allMenuItems.forEach(sibling => {
      if (sibling.classList.contains('yes')) {
        sibling.classList.remove('yes');
      }
    });
    item.classList.add('yes');

    if (overlay && !overlay[0].classList.contains('is-visible')) {
      overlay[0].classList.add('is-visible');
    }

    if (els) {
      els.forEach(el => {
        if (el.tagName.toLowerCase() === 'ul') {
          if (!el.classList.contains('is-visible')) {
            el.classList.add('is-visible');
          }
          if (el.classList.contains('is-hidden')) {
            el.classList.remove('is-hidden');
          }
        } else if (el.tagName.toLowerCase() === 'button') {
          if (!el.classList.contains('selected')) {
            el.classList.add('selected');
          }
        }
      });
    }
  }
};

const hideNavDropdown = item => {
  const els = [...item.children];

  if (els) {
    els.forEach(el => {
      if (el.tagName.toLowerCase() === 'ul') {
        if (el.classList.contains('is-visible')) {
          el.classList.remove('is-visible');
        }
        if (!el.classList.contains('is-hidden')) {
          el.classList.add('is-hidden');
        }
      } else if (el.tagName.toLowerCase() === 'button') {
        if (el.classList.contains('selected')) {
          el.classList.remove('selected');
        }
      }
    });
  }
};

const toggleNav = navItem => {
  const allMenuItems = [...navItem.parentNode.children];

  allMenuItems.forEach(item => {
    hideNavDropdown(item);
  });

  showNavDropdown(navItem);
};

if (menuItems) {
  menuItems.forEach(item => {
    return item.addEventListener('click', () => toggleNav(item));
  });
}

// Get bureau list menu
const bureauList = document.querySelector('.nav__bureaus-offices-list');

// Popout bureau submenu
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

// Hide bureau submenu
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

// Handle click on bureau menu item
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

// MOBILE
const setMobileStyles = () => {
  const utilityMenu = document.getElementById('menu-utility-menu');
  utilityMenu.setAttribute('style', 'display: none');
};

const toggleMobileNav = () => {
  const navTrigger = document.querySelector('.nav__nav-trigger');
  const masthead = document.getElementById('masthead');
  const navMenu = document.getElementById('nav__primary-nav');

  const toggleVisiblity = el => {
    if (el && el.classList.contains('nav-is-visible')) {
      el.classList.remove('nav-is-visible');
    } else if (el && !el.classList.contains('nav-is-visible')) {
      el.classList.add('nav-is-visible');
    }
  };

  toggleVisiblity(navTrigger);
  toggleVisiblity(masthead);
  toggleVisiblity(navMenu);
};

const setMobileNav = () => {
  const navTrigger = document.querySelector('.nav__nav-trigger');

  navTrigger.addEventListener('click', toggleMobileNav);
};

const toggleMoveOut = () => {
  const navMenu = document.getElementById('nav__primary-nav');

  if (navMenu) {
    if (!navMenu.classList.contains('moves-out')) {
      navMenu.classList.add('moves-out');
    }
  }
};

const toggleMoveOutOff = e => {
  e.stopPropagation();
  const navMenu = document.getElementById('nav__primary-nav');

  if (navMenu) {
    if (navMenu.classList.contains('moves-out')) {
      navMenu.classList.remove('moves-out');
    }
  }

  if (menuItems) {
    menuItems.forEach(item => {
      if (item.classList.contains('yes')) {
        item.classList.remove('yes');
      }
    });
  }
};

if (window.screen.width < 769) {
  setMobileStyles();
  setMobileNav();

  if (menuItems) {
    menuItems.forEach(item => {
      return item.addEventListener('click', () => toggleMoveOut());
    });
  }

  const backButton = document.querySelector('.nav__go-back');

  if (backButton) {
    backButton.addEventListener('click', e => toggleMoveOutOff(e));
  }
}
