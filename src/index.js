import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss';
import { router } from './router/index.routes';

console.log('Se inicio Javascript');
router(window.location.hash);
window.addEventListener('hashchange', ()=>{
    router(window.location.hash);
});
