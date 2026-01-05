import { Language, getTranslation } from '../translations';
import { Github, Linkedin, Phone, Mail } from 'lucide-react';
import { Logo } from './Logo';

interface HomePageProps {
  onLoginClick: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
}

export function HomePage({ onLoginClick, language, onLanguageChange }: HomePageProps) {
  const t = getTranslation(language);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2 py-1 rounded ${language === 'en' ? 'bg-[#0F4C5C] text-white' : 'hover:bg-gray-100'}`}
              >
                EN
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => onLanguageChange('hi')}
                className={`px-2 py-1 rounded ${language === 'hi' ? 'bg-[#0F4C5C] text-white' : 'hover:bg-gray-100'}`}
              >
                हिंदी
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => onLanguageChange('mr')}
                className={`px-2 py-1 rounded ${language === 'mr' ? 'bg-[#0F4C5C] text-white' : 'hover:bg-gray-100'}`}
              >
                मराठी
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-[#0F4C5C] mb-4">{t.appName}</h1>
          <p className="text-[#0F4C5C] mb-6">{t.tagline}</p>
          
          <div className="text-gray-600 mb-10 max-w-xl mx-auto space-y-3">
            <p>{t.homeDescription1}</p>
            <p>{t.homeDescription2}</p>
          </div>

          <button
            onClick={onLoginClick}
            className="bg-[#0F4C5C] text-white px-8 py-3 rounded hover:bg-[#0d3d4a] transition-colors"
          >
            {t.login}
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0B0F14]">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="mb-8">
            <Logo variant="dark" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* About AuthenX */}
            <div>
              <h4 className="text-gray-300 mb-3">About AuthenX</h4>
              <p className="text-gray-400">
                AuthenX is an AI-assisted insurance claim verification platform designed to improve accuracy, reduce fraud, and support faster decision-making.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-gray-300 mb-3">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-XXXXXXXXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@authenx.ai</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-gray-300 mb-3">Links</h4>
              <div className="space-y-2">
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 hover:underline">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-gray-300 hover:underline">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-500">© 2026 {t.appName}. Enterprise Insurance Claim Verification Platform.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}