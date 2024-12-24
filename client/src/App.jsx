import React from 'react'
import HomePage from './components/HomePage'
import { Route,Routes } from 'react-router-dom'
import ChatPage from './components/ChatPage'
const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  )
}

export default App