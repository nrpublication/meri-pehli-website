import { useState } from 'react'
import { supabase } from './supabaseClient'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Supabase mein data bhejne ka code
    const { data, error } = await supabase
      .from('messages')
      .insert([{ name, email, message }])

    if (error) {
      alert("Kuch galti hui: " + error.message)
    } else {
      alert("Dhanyawad! Aapka message humein mil gaya hai.")
      setName(''); setEmail(''); setMessage('');
    }
  }

  return (
    <div className="container">
      <nav className="navbar"><h2>Research Cell - Apex University</h2></nav>
      
      <div className="form-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Aapka Naam" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <textarea placeholder="Aapka Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
          <button type="submit" className="btn">Message Bhejein</button>
        </form>
      </div>
    </div>
  )
}

export default App