import { gsap } from "gsap";

gsap.set("#left-eye",{transformOrigin: "center"})
gsap.set("#mouth",{transformOrigin: "center"});

export let demoThisTL = gsap.timeline();

demoThisTL.to("#space-ship",{duration:0.15, rotation:-10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#space-ship", {rotation: 360, duration: 5, x: 300, scale: 1.5})
        .to("#space-ship",{duration:6, scale: 20, rotation: 180, y:"-=1300", x:"-=1000", ease: "power3.in"})
        .to("#moon",{alpha:1, duration:2.5, scale:7, y:"-=700",ease:"none"})
        .to(".moon-things",{duration:2, alpha:1})
        .to("#left-eye",{duration:.25, scaleY:.1})
        .to("#left-eye",{duration:.25, scaleY:1})
        .to("#moon",{duration:.5, rotation:20, x:20})
        .to("#moon",{duration:.5, scale:.1, rotation:-50, x:1000, y:-300});