import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; // For React Spring animations
import "./Navbar.css"

const Navbar = ({ links, direction = 'right', initialDisplay = 'none' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use React Spring for smooth animation (optional)
  const animation = useSpring({
    from: { opacity: 0, transform: `translateX(${direction === 'right' ? '100%' : '-100%'})` },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 800 }, // Adjust animation duration as needed
  });
    const animation2 = useSpring({
    from: { opacity: 0, transform: `translateX(${direction === 'right' ? '-100%' : '-100%'})` },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 500 }, // Adjust animation duration as needed
  });


  useEffect(() => {
    setIsVisible(true); // Trigger the animation on component mount
  }, []);

  return (
    <div className="navbar-container">
      <animated.div className="logo"style={{ ...animation2, display: isVisible ? 'inline-block' : initialDisplay }} >
        <h2>AJIBOLA</h2>
      </animated.div>
     <animated.div className='links-container'style={{ ...animation, display: isVisible ? 'inline-block' : initialDisplay }} >
      {links.map((link, index) => (
        <a className="links" key={index} href={link.url}>{link.text}</a>
      ))}
      </animated.div>
    </div>

  );
};

export default Navbar;
