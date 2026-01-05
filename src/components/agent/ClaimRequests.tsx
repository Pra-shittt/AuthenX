import { useState } from 'react';
import { Claim } from '../../App';
import { FileText, CheckCircle, XCircle, AlertCircle, Eye, ChevronDown, ChevronUp } from 'lucide-react';

interface ClaimRequestsProps {
  claims: Claim[];
  onUpdateClaim: (claim: Claim) => void;
  searchQuery: string;
}

export function ClaimRequests({ claims, onUpdateClaim, searchQuery }: ClaimRequestsProps) {
  const [selectedClaim, setSelectedClaim] = useState<Claim | null>(null);
  const [showDecisionModal, setShowDecisionModal] = useState(false);
  const [decision, setDecision] = useState<'approved' | 'rejected'>('approved');
  const [decisionMessage, setDecisionMessage] = useState('');
  const [overrideReason, setOverrideReason] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [expandedDocument, setExpandedDocument] = useState<string | null>(null);

  const filteredClaims = claims.filter(c => {
    const matchesSearch = c.policyId.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleApprove = () => {
    setDecision('approved');
    setShowDecisionModal(true);
  };

  const handleReject = () => {
    setDecision('rejected');
    setShowDecisionModal(true);
  };

  const handleSubmitDecision = () => {
    if (!selectedClaim) return;

    const updatedClaim: Claim = {
      ...selectedClaim,
      status: decision,
      agentDecision: {
        status: decision,
        message: decisionMessage,
        decidedAt: new Date(),
        overrideReason: overrideReason || undefined,
      },
    };

    onUpdateClaim(updatedClaim);
    setShowDecisionModal(false);
    setSelectedClaim(null);
    setDecisionMessage('');
    setOverrideReason('');
  };

  const getStatusBadge = (status: Claim['status']) => {
    const styles = {
      pending: 'bg-gray-100 text-gray-700',
      under_review: 'bg-blue-100 text-blue-700',
      awaiting_hospital: 'bg-amber-100 text-amber-700',
    };
    const labels = {
      pending: 'Pending',
      under_review: 'Under Review',
      awaiting_hospital: 'Awaiting Hospital',
    };
    return (
      <span className={`inline-flex px-3 py-1 rounded ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const getAIRecommendation = (recommendation: string) => {
    const styles = {
      approve: 'text-green-700',
      reject: 'text-red-700',
      manual_review: 'text-amber-700',
    };
    const labels = {
      approve: 'Approve',
      reject: 'Reject',
      manual_review: 'Manual Review',
    };
    return (
      <span className={styles[recommendation as keyof typeof styles]}>
        {labels[recommendation as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">Claim Requests</h1>
        <p className="text-gray-600">Review and process submitted claims</p>
      </div>

      {/* Filter */}
      <div className="mb-6">
        <label className="text-gray-700 mr-3">Filter by status:</label>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
        >
          <option value="all">All</option>
          <option value="pending">Pending</option>
          <option value="under_review">Under Review</option>
          <option value="awaiting_hospital">Awaiting Hospital</option>
        </select>
      </div>

      {/* Claims List */}
      {!selectedClaim ? (
        <div className="bg-white rounded-lg border border-gray-200">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-[#0F4C5C]">Submitted Claims</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-gray-700">Policy ID</th>
                  <th className="px-6 py-3 text-left text-gray-700">Client Name</th>
                  <th className="px-6 py-3 text-left text-gray-700">Status</th>
                  <th className="px-6 py-3 text-left text-gray-700">Submitted</th>
                  <th className="px-6 py-3 text-left text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredClaims.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                      No claims found
                    </td>
                  </tr>
                ) : (
                  filteredClaims.map((claim) => (
                    <tr key={claim.id} className="border-b border-gray-200 last:border-b-0">
                      <td className="px-6 py-4">{claim.policyId}</td>
                      <td className="px-6 py-4">{claim.clientName}</td>
                      <td className="px-6 py-4">{getStatusBadge(claim.status)}</td>
                      <td className="px-6 py-4 text-gray-600">
                        {claim.submittedAt.toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => setSelectedClaim(claim)}
                          className="flex items-center gap-2 text-[#0F4C5C] hover:underline"
                        >
                          <Eye className="w-4 h-4" />
                          Review
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedClaim(null)}
            className="text-[#0F4C5C] hover:underline"
          >
            ← Back to Claims List
          </button>

          {/* Claim Details */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-[#0F4C5C] mb-4">Claim Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-gray-600">Policy ID</p>
                <p>{selectedClaim.policyId}</p>
              </div>
              <div>
                <p className="text-gray-600">Client Name</p>
                <p>{selectedClaim.clientName}</p>
              </div>
              <div>
                <p className="text-gray-600">Status</p>
                <div className="mt-1">{getStatusBadge(selectedClaim.status)}</div>
              </div>
              <div>
                <p className="text-gray-600">Submitted</p>
                <p>{selectedClaim.submittedAt.toLocaleDateString()}</p>
              </div>
            </div>

            {/* Documents */}
            <h3 className="text-[#0F4C5C] mb-3">Submitted Documents</h3>
            <div className="space-y-3 mb-6">
              {selectedClaim.documents.map((doc) => (
                <div key={doc.id} className="border border-gray-200 rounded">
                  <div
                    className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => setExpandedDocument(expandedDocument === doc.id ? null : doc.id)}
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-600" />
                      <div>
                        <p>{doc.name}</p>
                        <p className="text-gray-600">{doc.fileName}</p>
                      </div>
                    </div>
                    {expandedDocument === doc.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  {expandedDocument === doc.id && (
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

            {/* Hospital Verification */}
            {selectedClaim.hospitalVerified !== undefined && (
              <div className="bg-blue-50 border border-blue-200 rounded p-4 mb-6">
                <h3 className="text-[#0F4C5C] mb-2">Hospital Verification</h3>
                <div className="flex items-start gap-3">
                  {selectedClaim.hospitalVerified ? (
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className={selectedClaim.hospitalVerified ? 'text-green-700' : 'text-red-700'}>
                      {selectedClaim.hospitalVerified ? 'Documents Verified' : 'Verification Failed'}
                    </p>
                    {selectedClaim.hospitalNotes && (
                      <p className="text-gray-700 mt-1">{selectedClaim.hospitalNotes}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* AI Findings */}
            {selectedClaim.aiFindings && (
              <div className="bg-amber-50 border border-amber-200 rounded p-4 mb-6">
                <h3 className="text-[#0F4C5C] mb-3">AI Verification Results</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-700">Authenticity Score</p>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-[#F59E0B] h-2 rounded-full"
                          style={{ width: `${selectedClaim.aiFindings.authenticity * 100}%` }}
                        ></div>
                      </div>
                      <span>{(selectedClaim.aiFindings.authenticity * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-700">AI Recommendation</p>
                    <p className="mt-1">
                      {getAIRecommendation(selectedClaim.aiFindings.recommendation)}
                    </p>
                  </div>
                  {selectedClaim.aiFindings.anomalies.length > 0 && (
                    <div>
                      <p className="text-gray-700">Anomalies Detected</p>
                      <ul className="mt-1 space-y-1">
                        {selectedClaim.aiFindings.anomalies.map((anomaly, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{anomaly}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleApprove}
                className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
              >
                <CheckCircle className="w-5 h-5" />
                Approve Claim
              </button>
              <button
                onClick={handleReject}
                className="flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                <XCircle className="w-5 h-5" />
                Reject Claim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decision Modal */}
      {showDecisionModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-[#0F4C5C] mb-4">
              {decision === 'approved' ? 'Approve Claim' : 'Reject Claim'}
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Message to Client</label>
                <textarea
                  value={decisionMessage}
                  onChange={(e) => setDecisionMessage(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                  rows={3}
                  placeholder="Enter your message..."
                  required
                />
              </div>
              {selectedClaim?.aiFindings && selectedClaim.aiFindings.recommendation !== decision && (
                <div>
                  <label className="block text-gray-700 mb-2">
                    Override Reason (AI recommended {selectedClaim.aiFindings.recommendation})
                  </label>
                  <textarea
                    value={overrideReason}
                    onChange={(e) => setOverrideReason(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                    rows={2}
                    placeholder="Explain why you're overriding AI recommendation..."
                    required
                  />
                </div>
              )}
              <div className="flex gap-3">
                <button
                  onClick={handleSubmitDecision}
                  disabled={!decisionMessage || (selectedClaim?.aiFindings && selectedClaim.aiFindings.recommendation !== decision && !overrideReason)}
                  className="bg-[#0F4C5C] text-white px-6 py-2 rounded hover:bg-[#0d3d4a] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Submit Decision
                </button>
                <button
                  onClick={() => setShowDecisionModal(false)}
                  className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
