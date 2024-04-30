const timeline = gsap.timeline({ defaults: { duration: 1 } });
timeline

    .from(".singleProduct", { x: "-800", ease: "none" })
    .from(".productDetails", { y: "100", ease: "none" })
    .from(".img-wrapper-robot", { y: "100", ease: "bounce" })
  