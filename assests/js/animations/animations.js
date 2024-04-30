const list = document.querySelectorAll(".list");

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

gsap.registerPlugin(ScrollTrigger);

const animations = [
  { target: ".navbar", props: { opacity: 1 }, start: "top top" },
  {
    target: ".card-service",
    props: { x: 800, opacity: 0, rotateZ: 0 },
    start: "-1000vh",
    end: "-600vh",
  },
  {
    target: ".card-practiceArea-content",
    props: { opacity: 0, y: 50 },
    start: "-1200vh",
  },
  {
    target: ".about-section .img-wrapper",
    props: { opacity: 0, x: -800 },
    start: "-1200vh",
  },
  {
    target: ".about-section .about-content",
    props: { opacity: 0, x: 800 },
    start: "-1300vh",
  },
  {
    target: ".card-practiceArea",
    props: { opacity: 0, y: 50 },
    start: "-1300vh",
  },
  
  { target: ".attorneys-section  h2", props: { opacity: 0, y: 100 }, start: "-1600vh" },
  { target: ".lawyer-card", props: { opacity: 0, y: -100 }, start: "-1600vh" },
  { target: "footer", props: { opacity: 0, y: 200 }, start: "-1600vh" },
  




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


const animationsTo = [
{
    target: ".content h1",
    props: { x: -400, opacity: 1, rotateZ: 0 },
    start: "-100vh",
  },
  {
    target: ".content p",
    props: { x: 400, opacity: 1, rotateZ: 0 },
    start: "-100vh",
  },
  {
    target: ".content a",
    props: { y: -20, opacity: 1, rotateZ: 0 },
    start: "-100vh",
  }
]
animationsTo.forEach((animation) => {
  gsap.to(animation.target, {
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


// const timeline = gsap.timeline({ defaults: { duration: 1 } });
// timeline
//   .from(".navbar", { y: "-100%", ease: "none" })
//   .from(".content h1", { x: "-800", ease: "none" })
//   .from(".content p", { x: "800", ease: "none" })
//   .from(".img-wrapper-robot", { y: "-100%", ease: "bounce" })
