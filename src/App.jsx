import { useState } from 'react'

const works = [
  {
    id: 1,
    title: 'クリニックLP',
    description: '清潔感のある医療系ランディングページ。信頼感を重視したデザイン。',
    tech: 'HTML / CSS',
    url: '#'
  },
  {
    id: 2,
    title: '温泉旅館LP',
    description: '和風テイストの旅館向けランディングページ。落ち着いた雰囲気を演出。',
    tech: 'HTML / CSS',
    url: '#'
  },
  {
    id: 3,
    title: '美容室LP',
    description: 'おしゃれな美容サロン向けランディングページ。トレンド感のあるデザイン。',
    tech: 'HTML / CSS',
    url: '#'
  }
]

function WorkCard({ work }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-bold">{work.title}</h3>
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{work.tech}</span>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mt-4 text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
      >
        {isOpen ? '閉じる ↑' : '詳細を見る ↓'}
      </button>
      {isOpen && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">{work.description}</p>
          
            href={work.url}
            className="inline-block mt-3 text-sm text-white bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            サイトを見る →
          </a>
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <p className="mt-2 text-gray-500">Web制作の実績</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
        © 2026 Portfolio
      </footer>
    </div>
  )
}

export default App