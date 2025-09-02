'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSProvider({ children }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      // Global settings:
      duration: 800,     // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true,        // whether animation should happen only once - while scrolling down
      mirror: false,     // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
      
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120,       // offset (in px) from the original trigger point
      delay: 0,          // values from 0 to 3000, with step 50ms
      
      // Disable on mobile devices
      disable: 'mobile',
      
      // Start animation when element is in viewport
      startEvent: 'DOMContentLoaded',
    });

    // Refresh AOS on route changes (for Next.js)
    const handleRouteChange = () => {
      AOS.refresh();
    };

    // Listen for route changes
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  return <>{children}</>;
}
