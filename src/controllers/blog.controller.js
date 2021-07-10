import views from '../views/blog.html';

const getPosts = async ()=>{
 const response = await fetch('https://jsonplaceholder.typicode.com/posts');
 return await response.json();
};

export default async ()=>{    
    const divElement = document.createElement('div');
    divElement.innerHTML = views;

    const post = divElement.querySelector('#posts');
    let total = divElement.querySelector('#total');
    let n = 0;

    const posts = await getPosts();console.log(posts);
    posts.forEach(item => {
        const {id,title,body} = item;
        if(id<=5){n++;
            post.innerHTML += `
            <li class="list-group-item border-primary">
                <h5>${title}</h5>
                <p>${body}</p>
            </li>`            
        }
    });
    total.innerHTML = n;

    return divElement;
};
