document.addEventListener("DOMContentLoaded", () => {
  //Показ и скрытие картинки

const img1 = document.querySelector('.hero__images-img-1');
const img2 = document.querySelector('.hero__images-img-2');

function toggleImages() {
  if (img1.classList.contains('show-img')) {
    img1.classList.remove('show-img');
    img1.classList.add('hide-img');

    img2.classList.remove('hide-img');
    img2.classList.add('show-img');
  } else {
    img2.classList.remove('show-img');
    img2.classList.add('hide-img');

    img1.classList.remove('hide-img');
    img1.classList.add('show-img');
  }
}
setInterval(toggleImages, 3000);
    //Показ и скрытие шапки
    const header = document.querySelector('.header');
    const headerTopbar = document.querySelector('.header__top-bar');
    function hideHeader() {
            if(window.scrollY >= 200) {
                headerTopbar.classList.add('hide-top-header');
                } else {
                    headerTopbar.classList.remove('hide-top-header');
                }
            } if(window.scrollY >= 202) {
                headerTopbar.style.display = 'none'
                // headerTopbar.classList.add('hide')
            } else {
                headerTopbar.classList.remove('hide')
            }
            window.addEventListener('scroll', ()=> {
                hideHeader();
            }
        );
        
});