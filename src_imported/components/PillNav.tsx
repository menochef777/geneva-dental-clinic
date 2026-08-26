import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import './PillNav.css';

export interface PillNavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

interface PillNavProps {
  logo?: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
  lang?: 'en' | 'fr';
  setLang?: (lang: 'en' | 'fr') => void;
  onOpenConsultation?: () => void;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Geneva Dental Clinic',
  items,
  activeHref = '#',
  className = '',
  ease = 'power2.out',
  baseColor = '#000000',
  pillColor = '#ffffff',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#000000',
  onMobileMenuClick,
  initialLoadAnimation = true,
  lang = 'fr',
  setLang,
  onOpenConsultation,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);
  const activeTweenRefs = useRef<(gsap.core.Tween | null)[]>([]);
  const logoImgRef = useRef<SVGSVGElement | HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;
        if (w === 0 || h === 0) return;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`
        });

        const label = pill.querySelector('.pill-label');
        const white = pill.querySelector('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(circle, { scale: 1.25, xPercent: -50, duration: 0.35, ease, overwrite: 'auto' }, 0);

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.35, ease, overwrite: 'auto' }, 0);
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 20), opacity: 0 });
          tl.to(white, { y: 0, opacity: 1, duration: 0.35, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener('resize', onResize);

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    const menu = mobileMenuRef.current;
    if (menu) {
      gsap.set(menu, { visibility: 'hidden', opacity: 0, scaleY: 1 });
    }

    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.from(logoEl, { scale: 0.8, opacity: 0, duration: 0.5, ease });
      }

      if (navItems) {
        gsap.from(navItems, { scale: 0.95, opacity: 0, duration: 0.5, ease });
      }
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: 'auto'
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.fromTo(img, { rotate: 0 }, { rotate: 360, duration: 0.4, ease, overwrite: 'auto' });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;

    if (hamburger) {
      const lines = hamburger.querySelectorAll('.hamburger-line');
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3.5, duration: 0.25, ease });
        gsap.to(lines[1], { rotation: -45, y: -3.5, duration: 0.25, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.25, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.25, ease });
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: 'visible' });
        gsap.fromTo(
          menu,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 0.3, ease }
        );
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -10,
          duration: 0.2,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: 'hidden' });
          }
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    ['--base' as string]: baseColor,
    ['--pill-bg' as string]: pillColor,
    ['--hover-text' as string]: hoveredPillTextColor,
    ['--pill-text' as string]: resolvedPillTextColor
  } as React.CSSProperties;

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary" style={cssVars}>
        
        {/* Left: Animated Logo */}
        <div className="flex items-center gap-3">
          <a
            className="pill-logo group"
            href="#"
            aria-label="Geneva Dental Clinic"
            onMouseEnter={handleLogoEnter}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            ref={logoRef}
          >
            {logo ? (
              <img src={logo} alt={logoAlt} ref={logoImgRef as React.RefObject<HTMLImageElement>} />
            ) : (
              <svg 
                ref={logoImgRef as React.RefObject<SVGSVGElement>}
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-white"
              >
                <path 
                  d="M7 3C4.23858 3 2 5.23858 2 8C2 10.3235 3.32832 12.338 5.25301 13.3328C6.01235 13.7253 6.55171 14.4756 6.72124 15.3138L7.54519 19.3879C7.81896 20.7416 9.00693 21.7248 10.3879 21.7248C11.8385 21.7248 13.0145 20.5488 13.0145 19.0982V14.5C13.0145 13.9477 13.4622 13.5 14.0145 13.5C14.5668 13.5 15.0145 13.9477 15.0145 14.5V19.0982C15.0145 20.5488 16.1905 21.7248 17.6411 21.7248C19.0221 21.7248 20.2101 20.7416 20.4838 19.3879L21.3078 15.3138C21.4773 14.4756 22.0167 13.7253 22.776 13.3328C24.7007 12.338 26.029 10.3235 26.029 8C26.029 5.23858 23.7904 3 21.029 3C18.9818 3 17.234 4.23078 16.4831 6.00293C15.9388 5.37894 15.0219 5 14.0145 5C13.0071 5 12.0902 5.37894 11.5459 6.00293C10.795 4.23078 9.04718 3 7 3Z" 
                  stroke="currentColor" 
                  strokeWidth="2.2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </a>
          <div className="hidden xl:flex flex-col select-none">
            <span className="text-sm font-black tracking-tight text-white leading-none">
              GENEVA <span className="font-light text-slate-400">CLINIC</span>
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.25em] text-slate-400 font-semibold mt-0.5">
              Dental & Aesthetics
            </span>
          </div>
        </div>

        {/* Center: Motion Pill Items (Desktop) */}
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => {
              const isActive = activeHref === item.href;
              return (
                <li key={item.href || `item-${i}`} role="none">
                  <a
                    role="menuitem"
                    href={item.href}
                    className={`pill${isActive ? ' is-active' : ''}`}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                    onClick={(e) => {
                      if (item.href.startsWith('#')) {
                        e.preventDefault();
                        const id = item.href.replace('#', '');
                        if (id) {
                          const el = document.getElementById(id);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }
                    }}
                  >
                    <span
                      className="hover-circle"
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="label-stack">
                      <span className="pill-label">{item.label}</span>
                      <span className="pill-label-hover" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right: Language Toggle + Contacts Button + Mobile Menu */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Desktop Language Switcher */}
          {setLang && (
            <div className="hidden md:flex items-center p-1 rounded-full bg-black/90 border border-white/20 shadow-lg text-xs font-bold select-none">
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-white text-black font-extrabold shadow-sm'
                    : 'text-neutral-400 hover:text-white font-bold'
                } cursor-pointer`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-2.5 py-1 rounded-full transition-all duration-300 ${
                  lang === 'fr'
                    ? 'bg-white text-black font-extrabold shadow-sm'
                    : 'text-neutral-400 hover:text-white font-bold'
                } cursor-pointer`}
              >
                FR
              </button>
            </div>
          )}

          {/* Mobile Language Button */}
          {setLang && (
            <button
              onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
              className="md:hidden text-xs font-bold bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full border border-white/30 hover:bg-white/30 active:scale-95 transition-all cursor-pointer select-none"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
          )}

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="group flex items-center gap-2 pl-4 sm:pl-5 pr-2 py-1.5 sm:py-2 rounded-full bg-white text-black font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 cursor-pointer shadow-lg hover:bg-slate-100 active:scale-95"
            >
              <span className="font-extrabold text-black">{lang === 'fr' ? 'Contacts' : 'Contacts'}</span>
              <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-black text-white group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              </span>
            </button>
          )}

          <button
            className="mobile-menu-button mobile-only"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            ref={hamburgerRef}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Popover Drawer */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef} style={cssVars}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={item.href || `mobile-item-${i}`}>
              <a
                href={item.href}
                className="mobile-menu-link"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const id = item.href.replace('#', '');
                    if (id) {
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
