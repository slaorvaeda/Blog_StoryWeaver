import React, { useState } from "react";

export default function ArchiMagazinePreview() {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);

  const articles = [
    {
      id: 1,
      title: "Architecture",
      subtitle: "Architecture Magazine",
      text: "We decided to use a class diagram instead an object diagram since we wanted to show the classes our project consists of and what those classes were each capable of (methods). The object diagram would instead have shown the interaction between the classes at some point in run time.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      title: "Interior Design",
      subtitle: "Modern Interior Trends",
      text: "Interior design has shifted towards minimalism and sustainability. This trend focuses on clean lines, natural materials, and maximizing natural light.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      title: "Photography",
      subtitle: "Architectural Photography",
      text: "Photography in architecture captures the essence of design, light, and perspective. It is not just documentation but also storytelling through visuals.",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  const current = articles.find(a => a.id === page);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-inter">
      {/* Top bar */}
      <header className="max-w-[1200px] mx-auto px-8 py-8 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-serif tracking-tight">
            <div className="leading-none">Archi</div>
            <div className="-mt-1 leading-none">Magazine</div>
          </div>
          <div className="hidden md:flex items-center gap-8 ml-8 text-sm text-gray-500">
            <nav className="flex gap-6 uppercase tracking-widest">
              <a className="hover:text-black">Home</a>
              <a className="hover:text-black">Our Work</a>
              <a className="hover:text-black">Architecture</a>
              <a className="hover:text-black">Contact Us</a>
            </nav>
          </div>
        </div>

        <div className="text-sm text-gray-500 flex items-center gap-4">
          <span className="hidden sm:inline">Search</span>
          <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center">🔍</button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-[1400px] mx-auto px-8 py-12 grid grid-cols-12 gap-12">
        <aside className="col-span-1 hidden lg:flex flex-col items-center gap-6 justify-between text-xs text-gray-500">
          <div className="mt-8 rotate-0 space-y-3">
            <div>{String(page).padStart(2, "0")}</div>
          </div>

          <div className="flex flex-col items-center gap-4 transform -rotate-90 tracking-widest text-xs text-gray-400">
            <div>OUR SOCIALS</div>
          </div>
        </aside>

        {/* Main article area */}
        <section className="col-span-8">
          <div className="text-sm uppercase tracking-widest text-gray-400 mb-4">More about {current.title.toLowerCase()}</div>
          <h1 className="font-serif text-[90px] leading-tight">{current.title}</h1>

          <div className="mt-10 grid grid-cols-2 gap-14 items-start">
            {/* Image card */}
            <div className="relative">
              <div className="bg-white shadow-2xl shadow-gray-300/40 p-3 transform translate-y-6">
                <img
                  alt={current.title}
                  src={current.image}
                  className="w-full h-[480px] object-cover block"
                />
              </div>
              <div className="absolute -bottom-8 left-8 w-5/6 h-3 bg-gradient-to-r from-black/10 to-transparent rounded-sm" />
            </div>

            {/* Article text */}
            <div>
              <h2 className="font-serif text-3xl">{current.subtitle}</h2>
              <p className="mt-6 text-gray-500 leading-relaxed">{current.text}</p>

              <div className="mt-10">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-block bg-black text-white uppercase tracking-widest px-8 py-4 rounded-sm shadow"
                >
                  See Full Article
                </button>
              </div>

              <div className="mt-16 text-xs text-gray-400 flex items-center gap-6">
                <div>{String(page).padStart(2, "0")}</div>
                <div className="uppercase tracking-widest">Designed by <span className="text-black font-medium">Ar Shakir</span></div>
                <div className="ml-auto">2019</div>
              </div>
            </div>
          </div>
        </section>

        {/* Right sidebar */}
        <aside className="col-span-3">
          <div className="text-sm uppercase tracking-widest text-gray-700 mb-6">Next Articles</div>

          <div className="space-y-4">
            {articles.map((a) => (
              <button
                key={a.id}
                onClick={() => setPage(a.id)}
                className={`flex items-center gap-4 w-full p-3 border shadow-sm ${page === a.id ? "bg-black text-white" : "bg-white text-gray-700"}`}
              >
                <div className="w-20 h-14 bg-gray-200 flex-shrink-0"></div>
                <div className="text-left">
                  <div className="uppercase tracking-wider text-sm">{a.title}</div>
                  <div className="text-xs">Article {a.id}</div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        <div className="col-span-12 mt-8 flex items-center justify-between text-xs text-gray-400">
          <div>{String(page).padStart(2, "0")}</div>
          <div>— 2019</div>
        </div>
      </main>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white max-w-2xl w-full mx-4 p-8 rounded shadow">
            <button className="ml-auto block text-sm text-gray-500 mb-4" onClick={() => setOpen(false)}>
              Close
            </button>
            <h3 className="font-serif text-3xl mb-4">Full Article (Preview)</h3>
            <p className="text-gray-600 leading-relaxed">This is a static preview of the article for page {page}. Replace this block with real content when integrating into your CMS.</p>
          </div>
        </div>
      )}
    </div>
  );
}
