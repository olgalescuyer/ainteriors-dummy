const countDownDate = new Date('Oct 1, 2023 15:00:00').getTime();

// console.log(countDownDate);

const update = setInterval(() => {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML =
    days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (distance < 0) {
    clearInterval(update);
    document.getElementById('timer').innerHTML = 'EXPIRED';
  }
}, 1000);
