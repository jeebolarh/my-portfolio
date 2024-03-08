import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring'; // For React Spring animations
import './MainSection.css'

const MainSection = ({image, direction = 'right', initialDisplay = 'none' }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use React Spring for smooth animation (optional)
  const animation = useSpring({
    from: { opacity: 0, transform: `translateY(${direction === 'right' ? '100%' : '-100%'})` },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 800 }, // Adjust animation duration as needed
  });
    const animation2 = useSpring({
    from: { opacity: 0, transform: `translateX(${direction === 'right' ? '-100%' : '-100%'})` },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 1000 }, // Adjust animation duration as needed
  });
    const animation3 = useSpring({
    from: { opacity: 0, transform: `translateX(${direction === 'right' ? '100%' : '-100%'})` },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { duration: 800 }, // Adjust animation duration as needed
  });


  useEffect(() => {
    setIsVisible(true); // Trigger the animation on component mount
  }, []);

  return (
    <div className="mainsection-container">
      <div>
      <animated.div className="text-container" style={{ ...animation, display: isVisible ? 'inline-block' : initialDisplay }}>
        <h1 className='intro-text'>Hi, I'm Ajibola Abiola</h1>
        <h3 className='frontend-header'>Frontend Developer</h3>
        <p className='description'>As a front-end developer, I specialize in bringing digital designs to life. With a keen eye for aesthetics and a passion for crafting seamless user experiences, I transform static mockups into dynamic, interactive websites. Proficient in HTML, CSS, and JavaScript, I leverage the latest web technologies to create responsive, accessible, and visually stunning interfaces. From concept to deployment, I thrive on turning ideas into captivating digital realities. Let's collaborate to elevate your online presence together.
        </p>
              </animated.div>
        <animated.div className="button-container" style={{ ...animation2, display: isVisible ? 'block' : initialDisplay }}>
          <button className='hire'>Hire Me</button>
          <button className='talk'>Let's Talk</button>
        </animated.div>
        </div>
      <div>
        <animated.div style={{ ...animation3, display: isVisible ? 'inline-block' : initialDisplay }}>
          <img className="image" src={image} alt="" />
          </animated.div>
        <animated.div className='socials' style={{ ...animation, display: isVisible ? 'flex' : initialDisplay }}  >
          <h3 className='f'>f</h3>
          <h3 className='f'>in</h3>
          <h3 className='f'>g</h3>
        </animated.div>
      </div>
    </div>
  )
}

export default MainSection