/* фиксированный хедер */
let header = document.querySelector('.header');
let headerInner = header.querySelector('.header__menu');

window.addEventListener('scroll', () => {
  if(window.pageYOffset >= 560) {
    header.style.position = 'fixed';
    header.style.animationName = 'headerOn';
    headerInner.style.borderRadius = '0 0 10px 10px';
    document.querySelector('main').style.paddingTop = header.offsetHeight + 'px';
  } else if(window.pageYOffset > 450 && window.pageYOffset < 560) {
    header.style.animationName = 'headerOff';
  } else {
    header.style.position = 'relative';
    header.style.animationName = '';
    document.querySelector('main').style.paddingTop = '';
  }
})

/* выпадающий список в блоке header */
let dropDownList = document.querySelector('.link_drop-down-list')

dropDownList.addEventListener('click', (e) => {
  e.preventDefault();
  dropDownList.classList.toggle('active');
})


/* бургер меню */
let burgerWrap = document.querySelector('.burger__wrapper');
let burgerMenu = document.querySelector('.burger-menu');

burgerWrap.addEventListener('click', () => {
  dropDownList.classList.remove('active');
  burgerWrap.classList.toggle('active');
  if(burgerWrap.classList.contains('active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
})


/* FAQ - акардеон  */
let items = document.querySelectorAll('.item');

for (const item of items) {
  let itemAnswer = item.querySelector('.item__answer');
  itemAnswer.style.maxHeight = '0px'

  item.addEventListener('click', () => {
    if(itemAnswer.style.maxHeight == '0px') {
      item.style.borderWidth = '2px';
      item.style.backgroundColor = '#FCFAFF';
      itemAnswer.style.maxHeight = itemAnswer.scrollHeight + 12 + 'px';
      itemAnswer.style.paddingTop = '12px';
    } else {
      item.style.borderWidth = '1px';
      item.style.backgroundColor = '#ffffff';
      itemAnswer.style.maxHeight = '0px';
      itemAnswer.style.paddingTop = '0px';
    }
    /* добавление класса для поворота стрелки(псевдоэлемента) */
    item.classList.toggle('active')
  })
}