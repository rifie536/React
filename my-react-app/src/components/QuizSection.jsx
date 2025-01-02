import React, { useState } from 'react';
import { questions } from '../data/questions';
import Question from './Question';

const QuizSection = ({ 
  selectedSubject, 
  selectedYear, 
  onQuizStart, 
  onQuizEnd,
  isQuizStarted 
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!selectedSubject || !selectedYear) {
    return null;
  }

  console.log('Selected:', { selectedSubject, selectedYear, questions });
  const yearQuestions = questions[selectedSubject]?.[selectedYear] || [];
  console.log('Year Questions:', yearQuestions);

  if (yearQuestions.length === 0) {
    return (
      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600">
            選択された年度の問題はまだ登録されていません。（科目ID: {selectedSubject}, 年度: {selectedYear}）
          </p>
        </div>
      </div>
    );
  }

  if (!isQuizStarted) {
    return (
      <div className="mt-6">
        <div className="bg-white rounded-lg shadow-lg p-6 text-center">
          <button
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700 transition-colors"
            onClick={onQuizStart}
          >
            テストを開始
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = yearQuestions[currentQuestionIndex];

  const handleAnswer = (answerIndex) => {
    setIsCorrect(answerIndex === currentQuestion.correctAnswer);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < yearQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowResult(false);
    } else {
      // テスト終了時の処理
      setCurrentQuestionIndex(0);
      setShowResult(false);
      onQuizEnd();
    }
  };

  return (
    <div className="mt-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            問題 {currentQuestionIndex + 1} / {yearQuestions.length}
          </h2>
        </div>
        <Question
          question={currentQuestion}
          onAnswer={handleAnswer}
          showResult={showResult}
          isCorrect={isCorrect}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default QuizSection;
