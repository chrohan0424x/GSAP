//this is time line
//persorms one by one
var tl = gsap.timeline();

tl
.from(".header",{
    opacity: 0,
    duration:1,
    y:-50
})

//persorms group wise
gsap.from(['.left'],{
    opacity: 0,
    x:-100,
    duration: 0.5
})
gsap.from('.center',{
    opacity: 0,
    x:-40,
    duration: 0.5,
    delay: 0.2
})
gsap.from('.right',{
    opacity: 0,
    x:-80,
    duration: 0.5,
    delay: 0.3
})

//for single element

// .from('.center',{
//     opacity: 0,
//     y:100,
//     duration: 1
// })

// .to('.center',{
//     opacity: 0,
//     y:100,
//     duration: 1
// })

//we can also create array of elements like this 

// gsap.from(['.elm1','.elm2','#elm3','.elm tag'],{
//     opacity: 0,
//     x: 0,
//     y: 0,
//     scale: 0.3,
//     duration: 1,
//     delay: 1
// })
