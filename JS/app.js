let btnMenu = document.querySelector('.boton-menu');
let menu = document.querySelector('.lista-contenedor');
let containerMenu = document.querySelector('.menu');
//let enlaces = document.querySelectorAll('lista li a');
//let goTop = document.querySelector('.go-top');
let activador = true;
//let prevScrollPos = window.pageYOffset;//devuelve en pixeles el tamano de la ventana cmpleta


btnMenu.addEventListener('click', (event) => {

    //Icon X
    document.querySelector('.boton-menu i').classList.toggle('fa-times'); 
  
     if(activador){
       menu.style.left = '0%'; 
       menu.style.transition = '0.5s';
    
       activador = false;
     }
     else{
      activador = false;
      menu.style.left = '-100%';
  
      activador = true;
     }
  
  });
  
  // Add class "active"
  let enlaces = document.querySelectorAll('.lists li a');
  
  enlaces.forEach((element) => {
     
    element.addEventListener('click', (event) => {
     enlaces.forEach((link) => {
       link.classList.remove('active');
     });
      event.target.classList.add('active');
  
    });
  
  });
  
  //Scroll Efect
  
   let prevScrollPos = window.pageYOffset;
   let goTop = document.querySelector('.go-top');
  
  window.onscroll = () => {
    
    //Hide & Show - Scroll Menu (Function)
    let currentScrollPos = window.pageYOffset;
  
    if (prevScrollPos > currentScrollPos) {
        containerMenu.style.top = '0px';
        containerMenu.style.transition = '0.5s';
    }else{
        containerMenu.style.top = '-60px';
        containerMenu.style.transition = '0.5s';
    }
    prevScrollPos = currentScrollPos;
    
    //Scoll Menu & Go Top & See Down (Styles)
    let arriba = window.pageYOffset;
  
    //Conditions
    if(arriba <= 600){
        containerMenu.style.borderBottom = 'none';
  
      //Ocultar Go Top
      goTop.style.right = '-100px';
    }else{
        containerMenu.style.borderBottom = '3px solid #ff2e63';
  
      //Mostrar Go Top
      goTop.style.right = '0px';
      goTop.style.transition='0.5s';
    }
    
  }

  goTop.addEventListener('click', ()=>{
    document.body.scrollTop=0;  //para mac
    document.documentElement.scrollTop=0;
  });

  let verAbajo = document.querySelector('#abajo');

  verAbajo.addEventListener('click', ()=>{
    document.body.scrollTop=600;  //para mac
    document.documentElement.scrollTop=600;
  })
/*
//menu de navegacion
btnMenu.addEventListener('click',()=> {

        document.querySelector('.boton-menu i').classList.toggle('fa-times');  //cambia el icono a X

        if (activador){  //mostrar menu de navegacion
            menu.style.left = "0";
            menu.style.transition= "0.5s";
            activador=false;   //n repeticiones
        }
        else{ //cerrar menu de navegacion
            activador= false;
            menu.style.left='-100%'
            menu.style.transition="0.5s"
            activador= true; //n repeticiones
        }
                                      }
);

//intercalar clase activo
enlaces.forEach ((elemento) => {
        elemento.addEventListener('click',(event)=>{
            enlaces.forEach((link)=>{
                link.classList.remove('activo');
            });     
            event.target.classList.add('activo');       
        });
});

//efectos scroll

window.onscroll = ()=>{
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos){
        containerMenu.style.top="0";
        containerMenu.style.transition="0.5s";
    }
    else{
        containerMenu.style.top="-60px";
        containerMenu.style.transition="0.5s";
    }
    prevScrollPos=currentScrollPos;

    //mostrar y ocultar scroll estilos
    let arriba = window.pageYOffset;

    if (arriba<= 600){
        containerMenu.style.borderBottom = "none";
        goTop.style.rigth="-100%";
    }
    else{
        containerMenu.style.borderBottom = "3px solid #c70039";
        goTop.style.rigth="0";
        goTop.style.transition ="0.5s";
    }
}
*/


