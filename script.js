const user = document.querySelector("#user");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".logIn");

const loginUser = "admin";
const loginPassword = "1234"

loginBtn.addEventListener("click",() => {
    if(user.value === loginUser && password.value === loginPassword){
        window.location.href = "./musicPlayer/musicPlayer.html";
    }else{
        console.log("login Failed");
    }
})
loginBtn.addEventListener("dblclick",() =>{
    window.location.href = "./musicPlayer/musicPlayer.html"
})