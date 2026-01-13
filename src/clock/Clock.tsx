import React, { useEffect, useRef } from 'react';

// --- Types ---
interface ClockProps {
  size?: number;
  className?: string;
}

const AnimatedClock: React.FC<ClockProps> = ({ size = 300, className = '' }) => {
  // We use refs to access the DOM elements directly.
  // This bypasses React's render cycle for high-performance animation.
  const hourHandRef = useRef<SVGLineElement>(null);
  const minuteHandRef = useRef<SVGLineElement>(null);
  const secondHandRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    let frameId: number;

    const animate = () => {
      const date = new Date();

      // 1. Get raw time units
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      const milliseconds = date.getMilliseconds();

      // 2. Calculate smooth continuous values
      const smoothSeconds = seconds + milliseconds / 1000;
      const smoothMinutes = minutes + smoothSeconds / 60;

      // 3. Calculate Angles
      const hourAngle = (hours % 12) * 30 + smoothMinutes * 0.5;
      const minuteAngle = smoothMinutes * 6;
      const secondAngle = smoothSeconds * 6;

      // 4. Update the DOM elements directly
      const center = 150;

      if (hourHandRef.current) {
        hourHandRef.current.setAttribute('transform', `rotate(${hourAngle} ${center} ${center})`);
      }
      if (minuteHandRef.current) {
        minuteHandRef.current.setAttribute('transform', `rotate(${minuteAngle} ${center} ${center})`);
      }
      if (secondHandRef.current) {
        secondHandRef.current.setAttribute('transform', `rotate(${secondAngle} ${center} ${center})`);
      }

      frameId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    frameId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => cancelAnimationFrame(frameId);
  }, []);

  // Static SVG configuration
  const center = 150;
  const radius = 100;

  return (
    <div
      className={`relative flex items-center justify-center rounded-full shadow-2xl overflow-hidden ${className}`}
      style={{
        width: size,
        height: size,
        background: 'linear-gradient(135deg, #8E2D55 0%, #B63E4B 100%)',
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
        {/* --- Tick Marks (Static) --- */}
        {[...Array<number>(12)].map((_, i) => {
          const rotation = i * 30;
          return (
            <line
              key={i}
              x1={center}
              y1={center - radius}
              x2={center}
              y2={center - radius - 25}
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              opacity="0.9"
              transform={`rotate(${rotation} ${center} ${center})`}
            />
          );
        })}

        {/* --- Hour Hand --- */}
        <line
          ref={hourHandRef}
          x1={center}
          y1={center}
          x2={center}
          y2={center - 65}
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* --- Minute Hand --- */}
        <line
          ref={minuteHandRef}
          x1={center}
          y1={center}
          x2={center}
          y2={center - 95}
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* --- Second Hand --- */}
        <line
          ref={secondHandRef}
          x1={center}
          y1={center}
          x2={center}
          y2={center - 110}
          stroke="white"
          strokeWidth="2"
          opacity="0.8"
          strokeLinecap="round"
        />

        {/* --- Center Dot (Always Rendered Last = On Top) --- */}
        <circle cx={center} cy={center} r="4" fill="white" />
      </svg>
    </div>
  );
};

export default AnimatedClock;
