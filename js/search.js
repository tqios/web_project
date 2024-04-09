// 검색 필터 구현
function filter() {
        let search = document.getElementById("search").value.toLowerCase(); // search에 있는 문자열을 소문자로 변환(영어의 경우)하여 search라는 변수에 저장
        let listInner = document.getElementsByClassName("listInner"); // html의 listinner라는 class를 가져와서 listinner라는 변수에 저장

        for (let i = 0; i < listInner.length; i++) { // 
          names = listInner[i].getElementsByClassName("names"); // names라는 변수에 listinner의 [i]에 html의 class= "names"를 받아옴
          writer = listInner[i].getElementsByClassName("writer"); // wrtier라는 변수에 listinner의 [i]에 html의 class="wrtier"을 받아옴
          if (names[0].innerHTML.toLowerCase().indexOf(search) != -1 || // names안의 받아온 문자열을 search에 넣어 검색
            writer[0].innerHTML.toLowerCase().indexOf(search) != -1 // writer안의 받아온 문자열을 search에 넣어 검색
          ) {
            listInner[i].style.display = "flex" // -1이 아닐경우 display = "flex"로 출력
          } else {
            listInner[i].style.display = "none" // -1일 경우 display = "none"으로 출력
          }
        }
      }
