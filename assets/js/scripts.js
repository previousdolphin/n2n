document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // 1. Text Reveal Animations
    const revealElements = document.querySelectorAll('.js-reveal');
    
    revealElements.forEach((el) => {
        gsap.fromTo(el, 
            { 
                y: 50, 
                opacity: 0 
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 2. Block Stagger Animations
    const blockElements = document.querySelectorAll('.js-block');
    
    blockElements.forEach((block, index) => {
        gsap.fromTo(block,
            {
                opacity: 0,
                x: -30
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: block,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // 3. Continuous Marquee Animation
    const marqueeTrack = document.querySelector('.marquee-track');
    if (marqueeTrack) {
        // Clone the text content to ensure seamless scrolling
        const content = marqueeTrack.innerHTML;
        marqueeTrack.innerHTML = content + content;

        gsap.to('.marquee-track', {
            xPercent: -50,
            ease: "none",
            duration: 20,
            repeat: -1
        });
    }
});