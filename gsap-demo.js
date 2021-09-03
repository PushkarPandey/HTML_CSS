//gsap.set(".my-name", {transformOrigin: "50% 50%"});

//gsap.to(".my-name",{duration: 4, y:300, backgroundColor: "#560563", borderRadius: "30%",
//border: "5px solid black", ease: "elastic"});

var tl = gsap.timeline();

tl.from(".first-name", {duration: 2, opacity: 0,scale: 0.3, ease: "back"});
tl.to(".first-name", {duration: 2, rotation: 360, repeat: -1,ease: "linear"});