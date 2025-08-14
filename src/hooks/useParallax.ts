import { useEffect } from 'react';

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });

      // Floating cards parallax
      const floatingCards = document.querySelectorAll('.floating, .floating-delayed, .floating-slow');
      floatingCards.forEach((card, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = scrolled * speed;
        (card as HTMLElement).style.transform += ` translateY(${yPos}px)`;
      });
    };

    const throttledScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);
};