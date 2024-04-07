import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import AllChats from './components/AllChats'
import ChatIf from './components/ChatIf'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/chat" element={<AllChats/>}/>
        <Route path="/chat/:id" element={<ChatIf/>}/>
      </Routes>
    </>
  )
}

export default App
