import { useEffect } from 'react';

export const useMouseTrail = () => {
  useEffect(() => {
    const trail: HTMLElement[] = [];
    const trailLength = 8;

    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
      const dot = document.createElement('div');
      dot.className = 'mouse-trail';
      dot.style.opacity = ((trailLength - i) / trailLength * 0.5).toString();
      dot.style.transform = 'scale(' + (trailLength - i) / trailLength + ')';
      document.body.appendChild(dot);
      trail.push(dot);
    }

    let mouseX = 0;
    let mouseY = 0;
    const positions: { x: number; y: number }[] = [];

    // Initialize positions
    for (let i = 0; i < trailLength; i++) {
      positions.push({ x: 0, y: 0 });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateTrail = () => {
      // Update positions
      positions[0] = { x: mouseX, y: mouseY };
      
      for (let i = 1; i < trailLength; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.3;
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.3;
      }

      // Apply positions to trail elements
      trail.forEach((dot, index) => {
        dot.style.left = positions[index].x + 'px';
        dot.style.top = positions[index].y + 'px';
      });

      requestAnimationFrame(animateTrail);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateTrail();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      trail.forEach((dot) => {
        if (document.body.contains(dot)) {
          document.body.removeChild(dot);
        }
      });
    };
  }, []);
};