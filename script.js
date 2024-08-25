gsap.from(".info-box h1", {
    x: -1000,
    opacity: 0,
    duration: 1.5,
    delay: 1,
    stagger:1,
})
gsap.from(".info-box p", {
    y: 1000,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger:.7,
})
