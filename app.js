const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log("submit");
    
});