import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { AdminDashboard } from './components/AdminDashboard';
import { AgentDashboard } from './components/AgentDashboard';
import { ClientDashboard } from './components/ClientDashboard';
import { HospitalDashboard } from './components/HospitalDashboard';
import { Language } from './translations';

export type UserRole = 'client' | 'agent' | 'hospital' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export interface Policy {
  id: string;
  clientEmail: string;
  policyId: string;
  policyType: 'Health' | 'Car' | 'Other';
  requiredDocuments: string[];
  agentId: string;
  agentName: string;
}

export interface Document {
  id: string;
  name: string;
  fileName: string;
  fileUrl: string;
  uploadedAt: Date;
}

export interface Claim {
  id: string;
  policyId: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  status: 'pending' | 'under_review' | 'awaiting_hospital' | 'approved' | 'rejected';
  documents: Document[];
  submittedAt: Date;
  hospitalVerified?: boolean;
  hospitalNotes?: string;
  aiFindings?: {
    authenticity: number;
    anomalies: string[];
    recommendation: 'approve' | 'reject' | 'manual_review';
  };
  agentDecision?: {
    status: 'approved' | 'rejected';
    message: string;
    decidedAt: Date;
    overrideReason?: string;
  };
}

type Page = 'home' | 'login' | 'signup' | 'dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const handleLogin = (email: string, password: string) => {
    // Mock authentication - determine role based on email
    let role: UserRole;
    let name: string;

    if (email.includes('admin')) {
      role = 'admin';
      name = 'Admin User';
    } else if (email.includes('agent')) {
      role = 'agent';
      name = 'Insurance Agent';
    } else if (email.includes('hospital')) {
      role = 'hospital';
      name = 'Hospital Staff';
    } else {
      role = 'client';
      name = 'Client User';
    }

    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role,
    };

    setCurrentUser(user);
    setCurrentPage('dashboard');
  };

  const handleSignup = (name: string, email: string, password: string) => {
    const user: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role: 'client',
    };

    setCurrentUser(user);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('home');
  };

  const renderDashboard = () => {
    if (!currentUser) return null;

    switch (currentUser.role) {
      case 'admin':
        return <AdminDashboard user={currentUser} onLogout={handleLogout} />;
      case 'agent':
        return <AgentDashboard user={currentUser} onLogout={handleLogout} />;
      case 'client':
        return <ClientDashboard user={currentUser} onLogout={handleLogout} />;
      case 'hospital':
        return <HospitalDashboard user={currentUser} onLogout={handleLogout} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {currentPage === 'home' && (
        <HomePage onLoginClick={() => setCurrentPage('login')} language={language} onLanguageChange={setLanguage} />
      )}
      {currentPage === 'login' && (
        <LoginPage
          onLogin={handleLogin}
          onSignupClick={() => setCurrentPage('signup')}
          onBackClick={() => setCurrentPage('home')}
          language={language}
        />
      )}
      {currentPage === 'signup' && (
        <SignupPage
          onSignup={handleSignup}
          onLoginClick={() => setCurrentPage('login')}
          onBackClick={() => setCurrentPage('home')}
          language={language}
        />
      )}
      {currentPage === 'dashboard' && renderDashboard()}
    </div>
  );
}

export default App;