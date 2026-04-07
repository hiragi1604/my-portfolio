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
        {isOpen ? '閉じる' : '詳細を見る'}
      </button>
      {isOpen && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-600">{work.description}</p>
          <a href={work.url} className="inline-block mt-3 text-sm text-white bg-gray-900 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">サイトを見る</a>
        </div>
      )}
    </div>
  )
}

function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
        <p className="text-xl font-bold text-green-600">送信完了！</p>
        <p className="mt-2 text-gray-600">お問い合わせありがとうございます。</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-8">
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">お名前</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">メールアドレス</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-bold mb-2">お問い合わせ内容</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="5"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
      >
        送信する
      </button>
    </form>
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

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
              H
            </div>
            <div>
              <h2 className="text-2xl font-bold">ひらが</h2>
              <p className="text-gray-500 mt-1">Web Developer / LP制作</p>
            </div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed">
            名古屋を拠点にWeb制作をしています。クリニック、温泉旅館、美容室など様々な業種のランディングページを制作してきました。HTML/CSS/JavaScriptに加え、React・Next.jsでのWebアプリ開発にも対応しています。お気軽にご相談ください。
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">HTML</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">CSS</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">JavaScript</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">React</span>
            <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">Tailwind CSS</span>
          </div>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </main>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <ContactForm />
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-400">
        &copy; 2026 Portfolio
      </footer>
    </div>
  )
}

export default App