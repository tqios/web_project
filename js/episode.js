// 다중 이벤트 등록 , 상시대기
window.addEventListener("load", function () {
  const section = document.querySelector("#section"); //리모컨이 움직일 수 있는 공간
  const remote = section.querySelector("#remote"); //remote id를 가진 table
  const remote_t = section.querySelector(".remote_t") //리모컨에서 '리모컨' th
  const close = section.querySelector("#close_r");  //리모컨에서 'X' span
  const up = section.querySelector("#uppage");  //리모컨에서 '맨위로' span
  const down = section.querySelector("#downpage");  //리모컨에서 '아래로' span
  let dragging = false; //클릭하고 있으면 true, 안하고 있으면 false
  let offset = { x: 0, y: 0 }; //페이지에서 클릭한 x,y좌표


  section.onmousedown = function (e) {
    // 클릭한 곳이 리모컨의 title 영역이면 dragging true 
    if (e.target === remote_t) {
      dragging = true;
    }

    //클릭한 곳이 close(X) 표시의 영역이면 
    // 리모컨 삭제
    if (e.target === close) {
      remote.style.display = "none";
    }
    // 클릭한 곳이 up의 영역이면
    // 페이지 맨 위로 올라가기
    if (e.target === up) {
      document.documentElement.scrollTop = 0;
    }
    // 클릭한 곳이 dowm의 영역이면
    // 페이지 맨 아래로 내려가기
    if (e.target === down) {
      document.documentElement.scrollTop = document.body.scrollHeight;
    }
  };

  section.onmousemove = function (e) {
    if (!dragging) return;
    // 리모컨 위치 이동
    let scrollY = document.documentElement.scrollTop;
    // 현재 페이지의 스크롤한 Y값을 받아온다
    remote.style.left = e.pageX - offset.x + "px";
    // 페이지에서 현재 리모컨의 위치 - 리모컨 안에서 커서의 위치로 이동
    remote.style.top = e.pageY - scrollY - offset.y + "px";
    // 현재 보이는 창에서 움직여야 하므로 스크롤한 값을 받아와야 한다
    // 페이지에서 현재 리모컨의 위치 - 스크롤한 값 - 리모컨 안에서 커서의 위치로 이동
  };

  // 마우스 커서가 떼어지면 dragging을 false로 설정
  section.onmouseup = function (e) {
    dragging = false;
  };

  // remote에서 마우스 현재 위치 확인
  remote.onmousedown = function (e) {
    offset.x = e.offsetX;
    offset.y = e.offsetY;
  };
});


