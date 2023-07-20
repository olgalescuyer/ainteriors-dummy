// countdown timer management system:
const countDownDate = new Date('Oct 1, 2023 15:00:00').getTime();

const update = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    'timer'
  ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(update);
    document.getElementById('timer').innerHTML = 'EXPIRED';
  }
}, 1000);

// modal management system:
const modal = document.getElementById('modal');
const modalOpenBtn = document.getElementById('modal-open');
const modalCloseBtn = document.getElementById('modal-close');

const links = document.querySelectorAll('ul.modal__links > li');
const content = document.querySelector('.content-wrapper');

// --aria attributes mangagement system:
const changeAttributes = () => {
  //--- to change the button aria attrubute:
  let value = document
    .querySelector('[aria-expanded]')
    ?.getAttribute('aria-expanded');
  value === 'true' ? (value = 'false') : (value = 'true');
  document
    .querySelector('[aria-expanded]')
    .setAttribute('aria-expanded', value);

  // ---to change the modal aria attrubute:
  let valueModal = document.querySelector('#modal').getAttribute('aria-hidden');
  valueModal === 'true' ? (valueModal = 'false') : (valueModal = 'true');
  document.querySelector('#modal').setAttribute('aria-hidden', valueModal);
};

const open = (e) => {
  e.preventDefault();
  modal.classList.add('modal--open');

  content.classList.add('hide');

  links.forEach((el) => {
    el.classList.add('show');
  });

  changeAttributes();
};

const close = (e) => {
  e.preventDefault();
  modal.classList.remove('modal--open');

  content.classList.remove('hide');
  content.classList.add('show');
  setTimeout(() => content.classList.remove('show'), 2000);

  links.forEach((el) => {
    el.classList.remove('show');
    el.classList.add('hide');
    setTimeout(() => el.classList.remove('hide'), 2000);
  });

  changeAttributes();
};

modalOpenBtn.addEventListener('click', open);
modalCloseBtn.addEventListener('click', close);
