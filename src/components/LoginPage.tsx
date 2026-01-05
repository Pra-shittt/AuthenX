import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Language, getTranslation } from '../translations';
import { Logo } from './Logo';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
  onSignupClick: () => void;
  onBackClick: () => void;
  language: Language;
}

export function LoginPage({ onLogin, onSignupClick, onBackClick, language }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const t = getTranslation(language);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email, password);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Logo onClick={onBackClick} />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.backToHome}
          </button>

          <div className="bg-white rounded-lg border border-gray-200 p-8">
            <h2 className="text-[#0F4C5C] mb-6">{t.login}</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-gray-700 mb-2">
                  {t.password}
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C] focus:border-transparent"
                  placeholder={t.password}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F4C5C] text-white py-3 rounded hover:bg-[#0d3d4a] transition-colors"
              >
                {t.login}
              </button>
            </form>

            <div className="mt-6 text-center text-gray-600">
              {t.dontHaveAccount}{' '}
              <button
                onClick={onSignupClick}
                className="text-[#0F4C5C] hover:underline"
              >
                {t.signUp}
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 text-center">
                {t.demoAccounts}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}