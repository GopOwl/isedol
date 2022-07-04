const togglebtn = document.querySelector('.toggle');
const list = document.querySelector('ul');

togglebtn.addEventListener('click', ()=> {
    list.classList.toggle('active');
});