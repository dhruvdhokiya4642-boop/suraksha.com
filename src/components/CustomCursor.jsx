import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    // Heartbeat animation
    gsap.to(cursor, {
      scaleX: 0.7,
      scaleY: 1,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 rounded-full border-2 border-trust-teal pointer-events-none z-[9999] gpu-accelerated"
      style={{
        mixBlendMode: 'difference',
        transform: 'translate(-50%, -50%)'
      }}
    />
  );
};

export default CustomCursor;
