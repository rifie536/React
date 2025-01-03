import React from 'react';

const Question = ({ question, onAnswer, showResult, isCorrect, onNext }) => {
  return (
    <div className="space-y-6 relative min-h-[400px]">
      <div className="text-xl font-semibold mb-8 leading-relaxed">
        {question.question}
      </div>
      
      <div className="space-y-3">
        {question.choices.map((choice, index) => (
          <button
            key={index}
            className={`w-full p-4 text-left rounded-lg border transition-colors ${
              showResult
                ? index === question.correctAnswer
                  ? 'bg-green-100 border-green-500'
                  : 'bg-gray-50 border-gray-300'
                : 'bg-white border-gray-300 hover:bg-gray-50'
            }`}
            onClick={() => onAnswer(index)}
            disabled={showResult}
          >
            <div className="flex items-start">
              <span className="inline-block w-8 flex-shrink-0">{index + 1}.</span>
              <span>{choice}</span>
            </div>
          </button>
        ))}
      </div>

      {showResult && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white bg-opacity-90">
          <div className="text-[200px] mb-4 transform scale-150 animate-bounce">
            {isCorrect ? (
              <span className="text-red-500">⭕</span>
            ) : (
              <span className="text-blue-500">❌</span>
            )}
          </div>
          <button
            className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg"
            onClick={onNext}
          >
            次の問題へ
          </button>
        </div>
      )}
    </div>
  );
};

export default Question;
