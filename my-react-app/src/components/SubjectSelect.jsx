import React from 'react';

const SubjectSelect = ({ subjects, selectedSubject, onSubjectChange }) => {
  return (
    <div className="mb-6">
      <h2 className="text-gray-700 text-lg font-bold mb-4">
        科目を選択
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {subjects.map((subject) => (
          <button
            key={subject.id}
            className={`p-4 rounded-lg text-left transition-colors ${
              selectedSubject === subject.id
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => onSubjectChange(subject.id)}
          >
            <div className="font-bold">{subject.name}</div>
            <div className={`text-sm ${
              selectedSubject === subject.id ? 'text-blue-100' : 'text-gray-500'
            }`}>
              {subject.description}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectSelect;
