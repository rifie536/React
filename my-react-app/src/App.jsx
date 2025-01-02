import { useState } from 'react'
import SubjectSelect from './components/SubjectSelect'
import YearSelect from './components/YearSelect'
import QuizSection from './components/QuizSection'
import { subjects, years } from './data/subjects'

function App() {
  const [selectedSubjectId, setSelectedSubjectId] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [isQuizStarted, setIsQuizStarted] = useState(false)

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId)

  const handleQuizStart = () => {
    setIsQuizStarted(true)
  }

  const handleQuizEnd = () => {
    setIsQuizStarted(false)
    setSelectedSubjectId(null)
    setSelectedYear(null)
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-white">
            公害防止管理者 水質 過去問題集
          </h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6">
        {!isQuizStarted && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <SubjectSelect
              subjects={subjects}
              selectedSubject={selectedSubjectId}
              onSubjectChange={setSelectedSubjectId}
            />
            <YearSelect
              years={years}
              selectedYear={selectedYear}
              onYearChange={setSelectedYear}
            />
          </div>
        )}
        <QuizSection
          selectedSubject={selectedSubjectId}
          selectedYear={selectedYear}
          onQuizStart={handleQuizStart}
          onQuizEnd={handleQuizEnd}
          isQuizStarted={isQuizStarted}
        />
      </main>
    </div>
  )
}

export default App
