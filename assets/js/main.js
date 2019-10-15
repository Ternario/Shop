let cartCounter = 0;
let cartPrice = 0;
let cartCounterLabel = document.querySelector('#cart-counter');
let buttonsContainer = document.querySelector('.page-content');

let btnClickHandler = (e) => {
  let target = e.target;

  if (target.classList.contains('item-actions__cart')) {

    cartCounterLabel.innerHTML = `${++cartCounter}` ;
    if (cartCounter === 1) cartCounterLabel.style.display = 'block';

    const mockData = target.parentElement.previousElementSibling.innerHTML;
    const restoreHTML = target.innerHTML;

    cartPrice += Math.round(+mockData.replace(/^\$(\d+)\s\D+(\d+).*$/gu, '$1.$2') * 100) / 100;

    target.innerHTML = `Added ${cartPrice.toFixed(2)} $`;

    buttonsContainer.removeEventListener('click', btnClickHandler);

    setTimeout(() => {
      target.innerHTML = restoreHTML;
      buttonsContainer.addEventListener('click', btnClickHandler);
    }, 2000);   
  } 
};

buttonsContainer.addEventListener('click', btnClickHandler);


