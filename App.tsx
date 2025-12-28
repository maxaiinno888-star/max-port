
import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, BIO, PROFILE_PHOTO, EVENTS, ALL_EVENTS } from './constants';
import { PlayCircle, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const revealRefs = useRef<(HTMLElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    revealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [showAllEvents]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = offsetWidth; 
      const maxScrollLeft = scrollWidth - offsetWidth;

      if (direction === 'left') {
        if (scrollLeft <= 20) {
          scrollRef.current.scrollTo({
            left: maxScrollLeft,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
          });
        }
      } else {
        if (scrollLeft >= maxScrollLeft - 20) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scrollRef.current.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  if (showAllEvents) {
    return (
      <div className="min-h-screen bg-white selection:bg-black selection:text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md py-6 border-b border-zinc-300">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <button onClick={() => setShowAllEvents(false)} className="flex items-center gap-4 group">
              <ArrowLeft size={24} strokeWidth={1} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-bold text-xs uppercase tracking-[0.4em]">Back to Portfolio</span>
            </button>
            <h1 className="font-black text-xs uppercase tracking-[0.4em]">COMPLETE EVENT HISTORY</h1>
          </div>
        </header>

        <section className="pt-40 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                Global Projects <br />
                <span className="text-zinc-300">Archive.</span>
              </h2>
            </div>

            <div className="border border-black p-8 md:p-16">
               <div className="space-y-0">
                {ALL_EVENTS.map((event, idx) => (
                  <a 
                    key={idx} 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-10 ${idx !== ALL_EVENTS.length - 1 ? 'border-b border-zinc-300' : ''} hover:bg-zinc-50 transition-all duration-300 px-4 -mx-4`}
                  >
                    <div className="flex items-center gap-12 md:gap-24 flex-1">
                      <span className="text-base font-bold text-zinc-900 w-16 flex-shrink-0 tracking-tight">{event.year}</span>
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-1 transition-transform">
                          {event.title}
                        </h3>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-zinc-100 text-zinc-500 px-4 py-1.5 rounded-full whitespace-nowrap">
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-zinc-500 group-hover:text-zinc-900 transition-colors animate-bling">
                      <PlayCircle size={28} strokeWidth={1.2} />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      <Header />
      
      {/* Hero Section (Page 1 Intro) */}
      <section className="pt-56 pb-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="reveal" ref={addToRefs}>
            <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center mb-24">
               <div className="relative lg:-mt-12">
                 <div className="w-40 h-40 md:w-56 md:h-56 rounded-none overflow-hidden bg-zinc-100 border border-black shadow-sm">
                    <img 
                      src={PROFILE_PHOTO} 
                      alt={BIO.name}
                      className="object-cover w-full h-full"
                    />
                 </div>
                 <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-white border border-black flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                 </div>
               </div>
               
               <div className="flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 mb-8 flex items-start md:items-center gap-4 max-w-2xl leading-relaxed">
                    <span className="w-12 h-[1px] bg-zinc-400 mt-1.5 md:mt-0 flex-shrink-0"></span>
                    International Profile: Globally mobile professional based in Hong Kong, with business experience across 20+ countries. Willing to relocate.
                  </p>
                  <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8] mb-12 text-zinc-900">
                    Strategy <br />
                    <span className="text-zinc-500">& Innovation.</span>
                  </h1>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Portfolio Section (Page 2) */}
      <section id="work" className="py-40 px-6 border-y border-black bg-zinc-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 reveal" ref={addToRefs}>
            <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter leading-none">
              AI Portfolio
            </h2>
          </div>

          <div className="relative group">
            <button 
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-5 bg-white border border-black shadow-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 active:scale-90"
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>

            <div 
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-12"
            >
              {PROJECTS.map((project) => (
                <div 
                  key={project.id} 
                  className="min-w-full md:min-w-[calc(33.333%-1.35rem)] snap-start reveal" 
                  ref={addToRefs}
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>

            <button 
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-5 bg-white border border-black shadow-xl hover:bg-zinc-900 hover:text-white transition-all duration-300 active:scale-90"
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>
          </div>
        </div>
      </section>

      {/* Events Ledger Section (Page 3) */}
      <section id="events" className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 reveal flex flex-col md:flex-row justify-between items-start md:items-end gap-8" ref={addToRefs}>
            <div>
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
                HEAD OF GLOBAL EVENTS
              </h2>
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-400 italic">
                CHRONOLOGICAL HISTORY OF EVENTS LED
              </p>
            </div>
          </div>

          <div className="reveal border border-black relative bg-white shadow-sm overflow-hidden" ref={addToRefs}>
            <div className="pt-10 px-8 md:px-16">
              <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-widest">Featured :</p>
            </div>
            
            <div className="p-8 md:p-16 pt-4 md:pt-4">
              <div className="space-y-0">
                {EVENTS.map((event, idx) => (
                  <a 
                    key={idx} 
                    href={event.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`group flex flex-col md:flex-row items-start md:items-center justify-between py-10 ${idx !== EVENTS.length - 1 ? 'border-b border-zinc-300' : ''} hover:bg-zinc-50/50 transition-all duration-300 px-4 -mx-4`}
                  >
                    <div className="flex items-center gap-12 md:gap-24 flex-1">
                      <span className="text-base font-bold text-zinc-900 w-16 flex-shrink-0 tracking-tight">{event.year}</span>
                      <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-1 transition-transform">
                          {event.title}
                        </h3>
                        <span className="text-[9px] font-bold uppercase tracking-[0.2em] bg-zinc-100 text-zinc-500 px-4 py-1.5 rounded-full whitespace-nowrap">
                          {event.location}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-zinc-500 group-hover:text-zinc-900 transition-colors animate-bling">
                      <PlayCircle size={28} strokeWidth={1.2} />
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <button 
                  onClick={() => setShowAllEvents(true)}
                  className="px-12 py-4 bg-white border border-black text-xs font-black uppercase tracking-[0.4em] hover:bg-zinc-900 hover:text-white transition-all active:scale-95"
                >
                  More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section (Page 4) */}
      <section id="about" className="py-40 px-6 bg-zinc-100 border-t border-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 reveal" ref={addToRefs}>
              <div className="aspect-[4/5] overflow-hidden bg-white shadow-sm mb-12 relative border border-black">
                <img src={PROFILE_PHOTO} alt={BIO.name} className="object-cover w-full h-full" />
              </div>
              <div className="space-y-6">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900">EDUCATION</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 leading-loose">HKUST — B.ENG ELECTRONIC ENGINEERING</p>
              </div>
            </div>
            
            <div className="lg:col-span-8 reveal" ref={addToRefs}>
              <div className="mb-16">
                <p className="text-xl md:text-2xl font-bold leading-relaxed text-zinc-900 tracking-tight max-w-2xl opacity-90">
                  {BIO.about}
                </p>
              </div>

              <div className="flex flex-col md:flex-row gap-8 lg:gap-16 mb-24 border-b border-zinc-400 pb-12">
                <div className="space-y-4 max-w-md">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">AI & Tech</h3>
                  <div className="flex flex-wrap gap-2">
                    {[...BIO.skills.ai, ...BIO.skills.tech].map(s => (
                      <span key={s} className="text-[9px] font-bold uppercase tracking-widest text-zinc-900 border border-black bg-white px-4 py-2">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.4em] text-black">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {BIO.skills.marketing.map(s => (
                      <span key={s} className="text-[9px] font-bold uppercase tracking-widest text-white bg-zinc-900 px-4 py-2">{s}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-900">EXPERIENCE</h3>
                <div className="space-y-0">
                  {BIO.experience.map((exp, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:justify-between items-start md:items-center py-10 border-b border-zinc-300 group">
                      <div className="flex-1">
                        <h4 className="font-black text-xl md:text-2xl uppercase leading-none tracking-tighter text-zinc-900 mb-2 group-hover:translate-x-1 transition-transform">{exp.company}</h4>
                        <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest italic">{exp.role}</p>
                      </div>
                      <span className="text-zinc-400 text-[10px] font-bold uppercase tracking-[0.3em] mt-4 md:mt-0">{exp.period}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-56 px-6 bg-black text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="reveal text-center" ref={addToRefs}>
            <p className="text-[9px] font-bold uppercase tracking-[0.6em] text-zinc-600 mb-20">Available for Collaboration</p>
            <a href={`mailto:${BIO.email}`} className="text-4xl md:text-8xl font-black tracking-tighter block hover:text-zinc-400 transition-all duration-700 break-all leading-none">
              {BIO.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
