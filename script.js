function resturantData () {
    fetch("http://localhost:3000/resturants")
    .then (res => res.json())
    .then (data =>{
        data.forEach(renderSteaks)
        likeAndDislikeButton(data)
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
        percentage.innerText = `Percentage of people who like this: ${Math.floor(parseFloat(percentageNumber))}%`
    })
}
function totalLikes(obj){
    obj.total = obj.likes + obj.dislikes
    obj.likesPercentage = obj.likes*100/obj.total
    const percentage = document.querySelector("#percentage")
    percentage.innerText = obj.likesPercentage
    return obj.likesPercentage
}
function likeAndDislikeButton(array){
    const likeButton = document.querySelector('#like-button')
    const dislikeButton = document.querySelector('#dislike-button')
    const name = document.querySelector('.name')
    likeButton.style.opacity= .5
    dislikeButton.style.opacity= .5
    likeButton.addEventListener('click', () =>{
        for(item of array){
            if(item.name === name.innerText){
                item.likes++
                likeButton.style.opacity= 1
                likeButton.style.border= '10px solid green'
                setInterval(() => {
                    likeButton.style.opacity= .5
                    likeButton.style.border= '0px solid green'
                }
                , 4000)
                return item.likes
            }
        }
    })
    dislikeButton.addEventListener('click', ()=>{
        for(item of array){
            if(item.name === name.innerText){
                item.dislikes++
                dislikeButton.style.opacity= 1
                dislikeButton.style.border= '10px solid red'
                setInterval(() => {
                    dislikeButton.style.opacity= .5
                    dislikeButton.style.border= '0px solid red'
                }
                , 1500)
                return item.dislikes
            }
        }
    })
}
resturantData();