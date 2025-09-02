"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Button,
  Modal,
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Card,
  PageIndicator,
  ThreeJSBackground
} from "../../components/ui";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

export default function StoriesPage() {
  useEffect(() => {
    AOS.init();
  }, []);
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const storiesPerPage = 9;
  
  // Refs for GSAP animations
  const headerRef = useRef(null);
  const genreFilterRef = useRef(null);
  const storiesGridRef = useRef(null);
  const newsletterRef = useRef(null);

  const stories = [
    {
      id: 1,
      title: "The Whispering Woods",
      subtitle: "A Tale of Magic and Mystery",
      text: "Deep in the heart of the ancient forest, where shadows dance with moonlight and secrets whisper through the leaves, lies a tale that has been passed down through generations. It's a story of a young wanderer who discovers that the woods hold more than just trees and wildlife—they hold the key to a forgotten magic that could change everything.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Fantasy",
      readTime: "8 min read",
      date: "December 15, 2024",
      excerpt: "Deep in the heart of the ancient forest, where shadows dance with moonlight and secrets whisper through the leaves..."
    },
    {
      id: 2,
      title: "Beyond the Horizon",
      subtitle: "Adventures of the Sea Explorer",
      text: "Captain Elena's compass pointed to uncharted waters, but her heart led her to something far greater than treasure. In this epic sea adventure, follow her journey across stormy seas, mysterious islands, and encounters with creatures that defy the laws of nature. It's a tale of courage, discovery, and the unquenchable thirst for adventure.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Adventure",
      readTime: "12 min read",
      date: "December 12, 2024",
      excerpt: "Captain Elena's compass pointed to uncharted waters, but her heart led her to something far greater than treasure..."
    },
    {
      id: 3,
      title: "The Last Letter",
      subtitle: "A Love Story Across Time",
      text: "In a dusty attic, Sarah discovers a letter written in 1942. As she reads the words of a soldier to his beloved, she finds herself drawn into a romance that transcends time itself. This is a story of love that endures through war, separation, and the passage of decades—a testament to the power of true love.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Romance",
      readTime: "10 min read",
      date: "December 10, 2024",
      excerpt: "In a dusty attic, Sarah discovers a letter written in 1942. As she reads the words of a soldier to his beloved..."
    },
    {
      id: 4,
      title: "The Silent Witness",
      subtitle: "A Mystery in the Old Library",
      text: "When librarian Emma discovers a mysterious book that seems to write itself, she becomes entangled in a centuries-old mystery. As she delves deeper into the library's hidden secrets, she realizes that some stories are better left untold. But it's too late to turn back now.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Mystery",
      readTime: "15 min read",
      date: "December 8, 2024",
      excerpt: "When librarian Emma discovers a mysterious book that seems to write itself, she becomes entangled in a centuries-old mystery..."
    },
    {
      id: 5,
      title: "The Dragon's Heart",
      subtitle: "A Fantasy Epic",
      text: "In a world where dragons and humans once lived in harmony, a young blacksmith discovers he has the power to forge weapons that can slay the ancient beasts. But as he learns the truth about the dragon-human war, he must choose between his destiny and his heart.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Fantasy",
      readTime: "20 min read",
      date: "December 5, 2024",
      excerpt: "In a world where dragons and humans once lived in harmony, a young blacksmith discovers he has the power to forge weapons..."
    },
    {
      id: 6,
      title: "The Time Traveler's Wife",
      subtitle: "A Love Beyond Time",
      text: "Claire has always known that her husband Henry is different. He disappears without warning, sometimes for days, sometimes for years. But she loves him unconditionally, even when he returns with stories of places and times she can only imagine.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Romance",
      readTime: "18 min read",
      date: "December 3, 2024",
      excerpt: "Claire has always known that her husband Henry is different. He disappears without warning, sometimes for days..."
    },
    {
      id: 7,
      title: "The Lost Expedition",
      subtitle: "Journey to the Unknown",
      text: "When a team of explorers ventures into the uncharted depths of the Amazon rainforest, they discover ancient ruins that shouldn't exist. As they explore deeper, they realize they're not alone, and some discoveries come with a deadly price.",
      image: "https://images.unsplash.com/photo-1489824913935-59a10b8d2000?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Adventure",
      readTime: "14 min read",
      date: "November 30, 2024",
      excerpt: "When a team of explorers ventures into the uncharted depths of the Amazon rainforest, they discover ancient ruins..."
    },
    {
      id: 8,
      title: "The Detective's Daughter",
      subtitle: "Solving Her Father's Last Case",
      text: "Detective Sarah Mitchell never wanted to follow in her father's footsteps, but when he's killed investigating a cold case, she has no choice. As she unravels the mystery that cost him his life, she discovers that some family secrets are better left buried.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Mystery",
      readTime: "16 min read",
      date: "November 28, 2024",
      excerpt: "Detective Sarah Mitchell never wanted to follow in her father's footsteps, but when he's killed investigating a cold case..."
    },
    {
      id: 9,
      title: "The Crystal Garden",
      subtitle: "A Sci-Fi Adventure",
      text: "In the year 2157, botanist Dr. Maya Chen discovers a garden where plants grow from pure crystal. As she studies this phenomenon, she uncovers a secret that could change the future of humanity and the very nature of life itself.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Science Fiction",
      readTime: "22 min read",
      date: "November 25, 2024",
      excerpt: "In the year 2157, botanist Dr. Maya Chen discovers a garden where plants grow from pure crystal..."
    },
    {
      id: 10,
      title: "The Midnight Market",
      subtitle: "Where Dreams Are Traded",
      text: "Every night at midnight, a mysterious market appears in the heart of the city. Here, people can trade their dreams, memories, and even their futures. But what happens when someone tries to cheat the market?",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Fantasy",
      readTime: "19 min read",
      date: "November 22, 2024",
      excerpt: "Every night at midnight, a mysterious market appears in the heart of the city..."
    }
  ];

  const genres = ["All", "Fantasy", "Adventure", "Romance", "Mystery"];

  const filteredStories = selectedGenre === "All" 
    ? stories 
    : stories.filter(story => story.genre === selectedGenre);

  // Pagination logic
  const totalPages = Math.ceil(filteredStories.length / storiesPerPage);
  const startIndex = (currentPage - 1) * storiesPerPage;
  const endIndex = startIndex + storiesPerPage;
  const currentStories = filteredStories.slice(startIndex, endIndex);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // GSAP animations
  useEffect(() => {
    // Header entrance animation
    if (headerRef.current) {
      gsap.fromTo(headerRef.current.children, 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2, 
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }

    // Genre filter animation
    if (genreFilterRef.current) {
      gsap.fromTo(genreFilterRef.current.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1,
          ease: "power2.out",
          delay: 1.2
        }
      );
    }

    // Stories grid animation
    if (storiesGridRef.current) {
      gsap.fromTo(storiesGridRef.current.children, 
        { y: 60, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 1, 
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 1.5
        }
      );
    }

    // Newsletter animation
    if (newsletterRef.current) {
      gsap.fromTo(newsletterRef.current.children, 
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          stagger: 0.15,
          ease: "power2.out",
          delay: 2
        }
      );
    }

    // Cursor effect
    const cursorGlow = document.querySelector('.cursor-glow');
    if (cursorGlow) {
      const handleMouseMove = (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
      };
      
      window.addEventListener('mousemove', handleMouseMove);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // GSAP animation for genre change
  useEffect(() => {
    if (storiesGridRef.current) {
      gsap.fromTo(storiesGridRef.current.children, 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.05,
          ease: "power2.out"
        }
      );
    }
  }, [selectedGenre]);

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    setCurrentPage(1); // Reset to first page when changing genre
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 font-inter">
      {/* Cursor glow effect */}
      <div className="cursor-glow"></div>
      
      {/* Stories Header */}
      <section className="relative bg-black text-white py-16 overflow-hidden">
        <ThreeJSBackground />
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-[5]"></div>
        
        {/* Background grid (very subtle) matching home page */}
        <div className="absolute inset-0 opacity-10 z-[6]">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Embroidered corner ornaments matching home page theme */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-[8]">
          <svg className="embroidery tl" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M5 85 C5 60, 15 50, 40 50 S75 35, 80 5" className="embroidery-stroke" />
            <path d="M10 95 C10 70, 25 60, 50 60" className="embroidery-stroke thin" />
          </svg>
          <svg className="embroidery tr" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M115 85 C115 60, 105 50, 80 50 S45 35, 40 5" className="embroidery-stroke" />
            <path d="M110 95 C110 70, 95 60, 70 60" className="embroidery-stroke thin" />
          </svg>
          <svg className="embroidery bl" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M5 35 C5 60, 15 70, 40 70 S75 85, 80 115" className="embroidery-stroke" />
            <path d="M10 25 C10 50, 25 60, 50 60" className="embroidery-stroke thin" />
          </svg>
          <svg className="embroidery br" width="120" height="120" viewBox="0 0 120 120" fill="none">
            <path d="M115 35 C115 60, 105 70, 80 70 S45 85, 40 115" className="embroidery-stroke" />
            <path d="M110 25 C110 50, 95 60, 70 60" className="embroidery-stroke thin" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center" ref={headerRef}>
          <Heading level={1} variant="white" className="mb-6 drop-shadow-lg">
            Story Collection
          </Heading>
          <Subtitle variant="light" className="mb-8 text-xl drop-shadow-lg">
            Dive into worlds of imagination and adventure
          </Subtitle>
          <BodyText variant="light" className="text-lg max-w-3xl mx-auto text-gray-100 drop-shadow-lg">
            From fantasy realms to mysterious adventures, discover stories that will transport you 
            to places you've never imagined and introduce you to characters you'll never forget.
          </BodyText>
        </div>
        
        {/* White border decoration */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-[7]" data-aos="fade-up" data-aos-delay="1000">
          <img 
            src="/hboder_w.svg" 
            alt="Decorative border" 
            className="w-full max-w-3xl h-auto opacity-80"
          />
        </div>
        
        {/* Embroidery styles */}
        <style jsx>{`
          .embroidery { position: absolute; z-index: 8; opacity: 0.55; }
          .embroidery.tl { top: 10px; left: 10px; }
          .embroidery.tr { top: 10px; right: 10px; transform: scaleX(-1); }
          .embroidery.bl { bottom: 10px; left: 10px; transform: scaleY(-1); }
          .embroidery.br { bottom: 10px; right: 10px; transform: scale(-1); }
          .embroidery-stroke { stroke: rgba(255,255,255,0.6); stroke-width: 2.2; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0 6px rgba(255,255,255,0.15)); }
          .embroidery-stroke.thin { stroke: rgba(255,255,255,0.45); stroke-width: 1.4; }
          @media (max-width: 768px) {
            .embroidery { width: 76px; height: 76px; opacity: 0.45; }
          }
        `}</style>
      </section>

      {/* Genre Filter */}
      <section className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex flex-wrap gap-4 justify-center" ref={genreFilterRef}>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreChange(genre)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedGenre === genre
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              {selectedGenre === "All" ? "All Stories" : `${selectedGenre} Stories`}
            </Heading>
            <BodyText className="text-xl text-gray-600 dark:text-gray-300">
              Showing {currentStories.length} of {filteredStories.length} {filteredStories.length === 1 ? 'story' : 'stories'} found
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" ref={storiesGridRef}>
            {currentStories.map((story) => (
              <Card 
                key={story.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                      {story.genre}
                    </span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs text-gray-400">{story.readTime}</span>
                  </div>
                  <Heading level={3} className="mb-2 line-clamp-2">
                    {story.title}
                  </Heading>
                  <Subtitle variant="small" className="mb-3 line-clamp-2">
                    {story.subtitle}
                  </Subtitle>
                  <BodyText className="text-sm h-16 overflow-hidden mb-4">
                    {story.excerpt}
                  </BodyText>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{story.date}</span>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="small"
                        onClick={() => handleStoryClick(story)}
                      >
                        Preview
                      </Button>
                      <Link href={`/stories/${story.id}`}>
                        <Button size="small">
                          Read Full
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-end mt-12">
            <PageIndicator
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="max-w-4xl mx-auto px-8 text-center" ref={newsletterRef}>
          <Heading level={2} className="mb-6">
            Never Miss a Story
          </Heading>
          <BodyText className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Subscribe to get notified when new stories are published and join our community of story lovers
          </BodyText>
          <div className="flex gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            />
            <Button>
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={selectedStory?.title}
        size="large"
      >
        {selectedStory && (
          <div className="space-y-6">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 font-medium rounded-full">
                {selectedStory.genre}
              </span>
              <span>•</span>
              <span>{selectedStory.readTime}</span>
              <span>•</span>
              <span>{selectedStory.date}</span>
            </div>
            <Subtitle>{selectedStory.subtitle}</Subtitle>
            <BodyText className="text-lg leading-relaxed">
              {selectedStory.text}
            </BodyText>
            <div className="pt-4 flex gap-3">
              <Button variant="outline" onClick={() => setOpen(false)}>
                Close Preview
              </Button>
              <Link href={`/stories/${selectedStory.id}`}>
                <Button>
                  Read Full Story
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
