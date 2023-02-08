/* FAQ */
let items = document.querySelectorAll('.item');

for (const item of items) {
  let itemAnswer = item.querySelector('.item__answer');
  itemAnswer.style.maxHeight = '0px'

  item.addEventListener('click', () => {
    if(itemAnswer.style.maxHeight == '0px') {
      item.style.borderWidth = '2px';
      item.style.backgroundColor = '#f8f4ff';
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