export const renderContact = () => {
    const content = document.querySelector('#content')
    const contact = document.createElement('div')
    
    const hours = document.createElement('div')
    hours.innerHTML = '<h1>Hours</h1> <p>Monday-Friday: 12pm - 1am</p>'
    contact.setAttribute('class', 'contentBody')
    contact.appendChild(hours)
    const location = document.createElement('div')
    location.classList.add('location')
    hours.classList.add('hours')
    location.innerHTML = '<h1>Location</h1><p>Worcester, Ma</p>'
    contact.appendChild(location)
    content.appendChild(contact);
   

}