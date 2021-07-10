import views from '../views/404.html';

export default ()=>{    
    const divElement = document.createElement('div');
    divElement.classList = 'text-danger'
    divElement.innerHTML = views;      
    return divElement;
};
