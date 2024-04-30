const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline
    .from(".profile", { x: "-800", ease: "none" })
    .from(".overview-data", { x: "-800", ease: "bounce" })
  