import Home from './index.controller';
import Products from './products.controller';
import Blog from './blog.controller';
import noPage from './404.controller';

const pages = {
    home: Home,
    products: Products,
    blog: Blog,
    nopage: noPage
};

export {pages};
