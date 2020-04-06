const insertMobileMenu = () => {
  const burguerMenu = document.querySelector('.burguer-menu');
  const lines = document.querySelector('.lines');
  let menuOpen = false;

  if (burguerMenu) {
    burguerMenu.addEventListener('click', (event) => {
      if (!menuOpen) {
        burguerMenu.classList.add('open');
        menuOpen = true;
      } else {
        burguerMenu.classList.remove('open');
        menuOpen = false;
      }
    })
  }
}

export default insertMobileMenu;
