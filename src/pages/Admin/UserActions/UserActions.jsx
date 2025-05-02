import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import Skeleton from 'react-loading-skeleton';
import useUser from '../../../hook/useUser';
import useAxiosPublic from '../../../hook/useAxiosPublic';

const UserActions = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { isAdmin, loading, error } = useUser();
  const axiosInstance = useAxiosPublic();
  // Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosInstance.get('/auth/users');
        setUsers(res.data);
      } catch (error) {
        Swal.fire('Error', 'Failed to fetch users', 'error');
      }
    };
    fetchUsers();
  }, []);

  // Update user
  const updateUser = async (email, updateData) => {
    try {
      const res = await axiosInstance.patch(`/auth/update/${email}`, updateData);
      Swal.fire('Success', res.data.message || 'User updated successfully', 'success');
      const updatedUsers = users.map(user =>
        user.email === email ? { ...user, ...updateData } : user
      );
      setUsers(updatedUsers);
    } catch (error) {
      Swal.fire('Error', 'Failed to update user', 'error');
    }
  };

  const filteredUsers = users.filter(user =>
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 bg-white rounded shadow-md w-full max-w-6xl mx-auto overflow-x-auto">
  <h2 className="text-xl sm:text-2xl font-bold mb-4">User Management</h2>

  <input
    type="text"
    placeholder="Search by email..."
    className="border p-2 rounded w-full mb-4"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />

  <div className="overflow-x-auto">
    <table className="min-w-[640px] w-full border border-gray-300 text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 border text-left">Email</th>
          <th className="p-2 border text-left">Role</th>
          <th className="p-2 border text-left">Status</th>
          <th className="p-2 border text-left">Verified</th>
          <th className="p-2 border text-left">Actions</th>
        </tr>
      </thead>
      <tbody>
        {loading ? (
          <tr>
            <td className="p-2 border"><Skeleton width={200} /></td>
            <td className="p-2 border"><Skeleton width={100} /></td>
            <td className="p-2 border"><Skeleton width={80} /></td>
            <td className="p-2 border"><Skeleton width={80} /></td>
            <td className="p-2 border"><Skeleton width={200} /></td>
          </tr>
        ) : filteredUsers.length > 0 ? (
          filteredUsers.map((user, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.isAdmin ? 'Admin' : 'User'}</td>
              <td className="p-2 border">{user.isDeleteD ? 'Deleted' : 'Active'}</td>
              <td className="p-2 border">{user.isVerified ? 'Yes' : 'No'}</td>
              <td className="p-2 border space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
                {isAdmin && (
                  <button
                    onClick={() => updateUser(user.email, { isAdmin: !user.isAdmin })}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                  >
                    {user.isAdmin ? 'Remove Admin' : 'Make Admin'}
                  </button>
                )}
                {isAdmin && (
                  <button
                    onClick={() => updateUser(user.email, { isDeleteD: !user.isDeleteD })}
                    className={`${
                      user.isDeleteD ? 'bg-green-600' : 'bg-red-600'
                    } text-white px-3 py-1 rounded hover:opacity-90`}
                  >
                    {user.isDeleteD ? 'Undo Delete' : 'Delete'}
                  </button>
                )}
                {isAdmin && (
                  <button
                    onClick={() => updateUser(user.email, { isVerified: true })}
                    disabled={user.isVerified}
                    className={`${
                      user.isVerified
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700'
                    } text-white px-3 py-1 rounded`}
                  >
                    {user.isVerified ? 'Approved' : 'Approve'}
                  </button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5" className="text-center p-4 text-gray-500">
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
</div>

  );
};

export default UserActions;
