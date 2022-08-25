import { renderCard } from '../js/renderCard';

const itemEl = document.querySelector('.card__item');
itemEl.setAttribute('data-popup-modal-open', '');

const refs = {
    openPopupModalBtn: document.querySelector('[data-popup-modal-open]'),
    сlosePopupModalBtn: document.querySelector('[data-popup-modal-close]'),
    popupModal: document.querySelector('[data-popup-modal]'),
  };

  console.log(refs.openPopupModalBtn);

  refs.openPopupModalBtn.addEventListener('click', onOpenPopup);
  refs.closePopupModalBtn.addEventListener('click', onClosePopup);
  refs.popupModal.addEventListener('click', popupModalClick)
  
  function onOpenPopup() {
  refs.popupModal.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);
  }
  
  function onClosePopup() {
  refs.popupModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);
  }
  
  function popupModalClick(event) {
  if (event.target.classList.contains('popup__body--close')) {
  onClosePopup(); 
  }
  }
  
  function onPressESC(event) {
  if (event.keyCode === 27) {
      onClosePopup(); 
  }
  }
  