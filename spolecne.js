const menuButton = document.querySelector('#menu-tlacitko');
const menuItems = document.querySelector('#menu-polozky');

menuButton.addEventListener('click', () => {
    menuItems.classList.toggle('show');

    if (menuItems.classList.contains('show')) {
        menuButton.innerHTML = '<i class="fas fa-xmark"></i>';
    } else {
        menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    }
  });

