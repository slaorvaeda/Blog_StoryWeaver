"use client";

import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Heading,
  Subtitle,
  BodyText,
  Caption,
  Button,
  Card,
  ThreeJSBackground
} from "@/components/ui";

// This would typically come from a database or CMS
const stories = [
  {
    id: "1",
    title: "The Whispering Woods",
    subtitle: "A Tale of Magic and Mystery",
    content: `
      <p>Deep in the heart of the ancient forest, where shadows dance with moonlight and secrets whisper through the leaves, lies a tale that has been passed down through generations. It's a story of a young wanderer who discovers that the woods hold more than just trees and wildlife—they hold the key to a forgotten magic that could change everything.</p>
      
      <p>Emma had always been drawn to the woods behind her grandmother's house. As a child, she would spend hours exploring the winding paths, listening to the rustling leaves, and imagining what secrets lay hidden in the depths of the forest. Her grandmother would tell her stories about the woods—tales of magical creatures, ancient spirits, and the power of nature itself.</p>
      
      <p>"The woods remember everything," her grandmother would say, her eyes twinkling with wisdom. "Every footstep, every whisper, every dream that has ever been dreamed beneath their branches. They are the keepers of our stories, our hopes, and our fears."</p>
      
      <p>But Emma never truly believed these stories. They were just fairy tales, meant to entertain a curious child. That is, until the night of her eighteenth birthday, when everything changed.</p>
      
      <p>It was a warm summer evening, and the full moon cast silver light through the canopy of leaves above. Emma had decided to take a walk in the woods, something she hadn't done in years. As she stepped onto the familiar path, she felt an immediate sense of peace wash over her. The air was thick with the scent of pine and earth, and the sounds of the forest seemed to welcome her home.</p>
      
      <p>She walked deeper into the woods than she had ever ventured before, following a path that seemed to glow with an ethereal light. The trees seemed to whisper her name, and the wind carried voices that spoke of ancient times and forgotten magic.</p>
      
      <p>Suddenly, she came upon a clearing she had never seen before. In the center stood an ancient oak tree, its trunk so wide that it would take five people holding hands to circle it. The tree seemed to pulse with a gentle, golden light, and as Emma approached, she felt a warmth emanating from its bark.</p>
      
      <p>She reached out to touch the tree, and as her hand made contact with the rough bark, a flood of images and emotions washed over her. She saw the forest as it had been hundreds of years ago, when it was young and wild. She saw the people who had lived there, their joys and sorrows, their hopes and dreams. She saw the magic that had once flowed freely through the land, and how it had slowly faded as people forgot how to listen to the woods.</p>
      
      <p>But most importantly, she saw her grandmother as a young woman, standing in this very clearing, making a promise to the ancient oak. A promise to keep the stories alive, to remember the magic, and to pass on the wisdom of the woods to future generations.</p>
      
      <p>Emma understood then that her grandmother's stories were not just fairy tales—they were memories, passed down through the family line, waiting for someone who was ready to hear them. And now, as she stood in the clearing, feeling the ancient magic flowing through her veins, she knew that it was her turn to become a keeper of the stories.</p>
      
      <p>The woods had chosen her, just as they had chosen her grandmother before her. And as she stood there, bathed in moonlight and surrounded by the whispers of the ancient forest, Emma made her own promise to the oak tree.</p>
      
      <p>She would listen to the woods, learn their secrets, and share their stories with the world. She would become a bridge between the magical realm of the forest and the ordinary world of humans. She would ensure that the ancient wisdom of the woods would never be forgotten.</p>
      
      <p>And as she made this promise, the tree's light grew brighter, and Emma felt a surge of power coursing through her body. She was no longer just Emma, the curious girl who loved to explore the woods. She was Emma, the Story Weaver, chosen by the ancient forest to keep its magic alive.</p>
      
      <p>From that night forward, Emma's life would never be the same. She would discover abilities she never knew she had—the power to hear the stories of the trees, to communicate with the forest spirits, and to weave tales that could transport others to the magical world of the woods.</p>
      
      <p>But that's a story for another time. For now, let's just say that Emma had found her destiny, hidden in the heart of the whispering woods, waiting for someone brave enough to listen.</p>
    `,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
    genre: "Fantasy",
    readTime: "8 min read",
    date: "December 15, 2024",
    author: "Sarah Weaver",
    tags: ["Magic", "Forest", "Adventure", "Coming of Age"]
  },
  {
    id: "2",
    title: "Beyond the Horizon",
    subtitle: "Adventures of the Sea Explorer",
    content: `
      <p>Captain Elena's compass pointed to uncharted waters, but her heart led her to something far greater than treasure. In this epic sea adventure, follow her journey across stormy seas, mysterious islands, and encounters with creatures that defy the laws of nature. It's a tale of courage, discovery, and the unquenchable thirst for adventure.</p>
      
      <p>The salty breeze whipped through Elena's hair as she stood at the helm of the Sea Serpent, her trusted vessel that had carried her through countless adventures. The morning sun painted the ocean in shades of gold and blue, and the horizon stretched endlessly before her, promising new discoveries and untold wonders.</p>
      
      <p>Elena had been a sea captain for fifteen years, but her thirst for adventure had never waned. She had sailed to every known port, traded with merchants from distant lands, and collected stories from sailors who had seen things that defied explanation. But there was one place she had never been—the waters beyond the known maps, where legends spoke of islands that appeared and disappeared with the tides, and creatures that had existed since the dawn of time.</p>
      
      <p>Her crew, a motley collection of experienced sailors and young adventurers, shared her excitement. They had all heard the stories of the uncharted waters—tales of mermaids who could predict the weather, islands made entirely of crystal, and ancient shipwrecks filled with treasures beyond imagination.</p>
      
      <p>But they also knew the dangers. The uncharted waters were home to storms that could swallow ships whole, sea monsters that could crush vessels with a single blow, and mysterious currents that could carry ships to places from which they would never return.</p>
      
      <p>Elena was undeterred. She had faced danger before, and she had always emerged stronger and wiser. Besides, she had a secret weapon—a compass that had been passed down through her family for generations. Unlike ordinary compasses, this one didn't just point north—it pointed toward adventure, toward the unknown, toward the stories that were waiting to be discovered.</p>
      
      <p>As the Sea Serpent sailed beyond the last known coordinates, Elena felt a thrill of excitement mixed with apprehension. The ocean seemed different here—deeper, more mysterious, as if it held secrets that had been hidden for centuries.</p>
      
      <p>The first sign that they were entering truly uncharted territory came on the third day. The water changed color, shifting from the familiar blue to a deep, emerald green that seemed to glow from within. Fish that none of them had ever seen before swam alongside the ship, their scales shimmering with iridescent colors.</p>
      
      <p>Then came the storms. Not the ordinary storms that Elena had weathered countless times, but storms that seemed to have a mind of their own. Lightning danced across the sky in patterns that defied natural laws, and the wind howled with voices that seemed almost human.</p>
      
      <p>But Elena and her crew persevered. They had come too far to turn back now, and the compass continued to guide them forward, its needle spinning wildly as if it could sense the adventure that lay ahead.</p>
      
      <p>It was on the seventh day that they saw it—an island that seemed to float above the water, its shores surrounded by a mist that sparkled with rainbow colors. As they approached, the mist parted to reveal a beach made of sand that seemed to sing when the waves touched it.</p>
      
      <p>Elena knew that this was what they had been searching for—a place where the ordinary rules of the world didn't apply, where magic and reality intertwined, and where new stories were waiting to be discovered.</p>
      
      <p>As she stepped onto the singing sand, Elena felt a sense of wonder that she hadn't experienced since she was a child. This was why she had become a sea captain—not for the treasure or the fame, but for moments like this, when the world revealed its secrets to those brave enough to seek them.</p>
      
      <p>And she knew that this was only the beginning. Beyond this island lay more mysteries, more adventures, and more stories waiting to be told. The horizon was no longer a limit—it was an invitation to explore the unknown and discover the magic that lay hidden in the depths of the ocean.</p>
    `,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
    genre: "Adventure",
    readTime: "12 min read",
    date: "December 12, 2024",
    author: "Sarah Weaver",
    tags: ["Sea", "Exploration", "Magic", "Courage"]
  }
];

export default function StoryPage({ params }) {
  const story = stories.find(s => s.id === params.id);
  const storyIndex = stories.findIndex(s => s.id === params.id);
  const prevStory = storyIndex > 0 ? stories[storyIndex - 1] : null;
  const nextStory = storyIndex < stories.length - 1 ? stories[storyIndex + 1] : null;

  if (!story) {
    notFound();
  }

  return (
    <div className="relative min-h-screen bg-gray-50 text-gray-800 font-inter">
      {/* Decorative embroidery corners */}
      <div className="pointer-events-none select-none absolute inset-0 overflow-hidden">
        {/* Top-right corner */}
        <svg
          aria-hidden="true"
          className="absolute -right-10 -top-10 w-48 h-48 text-purple-200/60"
          viewBox="0 0 200 200"
          fill="none"
        >
          <path d="M180 20c-18 14-38 26-60 34-28 10-44 26-54 54-8 22-20 42-34 60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M150 30c-14 10-30 18-48 24-20 7-32 19-39 39-6 18-14 34-24 48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="168" cy="28" r="2" fill="currentColor"/>
          <circle cx="156" cy="36" r="1.5" fill="currentColor"/>
        </svg>
        {/* Bottom-left corner */}
        <svg
          aria-hidden="true"
          className="absolute -left-10 -bottom-10 w-56 h-56 text-blue-200/50"
          viewBox="0 0 220 220"
          fill="none"
        >
          <path d="M20 200c18-14 38-26 60-34 28-10 44-26 54-54 8-22 20-42 34-60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M32 184c14-10 30-18 48-24 20-7 32-19 39-39 6-18 14-34 24-48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="28" cy="192" r="2" fill="currentColor"/>
          <circle cx="40" cy="184" r="1.5" fill="currentColor"/>
        </svg>
      </div>
      {/* Story Header */}
      <header className="relative bg-black text-white py-16 overflow-hidden">
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
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <nav className="mb-6 text-sm text-gray-200/80" aria-label="Breadcrumb">
            <ol className="flex flex-wrap justify-center gap-2">
              <li>
                <Link href="/" className="hover:underline">Home</Link>
              </li>
              <li>›</li>
              <li>
                <Link href="/stories" className="hover:underline">Stories</Link>
              </li>
              <li>›</li>
              <li className="line-clamp-1 max-w-[50ch]" aria-current="page">{story.title}</li>
            </ol>
          </nav>
          <div className="mb-6">
            <span className="px-4 py-2 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
              {story.genre}
            </span>
          </div>
          <Heading level={1} variant="white" className="mb-6 drop-shadow-lg">
            {story.title}
          </Heading>
          <Subtitle variant="light" className="mb-8 text-xl drop-shadow-lg">
            {story.subtitle}
          </Subtitle>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-200">
            <span>By {story.author}</span>
            <span>•</span>
            <span>{story.readTime}</span>
            <span>•</span>
            <span>{story.date}</span>
          </div>
        </div>
        
        {/* Decorative border */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 z-[7]" data-aos="fade-up" data-aos-delay="1000">
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
      </header>

      {/* Story Content */}
      <main className="py-16" role="main">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-2" aria-labelledby="story-title">
              <div className="mb-8">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Quick meta + back link */}
              <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                <div className="text-sm text-gray-600">
                  <span className="mr-3">By <span className="font-medium text-gray-800">{story.author}</span></span>
                  <span className="hidden sm:inline">•</span>
                  <span className="ml-3">{story.readTime}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="ml-3">{story.date}</span>
                </div>
                <Link href="/stories" className="text-sm text-purple-700 hover:text-purple-900 hover:underline">← Back to stories</Link>
              </div>
              
              <div className="relative">
                {/* Flower embroidery corners for content */}
                <div className="pointer-events-none select-none absolute -top-6 -left-6 w-16 h-16 text-purple-300/60">
                  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
                    <circle cx="50" cy="20" r="14" fill="currentColor"/>
                    <circle cx="80" cy="50" r="14" fill="currentColor"/>
                    <circle cx="50" cy="80" r="14" fill="currentColor"/>
                    <circle cx="20" cy="50" r="14" fill="currentColor"/>
                    <circle cx="75" cy="25" r="10" fill="currentColor"/>
                    <circle cx="25" cy="75" r="10" fill="currentColor"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  </svg>
                </div>
                <div className="pointer-events-none select-none absolute -bottom-6 -right-6 w-16 h-16 text-blue-300/60">
                  <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
                    <circle cx="50" cy="20" r="14" fill="currentColor"/>
                    <circle cx="80" cy="50" r="14" fill="currentColor"/>
                    <circle cx="50" cy="80" r="14" fill="currentColor"/>
                    <circle cx="20" cy="50" r="14" fill="currentColor"/>
                    <circle cx="75" cy="25" r="10" fill="currentColor"/>
                    <circle cx="25" cy="75" r="10" fill="currentColor"/>
                    <circle cx="50" cy="50" r="8" fill="currentColor"/>
                  </svg>
                </div>

                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: story.content }}
                />
              </div>
              
              {/* Tags and share */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 mb-6">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Written by <span className="font-medium text-gray-700">{story.author}</span>
                  </div>
                  <Button variant="outline">
                    Share Story
                  </Button>
                </div>
              </div>

              {/* Prev / Next navigation */}
              {(prevStory || nextStory) && (
                <nav className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Story navigation">
                  {prevStory && (
                    <Link href={`/stories/${prevStory.id}`} className="group block rounded-lg border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50/40 transition">
                      <div className="text-xs text-gray-500 mb-1">Previous</div>
                      <div className="font-medium text-gray-800 group-hover:text-purple-900 line-clamp-2">{prevStory.title}</div>
                    </Link>
                  )}
                  {nextStory && (
                    <Link href={`/stories/${nextStory.id}`} className="group block rounded-lg border border-gray-200 p-4 hover:border-purple-300 hover:bg-purple-50/40 transition sm:text-right">
                      <div className="text-xs text-gray-500 mb-1">Next</div>
                      <div className="font-medium text-gray-800 group-hover:text-purple-900 line-clamp-2">{nextStory.title}</div>
                    </Link>
                  )}
                </nav>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-8 lg:sticky lg:top-24 h-fit" aria-label="Sidebar">
              {/* Author Info */}
              <Card className="p-6">
                <Heading level={3} className="mb-4">
                  About the Author
                </Heading>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    SW
                  </div>
                  <div>
                    <div className="font-semibold">{story.author}</div>
                    <div className="text-sm text-gray-600">Chief Storyteller</div>
                  </div>
                </div>
                <BodyText className="text-sm text-gray-600">
                  Sarah Weaver is the founder of Story Weaver and a passionate storyteller 
                  who believes in the power of imagination to transform lives.
                </BodyText>
              </Card>

              {/* Related Stories */}
              <Card className="p-6">
                <Heading level={3} className="mb-4">
                  More Stories
                </Heading>
                <div className="space-y-4">
                  {stories
                    .filter(s => s.id !== story.id)
                    .slice(0, 3)
                    .map((relatedStory) => (
                      <div key={relatedStory.id} className="flex gap-3">
                        <img
                          src={relatedStory.image}
                          alt={relatedStory.title}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <div>
                          <div className="font-medium text-sm line-clamp-2">
                            {relatedStory.title}
                          </div>
                          <div className="text-xs text-gray-500">
                            {relatedStory.genre} • {relatedStory.readTime}
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Card>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50">
                <Heading level={3} className="mb-4">
                  Never Miss a Story
                </Heading>
                <BodyText className="text-sm text-gray-600 mb-4">
                  Subscribe to get notified when new stories are published
                </BodyText>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <Button size="small" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
