import { useState } from 'react';
import { Policy, Claim, Document } from '../../App';
import { FileText, Camera, Upload, X } from 'lucide-react';

interface MyPoliciesProps {
  policies: Policy[];
  onSubmitClaim: (claim: Claim) => void;
  userId: string;
  userName: string;
  userEmail: string;
}

export function MyPolicies({ policies, onSubmitClaim, userId, userName, userEmail }: MyPoliciesProps) {
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [uploadedDocuments, setUploadedDocuments] = useState<Map<string, Document>>(new Map());
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [currentDocumentName, setCurrentDocumentName] = useState('');

  const handleFileUpload = (file: File) => {
    const newDocument: Document = {
      id: Math.random().toString(36).substr(2, 9),
      name: currentDocumentName,
      fileName: file.name,
      fileUrl: URL.createObjectURL(file),
      uploadedAt: new Date(),
    };
    const newMap = new Map(uploadedDocuments);
    newMap.set(currentDocumentName, newDocument);
    setUploadedDocuments(newMap);
    setShowUploadModal(false);
    setCurrentDocumentName('');
  };

  const handleCameraCapture = () => {
    // Mock camera capture
    const mockFile = new File([''], 'camera_capture.jpg', { type: 'image/jpeg' });
    handleFileUpload(mockFile);
  };

  const handleDeviceUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleSubmitClaim = () => {
    if (!selectedPolicy) return;

    const claim: Claim = {
      id: Math.random().toString(36).substr(2, 9),
      policyId: selectedPolicy.policyId,
      clientId: userId,
      clientName: userName,
      clientEmail: userEmail,
      status: 'pending',
      documents: Array.from(uploadedDocuments.values()),
      submittedAt: new Date(),
    };

    onSubmitClaim(claim);
    setSelectedPolicy(null);
    setUploadedDocuments(new Map());
  };

  if (selectedPolicy) {
    const allDocumentsUploaded = selectedPolicy.requiredDocuments.every(doc =>
      uploadedDocuments.has(doc)
    );

    return (
      <div>
        <button
          onClick={() => {
            setSelectedPolicy(null);
            setUploadedDocuments(new Map());
          }}
          className="text-[#0F4C5C] hover:underline mb-6"
        >
          ← Back to Policies
        </button>

        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-[#0F4C5C] mb-6">Submit Claim - {selectedPolicy.policyId}</h2>

          <div className="mb-6">
            <p className="text-gray-600 mb-2">Policy Type</p>
            <span className="inline-flex px-3 py-1 rounded bg-[#0F4C5C]/10 text-[#0F4C5C]">
              {selectedPolicy.policyType}
            </span>
          </div>

          <h3 className="text-[#0F4C5C] mb-4">Required Documents</h3>
          <div className="space-y-3 mb-8">
            {selectedPolicy.requiredDocuments.map((docName) => {
              const uploaded = uploadedDocuments.get(docName);
              return (
                <div
                  key={docName}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-gray-600" />
                    <div>
                      <p>{docName}</p>
                      {uploaded && (
                        <p className="text-gray-600">{uploaded.fileName}</p>
                      )}
                    </div>
                  </div>
                  {uploaded ? (
                    <div className="flex items-center gap-2">
                      <span className="text-green-600">Uploaded</span>
                      <button
                        onClick={() => {
                          const newMap = new Map(uploadedDocuments);
                          newMap.delete(docName);
                          setUploadedDocuments(newMap);
                        }}
                        className="text-red-600 hover:bg-red-50 p-1 rounded"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setCurrentDocumentName(docName);
                        setShowUploadModal(true);
                      }}
                      className="text-[#0F4C5C] hover:underline"
                    >
                      Add Document
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <button
            onClick={handleSubmitClaim}
            disabled={!allDocumentsUploaded}
            className="bg-[#0F4C5C] text-white px-6 py-3 rounded hover:bg-[#0d3d4a] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Submit Claim
          </button>
        </div>

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-md w-full p-6">
              <h2 className="text-[#0F4C5C] mb-4">Upload Document</h2>
              <p className="text-gray-600 mb-6">{currentDocumentName}</p>

              <div className="space-y-3">
                <button
                  onClick={handleCameraCapture}
                  className="w-full flex items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded p-6 hover:border-[#0F4C5C] hover:bg-gray-50 transition-colors"
                >
                  <Camera className="w-6 h-6 text-gray-600" />
                  <span>Use Camera</span>
                </button>

                <label className="w-full flex items-center justify-center gap-3 border-2 border-dashed border-gray-300 rounded p-6 hover:border-[#0F4C5C] hover:bg-gray-50 transition-colors cursor-pointer">
                  <Upload className="w-6 h-6 text-gray-600" />
                  <span>Upload from Device</span>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    onChange={handleDeviceUpload}
                    className="hidden"
                  />
                </label>
              </div>

              <p className="text-gray-500 mt-4 text-center">
                Supported formats: JPG, PNG, PDF
              </p>

              <button
                onClick={() => {
                  setShowUploadModal(false);
                  setCurrentDocumentName('');
                }}
                className="w-full mt-6 border border-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">My Policies</h1>
        <p className="text-gray-600">View your insurance policies and submit claims</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {policies.map((policy) => (
          <div key={policy.id} className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="mb-4">
              <h3 className="text-[#0F4C5C] mb-2">{policy.policyId}</h3>
              <span className="inline-flex px-3 py-1 rounded bg-[#0F4C5C]/10 text-[#0F4C5C]">
                {policy.policyType}
              </span>
            </div>

            <div className="mb-4">
              <p className="text-gray-600 mb-2">Assigned Agent</p>
              <p>{policy.agentName}</p>
            </div>

            <button
              onClick={() => setSelectedPolicy(policy)}
              className="w-full bg-[#0F4C5C] text-white px-6 py-2 rounded hover:bg-[#0d3d4a] transition-colors"
            >
              Submit Claim
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
