'use client'

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { 
  MapPin, Phone, Instagram, MoveUpRight, 
  Clock, Zap, Shield, Target, Activity, ChevronRight, ChevronLeft,
  Plus, Minus, Quote, HelpCircle, MessageCircle, Menu, X
} from 'lucide-react';

// ==========================================
// DATA CONFIG (MÁXIMA CLARIDAD)
// ==========================================
const SCHEDULE = [
  { time: "10:00 - 11:00", days: ["—", "—", "—", "—", "—", "Cadetes"] },
  { time: "11:00 - 12:00", days: ["—", "—", "—", "—", "—", "Raion Cubs"] },
  { time: "11:30 - 12:30", days: ["BJJ (Gi)", "BJJ (No-Gi)", "BJJ (Gi)", "BJJ (No-Gi)", "BJJ (Gi)", "—"] },
  { time: "17:00 - 18:00", days: ["Cadetes", "Cadetes", "Cadetes", "Cadetes", "—", "—"] },
  { time: "20:00", days: ["BJJ (Gi)", "BJJ (No-Gi)", "BJJ (Gi)", "BJJ (No-Gi)", "BJJ (Gi) [19:00]", "—"] },
];

const PROGRAMS = [
  { title: "RAION CUBS", desc: "Disciplina y valores fundamentales en un entorno seguro y divertido.", img: "/img/NiñosGrupal.png" },
  { title: "CADETES", desc: "Desarrollo técnico y mental avanzado para la próxima generación.", img: "/img/juvenil2.png" },
  { title: "ADULTOS", desc: "Jiu-Jitsu de clase mundial sin concesiones. Técnica pura para todos los niveles.", img: "/img/Adultos2.png" }
];

const REVIEWS = [
  { q: "Entrenar en Raion ha sido transformador. Cada clase me motiva a ser mejor.", a: "Francisco Aracena" },
  { q: "Raion no es solo una academia, es un lugar donde se forma carácter.", a: "Matías Errázuriz" },
  { q: "El nivel técnico es altísimo y el ambiente es insuperable.", a: "Nicolás Castillo" },
  { q: "Mi hijo solía ser tímido, pero ahora se nota más seguro y feliz.", a: "Jorge H., Padre" },
  { q: "Desde que mi hija comenzó en Raion, su confianza ha crecido muchísimo.", a: "María G., Madre" },
  { q: "Encontré respeto, desafío y camaradería. Aquí se crece realmente.", a: "Max O'krey" }
];

const FAQS = [
  { q: "¿Necesito experiencia previa?", a: "No. Tenemos programas diseñados específicamente para personas que empiezan desde cero absoluto." },
  { q: "¿Es seguro para los niños?", a: "Totalmente. En Raion Cubs nos enfocamos en el control, la disciplina y el respeto." },
  { q: "¿Qué equipo necesito?", a: "Ropa deportiva cómoda para tu primera clase. Nosotros te guiaremos después." }
];

const WEEKDAYS = ["LUN", "MAR", "MIE", "JUE", "VIE", "SAB"];

const FAQItem = ({ faq }: { faq: typeof FAQS[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-black/5 py-4 md:py-6 text-black">
      <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left group text-black">
        <span className="text-lg md:text-xl font-bold uppercase italic tracking-tighter group-hover:text-[#E50000] transition-colors">{faq.q}</span>
        {isOpen ? <Minus size={18} className="text-[#E50000]" /> : <Plus size={18} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <p className="mt-4 text-black/50 italic font-medium leading-relaxed text-sm md:text-base">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function RaionFinalEdition() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [activeDay, setActiveDay] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const handleWhatsApp = () => {
    setIsMenuOpen(false);
    window.open('https://wa.me/56996787321', '_blank');
  };

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setLoading(false), 3000);
  }, []);

  const nextDay = () => setActiveDay((prev) => (prev + 1) % 6);
  const prevDay = () => setActiveDay((prev) => (prev === 0 ? 5 : prev - 1));

  if (!mounted) return null;

  return (
    <div className="bg-[#050505] text-white min-h-screen selection:bg-[#E50000] selection:text-white font-sans overflow-x-hidden">
      
      {/* --- PRELOADER --- */}
      <AnimatePresence>
        {loading && (
          <motion.div exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }} className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden text-white">
            <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale brightness-50">
              <source src="/videos/promo.mp4" type="video/mp4" />
            </video>
            <div className="relative z-10 text-center">
              <img src="/img/Logo_Raion.png" className="h-32 md:h-48 w-auto mx-auto mb-8 drop-shadow-[0_0_30px_#E50000]" alt="Logo" />
              <div className="h-[2px] bg-[#E50000] w-64 mx-auto mb-6 shadow-[0_0_15px_#E50000]" />
              <h2 className="font-display text-2xl uppercase tracking-[0.4em] font-black italic text-white leading-none">RAION BJJ</h2>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={loading ? "h-screen overflow-hidden" : "relative"}>
        
        {/* --- HEADER --- */}
        <header className="fixed top-0 w-full z-50 bg-[#050505] border-b border-white/5 shadow-2xl transition-all duration-300">
          <div className="max-w-[1600px] mx-auto py-6 px-6 md:px-12 flex justify-between items-center">
            <div className="flex items-center gap-4 md:gap-6 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
               <img src="/img/Logo_Raion.png" className="h-10 md:h-14 w-auto group-hover:scale-110 transition-transform duration-500" alt="Raion" />
               <div className="flex flex-col">
                  <span className="font-display text-2xl md:text-3xl font-black tracking-tighter leading-none italic uppercase text-white">RAION BJJ</span>
                  <span className="text-[7px] md:text-[9px] tracking-[0.5em] uppercase font-bold text-[#E50000] mt-1">Elite Training Academy</span>
               </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-16">
               <div className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-white/50">
                  {[
                    { label: 'Filosofía', href: '#about' },
                    { label: 'Programas', href: '#programs' },
                    { label: 'Horarios', href: '#schedule' },
                    { label: 'FAQs', href: '#faqs' },
                    { label: 'Contacto', href: '#contact' }
                  ].map((item) => (
                    <a key={item.label} href={item.href} className="hover:text-[#E50000] transition-colors relative group py-2">
                       {item.label}
                       <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#E50000] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  ))}
               </div>
               <div className="flex items-center gap-6">
                 <a href="https://instagram.com/raion_bjj" target="_blank" className="text-white/50 hover:text-[#E50000] transition-colors">
                    <Instagram size={20} />
                 </a>
                 <button 
                   onClick={handleWhatsApp} 
                   className="bg-[#E50000] text-white px-10 py-4 rounded-full font-black uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-white hover:text-black active:scale-95 shadow-lg"
                 >
                   AGENDAR CUPO
                 </button>
               </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="lg:hidden text-white p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu Panel */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                className="fixed inset-0 bg-black z-[100] lg:hidden flex flex-col p-8 gap-6 text-white pt-24 shadow-none"
                style={{ backgroundColor: '#000000' }}
              >
                <button className="absolute top-6 right-6 text-white p-2" onClick={() => setIsMenuOpen(false)}>
                  <X size={24} />
                </button>
                {[
                  { label: 'Filosofía', href: '#about' },
                  { label: 'Programas', href: '#programs' },
                  { label: 'Horarios', href: '#schedule' },
                  { label: 'FAQs', href: '#faqs' },
                  { label: 'Contacto', href: '#contact' }
                ].map((item) => (
                  <a key={item.label} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-base font-display font-black uppercase italic tracking-widest text-white hover:text-[#E50000] transition-colors border-b border-white/10 pb-2">
                    {item.label}
                  </a>
                ))}
                <a href="https://instagram.com/raion_bjj" target="_blank" onClick={() => setIsMenuOpen(false)} className="text-base font-display font-black uppercase italic tracking-widest text-white hover:text-[#E50000] transition-colors border-b border-white/10 pb-2 flex items-center gap-3">
                   INSTAGRAM
                </a>
                <div className="mt-auto flex flex-col gap-4">
                  <button onClick={handleWhatsApp} className="bg-[#E50000] text-white py-3 px-8 font-black uppercase tracking-[0.2em] text-[10px] rounded-full shadow-xl w-fit hover:bg-white hover:text-black transition-all">AGENDAR MI CUPO</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-[#E50000] z-[60] origin-left shadow-[0_0_10px_#FF0000]" style={{ scaleX }} />

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-20 text-white">
          <div className="absolute inset-0 z-0">
             <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale brightness-[0.2] contrast-[1.1] scale-105">
               <source src="/videos/promo.mp4" type="video/mp4" />
             </video>
             <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl text-white">
             <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                <span className="text-[#E50000] font-black text-[10px] md:text-xs tracking-[0.6em] uppercase mb-8 block italic">Phase 01 / Initiating Dominance</span>
                <h1 className="font-display text-5xl md:text-8xl lg:text-[10vw] uppercase italic font-black leading-[0.8] mb-12 tracking-tighter text-white leading-none">
                   EL ARTE <br /> <span className="text-transparent" style={{ WebkitTextStroke: "1px #FFFFFF" }}>DE LA</span> <br /> <span className="text-[#E50000]">DISCIPLINA</span>
                </h1>
                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center mt-16 text-white">
                   <p className="text-base md:text-2xl font-light italic text-white/40 max-w-xl leading-relaxed border-l border-[#E50000] pl-6 md:pl-8 text-white/70">
                      No vendemos clases. Forjamos el carácter a través del rigor técnico y la mentalidad inquebrantable. Descubre tu potencial.
                   </p>
                   <button onClick={handleWhatsApp} className="group bg-white text-black px-10 py-5 md:px-12 md:py-6 rounded-full font-black uppercase text-[10px] md:text-xs tracking-[0.4em] flex items-center gap-4 hover:bg-[#E50000] hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]">
                      COMENZAR EL VIAJE <ChevronRight size={18} />
                   </button>
                </div>
             </motion.div>
          </div>
        </section>

        {/* --- BRAND VISUAL (MOBILE ONLY) --- */}
        <section className="bg-white pt-16 pb-8 md:hidden flex flex-col justify-center items-center overflow-hidden">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative"
           >
              <img 
                src="/img/raionbjj.png" 
                className="w-full max-w-[160px] h-auto object-contain drop-shadow-[0_10px_40px_rgba(0,0,0,0.05)] mx-auto" 
                alt="Raion BJJ Official Seal" 
              />
           </motion.div>
        </section>

        {/* --- PHILOSOPHY --- */}
        <section id="about" className="pt-8 md:pt-40 pb-24 md:pb-40 px-6 md:px-24 bg-white text-black">
           <div className="max-w-[1600px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                 <div className="md:col-span-8 bg-[#F5F5F5] border-0 md:border-2 border-[#E50000] rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 flex flex-col justify-between group overflow-hidden relative shadow-xl text-black">
                    <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:opacity-10 transition-opacity text-black"><img src="/img/icono_leon_sabio.png" className="w-80" alt="Icon" /></div>
                    <span className="text-[#E50000] font-black text-[10px] tracking-[0.5em] mb-12 block uppercase text-black">01 / MANIFIESTO</span>
                    
                    <div className="flex flex-col items-start gap-6 mb-12">
                       <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-black uppercase italic leading-[0.9] tracking-tighter text-black">
                          EL TATAMI <br/> <span className="text-[#E50000]">NO JUZGA,</span> <br/> CELEBRA.
                       </h2>
                    </div>

                    <p className="text-lg md:text-3xl font-light italic max-w-2xl leading-relaxed text-black/60">
                       Un espacio diseñado para que dejes tus dudas en la puerta y descubras tu verdadero potencial desde el primer día.
                    </p>
                 </div>
                 <div className="md:col-span-4 flex flex-col gap-6 text-black">
                    <div className="flex-1 bg-white border-2 border-black/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#E50000] hover:text-[#E50000] transition-all duration-700 shadow-lg text-black group active:border-[#E50000]">
                       <Shield size={32} className="mb-6 text-[#E50000] group-hover:scale-110 group-hover:animate-pulse group-active:animate-pulse transition-all" />
                       <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-tight">CONFIANZA <br/> & CONTROL</h3>
                    </div>
                    <div className="flex-1 bg-white border-2 border-black/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#E50000] hover:text-[#E50000] transition-all duration-700 shadow-lg text-black group active:border-[#E50000]">
                       <Target size={32} className="mb-6 text-[#E50000] group-hover:scale-110 group-hover:animate-pulse group-active:animate-pulse transition-all" />
                       <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-tight">VALORES <br/> & CARÁCTER</h3>
                    </div>
                    <div className="flex-1 bg-white border-2 border-black/5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between hover:border-[#E50000] hover:text-[#E50000] transition-all duration-700 shadow-lg text-black group active:border-[#E50000]">
                       <Activity size={32} className="mb-6 text-[#E50000] group-hover:scale-110 group-hover:animate-pulse group-active:animate-pulse transition-all" />
                       <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-tight">CLASES EN <br/> INGLÉS Y ESPAÑOL</h3>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- PROGRAMAS --- */}
        <section id="programs" className="bg-black text-white py-24 md:py-40 border-b border-white/5">
           <div className="max-w-[1600px] mx-auto px-6 md:px-24 mb-16 md:mb-24 text-center md:text-left">
              <span className="text-[#E50000] font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block italic">Sistemas de Combate</span>
              <h2 className="font-display text-4xl md:text-8xl lg:text-[10rem] uppercase italic font-black leading-none tracking-tighter text-white">PROGRAMAS</h2>
           </div>
           <div className="space-y-8 px-4 md:px-8 max-w-[1600px] mx-auto">
              {PROGRAMS.map((prog, i) => (
                <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} key={i} className="group relative overflow-hidden bg-[#0A0A0A] rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl text-white">
                   <div className="relative aspect-[4/5] md:aspect-[21/9] w-full">
                      <img src={prog.img} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={prog.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-0 left-0 w-full p-6 md:p-24 text-white">
                         <h4 className="font-display text-3xl md:text-8xl uppercase italic text-white mb-2 md:mb-6 group-hover:text-[#E50000] transition-colors duration-500 leading-none">{prog.title}</h4>
                         <p className="text-[10px] md:text-xl text-white/50 max-w-2xl italic font-light leading-relaxed">{prog.desc}</p>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </section>

        {/* --- INSTRUCTOR: EL LÍDER --- */}
        <section id="instructors" className="py-24 md:py-40 bg-black text-white relative overflow-hidden">
           <div className="max-w-[1600px] mx-auto px-6 md:px-24">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <motion.div 
                   initial={{ opacity: 0, x: -50 }} 
                   whileInView={{ opacity: 1, x: 0 }} 
                   viewport={{ once: true }}
                   className="relative group"
                 >
                    <div className="absolute -inset-4 bg-[#E50000]/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                    <img 
                      src="/img/Foto Perfil - completa.jpeg" 
                      className="relative rounded-[3rem] w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border border-white/5" 
                      alt="Prof. Pablo León" 
                    />
                    <div className="absolute bottom-6 left-6 right-6 md:right-auto bg-black/60 backdrop-blur-2xl p-6 md:p-10 border border-white/10 rounded-[2.5rem] shadow-2xl group-hover:border-[#E50000]/50 transition-all duration-700">
                       <div className="flex items-center gap-4 mb-3">
                          <div className="h-[2px] w-8 bg-[#E50000]" />
                          <span className="text-[#E50000] font-black text-[10px] tracking-[0.4em] uppercase italic">Black Belt</span>
                          <div className="h-[2px] w-8 bg-[#E50000]" />
                       </div>
                       <h3 className="text-2xl md:text-4xl font-display font-black italic uppercase tracking-tighter text-white">Prof. Pablo León</h3>
                       <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mt-2">Fundador & Headcoach RaionBjj</p>
                    </div>
                 </motion.div>
                 
                 <div className="space-y-12">
                    <div>
                       <span className="text-[#E50000] font-bold uppercase tracking-[0.5em] text-[10px] mb-6 block italic">Dirección Técnica</span>
                       <h2 className="font-display text-5xl md:text-7xl lg:text-8xl uppercase italic font-black leading-[0.9] tracking-tighter mb-10">CONOCE AL <br/> <span className="text-[#E50000]">LÍDER.</span></h2>
                       <p className="text-xl md:text-2xl text-white/50 italic font-light leading-relaxed border-l-2 border-[#E50000] pl-8">
                          "Mi objetivo es crear un ambiente donde la técnica se perfeccione a través de la repetición inteligente y la camaradería. Cada estudiante es un proyecto único."
                       </p>
                    </div>
                    <div className="space-y-6 text-white/40 font-light italic text-lg leading-relaxed">
                       <p>El Profesor Pablo León, cinturón negro con más de una década de dedicación al Brazilian Jiu-Jitsu, destaca por su precisión técnica quirúrgica y una capacidad innata para transmitir la esencia pura del arte suave.</p>
                       <p>Liderando Raion BJJ – orgullosa filial de Focus Academy – con la firme misión de guiar a cada estudiante en el descubrimiento y desarrollo de su máximo potencial técnico y mental.</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* --- SCHEDULE: SMART RESPONSIVE --- */}
        <section id="schedule" className="py-24 md:py-40 bg-white text-black relative">
           <div className="max-w-7xl mx-auto px-6 md:px-24 text-center md:text-left mb-16 md:mb-24">
              <h2 className="font-display text-5xl md:text-8xl uppercase italic font-black tracking-tighter leading-none text-black">WAR <br/> <span className="text-[#E50000]">ROOM</span></h2>
           </div>

           {/* Desktop View */}
           <div className="max-w-[1600px] mx-auto px-4 md:px-24 hidden lg:block overflow-x-auto no-scrollbar text-black">
              <div className="min-w-[1000px] border-[2px] border-black rounded-[3rem] overflow-hidden shadow-2xl text-black">
                 <div className="grid grid-cols-7 bg-black text-white font-black text-[10px] tracking-[0.3em] uppercase italic">
                    <div className="p-8 border-r border-white/10">Bloque</div>
                    {WEEKDAYS.map(d => <div key={d} className="p-8 text-center border-r border-white/10">{d}</div>)}
                 </div>
                 {SCHEDULE.map((row, i) => (
                    <div key={i} className="grid grid-cols-7 border-b border-black/5 hover:bg-[#F5F5F5] transition-colors group">
                       <div className="p-10 font-black italic text-lg bg-black/[0.02] border-r border-black/5">{row.time}</div>
                       {row.days.map((c, j) => (
                          <div key={j} className="p-10 border-r border-black/5 flex items-center justify-center text-center">
                             <span className={`text-[11px] font-black uppercase tracking-widest italic ${c === '—' ? 'opacity-5' : c.includes('No-Gi') ? 'text-black/40' : 'text-[#E50000]'}`}>{c}</span>
                          </div>
                       ))}
                    </div>
                 ))}
              </div>
           </div>

           {/* Mobile View */}
           <div className="lg:hidden px-6">
              <div className="flex justify-between items-center mb-10 bg-black text-white p-6 rounded-[2rem] shadow-xl">
                 <button onClick={prevDay} className="p-2 hover:text-[#E50000] transition-colors"><ChevronLeft size={32} /></button>
                 <div className="text-center">
                    <span className="text-[10px] font-black tracking-[0.4em] opacity-50 uppercase mb-2 block italic text-white/50">Viendo día</span>
                    <h4 className="text-4xl font-display font-black italic tracking-tighter text-[#E50000]">{WEEKDAYS[activeDay]}</h4>
                 </div>
                 <button onClick={nextDay} className="p-2 hover:text-[#E50000] transition-colors"><ChevronRight size={32} /></button>
              </div>
              <div className="space-y-4">
                 {SCHEDULE.map((row, i) => {
                    const isFriday = activeDay === 4;
                    const isNightBlock = row.time === "20:00";
                    const displayTime = (isFriday && isNightBlock) ? "19:00" : row.time;
                    const displayDiscipline = (isFriday && isNightBlock) 
                       ? row.days[activeDay].replace(/\[.*\]|\(.*\)/g, "").trim() 
                       : row.days[activeDay];

                    return row.days[activeDay] !== '—' && (
                       <motion.div key={i} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between p-8 bg-[#F5F5F5] border border-black/5 rounded-[2.5rem] shadow-sm">
                          <div className="flex flex-col gap-1">
                             <span className="text-[10px] font-black uppercase tracking-widest opacity-40 italic text-black/40">Hora</span>
                             <span className="text-xl font-black italic tracking-tighter text-black">{displayTime}</span>
                          </div>
                          <div className="text-right">
                             <span className="text-[10px] font-black uppercase tracking-widest text-[#E50000] mb-1 block italic">Disciplina</span>
                             <span className="text-xl font-black italic tracking-tighter uppercase text-black">{displayDiscipline}</span>
                          </div>
                       </motion.div>
                    );
                 })}
              </div>
           </div>
        </section>

        {/* --- FAQ SECTION --- */}
        <section id="faqs" className="py-24 md:py-40 px-6 md:px-24 bg-white text-black border-t border-black/5">
           <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-12 text-black">
                 <HelpCircle className="text-[#E50000]" size={32} />
                 <h2 className="text-4xl md:text-6xl font-display font-black uppercase italic tracking-tighter leading-none text-black">FAQS</h2>
              </div>
              <div className="space-y-4">
                 {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} />)}
              </div>
           </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        <section className="py-24 md:py-40 bg-[#050505] overflow-hidden border-y border-white/5 text-white">
           <div className="max-w-[1600px] mx-auto px-6 md:px-24 mb-16 md:mb-24 text-center md:text-left">
              <span className="text-[#E50000] font-bold uppercase tracking-[0.5em] text-[10px] mb-4 block italic">Comunidad & Resultados</span>
              <h2 className="font-display text-5xl md:text-8xl lg:text-[10rem] uppercase italic font-black leading-none tracking-tighter text-white">LA MANADA</h2>
           </div>
           <div className="flex gap-12 animate-marquee whitespace-nowrap text-white">
              {[...REVIEWS, ...REVIEWS].map((rev, i) => (
                <div key={i} className="inline-block bg-[#0A0A0A] p-12 border border-white/5 w-[320px] md:w-[450px] whitespace-normal italic group hover:border-[#E50000] transition-colors duration-500 rounded-[2rem] shadow-2xl text-white">
                   <Quote className="text-[#E50000]/20 mb-8 group-hover:text-[#E50000]/40 transition-colors" size={48} />
                   <p className="text-white/60 text-xl leading-relaxed mb-10 font-medium font-light">"{rev.q}"</p>
                   <span className="text-[10px] uppercase tracking-[0.2em] font-black text-[#E50000]">{rev.a}</span>
                </div>
              ))}
           </div>
        </section>

        {/* --- FOOTER: CONTACTO + MAPA --- */}
        <footer id="contact" className="py-24 md:py-32 px-4 md:px-16 bg-black border-t border-white/5 text-white">
           <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] rounded-[4rem] p-8 md:p-16 border border-white/5 overflow-hidden shadow-2xl text-white">
              <div className="grid lg:grid-cols-2 gap-20 relative z-10 text-white">
                 <div className="flex flex-col justify-between text-white">
                    <div>
                       <h2 className="font-display text-5xl md:text-7xl uppercase italic font-black leading-none mb-8 text-white">PISA EL <br/> <span className="text-[#E50000]">TATAMI.</span></h2>
                       <p className="text-lg text-white/50 mb-12 max-w-sm italic font-light text-white/40">Agenda tu primera sesión sin compromiso y únete a la manada.</p>
                       <div className="space-y-6 mb-16 italic uppercase font-bold text-[10px] tracking-widest opacity-60 text-white">
                          <a href="https://www.google.com/maps/search/?api=1&query=Av.+El+Rodeo+12850,+Lo+Barnechea" target="_blank" className="flex items-center gap-4 hover:text-[#E50000] transition-colors">
                             <MapPin className="text-[#E50000]" size={20} /> Av. El Rodeo #12850
                          </a>
                          <a href="https://wa.me/56996787321" target="_blank" className="flex items-center gap-4 hover:text-[#E50000] transition-colors">
                             <Phone className="text-[#E50000]" size={20} /> +56 9 9678 7321
                          </a>
                          <a href="https://instagram.com/raion_bjj" target="_blank" className="flex items-center gap-4 hover:text-[#E50000] transition-colors">
                             <Instagram className="text-[#E50000]" size={20} /> @raion_bjj
                          </a>
                       </div>
                    </div>
                    <div className="bg-black/40 backdrop-blur-xl border border-white/5 rounded-[4rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group max-w-md mx-auto lg:mx-0">
                       <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><MessageCircle size={100} className="text-white" /></div>
                       <span className="text-[#E50000] font-black text-[9px] tracking-[0.4em] mb-6 block uppercase italic">02 / CONTACTO</span>
                       <form 
                         onSubmit={(e) => {
                           e.preventDefault();
                           const formData = new FormData(e.currentTarget);
                           const name = formData.get('name');
                           const email = formData.get('email');
                           const message = formData.get('message');
                           if (!name || !email || !message) return;
                           window.location.href = `mailto:raionbjjacademy@gmail.com?subject=CONSULTA RAION BJJ - ${name}&body=Nombre: ${name}%0D%0ACorreo: ${email}%0D%0A%0D%0AMensaje:%0D%0A${message}`;
                         }}
                         className="space-y-8 relative z-10"
                       >
                          <div className="group/input relative">
                             <input type="text" name="name" required placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none font-medium text-base transition-all focus:border-[#E50000] placeholder-transparent text-white" />
                             <label className="absolute left-0 -top-4 text-[9px] font-black uppercase tracking-widest text-white/30 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/20 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#E50000]">TU NOMBRE</label>
                          </div>
                          <div className="group/input relative">
                             <input type="email" name="email" required placeholder=" " className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none font-medium text-base transition-all focus:border-[#E50000] placeholder-transparent text-white" />
                             <label className="absolute left-0 -top-4 text-[9px] font-black uppercase tracking-widest text-white/30 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/20 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#E50000]">TU EMAIL</label>
                          </div>
                          <div className="group/input relative">
                             <textarea name="message" required placeholder=" " rows={3} className="peer w-full bg-transparent border-b border-white/10 py-2 outline-none font-medium text-base transition-all focus:border-[#E50000] placeholder-transparent text-white resize-none" />
                             <label className="absolute left-0 -top-4 text-[9px] font-black uppercase tracking-widest text-white/30 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/20 peer-focus:-top-4 peer-focus:text-[9px] peer-focus:text-[#E50000]">TU MENSAJE</label>
                          </div>
                          <button type="submit" className="w-full bg-[#E50000] text-white py-4 rounded-full font-black uppercase tracking-[0.3em] text-[9px] hover:bg-white hover:text-black transition-all flex justify-center items-center gap-3 group/btn shadow-[0_0_20px_rgba(229,0,0,0.15)]">
                             ENVIAR MENSAJE 
                             <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                          </button>
                       </form>
                    </div>
                 </div>
                 <a 
                   href="https://www.google.com/maps/search/?api=1&query=Jiu+Jitsu+Raion+Bjj" 
                   target="_blank" 
                   className="h-[500px] lg:h-auto min-h-[400px] relative rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl block"
                 >
                    <div className="absolute inset-0 bg-[#E50000]/10 pointer-events-none z-10 group-hover:opacity-0 transition-opacity duration-700 text-white" />
                    <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.7224605972083!2d-70.5207373!3d-33.352199899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cb9f719d666d%3A0x21adc56746247152!2sJiu%20Jitsu%20Raion%20Bjj!5e0!3m2!1sen!2scl!4v1776652187682!5m2!1sen!2scl" 
                       className="w-full h-full grayscale invert contrast-[1.2] opacity-60 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100 transition-all duration-1000 border-none pointer-events-none"
                       allowFullScreen={true} loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                    />
                    <div className="absolute top-6 left-6 z-20">
                       <span className="bg-black/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest border border-white/10 italic text-white">Raion BJJ Academy</span>
                    </div>
                    <div className="absolute bottom-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="bg-[#E50000] text-white px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest italic flex items-center gap-2">ABRIR EN MAPAS <MoveUpRight size={12} /></span>
                    </div>
                 </a>
              </div>
              <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-20 relative z-10 text-white">
                 <span className="font-display text-xs font-black italic uppercase tracking-tighter text-white">Raion BJJ Academy</span>
                 <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white">SANTIAGO • © 2021</p>
                 <a href="https://instagram.com/raion_bjj" target="_blank" className="hover:text-[#E50000] transition-colors text-white"><Instagram size={18} /></a>
              </div>
           </div>
        </footer>
      </div>

      <style jsx global>{`
        @font-face { font-family: 'Archivo Black'; src: url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap'); }
        .font-display { font-family: 'Archivo Black', sans-serif; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { display: flex; width: fit-content; animation: marquee 60s linear infinite; }
        .animate-marquee:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}
