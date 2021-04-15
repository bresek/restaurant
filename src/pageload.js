
const pageLoad = () => {
    const content = document.querySelector("#content")
    const nav = document.createElement('div')
    nav.setAttribute('id','nav')
    nav.innerHTML = '<h1>A Restaurant</h1><ul> <li>Home</li> <li>Menu</li><li>Contact</li> </ul>'
    content.appendChild(nav)

}

export {pageLoad}