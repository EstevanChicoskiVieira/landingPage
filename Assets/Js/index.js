document.getElementById("menu-h").addEventListener('click', () => {
    const input = document.getElementById("menu-h");
    const menu = document.querySelector(".header-left")

      if (input .checked) {
          menu.style.transform = 'translateX(0%)';
      } else {
          menu.style.transform = 'translateX(-100%)';
  }
})