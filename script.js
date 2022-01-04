function resturantData () {
    fetch("http://localhost:3000/resturants")
    .then (res => res.json())
    .then (data =>{ 
        data.forEach(renderSteaks)
    })
}

function renderSteaks (obj) {
    const resturants = document.querySelector("#logo")
    const logoImage = document.createElement('img')
    logoImage.setAttribute('src', `${obj.logo}`)
    resturants.appendChild(logoImage)
    logoImage.addEventListener('click', ()=>{
        totalLikes(obj)
        const name =document.querySelector('.name')
        const img =document.querySelector('.detailimg')
        const address = document.querySelector('.address')
        const phoneNumber = document.querySelector('.phone')
        const percentage = document.querySelector('#percentage')
        name.textContent = obj.name
        img.src = obj.image
        address.innerText = obj.address
        phoneNumber.innerText = obj.phoneNumber
        let percentageNumber = obj.likesPercentage
        percentage.innerText = Math.floor(parseFloat(percentageNumber))+"%"

        console.log("click")


    })
}
function totalLikes(obj){
    obj.total = obj.likes + obj.dislikes
    obj.likesPercentage = obj.likes*100/obj.total 
    const percentage = document.querySelector("#percentage")
    percentage.innerText = obj.likesPercentage
    return obj.likesPercentage
    
}



resturantData();