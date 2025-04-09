function App() {
  return (
    <div className="app flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">BB Champ</h1>
      </header>
      <main className="w-full max-w-2xl px-4">
        <div className="card bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-xl border border-white/20">
          <p className="text-center text-lg text-gray-200">
            <img src="/wendt.webp" alt="Welcome" className="w-full h-auto" />
          </p>
        </div>
      </main>
    </div>
  )
}

export default App 