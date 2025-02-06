function handleMouseEnter() {
  this.classList.add('card--hovered');
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('card--hovered');
  document.body.id = '';
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('card');
  
  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }

  // animação de carroussel no menu de nomes  
  document.querySelectorAll('.menu__item a').forEach(link => {
    link.addEventListener('click', function (event){
      event.preventDefault();
      const linkText = this.textContent.trim();

      let selectedId;
      if(linkText === 'Tobey Maguire') selectedId = '1';
      if(linkText === 'Tom Holland') selectedId = '2';
      if(linkText === 'Andrew Garfield') selectedId = '3';

      if (selectedId) {
        const button = document.getElementById(selectedId);
        selectCarouselItem(button);
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function selectCarouselItem(selectedButtonElement) {
  const selectedItem = selectedButtonElement.id;
  const carousel = document.querySelector('.cards-carousel');
  const transform = carousel.style.transform;
  const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
  const rotateYDeg = -120 * (Number(selectedItem) - 1);
  const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);

  carousel.style.transform = newTransform;

  const activeButtonElement = document.querySelector('.controller__button--active');
  activeButtonElement.classList.remove('controller__button--active');
  selectedButtonElement.classList.add('controller__button--active');
}