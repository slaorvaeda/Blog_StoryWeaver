"use client";

import React, { useState } from "react";
import { Button, Card, Heading, Subtitle, BodyText, ThreeJSBackground } from "@/components/ui";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        
        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <Heading level={1} variant="white" className="mb-6 drop-shadow-lg">
            Get in Touch
          </Heading>
          <Subtitle variant="light" className="mb-8 text-xl drop-shadow-lg">
            We&apos;d love to hear from you and share stories together
          </Subtitle>
        </div>
        
        {/* Decorative border */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 z-[7]" data-aos="fade-up" data-aos-delay="1000">
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
            .embroidery { width: 76px; height: 76px; opacity: 80; }
          }
        `}</style>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="p-8">
              <Heading level={2} className="mb-6">
                Send us a Message
              </Heading>
              <BodyText className="mb-6 text-gray-600 dark:text-gray-300">
                Have a story to share? Want to collaborate? Or just want to say hello? 
                We&apos;d love to hear from you!
              </BodyText>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                  >
                    <option value="">Select a subject</option>
                    <option value="Story Submission">Story Submission</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="Feedback">Feedback</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                    placeholder="Tell us your story or what's on your mind..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Heading level={3} className="mb-4">
                    Let&apos;s Connect
                </Heading>
                <BodyText className="text-gray-600 dark:text-gray-300">
                  Whether you&apos;re a fellow storyteller, a reader with feedback, or someone 
                                      who just wants to chat about stories, we&apos;re here for you.
                </BodyText>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">📍</div>
                  <div>
                    <Heading level={4} className="mb-1">
                      Where to Find Us
                    </Heading>
                    <BodyText className="text-gray-600">
                      While we&apos;re primarily digital storytellers, you can find us at various 
                      literary events and book fairs throughout the year.
                    </BodyText>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📧</div>
                  <div>
                    <Heading level={4} className="mb-1">
                      Email
                    </Heading>
                    <BodyText className="text-gray-600 dark:text-gray-300">
                      hello@storyweaver.com
                    </BodyText>
                    <BodyText className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      We typically respond within 24 hours
                    </BodyText>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-2xl">📱</div>
                  <div>
                    <Heading level={4} className="mb-1">
                      Social Media
                    </Heading>
                    <BodyText className="text-gray-600 dark:text-gray-300">
                      Follow us for story updates, writing tips, and behind-the-scenes content
                    </BodyText>
                    <div className="flex space-x-3 mt-2">
                      <a href="#" className="text-purple-600 hover:text-purple-700">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-purple-600 hover:text-purple-700">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Heading level={4} className="mb-4">
                  Response Time
                </Heading>
                <BodyText className="text-gray-600 dark:text-gray-300">
                  We aim to respond to all messages within 24 hours during weekdays. 
                  For story submissions, please allow up to 2 weeks for review.
                </BodyText>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-8">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">
              Frequently Asked Questions
            </Heading>
            <BodyText className="text-xl text-gray-600 dark:text-gray-300">
              Common questions about Story Weaver
            </BodyText>
          </div>

          <div className="space-y-8">
            <Card className="p-6">
              <Heading level={3} className="mb-3">
                How can I submit my own story?
              </Heading>
              <BodyText className="text-gray-600 dark:text-gray-300">
                We welcome story submissions from all writers! Use the contact form above 
                and select "Story Submission" as your subject. Please include a brief synopsis 
                and the first few paragraphs of your story.
              </BodyText>
            </Card>

            <Card className="p-6">
              <Heading level={3} className="mb-3">
                Do you accept all genres?
              </Heading>
              <BodyText className="text-gray-600 dark:text-gray-300">
                We're open to all genres including fantasy, adventure, romance, mystery, 
                science fiction, and contemporary fiction. The most important thing is that 
                your story is well-crafted and engaging.
              </BodyText>
            </Card>

            <Card className="p-6">
              <Heading level={3} className="mb-3">
                How often do you publish new stories?
              </Heading>
              <BodyText className="text-gray-600 dark:text-gray-300">
                We publish new stories every week, typically on Wednesdays and Saturdays. 
                Subscribe to our newsletter to never miss a new tale!
              </BodyText>
            </Card>

            <Card className="p-6">
              <Heading level={3} className="mb-3">
                Can I collaborate with Story Weaver?
              </Heading>
              <BodyText className="text-gray-600 dark:text-gray-300">
                Absolutely! We love collaborating with other storytellers, illustrators, 
                and creative professionals. Reach out through our contact form and let's 
                discuss how we can work together.
              </BodyText>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
