export const renderMenu = () =>{
    const content = document.querySelector('#content')
    const menu = document.createElement('div')
    menu.setAttribute('class','contentBody')
    menu.innerHTML = "<h1>Menu</h1><ul><li>Chicken</li><li>Bresaola hamburger beef spare pastrami porchetta tail tip belly corned bresaola round boudin beef.</li> <li>Ball bone sausage turkey drumstick turducken tri tip meatloaf chicken.</li> <li>Short cow rump ball pancetta pastrami turkey ribeye round chicken t mignon landjaeger.</li> <li>Fatback tip ham capicola andouille pork corned chop cupim jowl.</li></ul>"
    content.appendChild(menu)
    menu.classList.add('menu')

}






