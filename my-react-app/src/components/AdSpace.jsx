import React from 'react';

const AdSpace = () => {
  return (
    <aside className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-800">広告スペース</h2>
      <div className="space-y-4">
        {/* 広告ユニット1 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-[250px] flex items-center justify-center">
          <p className="text-gray-500">広告スペース 1</p>
        </div>
        
        {/* 広告ユニット2 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-[250px] flex items-center justify-center">
          <p className="text-gray-500">広告スペース 2</p>
        </div>
        
        {/* 広告ユニット3 */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 h-[600px] flex items-center justify-center">
          <p className="text-gray-500">広告スペース 3</p>
        </div>
      </div>
    </aside>
  );
};

export default AdSpace;
