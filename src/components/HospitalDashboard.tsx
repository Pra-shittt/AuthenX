import { useState } from 'react';
import { User, Claim } from '../App';
import { LogOut, FileText, CheckCircle, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Logo } from './Logo';

interface HospitalDashboardProps {
  user: User;
  onLogout: () => void;
}

// Mock data
const initialClaims: Claim[] = [
  {
    id: '1',
    policyId: 'POL-2025-001',
    clientId: 'client1',
    clientName: 'John Doe',
    clientEmail: 'john.doe@example.com',
    status: 'awaiting_hospital',
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
      {
        id: 'd3',
        name: 'Medical Reports',
        fileName: 'medical_reports.pdf',
        fileUrl: '#',
        uploadedAt: new Date('2026-01-01'),
      },
    ],
    submittedAt: new Date('2026-01-01'),
  },
  {
    id: '2',
    policyId: 'POL-2025-004',
    clientId: 'client2',
    clientName: 'Sarah Williams',
    clientEmail: 'sarah.w@example.com',
    status: 'awaiting_hospital',
    documents: [
      {
        id: 'd4',
        name: 'Hospital Bill',
        fileName: 'bill_002.pdf',
        fileUrl: '#',
        uploadedAt: new Date('2025-12-30'),
      },
    ],
    submittedAt: new Date('2025-12-30'),
  },
];

export function HospitalDashboard({ user, onLogout }: HospitalDashboardProps) {
  const [claims, setClaims] = useState<Claim[]>(initialClaims);
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [verificationNotes, setVerificationNotes] = useState('');
  const [expandedDocs, setExpandedDocs] = useState<{ [key: string]: boolean }>({});

  const handleVerify = (claimId: string, verified: boolean) => {
    setClaims(
      claims.map((c) =>
        c.id === claimId
          ? {
              ...c,
              status: 'under_review',
              hospitalVerified: verified,
              hospitalNotes: verificationNotes || (verified ? 'Documents verified' : 'Documents not verified'),
            }
          : c
      )
    );
    setSelectedClaim(null);
    setVerificationNotes('');
  };

  const toggleDocExpand = (docId: string) => {
    setExpandedDocs({ ...expandedDocs, [docId]: !expandedDocs[docId] });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
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
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {!selectedClaim ? (
          <>
            <div className="mb-8">
              <h1 className="text-[#0F4C5C] mb-2">Hospital Portal</h1>
              <p className="text-gray-600">Verify insurance claim documents</p>
            </div>

            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-[#0F4C5C]">Claims Awaiting Verification</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-gray-700">Policy ID</th>
                      <th className="px-6 py-3 text-left text-gray-700">Client Name</th>
                      <th className="px-6 py-3 text-left text-gray-700">Documents</th>
                      <th className="px-6 py-3 text-left text-gray-700">Submitted</th>
                      <th className="px-6 py-3 text-left text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingClaims.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                          No claims awaiting verification
                        </td>
                      </tr>
                    ) : (
                      pendingClaims.map((claim) => (
                        <tr key={claim.id} className="border-b border-gray-200 last:border-b-0">
                          <td className="px-6 py-4">{claim.policyId}</td>
                          <td className="px-6 py-4">{claim.clientName}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded bg-gray-100 text-gray-700">
                              {claim.documents.length} document{claim.documents.length !== 1 ? 's' : ''}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {claim.submittedAt.toLocaleDateString()}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => setSelectedClaim(claim)}
                              className="text-[#0F4C5C] hover:underline"
                            >
                              Verify Documents
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <button
              onClick={() => {
                setSelectedClaim(null);
                setVerificationNotes('');
              }}
              className="text-[#0F4C5C] hover:underline"
            >
              ← Back to Claims List
            </button>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-[#0F4C5C] mb-4">Document Verification</h2>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-gray-600">Policy ID</p>
                  <p>{selectedClaim.policyId}</p>
                </div>
                <div>
                  <p className="text-gray-600">Client Name</p>
                  <p>{selectedClaim.clientName}</p>
                </div>
              </div>

              <h3 className="text-[#0F4C5C] mb-3">Documents for Verification</h3>
              <div className="space-y-3 mb-6">
                {selectedClaim.documents.map((doc) => (
                  <div key={doc.id} className="border border-gray-200 rounded">
                    <div
                      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                      onClick={() => toggleDocExpand(doc.id)}
                    >
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-gray-600" />
                        <div>
                          <p>{doc.name}</p>
                          <p className="text-gray-600">{doc.fileName}</p>
                        </div>
                      </div>
                      {expandedDocs[doc.id] ? (
                        <ChevronUp className="w-5 h-5 text-gray-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                    {expandedDocs[doc.id] && (
                      <div className="border-t border-gray-200 p-4 bg-gray-50">
                        <div className="bg-white border border-gray-300 rounded p-8 text-center">
                          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">Document Preview</p>
                          <p className="text-gray-500">{doc.fileName}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-6 mb-6">
                <h3 className="text-[#0F4C5C] mb-4">Verification Question</h3>
                <p className="text-gray-700 mb-4">
                  Do these documents match your hospital records for this patient?
                </p>

                <div className="space-y-3 mb-4">
                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded cursor-pointer hover:bg-white">
                    <input
                      type="radio"
                      name="verification"
                      checked={verificationNotes === 'Documents verified'}
                      onChange={() => setVerificationNotes('Documents verified')}
                      className="w-4 h-4 text-[#0F4C5C]"
                    />
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>Yes, documents are valid</span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 border border-gray-300 rounded cursor-pointer hover:bg-white">
                    <input
                      type="radio"
                      name="verification"
                      checked={verificationNotes === 'Documents not verified'}
                      onChange={() => setVerificationNotes('Documents not verified')}
                      className="w-4 h-4 text-[#0F4C5C]"
                    />
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-600" />
                      <span>No, mismatch found</span>
                    </div>
                  </label>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Optional note for insurance agent
                  </label>
                  <textarea
                    value={verificationNotes}
                    onChange={(e) => setVerificationNotes(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                    rows={3}
                    placeholder="Add any additional information..."
                  />
                </div>
              </div>

              <button
                onClick={() => handleVerify(selectedClaim.id, verificationNotes === 'Documents verified')}
                className="bg-[#0F4C5C] text-white px-6 py-3 rounded hover:bg-[#0d3d4a] transition-colors"
              >
                Submit Verification
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}