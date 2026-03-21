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
  //Открытие и закрытие вопроса
  const faqsItem = document.querySelectorAll('.faqs__item');
  const faqsBoxHide = document.querySelector('.faqs__box-hide');
  const faqsBtn = document.querySelector('.faqs__btn');
  const faqsBtnText = document.querySelector('.faqs__btn-text');
  const faqsBtnImg = document.querySelector('.faqs__btn-img');
  faqsItem.forEach(item => {
    item.addEventListener('click', ()=> {
      item.classList.toggle('open-answer')
    })
  });
  faqsBtn.addEventListener('click', ()=> {
    faqsBoxHide.classList.toggle('hide');
    if(faqsBoxHide.classList.contains('hide')) {
      faqsBtnText.innerHTML = `Show More`
      faqsBtnImg.style.transform = `rotate(90deg)`
    } else {
      faqsBtnText.innerHTML = `Show less`
      faqsBtnImg.style.transform = `rotate(270deg)`
    }
  });
  //Табы
  const tabs = document.querySelectorAll('.products__buttons-btn');
  const contents = document.querySelectorAll('.products__box-tab');

  tabs.forEach(tab => {
      tab.addEventListener('click', () => {
          const target = tab.dataset.tab;

          // убираем актив у кнопок
          tabs.forEach(t => t.classList.remove('tab-active'));
          tab.classList.add('tab-active');

          // скрываем контент
          contents.forEach(content => {
              content.classList.remove('tab-content-active');
              content.classList.add('tab-content-hide');

              if (content.dataset.content === target) {
                  content.classList.remove('tab-content-hide');
                  content.classList.add('tab-content-active');
              }
          });
      });
  });
    
    const testimonialsTabs = document.querySelectorAll('.testimonials__tabs-item');
    if (!testimonialsTabs.length) return;
    testimonialsTabs.forEach((tab, index) => {
        if (index === 0) {
            tab.classList.add('testimonials-show');
            tab.classList.remove('testimonials-hide');
        } else {
            tab.classList.add('testimonials-hide');
            tab.classList.remove('testimonials-show');
        }
        tab.addEventListener('click', () => {
            testimonialsTabs.forEach(t => {
                t.classList.remove('testimonials-show');
                t.classList.add('testimonials-hide');
            });
            tab.classList.add('testimonials-show');
            tab.classList.remove('testimonials-hide');
            currentIndex = Array.from(testimonialsTabs).indexOf(tab);
        });
    });
    let currentIndex = 0;
    setInterval(() => {
        testimonialsTabs[currentIndex].classList.remove('testimonials-show');
        testimonialsTabs[currentIndex].classList.add('testimonials-hide');
        currentIndex = (currentIndex + 1) % testimonialsTabs.length;
        testimonialsTabs[currentIndex].classList.add('testimonials-show');
        testimonialsTabs[currentIndex].classList.remove('testimonials-hide');
    }, 8000);
  //Раскрытие и скрытие мобильнеого меню
    const mobileMenuSublist = document.querySelectorAll('.mobile-menu-list-item');
    mobileMenuSublist.forEach (item => {
      item.addEventListener('click', ()=> {
        item.classList.toggle('mobile-menu-open')
      })
    });
   //Открытие гамбургера
   const hamburger = document.querySelector('.hamburger');
   const mobileMenu = document.querySelector('.mobile-menu');
   hamburger.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('mobile-menu-show');
    hamburger.classList.toggle('hamburger-open')
   }) 
});