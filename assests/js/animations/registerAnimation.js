const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline
    .from(".register-two", { y:"50%", ease: "none" })
  .from(".right-section", { y: "-800", ease: "none" })
  .from(".right-section input", { y: "-100", ease: "none" })