gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);
// const fire = document.querySelectorAll(".fire");
const svgs = document.querySelectorAll("svg");
const texts = document.querySelectorAll(".text");

function heart() {
   const tl = gsap.timeline();
   tl.from(svgs[0], {
      x: "40vw",
      duration: 1,
   })
      .to(".heart", {
         scale: 1.2,
         transformOrigin: "center",
         duration: 0.8,
         repeat: 3,
         yoyo: true,
      })
      .to(texts[0], {
         opacity: 0,
      })
      .to(svgs[0], {
         visibility: "hidden",
      });
   return tl;
}

function fire() {
   const tl = gsap.timeline();

   tl.to(
      texts[1],
      {
         opacity: 1,
         y: -30,
         duration: 0.5,
      },
      0,
   )
      .from(
         svgs[1],
         {
            x: "40vw",
            duration: 0.5,
         },
         0.5,
      )
      .fromTo(
         ".fire",
         {
            y: 60,
         },
         {
            y: -110,
            opacity: 0.4,
            duration: 1,
            repeat: 3,
            stagger: 0.1,
         },
         0,
      )
      .from(
         ".fire1",
         {
            opacity: 0.8,
            duration: 1,
            repeat: 5,
         },
         0,
      )
      .to(svgs[1], {
         visibility: "hidden",
      })
      .to(texts[1], {
         opacity: 0,
      });
   return tl;
}
function tree() {
   const tl = gsap.timeline();

   tl.to(
      texts[2],
      {
         opacity: 1,
         y: -30,
         duration: 0.5,
      },
      0,
   )
      .from(svgs[2], {
         x: "40vw",
         duration: 0.5,
      })
      .fromTo(
         ".cloud",
         {
            x: 150,
         },
         {
            x: -300,
            duration: 3,
         },
      );
   return tl;
}

const tlMaster = gsap.timeline();

tlMaster.add(heart()).add(fire()).add(tree());

ScrollTrigger.create({
   animation: tlMaster,
   trigger: ".section",
   start: "top 5%",
   end: "400% 80%",
   markers: true,
   scrub: 3,
   pin: true,
});
// commit
