import '../styles/index.scss';
import gsap from 'gsap';


function setMechanismAnimation() {
    const tl = gsap.timeline({ease: "power1.out"});
    return tl
        .from("#Line_21", {scale: 0, duration: 1 })
        .from("#Group_186",{scale: 0.4, rotate: 155, opacity: 0, duration: 1, transformOrigin: "50% 50%"})
        .from("#Ellipse_57",{ opacity:0, duration: 1, transformOrigin: "center"}, "-=0.8")
        .from("#Path_133",{scale: 0.6, opacity: 0, rotate: 360, duration: 2, transformOrigin: "center"}, "-=0.8")
        .from("#Path_132",{scale: 0.6, opacity: 0, duration: 0.5, transformOrigin: "center"}, "-=1.3")
        .from("#Ellipse_52",{scale: 0.6, opacity: 0, rotate: -120, duration: 2, transformOrigin: "center"}, "-=1.2")
        .from("#Path_131",{scale: 0.6, opacity: 0, rotate: 90, duration: 2, transformOrigin: "center"}, "-=1.5")
        .from("#Path_123",{scale: 0.6, opacity: 0, duration: 2, transformOrigin: "center"}, "-=2")
        .from("#Path_130",{scale: 0.6, opacity: 0, rotate: -90, duration: 2, transformOrigin: "center"}, "-=2")
        .from("#Path_122",{scale: 0.6, opacity: 0, rotate: 90, duration: 2, transformOrigin: "center"}, "-=2")
        .from("#Path_134",{opacity: 0, rotate: 35, duration: 1, transformOrigin: "227% 56%"}, "-=1")
        .from("#Ellipse_63",{opacity: 0, scale: 0.85, duration: 1, transformOrigin: "center"}, "-=1.2")
        .from("#Group_182",{opacity: 0, x: 100, rotate: -180, duration: 1, transformOrigin: "center"}, "-=1.2")
        .to("#Group_193",{opacity: 0.28, duration: 1, }, "-=1.2");
}

function setInfiniteRotation1() {
    const tl = gsap.timeline({ease: "slow(0.7, 0.7, false)"});
    return tl
        .from("#Path_133", {rotate: "-=360", duration: 10, transformOrigin: "50% 50%", repeat: -1})
        .from("#Ellipse_52", {rotate: "+=360", duration: 20, transformOrigin: "50% 50%", repeat: -1}, 0.5)
        .from("#Path_122", {rotate: "+=360", duration: 35, transformOrigin: "50% 50%", repeat: -1}, 0.6)
        .from("#Group_182", {rotate: "+=360", duration: 30, transformOrigin: "50% 50%", repeat: -1}, 0.7);
}

function setLogoAnimation() {
    const tl = gsap.timeline({ease: "power2.out"});
    return tl
        .from("#Asset_20-4", {opacity: 0, y: 80, duration: 1})
        .from("#Asset_20-5", {opacity: 0, y: -200, duration: 1}, "-=1")
        .from("#Asset_20-6", {opacity: 0, x: 200, duration: 1}, "-=1");
}

function setCompanyNameAnimation() {
    const tl = gsap.timeline({ease: "power2.out"});
    return tl
        .from(".company-name", {opacity: 0, y: -50, duration: 1})
        .from(".company-slogan", {opacity: 0, y: 50, duration: 1}, "-=1");
}

function setMasterAnimation() {
    const masterTL = gsap.timeline();
    masterTL
        .add(setMechanismAnimation())
        .add(setLogoAnimation(), "-=1.5")
        .add(setCompanyNameAnimation(), "-=0.5")
        .add(setInfiniteRotation1(), "-=1");

}

const button = document.getElementById('play');
button.onclick = setMasterAnimation;