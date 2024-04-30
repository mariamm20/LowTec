const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline
.from(".headline-div h1", { x: "-800", ease: "none" })
.from(".headline-div p", { y: "50", ease: "none" })

    