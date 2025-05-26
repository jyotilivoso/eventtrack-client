import React, { useEffect, useState } from 'react';
import { deleteUser, getAllUser } from '../services/Service';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const handleDelete = (id) => {
     deleteUser(id).then((res)=>{
      console.log(res);
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers);

      alert("User deleted successfully");
     })
  }
  const staticPlaces = [
    { id: 1, placeName: 'Puri Beach', location: 'Puri, Odisha' },
    { id: 2, placeName: 'Konark Sun Temple', location: 'Konark, Odisha' },
    { id: 3, placeName: 'Chilika Lake', location: 'Satapada, Odisha' }
  ];

  useEffect(() => {
    // Fetch users
    getAllUser()
      .then((res) => {
        const allUsers = res?.data?.data || [];
        const nonAdminUsers = allUsers.filter(user => user.role !== 'Admin');
        setUsers(nonAdminUsers);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Home Page</h1>

      {/* Clients Section */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Clients</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Add Client
          </button>
        </div>
        <table className="w-full bg-white shadow-md rounded border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Phone No</th>
              <th className="p-3 text-left">Place</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id || index} className="border-t">
                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.userName || 'N/A'}</td>
                  <td className="p-3">{user.phoneNumber}</td>
                  <td className="p-3">{user.place}</td>
                  <td className="p-3">
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                    <button onClick={()=>handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* Static Places Section */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Places</h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Add Place
          </button>
        </div>
        <table className="w-full bg-white shadow-md rounded border border-gray-200">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Place Name</th>
              <th className="p-3 text-left">Location</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staticPlaces.map((place) => (
              <tr key={place.id} className="border-t">
                <td className="p-3">{place.id}</td>
                <td className="p-3">{place.placeName}</td>
                <td className="p-3">{place.location}</td>
                <td className="p-3">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                  <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Admin;
