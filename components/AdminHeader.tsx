'use client';

import { FiBell, FiUser, FiLogOut } from 'react-icons/fi';

interface AdminHeaderProps {
  user: any;
  onLogout: () => void;
}

const AdminHeader = ({ user, onLogout }: AdminHeaderProps) => {
  return (
    <header className="bg-white shadow">
      <div className="flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Admin Panel</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <FiBell className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <FiUser className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">{user?.email}</span>
          </div>
          
          <button
            onClick={onLogout}
            className="p-2 rounded hover:bg-gray-100 text-gray-600"
            title="Logout"
          >
            <FiLogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;