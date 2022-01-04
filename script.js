function resturantData () {
    fetch("http://localhost:3000/resturants")
    .then (res => res.json())
    .then (data =>{ data.forEach(renderSteaks)})
}

function renderSteaks (steaks) {
    const resturants = document.querySelector("#logo")
    const logoImage = document.createElement('img')
    logoImage.setAttribute('src', `${steaks.logo}`)
    resturants.appendChild(logoImage)
}


resturantData();