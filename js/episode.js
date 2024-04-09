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
// 댓글창 구현

function clickbutton() {
  const insertbar = document.querySelector("#commentinput");
  const comments = document.querySelector("#comments");
  const commentcount = document.querySelector('#count');

  function timeset() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const dates = date.getDate();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const time = year + '-' + month + '-' + dates + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

  function makeid() {
    let alphabet = 'abcdef123456';
    let getid = '';
    for (let i = 0; i < 8; i++) {
      let index = Math.floor(Math.random(10) * alphabet.length);
      getid += alphabet[index];
    }
    return getid;
  }

  function printcomment(comment) {
    const name = document.createElement('div');
    const somethinginput = document.createElement('span');
    const printtime = document.createElement('div');
    const numberofspan = document.createElement('span');
    const commentList = document.createElement('div');
    const deletebutton = document.createElement('button');
    deletebutton.className = "deleteComment";
    deletebutton.innerHTML = "삭제";
    commentList.className = "acomment";
    name.className = "name";
    somethinginput.className = "somethinginput";
    printtime.className = "time";
    name.innerHTML = makeid();
    name.appendChild(deletebutton);
    somethinginput.innerText = comment;
    printtime.innerHTML = timeset();
    numberofspan.innerHTML = 0;
    commentList.appendChild(name);
    commentList.appendChild(somethinginput);
    commentList.appendChild(printtime);
    comments.prepend(commentList);
    deletebutton.addEventListener("click", deleteComments);
  }

  function deleteComments(event) {
    const deletebutton = event.target;
    const list = deletebutton.parentNode.parentNode;
    comments.removeChild(list);

    if (commentcount.innerHTML <= '0') {
      commentcount.innerHTML = 0;
    } else {
      commentcount.innerHTML--;
    }
  }


  const nowvalue = insertbar.value;
  if (!nowvalue.length) {
    alert("댓글을 입력해주세요!!");
  } else {
    printcomment(nowvalue);
    commentcount.innerHTML++;
    insertbar.value = '';
  }
}
