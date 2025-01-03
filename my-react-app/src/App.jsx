import { useState } from 'react'
import SubjectSelect from './components/SubjectSelect'
import YearSelect from './components/YearSelect'
import QuizSection from './components/QuizSection'
import Sidebar from './components/Sidebar'
import AdSpace from './components/AdSpace'
import HamburgerMenu from './components/HamburgerMenu'
import MobileMenu from './components/MobileMenu'
import { subjects, years } from './data/subjects'

function App() {
  const [selectedSubjectId, setSelectedSubjectId] = useState(null)
  const [selectedYear, setSelectedYear] = useState(null)
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId)

  const handleQuizStart = () => {
    setIsQuizStarted(true)
    setIsMobileMenuOpen(false)
  }

  const handleQuizEnd = () => {
    setIsQuizStarted(false)
    setSelectedSubjectId(null)
    setSelectedYear(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 shadow relative">
        <div className="w-full px-4 py-6">
          <div className="flex items-center justify-between lg:justify-center relative">
            {/* ハンバーガーメニュー */}
            <div className="lg:hidden">
              <HamburgerMenu isOpen={isMobileMenuOpen} onToggle={toggleMobileMenu} />
            </div>
            
            {/* タイトル */}
            <h1 className="text-2xl lg:text-3xl font-bold text-white text-center flex-grow lg:flex-grow-0">
              <span className="lg:hidden">
                公害防止管理者
                <br />
                水質 過去問題集
              </span>
              <span className="hidden lg:inline">
                公害防止管理者 水質 過去問題集
              </span>
            </h1>
            
            {/* 右側のスペーサー（モバイルでの中央寄せ用） */}
            <div className="w-10 lg:hidden"></div>
          </div>
        </div>
      </header>
      
      {/* モバイルメニュー */}
      <MobileMenu isOpen={isMobileMenuOpen}>
        <Sidebar />
      </MobileMenu>

      <div className="flex-1 flex flex-col lg:flex-row">
        {/* 左サイドバー（デスクトップ） */}
        <div className="hidden lg:block lg:w-64 flex-shrink-0 p-4">
          <div className="sticky top-4">
            <Sidebar />
          </div>
        </div>

        {/* メインコンテンツ */}
        <main className="flex-1 p-4 min-w-0">
          <div className="max-w-4xl mx-auto">
            {!isQuizStarted && (
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
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
          </div>
        </main>

        {/* 右サイドバー（広告スペース） - デスクトップのみ */}
        <div className="hidden lg:block lg:w-64 flex-shrink-0 p-4">
          <div className="sticky top-4">
            <AdSpace />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
