import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface CreateUserPageProps {
  onCreateUser: (user: NewUser) => void;
  onBack: () => void;
}

export interface NewUser {
  name: string;
  email: string;
  role: 'agent' | 'hospital';
  tempPassword: string;
}

export function CreateUserPage({ onCreateUser, onBack }: CreateUserPageProps) {
  const [formData, setFormData] = useState<NewUser>({
    name: '',
    email: '',
    role: 'agent',
    tempPassword: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreateUser(formData);
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Users List
      </button>

      <div className="mb-8">
        <h1 className="text-[#0F4C5C] mb-2">Create User Account</h1>
        <p className="text-gray-600">Create a new agent or hospital account</p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              placeholder="Full name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              placeholder="user@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="role" className="block text-gray-700 mb-2">
              Role
            </label>
            <select
              id="role"
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value as 'agent' | 'hospital' })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
            >
              <option value="agent">Insurance Agent</option>
              <option value="hospital">Hospital</option>
            </select>
          </div>

          <div>
            <label htmlFor="tempPassword" className="block text-gray-700 mb-2">
              Temporary Password
            </label>
            <input
              id="tempPassword"
              type="text"
              value={formData.tempPassword}
              onChange={(e) => setFormData({ ...formData, tempPassword: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0F4C5C]"
              placeholder="Temporary password"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className="bg-[#0F4C5C] text-white px-6 py-2 rounded hover:bg-[#0d3d4a] transition-colors"
            >
              Create Account
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
