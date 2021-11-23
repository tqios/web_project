function slidestart() {

  const slides = document.querySelector('.slides');
  const Content = document.querySelector('.minislides');
  const nowsliders = slides.getElementsByClassName('slidemain');
  const minislides = Content.getElementsByClassName('slidemini');

  const startslide = nowsliders[0];
  const msstart = minislides[0];
  startslide.classList.add('ontheSlide');
  msstart.classList.add('ontheminislides');

}

slidestart();

const change = setInterval(sliderGo, 3000);
function sliderGo() {

  const nowslide = document.querySelector('.ontheSlide');
  const nowms = document.querySelector('.ontheminislides');
  nowslide.classList.remove('ontheSlide');
  nowms.classList.remove('ontheminislides');

  if (!nowslide.nextSibling) {

    nowsliders[0].classList.toggle('ontheSlide');
    minislides[0].classList.toggle('ontheminislides');

  }

  else {

    nowslide.nextElementSibling.classList.add('ontheSlide');
    nowms.nextElementSibling.classList.add('ontheminislides');

  }

}