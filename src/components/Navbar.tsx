import React from 'react';
import { Download, Menu, X } from 'lucide-react';
import type { Language, PortfolioContent } from '../data';
import { buttonVariants } from './ui/button-variants';

interface NavbarProps {
  activeSection: string;
  language: Language;
  isMenuOpen: boolean;
  navItems: PortfolioContent['navItems'];
  setIsMenuOpen: (isOpen: boolean) => void;
  toggleLanguage: () => void;
  scrolled: boolean;
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  language,
  isMenuOpen,
  navItems,
  setIsMenuOpen,
  toggleLanguage,
  scrolled,
  scrollToSection,
}) => {
  const baseUrl = import.meta.env.BASE_URL;
  const cvHref = `${baseUrl}${language === 'fr' ? 'cv.pdf' : 'cvang.pdf'}`;
  const labels = language === 'fr'
    ? {
        home: "Retour à l'accueil",
        closeMenu: 'Fermer le menu',
        openMenu: 'Ouvrir le menu',
        switchLanguage: 'Switch to English',
        mobileSwitch: 'English',
        downloadCv: 'Télécharger le CV',
      }
    : {
        home: 'Back to home',
        closeMenu: 'Close menu',
        openMenu: 'Open menu',
        switchLanguage: 'Passer en français',
        mobileSwitch: 'Français',
        downloadCv: 'Download CV',
      };

  return (
    <nav
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? 'border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl' : 'bg-white/70 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:px-5">
        <button
          onClick={() => scrollToSection('accueil')}
          className="text-left text-base font-black tracking-tight text-slate-950"
          aria-label={labels.home}
        >
          AE<span className="text-sky-600">.</span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-1.5 py-1 shadow-sm lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold transition-all duration-200 ${
                activeSection === item.id
                  ? 'border border-slate-200 bg-white text-sky-700 shadow-sm'
                  : 'text-slate-500 hover:bg-white hover:text-slate-950'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            onClick={toggleLanguage}
            className={buttonVariants({ variant: 'outline', size: 'sm', className: 'rounded-full' })}
            aria-label={labels.switchLanguage}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          <a
            href={cvHref}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: 'sm', className: 'rounded-full shadow-lg shadow-slate-200' })}
          >
            <Download size={14} />
            CV
          </a>
        </div>

        <button
          className="rounded-xl border border-slate-200 bg-white p-1.5 text-slate-700 shadow-sm transition-colors hover:text-slate-950 lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? labels.closeMenu : labels.openMenu}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-slate-200 bg-white shadow-xl lg:hidden">
          <div className="grid gap-1.5 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-colors ${
                  activeSection === item.id ? 'bg-sky-50 text-sky-700' : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-left text-sm font-bold text-slate-600 transition-colors hover:bg-slate-50"
            >
              {labels.mobileSwitch}
            </button>
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ className: 'mt-2 rounded-md' })}
            >
              <Download size={16} />
              {labels.downloadCv}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
