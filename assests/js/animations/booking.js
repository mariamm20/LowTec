const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline

    .from(".content .about h2", { x: "-800", ease: "none" })
