let wrappers = document.querySelectorAll('.testimonials__wrapper');

for(let wrap of wrappers) {
  let cardItems = wrap.getElementsByClassName('card');

  /* setCardPosition - указание позиций для абсолютно позиционированных карточек */
  function setCardPosition(cardItems) {
    let i = -1;
    let positionCard;
    for (const item of cardItems) {
      if(i < 0) {
        positionCard = 0;
      } else {
        positionCard += cardItems[i].offsetHeight + 25;
      }
      item.style.top = positionCard + 'px';
      i++;
    }
  }

  /* cardMovement - смещение карточек вверх и перенос первой карточки в конец очереди при смещении за пределы viewport */
  function cardMovement() {
    setCardPosition(cardItems)

    let height = cardItems[0].offsetHeight + 25;

    for (const item of cardItems) {
      item.style.top = item.offsetTop - height + 'px';
      item.style.transition = `top ${timeToScrolling}s linear`;
    }

    let firstItem = cardItems[0];
    let heightCards = 0;

    setTimeout(() => {
      firstItem.remove();
      for (let i = 0; i < cardItems.length; i++) {
        heightCards += cardItems[i].offsetHeight + 25
      }
      firstItem.style.top = heightCards + 'px';
      wrap.appendChild(firstItem);
    }, (timeToScrolling * 1000 - 100));
  }
  
  let timeToScrolling = 10; // время в секундах за которое проходит анимация и отрабатываю setInterval и setTimeout
  
  let toggle = true; // вспомогательная переменная для обработчиков события, распаложенных ниже.

  /* первичный запуск слайдера */
  cardMovement();
  let interval = setInterval(cardMovement, (timeToScrolling * 1000));

  /* остановка слайдера при потере window фокуса и запуск при получении */
  window.addEventListener('blur', () => {
    if(toggle) {
      clearInterval(interval);
      toggle = false;
      interval = null;
    }
  });
  window.addEventListener('focus', () => {
    if(!toggle) {
      cardMovement();
      interval = setInterval(cardMovement, (timeToScrolling * 1000));
      toggle = true;
    }
  });
}