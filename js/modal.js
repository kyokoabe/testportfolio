const mask = document.querySelector('#mask');
const modal = document.querySelector('#modal');
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector("#close-btn");
       
modalBtn.addEventListener('click', () => {
  mask.classList.add('appear');
  modal.classList.add('appear');
});
        
mask.addEventListener('click', () => {
  mask.classList.remove('appear');
  modal.classList.remove('appear');
});
    
closeBtn.addEventListener('click', () => {
  mask.classList.remove('appear');
  modal.classList.remove('appear');
});