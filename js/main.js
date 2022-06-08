const cont1 = document.querySelector('.cont1');

cont1.addEventListener('mouseenter', (ev) => {
        cont1.style.backgroundColor = "lightblue";
        cont1.style.color = 'black';
        cont1.textContent = 'Нажми';
        cont2.textContent = 'Красный';
        cont3.textContent = 'Оранжевый';
        cont2.style = 'default';
        cont3.style = 'default';

});
    
cont1.addEventListener('click', (ev) => {
    cont1.style.backgroundColor = 'black';
    cont1.style.color = 'lightblue';

});

const cont2 = document.querySelector('.cont2');

cont2.addEventListener('mouseenter', (ev) => {
    cont2.style.backgroundColor = 'red';
    cont2.style.color = 'forestgreen';
    cont2.textContent = 'Клац';
    cont1.textContent = 'Берюзовый';
    cont3.textContent = 'Оранжевый';  
    cont1.style = 'default'
    cont3.style = 'default'
});

cont2.addEventListener('click', (ev) => {
    cont2.style.backgroundColor = 'forestgreen'
    cont2.style.color = 'red'


});

const cont3 = document.querySelector('.cont3');

cont3.addEventListener('mouseenter', (ev) => {
    cont3.style.backgroundColor = 'grey';
    cont3.style.color = 'orange';
    cont3.textContent = 'Тыц' ;
    cont2.style = 'dafault';
    cont2.textContent = 'Красный';  
    cont1.textContent = 'Берюзовый';
    
    
});

cont3.addEventListener('click', (ev) => {
    cont3.style.backgroundColor = 'orange';
    cont3.style.color = 'grey'
  
  
  
});




console.log(cont1);

// var div = document.getElementById("cont1");
// div.onmouseover = function(){
//  this.setAttribute("style","background-color:red;");
// }
