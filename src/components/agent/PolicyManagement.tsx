import { Policy } from '../../App';
import { Plus } from 'lucide-react';

interface PolicyManagementProps {
  policies: Policy[];
  onNavigateToAddPolicy: () => void;
  searchQuery: string;
}

export function PolicyManagement({ policies, onNavigateToAddPolicy, searchQuery }: PolicyManagementProps) {
  const filteredPolicies = policies.filter(p =>
    p.policyId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">Policy Management</h1>
        <p className="text-gray-600">Define policy-specific document requirements for clients</p>
      </div>

      {/* Add Policy Button */}
      <button
        onClick={onNavigateToAddPolicy}
        className="flex items-center gap-2 bg-[#0F4C5C] text-white px-6 py-3 rounded hover:bg-[#0d3d4a] transition-colors mb-8"
      >
        <Plus className="w-5 h-5" />
        Add Policy
      </button>

      {/* Policies List */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-[#0F4C5C]">Added Policies</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700">Policy ID</th>
                <th className="px-6 py-3 text-left text-gray-700">Client Email</th>
                <th className="px-6 py-3 text-left text-gray-700">Type</th>
                <th className="px-6 py-3 text-left text-gray-700">Required Documents</th>
              </tr>
            </thead>
            <tbody>
              {filteredPolicies.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                    No policies found
                  </td>
                </tr>
              ) : (
                filteredPolicies.map((policy) => (
                  <tr key={policy.id} className="border-b border-gray-200 last:border-b-0">
                    <td className="px-6 py-4">{policy.policyId}</td>
                    <td className="px-6 py-4">{policy.clientEmail}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 rounded bg-[#0F4C5C]/10 text-[#0F4C5C]">
                        {policy.policyType}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {policy.requiredDocuments.map((doc, idx) => (
                          <span
                            key={idx}
                            className="inline-flex px-2 py-1 rounded bg-gray-100 text-gray-700"
                          >
                            {doc}
                          </span>
                        ))}
                      </div>
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