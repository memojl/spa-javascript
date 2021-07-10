import views from '../views/home.html';

export default ()=>{    
    const divElement = document.createElement('div');
    divElement.innerHTML = views; 
    
    
    let btnClick = divElement.querySelector('#btnClick');
    btnClick.addEventListener('click',()=>{
        alert('Boton Aceptar!');
    });


    return divElement;
};
