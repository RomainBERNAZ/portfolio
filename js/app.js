const tl = new TimelineLite();
const prenom = document.getElementById("surname"); 
const nom = document.getElementById("lastname"); 



















tl.from('.webDev', {
    opacity: 0,
    y: 70,
    duration: 2.5,
    delay: 1.5,
    ease: Power2.easeOut,
    stagger: {
        amount: 0.4
    }

})
tl.from('.design', {
    opacity: 0,
    y: 70,
    duration: 2.5,
    delay: -1.5,
    ease: Power2.easeOut,
    stagger: {
        amount: 0.4
    }

})

tl.from('.city', {
    opacity: 0,
    y: 70,
    duration: 2.5,
    delay: -1.5,
    ease: Power2.easeOut,
    stagger: {
        amount: 0.4
    }

})

