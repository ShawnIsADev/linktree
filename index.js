const titleShareButtons = document.querySelectorAll(".tile-share-btn")
console.log(titleShareButtons)

async function copyText(e){
    // prevent from going to the website
    e.preventDefault()
    const link =  this.getAttribute("link")
    console.log(link)
    try{
       await navigator.clipboard.writeText(link)
       alert("You copied! -> " + link)
    }catch(err){
        console.error(err)
    }

}

titleShareButtons.forEach(shareButton => 
    shareButton.addEventListener("click", copyText))


// // GSAP animations :)
// removing for now

const topShareButton = document.querySelector(".share-button")
// const tiles = document.querySelectorAll(".tile")
gsap.from(topShareButton, {duration: 3,x: -600, y: () => Math.random() * 400 - 200, rotate: 4320})
// gsap.from(tiles, {duration: 2, x:-500, y:-200, stagger: 0.25})



