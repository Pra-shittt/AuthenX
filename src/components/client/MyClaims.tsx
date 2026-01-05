import { Claim } from '../../App';
import { FileText, Clock } from 'lucide-react';

interface MyClaimsProps {
  claims: Claim[];
}

export function MyClaims({ claims }: MyClaimsProps) {
  const getStatusBadge = (status: Claim['status']) => {
    const styles = {
      pending: 'bg-gray-100 text-gray-700',
      under_review: 'bg-blue-100 text-blue-700',
      awaiting_hospital: 'bg-amber-100 text-amber-700',
    };
    const labels = {
      pending: 'Pending',
      under_review: 'Under Review',
      awaiting_hospital: 'Awaiting Hospital Confirmation',
    };

    return (
      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded ${styles[status as keyof typeof styles]}`}>
        <Clock className="w-4 h-4" />
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">My Claims</h1>
        <p className="text-gray-600">Track the status of your submitted claims</p>
      </div>

      {claims.length === 0 ? (
        <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
          <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">No active claims</p>
        </div>
      ) : (
        <div className="space-y-4">
          {claims.map((claim) => (
            <div key={claim.id} className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[#0F4C5C] mb-1">{claim.policyId}</h3>
                  <p className="text-gray-600">
                    Submitted on {claim.submittedAt.toLocaleDateString()}
                  </p>
                </div>
                {getStatusBadge(claim.status)}
              </div>

              <div className="mb-4">
                <p className="text-gray-700 mb-2">Submitted Documents</p>
                <div className="flex flex-wrap gap-2">
                  {claim.documents.map((doc) => (
                    <span
                      key={doc.id}
                      className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 text-gray-700"
                    >
                      <FileText className="w-4 h-4" />
                      {doc.name}
                    </span>
                  ))}
                </div>
              </div>

              {claim.status === 'awaiting_hospital' && (
                <div className="bg-amber-50 border border-amber-200 rounded p-4">
                  <p className="text-amber-800">
                    Your claim is awaiting hospital verification. This process typically takes 2-3 business days.
                  </p>
                </div>
              )}

              {claim.status === 'under_review' && (
                <div className="bg-blue-50 border border-blue-200 rounded p-4">
                  <p className="text-blue-800">
                    Your claim is currently being reviewed by our insurance agent.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
