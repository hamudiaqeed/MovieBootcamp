import React from 'react';

const Table = ({ topRated }) => {
    console.log(topRated)
  return (
    <div className="overflow-x-auto w-3/4">
        <table className="min-w-full divide-y divide-gray-200 w-full">
            <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title/Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vote Average</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Release Date</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {topRated.map((tred, index) => (
                    <tr key={tred.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{index + 1}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tred.title || tred.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tred.vote_average || 0}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{tred.release_date}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default Table;