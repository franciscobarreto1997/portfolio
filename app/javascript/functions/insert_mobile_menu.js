import disableScroll from 'disable-scroll';

const insertMobileMenu = () => {
  const burguerMenu = document.querySelector('.burguer-menu');
  const lines = document.querySelector('.lines');
  const mobileMenu = document.querySelector('.mobile-menu');
  let menuOpen = false;

  const items = `<div class="mobile-menu-items">
                    <a href="/">Projects</a>
                    <a href="/articles">Articles</a>
                    <a href="/contact">Contact</a>
                    <a href="https://github.com/franciscobarreto1997"><i class="fab fa-github"></i></a>
                  </div>`

  if (burguerMenu) {
    burguerMenu.addEventListener('click', (event) => {
      if (!menuOpen) {
        burguerMenu.classList.add('open');
        menuOpen = true;
        mobileMenu.removeAttribute('hidden');
        setTimeout(() => {
          mobileMenu.classList.remove('opacity');
        }, 10)
        mobileMenu.insertAdjacentHTML('beforeend', items);
        disableScroll.on();
      } else {
        burguerMenu.classList.remove('open');
        menuOpen = false;
        mobileMenu.classList.add('opacity');
        mobileMenu.setAttribute('hidden', '');
        mobileMenu.innerHTML = "";
        disableScroll.off();
      }
    })
  }
}

export default insertMobileMenu;
