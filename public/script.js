const signUpLink = document.getElementById("signUpLink");
const signInLink = document.getElementById("signInLink");
const signUp = document.getElementById('signUp');
const signIn = document.getElementById('signIn');


signUpLink.addEventListener('click',()=>{
    signIn.style.display = "none";
    signUp.style.display = "flex";
});

signInLink.addEventListener('click',()=>{
    signIn.style.display = "flex";
    signUp.style.display = "none";
});