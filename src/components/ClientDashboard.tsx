import { useState } from 'react';
import { User, Policy, Claim } from '../App';
import { LogOut } from 'lucide-react';
import { MyPolicies } from './client/MyPolicies';
import { MyClaims } from './client/MyClaims';
import { ClaimHistory } from './client/ClaimHistory';
import { Logo } from './Logo';

interface ClientDashboardProps {
  user: User;
  onLogout: () => void;
}

type ClientPage = 'policies' | 'claims' | 'history';

// Mock data
const mockPolicies: Policy[] = [
  {
    id: '1',
    clientEmail: 'client@example.com',
    policyId: 'POL-2025-001',
    policyType: 'Health',
    requiredDocuments: ['Hospital Bill', 'Discharge Summary', 'Medical Reports'],
    agentId: 'agent1',
    agentName: 'John Agent',
  },
  {
    id: '2',
    clientEmail: 'client@example.com',
    policyId: 'POL-2025-003',
    policyType: 'Car',
    requiredDocuments: ['Accident Photos', 'FIR Copy', 'Repair Estimate'],
    agentId: 'agent1',
    agentName: 'John Agent',
  },
];

const mockActiveClaims: Claim[] = [
  {
    id: '1',
    policyId: 'POL-2025-001',
    clientId: 'client1',
    clientName: 'Client User',
    clientEmail: 'client@example.com',
    status: 'under_review',
    documents: [
      {
        id: 'd1',
        name: 'Hospital Bill',
        fileName: 'bill.pdf',
        fileUrl: '#',
        uploadedAt: new Date('2026-01-01'),
      },
    ],
    submittedAt: new Date('2026-01-01'),
  },
];

const mockHistoryClaims: Claim[] = [
  {
    id: '2',
    policyId: 'POL-2024-099',
    clientId: 'client1',
    clientName: 'Client User',
    clientEmail: 'client@example.com',
    status: 'approved',
    documents: [],
    submittedAt: new Date('2025-12-15'),
    agentDecision: {
      status: 'approved',
      message: 'All documents verified successfully. Claim approved.',
      decidedAt: new Date('2025-12-20'),
    },
  },
  {
    id: '3',
    policyId: 'POL-2024-050',
    clientId: 'client1',
    clientName: 'Client User',
    clientEmail: 'client@example.com',
    status: 'rejected',
    documents: [],
    submittedAt: new Date('2025-11-10'),
    agentDecision: {
      status: 'rejected',
      message: 'Document authenticity could not be verified. Please contact support.',
      decidedAt: new Date('2025-11-15'),
    },
  },
];

export function ClientDashboard({ user, onLogout }: ClientDashboardProps) {
  const [currentPage, setCurrentPage] = useState<ClientPage>('policies');
  const [claims, setClaims] = useState<Claim[]>(mockActiveClaims);

  const handleSubmitClaim = (claim: Claim) => {
    setClaims([...claims, claim]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Logo />
            <div className="flex items-center gap-4">
              <span className="text-gray-600">{user.name}</span>
              <button
                onClick={onLogout}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setCurrentPage('policies')}
              className={`pb-2 border-b-2 transition-colors ${
                currentPage === 'policies'
                  ? 'border-[#0F4C5C] text-[#0F4C5C]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              My Policies
            </button>
            <button
              onClick={() => setCurrentPage('claims')}
              className={`pb-2 border-b-2 transition-colors ${
                currentPage === 'claims'
                  ? 'border-[#0F4C5C] text-[#0F4C5C]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              My Claims
            </button>
            <button
              onClick={() => setCurrentPage('history')}
              className={`pb-2 border-b-2 transition-colors ${
                currentPage === 'history'
                  ? 'border-[#0F4C5C] text-[#0F4C5C]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Claim History
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {currentPage === 'policies' && (
          <MyPolicies
            policies={mockPolicies}
            onSubmitClaim={handleSubmitClaim}
            userId={user.id}
            userName={user.name}
            userEmail={user.email}
          />
        )}
        {currentPage === 'claims' && <MyClaims claims={claims} />}
        {currentPage === 'history' && <ClaimHistory claims={mockHistoryClaims} />}
      </main>
    </div>
  );
}