// document.addEventListener("DOMContentLoaded", () => {
//   const menuItems = document.querySelectorAll('.header__nav-item--has-submenu');

//   menuItems.forEach(item => {
//     const link = item.querySelector('a');

//     link.addEventListener('click', e => {
//       e.preventDefault(); // чтобы ссылка не срабатывала
//       // Закрыть все остальные открытые меню
//       menuItems.forEach(i => {
//         if (i !== item) i.classList.remove('is-open');
//       });
//       // Открыть/закрыть текущее
//       item.classList.toggle('is-open');
//     });
//   });

//   // Закрыть меню при клике вне
//   document.addEventListener('click', e => {
//     if (![...menuItems].some(item => item.contains(e.target))) {
//       menuItems.forEach(item => item.classList.remove('is-open'));
//     }
//   });
// });