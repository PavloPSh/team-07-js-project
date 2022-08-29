const refs = {
  openModalBtn: document.querySelector('[data-modal-open-registration]'),
  closeModalBtn: document.querySelector('[data-modal-close-registration]'),
  backdrop: document.querySelector('.backdrop__reg-modal'),
  formEL: document.querySelector('.form__field'),
  logInSwitcher: document.querySelector('[data-open-signup]'),
  signUpSwitcher: document.querySelector('[data-open-login]'),
  logInSwitcherText: document.querySelector('.modal-reg__switch-text--to-sign'),
  signUpSwitcherText: document.querySelector('.modal-reg__switch-text--to-log'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onClickBackdrop);
refs.logInSwitcher.addEventListener('click', onLogInSwitcherClick);
refs.signUpSwitcher?.addEventListener('click', onSignUpSwitcherClick);

function onOpenModal() {
  refs.backdrop.classList.remove('is-hidden');
  window.addEventListener('keydown', onPressESC);
}

function onCloseModal() {
  refs.backdrop.classList.add('is-hidden');
  window.removeEventListener('keydown', onPressESC);
}

function onClickBackdrop(e) {
  if (e.target.classList.contains('js-close-modal')) {
    onCloseModal();
  }
}

function onPressESC(e) {
  if (e.keyCode === 27) {
    onCloseModal();
  }
}

function onLogInSwitcherClick() {
  refs.logInSwitcherText.classList.toggle('visually-hidden');
  refs.signUpSwitcherText.classList.toggle('visually-hidden');
  refs.formEL.innerHTML =
    '<div class="form__field"><label for="email" class="form__label">Email</label><input type="email" name="email" id="email" class="form__input" /></div><div class="form__field"><label for="password" class="form__label">Password</label><input type="password" name="email" id="password" class="form__input"/></div><button class="reg-btn reg-btn__submit" type="submit">Log in</button>';
}

function onSignUpSwitcherClick() {
  refs.logInSwitcherText.classList.toggle('visually-hidden');
  refs.signUpSwitcherText.classList.toggle('visually-hidden');
  refs.formEL.innerHTML =
    '<div class="form__field"><label for="name" class="form__label">Name</label><input type="text" name="name" id="name" class="form__input" /></div><div class="form__field"><label for="email" class="form__label">Email</label><input type="email" name="email" id="email" class="form__input" /></div><div class="form__field"><label for="password" class="form__label">Password</label><input type="password" name="email" id="password" class="form__input"/></div><button class="reg-btn reg-btn__submit" type="submit">Sign up</button>';
}
