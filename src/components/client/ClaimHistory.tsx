import { Claim } from '../../App';
import { CheckCircle, XCircle, FileText } from 'lucide-react';

interface ClaimHistoryProps {
  claims: Claim[];
}

export function ClaimHistory({ claims }: ClaimHistoryProps) {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">Claim History</h1>
        <p className="text-gray-600">View your approved and rejected claims</p>
      </div>

      {claims.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No claim history</p>
        </div>
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div key={claim.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[#0F4C5C] mb-1">{claim.policyId}</h3>
                  <p className="text-gray-600">
                    Submitted: {claim.submittedAt.toLocaleDateString()}
                  </p>
                  <p className="text-gray-600">
                    Decision: {claim.agentDecision?.decidedAt.toLocaleDateString()}
                  </p>
                </div>
                <div>
                  {claim.agentDecision?.status === 'approved' ? (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded bg-green-100 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      Approved
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded bg-red-100 text-red-700">
                      <XCircle className="w-5 h-5" />
                      Rejected
                    </span>
                  )}
                </div>
              </div>

              <div
                className={`rounded p-4 ${
                  claim.agentDecision?.status === 'approved'
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <p className="text-gray-700 mb-1">Agent Message:</p>
                <p
                  className={
                    claim.agentDecision?.status === 'approved'
                      ? 'text-green-800'
                      : 'text-red-800'
                  }
                >
                  {claim.agentDecision?.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
