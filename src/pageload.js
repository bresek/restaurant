
const pageLoad = () => {
    const heading = document.querySelector("#heading")
    const nav = document.createElement('div')
    nav.setAttribute('id','nav')
    nav.innerHTML = '<h1 class="Header">A Restaurant</h1><ul> <li>Home</li> <li>Menu</li><li>Contact</li> </ul>'
    heading.appendChild(nav)
}

export {pageLoad}