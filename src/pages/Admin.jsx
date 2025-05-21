import React from 'react';

const Admin = () => {
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
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Sample row */}
            <tr className="border-t">
              <td className="p-3">1</td>
              <td className="p-3">John Doe</td>
              <td className="p-3">john@example.com</td>
              <td className="p-3">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Places Section */}
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
            {/* Sample row */}
            <tr className="border-t">
              <td className="p-3">101</td>
              <td className="p-3">Central Park</td>
              <td className="p-3">New York</td>
              <td className="p-3">
                <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Admin;