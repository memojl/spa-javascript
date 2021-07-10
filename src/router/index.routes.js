import {pages} from '../controllers/index';

let content = document.getElementById('main');
const router = async (route) =>{//console.log(route);
    content.innerHTML = '';
    switch (route) {
        case '#/':
            return content.appendChild(pages.home()); //console.log('Home');
        break;
        case '#/products':
            return content.appendChild(pages.products()); //console.log('Products');
        break;
        case '#/blog':
            return content.appendChild(await pages.blog()); //console.log('Blog');
        break;
        default:
            return content.appendChild(pages.nopage()); //console.log('404!');
        break;
    }
};

export {router};