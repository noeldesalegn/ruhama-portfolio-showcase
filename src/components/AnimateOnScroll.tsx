
import React, { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  threshold?: number;
  delay?: number;
}

const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  threshold = 0.1,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (entry.target.classList.contains('animate-on-scroll')) {
                entry.target.classList.add('animated');
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div ref={ref} className="animate-on-scroll">
      {children}
    </div>
  );
};

export default AnimateOnScroll;
