const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline
    .from(".upcome", { x: "-800", ease: "none" })
    .from(".important", { x: "-800", ease: "none" })
    .from(".cancel", { x: "-800", ease: "none" })
