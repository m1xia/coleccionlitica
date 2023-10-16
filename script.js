const toggler = document.querySelector("#sidebar-close");
toggler.addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("collapsed");
});




let preveiwContainer = document.querySelector('.galeria-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.galeria-container .pieza').forEach(pieza =>{
     pieza.onclick = ()  =>{
          preveiwContainer.style.display = 'flex';
          let name = pieza.getAttribute('data-name');
          previewBox.forEach(pieza =>{
             let target = pieza.getAttribute('data-target');
             if(name == target){
               pieza.classList.add('active');
             }
          });
     };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () => {
     close.classList.remove('active');
       preveiwContainer.style.display = 'none';
};
});







