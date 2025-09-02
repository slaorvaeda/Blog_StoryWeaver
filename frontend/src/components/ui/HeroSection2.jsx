"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import Button from './Button';
import Modal from './Modal';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const particlesRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // New refs and state for gallery
  const galleryRef = useRef(null);
  const cardRefs = useRef([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const galleryItems = [
    { id: 1, title: 'The Whispering Woods', meta: '8 min read' },
    { id: 2, title: 'Beyond the Horizon', meta: '12 min read' },
    { id: 3, title: 'The Last Letter', meta: '10 min read' },
    { id: 4, title: 'Shadows of Time', meta: '6 min read' },
    { id: 5, title: 'Echoes in Stone', meta: '9 min read' },
    { id: 6, title: 'Midnight Chronicle', meta: '7 min read' },
    { id: 7, title: 'Silent Voyage', meta: '11 min read' }
  ];

  useEffect(() => {
    // Mouse move effect for parallax and spotlight
    const handleMouseMove = (e) => {
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setMousePosition({ x, y });

      // Spotlight CSS variables
      if (heroRef.current) {
        heroRef.current.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
        heroRef.current.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Create floating particles (subtle, grayscale)
    const createParticles = () => {
      const particlesContainer = particlesRef.current;
      if (!particlesContainer) return;
      particlesContainer.innerHTML = '';
      for (let i = 0; i < 80; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: ${Math.random() * 3 + 1}px;
          height: ${Math.random() * 3 + 1}px;
          background: rgba(255,255,255, ${Math.random() * 0.25 + 0.05});
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          top: ${Math.random() * 100}%;
          animation: float ${Math.random() * 22 + 14}s infinite linear;
          animation-delay: ${Math.random() * 8}s;
        `;
        particlesContainer.appendChild(particle);
      }
    };

    // GSAP entry animations
    const tl = gsap.timeline();
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out' }
    )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power2.out' },
        '-=0.8'
      )
      .fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
        '-=0.6'
      );

    // Parallax effect on scroll for particles
    gsap.to(particlesRef.current, {
      yPercent: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    // Create particles
    createParticles();

    // Initialize curved gallery layout
    const cards = cardRefs.current.filter(Boolean);
    const radius = 420; // px
    const total = cards.length;
    const startAngle = -Math.min(40, 80 / total); // degrees
    const endAngle = Math.min(40, 80 / total) * (total - 1);

    cards.forEach((card, index) => {
      const angle = startAngle + (index * (endAngle - startAngle) / Math.max(total - 1, 1));
      const z = radius * Math.cos((angle * Math.PI) / 180);
      const x = radius * Math.sin((angle * Math.PI) / 180);
      const rotateY = angle;
      // initial placement
      gsap.set(card, {
        transform: `translate3d(${x}px, 0px, ${z - radius}px) rotateY(${rotateY}deg)`,
        opacity: 0,
      });
    });

    // Animate cards in with slight cascade
    gsap.to(cards, {
      opacity: 1,
      y: -10,
      duration: 0.8,
      stagger: 0.06,
      ease: 'power2.out'
    });

    // Scroll tilt for the whole gallery
    if (galleryRef.current) {
      gsap.to(galleryRef.current, {
        rotateX: -10,
        rotateY: 10,
        y: -40,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Mouse tilt
    const onMouseParallax = (e) => {
      if (!galleryRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      gsap.to(galleryRef.current, {
        rotateY: relX * 14,
        rotateX: relY * -10,
        duration: 0.4,
        ease: 'power2.out'
      });
    };
    window.addEventListener('mousemove', onMouseParallax);

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        ScrollTrigger.getAll().forEach(t => t.kill());
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mousemove', onMouseParallax);
      }
    };
  }, []);

  // Click to expand/billow animation
  const handleCardClick = (item, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const bounds = card.getBoundingClientRect();
    const heroBounds = heroRef.current?.getBoundingClientRect();
    const dx = (window.innerWidth / 2) - (bounds.left + bounds.width / 2);
    const dy = (window.innerHeight / 2) - (bounds.top + bounds.height / 2);

    const anim = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    anim
      .set(card, { willChange: 'transform, box-shadow' })
      .to(card, {
        zIndex: 50,
        duration: 0.5,
        x: `+=${dx}`,
        y: `+=${dy}`,
        rotateY: 0,
        rotateX: 0,
        scale: 1.2,
        boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
      })
      .to(card, {
        duration: 0.4,
        scale: 1.0,
        borderRadius: '12px'
      }, '-=0.15')
      .add(() => setSelectedCard(item));
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden"
    >
      {/* Spotlight overlay following cursor (grayscale) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(220px 220px at var(--spot-x, 50%) var(--spot-y, 50%), rgba(255,255,255,0.12), rgba(0,0,0,0.75) 60%)`,
          mixBlendMode: 'screen'
        }}
      />

      {/* Animated background particles (subtle, grayscale) */}
      <div 
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Background grid (very subtle) */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[90bh]">
        <div className="max-w-6xl mx-auto px-8 text-center">
          {/* Title */}
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">Story</span>
            <br />
            <span className="text-white">Weaver</span>
          </h1>

          {/* Subtitle */}
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-light"
          >
            A spotlighted gallery of stories — minimal, modern, and immersive.
          </p>

          {/* CTAs */}
          <div 
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10"
          >
            <Link href="/stories">
              <Button 
                variant="secondary" 
                size="large"
                className="bg-gray-100 text-gray-900 hover:bg-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-gray-700/30 transition-all duration-300 transform hover:scale-105 rounded-md"
              >
                Explore Stories
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="large" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/50 rounded-md"
            >
              Subscribe
            </Button>
          </div>

          {/* Curved grayscale card gallery */}
          <div className="relative mt-2">
            <div
              ref={galleryRef}
              className="relative mx-auto"
              style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
                height: '340px'
              }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ width: '0px', height: '0px' }}>
                {galleryItems.map((item, index) => (
                  <button
                    key={item.id}
                    ref={(el) => (cardRefs.current[index] = el)}
                    onClick={() => handleCardClick(item, index)}
                    className="group absolute -left-1/2 -top-1/2 w-[220px] h-[300px] rounded-xl overflow-hidden bg-gradient-to-b from-gray-200 to-gray-100 text-left shadow-2xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
                    aria-label={`Open ${item.title}`}
                    style={{
                      transformOrigin: 'center center',
                      backfaceVisibility: 'hidden'
                    }}
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.9),rgba(0,0,0,0)_60%)] opacity-40" />
                      <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-b from-white/60 to-gray-200/40" />
                    </div>
                    <div className="relative z-10 p-4 h-full flex flex-col">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500">Story</div>
                      <div className="mt-1 text-lg font-semibold text-gray-900 leading-snug line-clamp-3">{item.title}</div>
                      <div className="mt-auto pt-4 text-sm text-gray-600">{item.meta}</div>
                    </div>
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                      background: 'radial-gradient(160px 160px at 50% 30%, rgba(255,255,255,0.9), rgba(255,255,255,0) 60%)'
                    }} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
              <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg) scale(1); opacity: 0; }
          10% { opacity: 1; }
          50% { transform: translateY(-50vh) rotate(180deg) scale(1.1); }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg) scale(0.95); opacity: 0; }
        }
        .particle { pointer-events: none; will-change: transform; }
      `}</style>

      {/* Simple modal for selected card (billow result) */}
      <Modal isOpen={!!selectedCard} onClose={() => setSelectedCard(null)} title={selectedCard?.title} size="large">
        {selectedCard && (
          <div className="space-y-4">
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden bg-gray-200" />
            <p className="text-gray-600">{selectedCard.title} — a featured story in our spotlight gallery.</p>
            <div className="flex gap-3">
              <Link href={`/stories/${selectedCard.id || ''}`}>
                <Button>Read Full Story</Button>
              </Link>
              <Button variant="outline" onClick={() => setSelectedCard(null)}>Close</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default HeroSection;
