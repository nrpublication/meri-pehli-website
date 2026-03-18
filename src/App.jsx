import './App.css'

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <h2>My Portfolio</h2>
      </nav>
      
      <div className="hero">
        <h1>Namaste, Main Dheeraj Hoon! 🚀</h1>
        <p>Assistant Professor | Web Developer in Training</p>
        <button className="btn" onClick={() => alert('Dhanyawad connect karne ke liye!')}>
          Mujhse Judein
        </button>
      </div>

      <div className="card-section">
        <div className="card">
          <h3>My Skills</h3>
          <p>React, Node.js, Supabase</p>
        </div>
      </div>
    </div>
  )
}

export default App