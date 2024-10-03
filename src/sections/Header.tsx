'use client';

export default function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate the offset position to account for the header height
      const header = document.querySelector('header');
      if (header) {
        const headerOffset = header.offsetHeight;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset; // Adjust scroll position

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth' // Smooth scrolling
        });
      }
    }
  };

  return (
    <header className="sticky top-0 z-20">
      <div className="flex justify-center items-center py-6">
        <nav className="flex gap-2 p-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <button onClick={() => scrollToSection('info')} className="nav-item">Home</button>
          <button onClick={() => scrollToSection('latest')} className="nav-item">Latest</button>
          <button onClick={() => scrollToSection('games')} className="nav-item">Games</button>
          <button onClick={() => scrollToSection('assets')} className="nav-item">Assets</button>
          <button onClick={() => scrollToSection('contact')} className="nav-item">Contact</button>
        </nav>
      </div>
    </header>
  );
};
