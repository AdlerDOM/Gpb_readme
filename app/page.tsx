export default function Home() {
  return (
    <main className="min-h-screen bg-black text-cyan-400 font-mono flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">

      {/* Hintergrund-Grid */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#00ffff_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />

      {/* Inhalt */}
      <div className="z-10 text-center max-w-2xl">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 tracking-wide">
          DOM<span className="text-white">()</span>
        </h1>
        <p className="text-lg sm:text-xl text-cyan-300 mb-10 tracking-tight">
          Cyberminimalist. Creator. Digital Native.
        </p>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-cyan-400 text-black px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-widest hover:bg-cyan-300 transition"
          >
            See Projects
          </a>
          <a
            href="mailto:dom@yourdomain.com"
            className="border border-cyan-400 px-6 py-3 rounded-md text-sm font-semibold uppercase tracking-widest hover:bg-cyan-400 hover:text-black transition"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-cyan-700 z-10">
        © {new Date().getFullYear()} Dom. All rights reserved.
      </footer>
    </main>
  );
}

