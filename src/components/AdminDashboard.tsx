import { useState } from 'react';
import { User } from '../App';
import { LogOut, UserPlus } from 'lucide-react';
import { CreateUserPage, NewUser } from './admin/CreateUserPage';
import { Logo } from './Logo';

interface AdminDashboardProps {
  user: User;
  onLogout: () => void;
}

type AdminPage = 'users' | 'create-user';

export function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [currentPage, setCurrentPage] = useState<AdminPage>('users');
  const [createdUsers, setCreatedUsers] = useState<Array<NewUser & { createdAt: Date }>>([]);

  const handleCreateUser = (newUser: NewUser) => {
    setCreatedUsers([...createdUsers, { ...newUser, createdAt: new Date() }]);
    setCurrentPage('users');
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
        {currentPage === 'users' && (
          <>
            <div className="mb-8">
              <h1 className="text-[#0F4C5C] mb-2">Admin Portal</h1>
              <p className="text-gray-600">Create and manage agent and hospital accounts</p>
            </div>

            {/* Create User Button */}
            <button
              onClick={() => setCurrentPage('create-user')}
              className="flex items-center gap-2 bg-[#0F4C5C] text-white px-6 py-3 rounded hover:bg-[#0d3d4a] transition-colors mb-8"
            >
              <UserPlus className="w-5 h-5" />
              Create User Account
            </button>

            {/* Created Users List */}
            <div className="bg-white rounded-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-[#0F4C5C]">Created Accounts</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-3 text-left text-gray-700">Name</th>
                      <th className="px-6 py-3 text-left text-gray-700">Email</th>
                      <th className="px-6 py-3 text-left text-gray-700">Role</th>
                      <th className="px-6 py-3 text-left text-gray-700">Created At</th>
                    </tr>
                  </thead>
                  <tbody>
                    {createdUsers.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                          No accounts created yet
                        </td>
                      </tr>
                    ) : (
                      createdUsers.map((u, idx) => (
                        <tr key={idx} className="border-b border-gray-200 last:border-b-0">
                          <td className="px-6 py-4">{u.name}</td>
                          <td className="px-6 py-4">{u.email}</td>
                          <td className="px-6 py-4">
                            <span className="inline-flex px-3 py-1 rounded bg-[#0F4C5C]/10 text-[#0F4C5C]">
                              {u.role === 'agent' ? 'Insurance Agent' : 'Hospital'}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-gray-600">
                            {u.createdAt.toLocaleDateString()} {u.createdAt.toLocaleTimeString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {currentPage === 'create-user' && (
          <CreateUserPage
            onCreateUser={handleCreateUser}
            onBack={() => setCurrentPage('users')}
          />
        )}
      </main>
    </div>
  );
}