gsap.from('#box1',{
    scale: 1.5,
    duration: 2
})
gsap.to('#box2',{
    scrollTrigger: {
        trigger: '#box2',
        scroller: 'body',
        markers: true,
        start: 'top 60%',
        end: 'bottom 10%',
        scrub:true
        // pin: true,
        // pinSpacing: true
    },
    duration: 2,
    top: "-100%",
    opacity: 1
})