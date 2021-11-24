//아이디로 입력받을 데이터를 배열로 정의한다 
const myInfo = {
    id: "hyperclutter",
    password: "11111"
};

//로그인 함수- 아이디와 비밀번호가 일치할 때만 페이지를 이동시키고, 아닐 경우 경고창을 띄운다 
const login = () => {
    const id = document.querySelector('#id');
    const pw = document.querySelector('#pw');

    if (id.value === myInfo.id && pw.value === myInfo.password) {
        location.href = 'myinfo.html'
    }
    else {
        alert("로그인 실패")
    }
}
