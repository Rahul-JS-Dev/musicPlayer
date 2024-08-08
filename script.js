const user = document.querySelector("#user");
const password = document.querySelector("#password");
const loginBtn = document.querySelector(".logIn");
const loginDetails = document.querySelector(".loginDetails");

const loginUser = "admin";
const loginPassword = "1234"

loginBtn.addEventListener("click",() => {
    if(user.value === loginUser && password.value === loginPassword){
        window.location.href = "./musicPlayer/musicPlayer.html";
    }else{
        loginDetails.classList.add("loginDetailsActive");
        setTimeout(() => {
            loginDetails.classList.remove("loginDetailsActive")
            console.log("hello world");
        }, 3000);
    }
})
loginBtn.addEventListener("dblclick",() =>{
    window.location.href = "./musicPlayer/musicPlayer.html"
})