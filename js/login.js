const myInfo = {
    id: "hyperclutter",
    password: "11111"
};


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
