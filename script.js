let wrapper = document.querySelector('.testimonials__wrapper')
let cardItems = wrapper.getElementsByClassName('card');

let i = -1;
let positionCard;

for (const item of cardItems) {
  if(i < 0) {
    positionCard = 0;
  } else {
    positionCard += cardItems[i].offsetHeight + 25
  }

  item.style.top = positionCard + 'px';
  i++;
}

function n() {
  let height = cardItems[0].offsetHeight + 25;

  for (const item of cardItems) {
    item.style.top = item.offsetTop - height + 'px';
  }

  let firstItem = cardItems[0];
  let heightCards = 0;
  setTimeout(() => {
    firstItem.remove();
    for (let i = 0; i < cardItems.length; i++) {
      heightCards += cardItems[i].offsetHeight + 25
    }
    firstItem.style.top = heightCards + 'px';
    wrapper.appendChild(firstItem);
  }, 3400);
}

setInterval(n, 3500)