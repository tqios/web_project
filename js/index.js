function sliderOn () {

  const slides = document.querySelector('.slides'); // 큰 슬라이드 클래스 요소 찾기
  const Content = document.querySelector('.Minislide'); // 미니 슬라이드 클래스 요소 찾기
  const item = slides.getElementsByClassName('slide_item'); // 큰 슬라이드 포함 요소 찾기
  const minislide = Content.getElementsByClassName('minislide_item'); // 미니 슬라이드 포함 요소 찾기
  
  const msfirst = item[0]; // 첫번째 슬라이드
  const slidefirst = minislide[0]; // 첫번째 미니 슬라이드
  msfirst.classList.add('ontheSlide'); //첫번째 슬라이드에 ontheSlide 클래스 추가
  slidefirst.classList.add('ontheMinislide'); // 첫번째 미니 슬라이드에 ontheMinislide 클래스 추가
  const starts = setInterval(sliderstart, 3000); // 3초마다 sliderstart 실행돼서 슬라이드 넘어 가기

  function sliderstart () {
         
    const nowItem = document.querySelector('.ontheSlide'); // 지금 위치한 슬라이드 감지
    const nowminislides = document.querySelector('.ontheMinislide'); // 지금 위치한 미니 슬라이드 감지
    nowItem.classList.remove('ontheSlide') // 지금 위치한 슬라이드 아이템 요소 삭제
    nowminislides.classList.remove('ontheMinislide') // 현재 활성화된 썸네일 아이템 요소 삭제
 
   if (!nowItem.nextElementSibling) { // 마지막 슬라이드일 경우

      item[0].classList.add('ontheSlide') //첫번째 슬라이드로 돌아감 
      minislide[0].classList.add('ontheMinislide') // 첫번째 미니 슬라이드로 돌아감

     }   

    else { // 그 외의 경우

      nowItem.nextElementSibling.classList.add('ontheSlide') //다음 슬라이드 실행
      nowminislides.nextElementSibling.classList.add('ontheMinislide') //다음 미니 슬라이드 실행

      }

   }

 }
 
 sliderOn();

 