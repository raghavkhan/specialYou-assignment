const form_login = document.querySelector(".form-login");
const form_signIn = document.querySelector(".form-signIn");

const login_link = document.querySelector(".login-link");
const signIn_link = document.querySelector(".signIn-link");

login_link.addEventListener('click',()=>{
form_login.classList.remove('hidden');
form_signIn.classList.add('hidden');
});

signIn_link.addEventListener('click',()=>{
    form_login.classList.add('hidden');
    form_signIn.classList.remove('hidden');
    });
    

console.log('raghav');