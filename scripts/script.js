const galeryPhoto = document.querySelector('.galery__photo');
const galeryLeftArrow = document.querySelector('.galery__left-arrow');
const galeryRightArrow = document.querySelector('.galery__right-arrow');
const newsPointer = document.querySelectorAll('.news__pointer');
const newsText = document.querySelector('.news__text');
const active = document.querySelector('.active');
const newsButton = document.querySelector('.news__button');
const subscribeButton = document.querySelector('.subscribe__button');
const mobileMenuButton = document.querySelector('.header__open-menu');

let nameIn = document.querySelector('.subscribe__name');
let surname = document.querySelector('.subscribe__surname');
let email = document.querySelector('.subscribe__email');

const photos = [
  {
    name: 'фото авто на дороге',
    link: './images/galery.png'
  },
  {
    name: 'лобовое стекло',
    link: './images/galery1.png'
  },
  {
    name: 'салон',
    link: './images/galery2.png'},
];

const news = [
  {
    text: '<span class="news__text-span">Drive.ru: </span>Вэн Volkswagen e-Bulli скрестил классику с современной техникой.',
    link: 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html'
  },
  {
    text: '<span class="news__text-span">Engadget: </span>VW’s e-BULLI concept shows how your classic van can become an EV.</p>',
    link: 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html'
  }
];

galeryLeftArrow.addEventListener('click', pastPicture);
galeryRightArrow.addEventListener('click', nextPicture);
newsPointer[0].addEventListener('click', setActive);
newsPointer[1].addEventListener('click', setActive);
newsButton.addEventListener('click', openWeb);
subscribeButton.addEventListener('click', subscribe);
mobileMenuButton.addEventListener('click', openMenu);
nameIn.addEventListener('input', check);
surname.addEventListener('input', check);
email.addEventListener('input', check);

function pastPicture() {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].name === galeryPhoto.alt) {
      if (i === 0) {
        i = photos.length
      }
      galeryPhoto.src = photos[i-1].link;
      galeryPhoto.alt = photos[i-1].name;
    }
  }
}

function nextPicture() {
  for (let i = 0; i < photos.length; i++) {
    if (photos[i].name === galeryPhoto.alt) {
      if (i === photos.length - 1) {
        i = 0;
        galeryPhoto.src = photos[i].link;
        galeryPhoto.alt = photos[i].name;
      } else {
        galeryPhoto.src = photos[i+1].link;
        galeryPhoto.alt = photos[i+1].name;
        return
      }
    }
  }
}

function setActive() {
  if (newsPointer[0].classList.contains('active')) {
    newsPointer[0].classList.toggle('active');
    newsPointer[1].classList.toggle('active');
    newsText.innerHTML = news[0].text;
  } else if (newsPointer[1].classList.contains('active')) {
    newsPointer[0].classList.toggle('active');
    newsPointer[1].classList.toggle('active');
    newsText.innerHTML = news[1].text;
  }
}

function openWeb() {
  if (newsPointer[0].classList.contains('active')) {
    window.open(news[1].link);
  } else if (newsPointer[1].classList.contains('active')) {
    window.open(news[0].link);
  }
}

function subscribe() {
  check();
}

function check() {
  if (nameIn.value != '' && surname.value != '' && email.value != '') {
  subscribeButton.textContent = 'Готово!';
  } else {
  subscribeButton.textContent = 'Подписка';
  }
  console.log(subscribeButton)
}

function openMenu() {
  const logo = document.querySelector('.header__logo');
  const menu = document.querySelector('.menu')
  const header = document.querySelector('.header')
  if (mobileMenuButton.classList.value ===  'header__open-menu')
  {
    mobileMenuButton.classList.add('header__open-menu-active');
    mobileMenuButton.classList.remove('header__open-menu'); 
    logo.style.display = 'none'
    menu.style.display = 'block'
    header.style.justifyContent = 'flex-start'
  } else {
    mobileMenuButton.classList.add('header__open-menu');
    mobileMenuButton.classList.remove('header__open-menu-active'); 
    logo.style.display = 'block'
    menu.style.display = 'none'
    header.style.justifyContent = 'center'
  }
}