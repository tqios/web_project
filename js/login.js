


const login=()=>{
    const id =document.querySelector('#id');
    const pw =document.querySelector('#pw');

    if(id.value ==""||pw.value==""){
        alert("로그인 실패")
    }
    else{
        location.href ='myinfo.html';
    }

}

