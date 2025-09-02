"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ImageCard,
  Button,
  Modal,
  Sidebar,
  ArticleCard,
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Card,
  HeroSection
} from "../components/ui";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [currentStory, setCurrentStory] = useState(0); // Track which story is currently featured

  const featuredStories = [
    {
      id: 1,
      title: "The Whispering Woods",
      subtitle: "A Tale of Magic and Mystery",
      text: "Deep in the heart of the ancient forest, where shadows dance with moonlight and secrets whisper through the leaves, lies a tale that has been passed down through generations. It's a story of a young wanderer who discovers that the woods hold more than just trees and wildlife—they hold the key to a forgotten magic that could change everything.",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Fantasy",
      readTime: "8 min read",
      date: "December 15, 2024"
    },
    {
      id: 2,
      title: "Beyond the Horizon",
      subtitle: "Adventures of the Sea Explorer",
      text: "Captain Elena's compass pointed to uncharted waters, but her heart led her to something far greater than treasure. In this epic sea adventure, follow her journey across stormy seas, mysterious islands, and encounters with creatures that defy the laws of nature. It's a tale of courage, discovery, and the unquenchable thirst for adventure.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Adventure",
      readTime: "12 min read",
      date: "December 12, 2024"
    },
    {
      id: 3,
      title: "The Last Letter",
      subtitle: "A Love Story Across Time",
      text: "In a dusty attic, Sarah discovers a letter written in 1942. As she reads the words of a soldier to his beloved, she finds herself drawn into a romance that transcends time itself. This is a story of love that endures through war, separation, and the passage of decades—a testament to the power of true love.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
      genre: "Romance",
      readTime: "10 min read",
      date: "December 10, 2024"
    },
  ];

  const current = featuredStories[currentStory];

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setOpen(true);
  };

  const handleSidebarStoryClick = (storyIndex) => {
    setCurrentStory(storyIndex);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter">
            {/* Hero Section */}
      <HeroSection />

      {/* Featured Story Section */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <Caption variant="default" className="uppercase tracking-widest mb-4">
              Featured Story
            </Caption>
            <Heading level={2} className="mb-4">
              {current.title}
            </Heading>
            <Subtitle className="mb-6">{current.subtitle}</Subtitle>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden space-y-8" data-aos="fade-up" data-aos-delay="150">
            <div>
              <ImageCard
                src={current.image}
                alt={current.title}
                className="w-full h-64"
              />
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                  {current.genre}
                </span>
                <span className="text-gray-500 text-sm">{current.readTime}</span>
              </div>
              <BodyText className="mt-4">{current.text}</BodyText>
            </div>

            <div className="flex flex-col gap-3">
              <Button onClick={() => handleStoryClick(current)}>Preview Story</Button>
              <Link href={`/stories/${current.id}`}>
                <Button variant="outline">Read Full Story</Button>
              </Link>
            </div>

            <div className="flex flex-col gap-2">
              <Caption>{String(current.id).padStart(2, "0")}</Caption>
              <Caption className="uppercase tracking-widest">
                Written by <span className="text-black font-medium">Sarah Weaver</span>
              </Caption>
              <Caption>{current.date}</Caption>
            </div>

            {/* Quick story selector */}
            <div>
              <Caption className="uppercase tracking-widest mb-3">More Stories</Caption>
              <div className="flex gap-3 overflow-x-auto snap-x">
                {featuredStories.map((story, index) => (
                  <button
                    key={story.id}
                    onClick={() => handleSidebarStoryClick(index)}
                    className={`shrink-0 snap-start px-4 py-2 rounded-md border text-sm ${
                      currentStory === index
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                    aria-label={`View ${story.title}`}
                  >
                    {String(story.id).padStart(2, "0")} — {story.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden lg:grid grid-cols-12 gap-12">
            <div data-aos="fade-right" data-aos-delay="200">
              <Sidebar
                position="left"
                showPageNumber={true}
                pageNumber={current.id}
                showSocials={true}
              />
            </div>

            {/* Main story area */}
            <section className="col-span-8">
              <div className="mt-10 grid grid-cols-2 gap-14 items-start">
                <div data-aos="fade-up" data-aos-delay="300">
                  <ImageCard
                    src={current.image}
                    alt={current.title}
                    className="w-full h-[480px]"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="400">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
                      {current.genre}
                    </span>
                    <span className="text-gray-500 text-sm">{current.readTime}</span>
                  </div>
                  
                  <BodyText className="mt-6">{current.text}</BodyText>

                  <div className="mt-10 flex gap-3">
                    <Button onClick={() => handleStoryClick(current)}>
                      Preview Story
                    </Button>
                    <Link href={`/stories/${current.id}`}>
                      <Button variant="outline">
                        Read Full Story
                      </Button>
                    </Link>
                  </div>

                  <div className="mt-16 flex items-center gap-6">
                    <Caption>{String(current.id).padStart(2, "0")}</Caption>
                    <Caption className="uppercase tracking-widest">
                      Written by <span className="text-black font-medium">Sarah Weaver</span>
                    </Caption>
                    <Caption className="ml-auto">{current.date}</Caption>
                  </div>
                </div>
              </div>
            </section>

            {/* Right sidebar */}
            <div data-aos="fade-left" data-aos-delay="200">
              <Sidebar position="right">
                <Caption variant="dark" className="uppercase tracking-widest mb-6">
                  More Stories
                </Caption>

                <div className="space-y-4">
                  {featuredStories.map((story, index) => (
                    <ArticleCard
                      key={story.id}
                      article={story}
                      isActive={currentStory === index}
                      onClick={() => handleSidebarStoryClick(index)}
                    />
                  ))}
                </div>
              </Sidebar>
            </div>

            <div className="col-span-12 mt-8 flex items-center justify-between" data-aos="fade-up" data-aos-delay="500">
              <Caption>{String(current.id).padStart(2, "0")}</Caption>
              <Caption>— {current.date}</Caption>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
            <Heading level={2} className="mb-4">
              Latest Stories
            </Heading>
            <BodyText className="text-xl text-gray-600">
              Discover fresh tales and adventures
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredStories.map((story, index) => (
              <Card 
                key={story.id} 
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={200 + (index * 100)}
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
                  <Heading level={3} className="mb-2">
                    {story.title}
                  </Heading>
                  <Subtitle variant="small" className="mb-3">
                    {story.subtitle}
                  </Subtitle>
                  <BodyText className="text-sm h-20 overflow-hidden">
                    {story.text.substring(0, 150)}...
                  </BodyText>
                  <div className="flex gap-2 mt-4">
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div data-aos="fade-up" data-aos-delay="100">
            <Heading level={2} className="mb-6">
              Join the Story Circle
            </Heading>
            <BodyText className="mb-8 text-lg text-gray-600">
              Get notified when new stories are published and join our community of story lovers
            </BodyText>
          </div>
          <div className="flex gap-4 justify-center max-w-md mx-auto" data-aos="fade-up" data-aos-delay="200">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
            <Button variant="secondary" className="!text-black hover:!text-black keep-black-text">
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
