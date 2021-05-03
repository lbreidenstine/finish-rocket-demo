import { gsap } from "gsap";

export let demoThisTL = gsap.timeline();

demoThisTL.to("#space-ship",{duration:0.15, rotation:-10,ease:"none"})
        .to("#space-ship",{duration:0.15, rotation:10, yoyo:true, repeat:10,ease:"none"})
        .to("#space-ship", {rotation: 360, duration: 5, x: 300, scale: 1.5})
        .to("#space-ship",{duration:6, scale: 20, rotation: 180, y:"-=1200", x:"-=900", ease: "power3.in"});