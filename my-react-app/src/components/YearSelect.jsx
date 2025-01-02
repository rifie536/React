import React from 'react';

const YearSelect = ({ years, selectedYear, onYearChange }) => {
  return (
    <div className="mb-6">
      <h2 className="text-gray-700 text-lg font-bold mb-4">
        年度を選択
      </h2>
      <div className="flex flex-wrap gap-3">
        {years.map((year) => (
          <button
            key={year.id}
            className={`px-6 py-3 rounded-lg transition-colors ${
              selectedYear === year.year
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => onYearChange(year.year)}
          >
            {year.year}年
          </button>
        ))}
      </div>
    </div>
  );
};

export default YearSelect;
