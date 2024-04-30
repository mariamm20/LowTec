const timeline = gsap.timeline({ defaults: { duration: .5 } });
timeline

    .from(".headline-div h1", { x: "-800", ease: "none" })
    .from(".headline-div p", { y: "50", ease: "none" })
    .from(".headline-div a", { y: "10", ease: "bounce" })
    .from(".img-wrapper-robot", { y: "-100%", ease: "bounce" })


    const animations = [

        { target: ".title  h2", props: { opacity: 0, y: 100 }, start: "-1900vh" },
        { target: ".lawyer-card", props: { opacity: 0, y: -100 }, start: "-1900vh" },
        { target: "footer", props: { opacity: 0, y: 200 }, start: "-1900vh" }, 
      
      ];

    animations.forEach((animation) => {
        gsap.from(animation.target, {
          ...animation.props,
          scrollTrigger: {
            trigger: animation.target,
            scrub: 2,
            start: animation.start,
            end: animation.end || "center center",
          },
          ease: "none",
        });
      });