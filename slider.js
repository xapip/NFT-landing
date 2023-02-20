let wrappers = document.querySelectorAll('.testimonials__wrapper');

for(let wrap of wrappers) {
  let cardItems = wrap.getElementsByClassName('card');
  let widthWindow = document.documentElement.clientWidth;

  let h = 25;
  if(widthWindow <= 950 && widthWindow > 834) {
    h = 16;
  } else if(widthWindow <= 834) {
    h = 5;
  }

  /* setCardPosition - указание позиций для абсолютно позиционированных карточек */
  function setCardPosition(cardItems) {
    let i = -1;
    let positionCard;
    for (const item of cardItems) {
      if(i < 0) {
        positionCard = 0;
      } else {
        positionCard += cardItems[i].offsetHeight + h;
      }
      item.style.top = positionCard + 'px';
      i++;
    }
  }

  /* cardMovement - смещение карточек вверх и перенос первой карточки в конец очереди при смещении за пределы viewport */
  function cardMovement() {
    setCardPosition(cardItems)

    let height = cardItems[0].offsetHeight + h;

    for (const item of cardItems) {
      item.style.top = item.offsetTop - height + 'px';
      item.style.transition = `top ${timeToScrolling}s linear`;
    }

    let firstItem = cardItems[0];
    let heightCards = 0;

    interval = setTimeout(() => {
      firstItem.remove();
      for (let i = 0; i < cardItems.length; i++) {
        heightCards += cardItems[i].offsetHeight + h;
      }
      firstItem.style.top = heightCards + 'px';
      wrap.appendChild(firstItem);
      cardMovement();
    }, (timeToScrolling * 1000));
  }
  
  let timeToScrolling = 10; // время в секундах за которое проходит анимация и отрабатывает setTimeout
  
  cardMovement();
}