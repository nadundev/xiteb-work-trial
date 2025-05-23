import { useState, useEffect, useRef } from 'react';

interface StatItem {
  id: number;
  value: number;
  label: string;
  suffix?: string;
}

const stats: StatItem[] = [
  {
    id: 1,
    value: 890,
    label: 'Delivered packages',
    suffix: ''
  },
  {
    id: 2,
    value: 137,
    label: 'Countries covered',
    suffix: ''
  },
  {
    id: 3,
    value: 740,
    label: 'Tons of Goods',
    suffix: ''
  },
  {
    id: 4,
    value: 600,
    label: 'Satisfied Clients',
    suffix: ''
  }
];

interface CounterProps {
  end: number;
  duration?: number;
  isVisible: boolean;
}

function Counter({ end, duration = 2000, isVisible }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return <span>{count}</span>;
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="stats" 
      className="py-16 lg:py-24 bg-white border-t border-b border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-2">
                <Counter 
                  end={stat.value} 
                  isVisible={isVisible}
                  duration={2500}
                />
                {stat.suffix}
              </div>
              <div className="text-slate-600 text-sm md:text-base font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 