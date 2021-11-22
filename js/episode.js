window.addEventListener("load", function () {
  const section = document.querySelector("#section");
  const remote = section.querySelector("#remote");
  const remote_t = section.querySelector(".remote_t")
  const close = section.querySelector("#close_r");
  const up = section.querySelector("#uppage");
  const down = section.querySelector("#downpage");
  let dragging = false;
  let offset = { x: 0, y: 0 };


  section.onmousedown = function (e) {
    if (e.target === remote_t) {
      dragging = true;
    }
    // 리모컨 삭제
    if (e.target === close) {
      remote.style.display = "none";
    }
    // 페이지 맨 위로 올라가기
    if (e.target === up) {
      document.documentElement.scrollTop = 0;
    }
    // 페이지 맨 아래로 내려가기
    if (e.target === down) {
      document.documentElement.scrollTop = document.body.scrollHeight;
    }
  };

  section.onmousemove = function (e) {
    if (!dragging) return;
    // 리모컨 위치 이동
    let scrollY = document.documentElement.scrollTop;
    remote.style.left = e.pageX - offset.x + "px";
    remote.style.top = e.pageY - scrollY - offset.y + "px";
  };

  section.onmouseup = function (e) {
    dragging = false;
  };

  // 마우스 현재 위치 확인
  remote.onmousedown = function (e) {
    offset.x = e.offsetX;
    offset.y = e.offsetY;
  };
});


