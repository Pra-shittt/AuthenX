import { Claim } from '../../App';
import { CheckCircle, XCircle } from 'lucide-react';

interface ApprovedClaimsProps {
  claims: Claim[];
  searchQuery: string;
}

export function ApprovedClaims({ claims, searchQuery }: ApprovedClaimsProps) {
  const filteredClaims = claims.filter(c =>
    c.policyId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">Approved Claims</h1>
        <p className="text-gray-600">View all processed claims</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-[#0F4C5C]">Processed Claims</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Policy ID</th>
                <th className="px-6 py-3 text-left text-gray-700">Client Name</th>
                <th className="px-6 py-3 text-left text-gray-700">Status</th>
                <th className="px-6 py-3 text-left text-gray-700">Decision Date</th>
                <th className="px-6 py-3 text-left text-gray-700">Message</th>
              </tr>
            </thead>
            <tbody>
              {filteredClaims.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                    No processed claims found
                  </td>
                </tr>
              ) : (
                filteredClaims.map((claim) => (
                  <tr key={claim.id} className="border-b border-gray-200 last:border-b-0">
                    <td className="px-6 py-4">{claim.policyId}</td>
                    <td className="px-6 py-4">{claim.clientName}</td>
                    <td className="px-6 py-4">
                      {claim.agentDecision?.status === 'approved' ? (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-green-100 text-green-700">
                          <CheckCircle className="w-4 h-4" />
                          Approved
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-100 text-red-700">
                          <XCircle className="w-4 h-4" />
                          Rejected
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {claim.agentDecision?.decidedAt.toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-gray-700 max-w-xs truncate">
                      {claim.agentDecision?.message}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
