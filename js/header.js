Splitting();
gsap.set('.char', {
  '--hue': gsap.utils.distribute({
    base: 0,
    amount: 330 }) });


gsap.to('.char', {
  '--weight': 700,
  '--saturation': 80,
  ease: 'sine.inOut',
  duration: 0.5,
  stagger: {
    yoyo: true,
    repeat: -1,
    each: 0.15 } }).

time(2);