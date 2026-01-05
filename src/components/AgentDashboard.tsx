import { useState } from 'react';
import { User, Policy, Claim } from '../App';
import { LogOut, Search, FileText, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { PolicyManagement } from './agent/PolicyManagement';
import { AddPolicyPage } from './agent/AddPolicyPage';
import { ClaimRequests } from './agent/ClaimRequests';
import { ApprovedClaims } from './agent/ApprovedClaims';
import { Logo } from './Logo';

interface AgentDashboardProps {
  user: User;
  onLogout: () => void;
}

type AgentPage = 'policies' | 'add-policy' | 'claims' | 'approved';

// Mock data
const initialPolicies: Policy[] = [
  {
    id: '1',
    clientEmail: 'john.doe@example.com',
    policyId: 'POL-2025-001',
    policyType: 'Health',
    requiredDocuments: ['Hospital Bill', 'Discharge Summary', 'Medical Reports'],
    agentId: 'agent1',
    agentName: 'Insurance Agent',
  },
  {
    id: '2',
    clientEmail: 'jane.smith@example.com',
    policyId: 'POL-2025-002',
    policyType: 'Car',
    requiredDocuments: ['Accident Photos', 'FIR Copy', 'Repair Estimate'],
    agentId: 'agent1',
    agentName: 'Insurance Agent',
  },
];

const initialClaims: Claim[] = [
  {
    id: '1',
    policyId: 'POL-2025-001',
    clientId: 'client1',
    clientName: 'John Doe',
    clientEmail: 'john.doe@example.com',
    status: 'under_review',
    documents: [
      {
        id: 'd1',
        name: 'Hospital Bill',
        fileName: 'hospital_bill.pdf',
        fileUrl: '#',
        uploadedAt: new Date('2026-01-01'),
      },
      {
        id: 'd2',
        name: 'Discharge Summary',
        fileName: 'discharge_summary.pdf',
        fileUrl: '#',
        uploadedAt: new Date('2026-01-01'),
      },
    ],
    submittedAt: new Date('2026-01-01'),
    hospitalVerified: true,
    hospitalNotes: 'All documents verified and match our hospital records.',
    aiFindings: {
      authenticity: 0.92,
      anomalies: [],
      recommendation: 'approve',
    },
  },
  {
    id: '2',
    policyId: 'POL-2025-002',
    clientId: 'client2',
    clientName: 'Jane Smith',
    clientEmail: 'jane.smith@example.com',
    status: 'awaiting_hospital',
    documents: [
      {
        id: 'd3',
        name: 'Accident Photos',
        fileName: 'accident_photo.jpg',
        fileUrl: '#',
        uploadedAt: new Date('2025-12-28'),
      },
    ],
    submittedAt: new Date('2025-12-28'),
    aiFindings: {
      authenticity: 0.68,
      anomalies: ['Potential image manipulation detected', 'Metadata inconsistency'],
      recommendation: 'manual_review',
    },
  },
];

export function AgentDashboard({ user, onLogout }: AgentDashboardProps) {
  const [currentPage, setCurrentPage] = useState<AgentPage>('policies');
  const [searchQuery, setSearchQuery] = useState('');
  const [policies, setPolicies] = useState<Policy[]>(initialPolicies);
  const [claims, setClaims] = useState<Claim[]>(initialClaims);

  const handleAddPolicy = (policy: Policy) => {
    setPolicies([...policies, policy]);
    setCurrentPage('policies');
  };

  const handleUpdateClaim = (updatedClaim: Claim) => {
    setClaims(claims.map(c => c.id === updatedClaim.id ? updatedClaim : c));
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
                currentPage === 'policies' || currentPage === 'add-policy'
                  ? 'border-[#0F4C5C] text-[#0F4C5C]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Policy Management
            </button>
            <button
              onClick={() => setCurrentPage('claims')}
              className={`pb-2 border-b-2 transition-colors ${
                currentPage === 'claims'
                  ? 'border-[#0F4C5C] text-[#0F4C5C]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Claim Requests
            </button>
            <button
              onClick={() => setCurrentPage('approved')}
              className={`pb-2 border-b-2 transition-colors ${
                currentPage === 'approved'
                  ? 'border-[#0F4C5C] text-[#0F4C5C]'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              Approved Claims
            </button>
          </div>
        </div>
      </header>

      {/* Search Bar */}
      {currentPage !== 'add-policy' && (
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by Policy ID"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {currentPage === 'policies' && (
          <PolicyManagement
            policies={policies}
            onNavigateToAddPolicy={() => setCurrentPage('add-policy')}
            searchQuery={searchQuery}
          />
        )}
        {currentPage === 'add-policy' && (
          <AddPolicyPage
            onAddPolicy={handleAddPolicy}
            onBack={() => setCurrentPage('policies')}
          />
        )}
        {currentPage === 'claims' && (
          <ClaimRequests
            claims={claims.filter(c => c.status !== 'approved' && c.status !== 'rejected')}
            onUpdateClaim={handleUpdateClaim}
            searchQuery={searchQuery}
          />
        )}
        {currentPage === 'approved' && (
          <ApprovedClaims
            claims={claims.filter(c => c.agentDecision)}
            searchQuery={searchQuery}
          />
        )}
      </main>
    </div>
  );
}