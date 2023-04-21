const titleShareButtons = document.querySelectorAll(".tile-share-btn")
console.log(titleShareButtons)

const copyText = async (e) => {
    // prevent from going to the website
    e.preventDefault()
    const link =  e.currentTarget.getAttribute("link")
    console.log(link)
    try{
       await navigator.clipboard.writeText(link)
    }catch(err){
        console.error(err)
    }

}

titleShareButtons.forEach(shareButton => 
    shareButton.addEventListener("click", copyText)
);


// // GSAP animations :)
// removing for now

const topShareButton = document.querySelector(".share-button");
const bars = document.querySelectorAll(".bar");
gsap.from(topShareButton, {
  duration: 3,
  x: -600,
  y: () => Math.random() * 400 - 200,
  rotate: 4320,
});
gsap.from(bars, { duration: 2, x: -500, y: 200, rotate: 1080, stagger: 0.25 });


// event for the hamburger menu

const hamburgerMenu = document.querySelector(".hamburger-menu");

// Indicator if hamburger animation is being run or not
let hamburgerAnimationRunning = false;

const hamburgerEvent = () => {
  console.log(hamburgerAnimationRunning);
  if (hamburgerAnimationRunning) {
    return;
  }

  // Putting the hamburger animation indicator on true before running the actual animation
  hamburgerAnimationRunning = true;
  console.log(hamburgerAnimationRunning);
  gsap.from(bars, {
    duration: 1.7,
    opacity: 0,
    x: () => Math.random() * 200 - 400,
    y: () => Math.random() * 400 - 200,
    rotate: 1080,
    stagger: 0.25,
    onComplete: () => (hamburgerAnimationRunning = false),
  });
};
