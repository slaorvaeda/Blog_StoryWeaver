"use client";
import React from "react";
import Link from "next/link";
import { Button, Card, Heading, Subtitle, BodyText, ImageCard, ThreeJSBackground } from "@/components/ui";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
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
        
        <div className="relative z-10 max-w-6xl mx-auto px-8 text-center">
          <Heading level={1} variant="white" className="mb-6 drop-shadow-lg">
            About Story Weaver
          </Heading>
          <Subtitle variant="light" className="mb-8 text-xl drop-shadow-lg">
            Weaving tales that transport readers to worlds beyond imagination
          </Subtitle>
        </div>
        
        {/* Decorative border */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-[7]" data-aos="fade-up" data-aos-delay="100">
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

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Heading level={2} className="mb-6">
                Our Story
              </Heading>
              <BodyText className="mb-6 text-lg">
                Story Weaver was born from a simple belief: that every person has a story worth telling, 
                and every reader deserves to be transported to worlds beyond their imagination.
              </BodyText>
              <BodyText className="mb-8">
                Founded by Sarah Weaver, a passionate storyteller and former librarian, this blog has grown 
                from a personal collection of tales into a thriving community of story lovers. We believe that 
                stories have the power to heal, inspire, and connect us across time and space.
              </BodyText>
              <Link href="/stories">
                <Button>
                  Explore Our Stories
                </Button>
              </Link>
            </div>
            <div>
              <ImageCard
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Old library with books"
                className="w-full h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <Heading level={2} className="mb-6">
            Our Mission
          </Heading>
          <BodyText className="text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
            To create a world where imagination knows no bounds, where every reader can find stories 
            that speak to their soul, and where the art of storytelling continues to thrive and evolve.
          </BodyText>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="text-4xl mb-4">✨</div>
              <Heading level={3} className="mb-4">
                Inspire
              </Heading>
              <BodyText>
                We craft stories that ignite the imagination and inspire readers to dream bigger, 
                think deeper, and believe in the impossible.
              </BodyText>
            </Card>

            <Card className="text-center p-8">
              <div className="text-4xl mb-4">🌍</div>
              <Heading level={3} className="mb-4">
                Connect
              </Heading>
              <BodyText>
                Through storytelling, we build bridges between cultures, generations, and perspectives, 
                creating a community united by the love of great tales.
              </BodyText>
            </Card>

            <Card className="text-center p-8">
              <div className="text-4xl mb-4">📚</div>
              <Heading level={3} className="mb-4">
                Preserve
              </Heading>
              <BodyText>
                We honor the ancient tradition of storytelling while embracing modern narratives, 
                ensuring that the art form continues to evolve and thrive.
              </BodyText>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Meet Our Team
            </Heading>
            <BodyText className="text-xl text-gray-600">
              The creative minds behind Story Weaver
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                SW
              </div>
              <Heading level={3} className="mb-2">
                Sarah Weaver
              </Heading>
              <BodyText className="text-gray-600 mb-3">
                Founder & Chief Storyteller
              </BodyText>
              <BodyText className="text-sm text-gray-500">
                A former librarian with a passion for weaving tales that transport readers to magical worlds. 
                Sarah believes every story has the power to change a life.
              </BodyText>
            </Card>

            <Card className="text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                MJ
              </div>
              <Heading level={3} className="mb-2">
                Marcus Johnson
              </Heading>
              <BodyText className="text-gray-600 mb-3">
                Creative Director
              </BodyText>
              <BodyText className="text-sm text-gray-500">
                A visual storyteller who brings our tales to life through stunning imagery and creative design. 
                Marcus ensures every story is a feast for both the mind and the eyes.
              </BodyText>
            </Card>

            <Card className="text-center p-8">
              <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                EC
              </div>
              <Heading level={3} className="mb-2">
                Emma Chen
              </Heading>
              <BodyText className="text-gray-600 mb-3">
                Story Editor
              </BodyText>
              <BodyText className="text-sm text-gray-500">
                With a keen eye for detail and a heart for great storytelling, Emma helps polish every tale 
                until it shines with the brilliance it deserves.
              </BodyText>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Our Values
            </Heading>
            <BodyText className="text-xl text-gray-600">
              The principles that guide our storytelling
            </BodyText>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">🎭</div>
                <div>
                  <Heading level={4} className="mb-2">
                    Authenticity
                  </Heading>
                  <BodyText className="text-gray-600">
                    Every story we tell comes from a place of truth and genuine emotion. 
                    We believe in the power of authentic storytelling to create real connections.
                  </BodyText>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🌈</div>
                <div>
                  <Heading level={4} className="mb-2">
                    Diversity
                  </Heading>
                  <BodyText className="text-gray-600">
                    We celebrate stories from all walks of life, ensuring that every reader 
                    can find characters and worlds that reflect their own experiences.
                  </BodyText>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">💡</div>
                <div>
                  <Heading level={4} className="mb-2">
                    Innovation
                  </Heading>
                  <BodyText className="text-gray-600">
                    We constantly push the boundaries of storytelling, exploring new formats, 
                    styles, and ways to engage our readers in meaningful ways.
                  </BodyText>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <Heading level={4} className="mb-2">
                    Community
                  </Heading>
                  <BodyText className="text-gray-600">
                    Story Weaver is more than a blog—it&apos;s a community of storytellers and 
                    story lovers who support and inspire each other.
                  </BodyText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <Heading level={2} className="mb-6">
            Join Our Story Circle
          </Heading>
          <BodyText className="mb-8 text-lg text-gray-600 dark:text-gray-300">
            Ready to dive into worlds of imagination? Start your journey with our stories today.
          </BodyText>
          <div className="flex gap-4 justify-center">
            <Link href="/stories">
              <Button size="large">
                Explore Stories
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="large">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
