import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; // For React Spring animations

const SlidingText = ({ text, direction = 'right', initialDisplay = 'none' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use React Spring for smooth animation (optional)
  const animation = useSpring({
    from: { opacity: 0, transform: `translateX(${direction === 'right' ? '100%' : '-100%'})` },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 700 }, // Adjust animation duration as needed
  });

  useEffect(() => {
    setIsVisible(true); // Trigger the animation on component mount
  }, []);

  return (
    <animated.div style={{ ...animation, display: isVisible ? 'inline-block' : initialDisplay }}>
      {text}
    </animated.div>
  );
};

export default SlidingText;
