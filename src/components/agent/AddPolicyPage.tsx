import { useState } from 'react';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { Policy } from '../../App';

interface AddPolicyPageProps {
  onAddPolicy: (policy: Policy) => void;
  onBack: () => void;
}

export function AddPolicyPage({ onAddPolicy, onBack }: AddPolicyPageProps) {
  const [formData, setFormData] = useState({
    clientEmail: '',
    policyId: '',
    policyType: 'Health' as 'Health' | 'Car' | 'Other',
    requiredDocuments: [''],
  });

  const handleAddDocument = () => {
    setFormData({
      ...formData,
      requiredDocuments: [...formData.requiredDocuments, ''],
    });
  };

  const handleRemoveDocument = (index: number) => {
    setFormData({
      ...formData,
      requiredDocuments: formData.requiredDocuments.filter((_, i) => i !== index),
    });
  };

  const handleDocumentChange = (index: number, value: string) => {
    const newDocs = [...formData.requiredDocuments];
    newDocs[index] = value;
    setFormData({ ...formData, requiredDocuments: newDocs });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPolicy: Policy = {
      id: Math.random().toString(36).substr(2, 9),
      clientEmail: formData.clientEmail,
      policyId: formData.policyId,
      policyType: formData.policyType,
      requiredDocuments: formData.requiredDocuments.filter(d => d.trim() !== ''),
      agentId: 'agent1',
      agentName: 'Insurance Agent',
    };
    onAddPolicy(newPolicy);
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Policies List
      </button>

      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">Add New Policy</h1>
        <p className="text-gray-600">Create a new policy with required document specifications</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="clientEmail" className="block text-gray-700 mb-2">
              Client Email
            </label>
            <input
              id="clientEmail"
              type="email"
              value={formData.clientEmail}
              onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              placeholder="client@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="policyId" className="block text-gray-700 mb-2">
              Policy ID
            </label>
            <input
              id="policyId"
              type="text"
              value={formData.policyId}
              onChange={(e) => setFormData({ ...formData, policyId: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              placeholder="POL-2026-XXX"
              required
            />
          </div>

          <div>
            <label htmlFor="policyType" className="block text-gray-700 mb-2">
              Policy Type
            </label>
            <select
              id="policyType"
              value={formData.policyType}
              onChange={(e) => setFormData({ ...formData, policyType: e.target.value as 'Health' | 'Car' | 'Other' })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
            >
              <option value="Health">Health</option>
              <option value="Car">Car</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Required Documents</label>
            <div className="space-y-3">
              {formData.requiredDocuments.map((doc, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={doc}
                    onChange={(e) => handleDocumentChange(index, e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
                    placeholder="e.g., Hospital Bill, Discharge Summary"
                    required
                  />
                  {formData.requiredDocuments.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveDocument(index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddDocument}
                className="flex items-center gap-1 text-[#0F4C5C] hover:underline"
              >
                <Plus className="w-4 h-4" />
                Add Document
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-[#0F4C5C] text-white px-6 py-2 rounded hover:bg-[#0d3d4a] transition-colors"
            >
              Add Policy
            </button>
            <button
              type="button"
              onClick={onBack}
              className="border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
