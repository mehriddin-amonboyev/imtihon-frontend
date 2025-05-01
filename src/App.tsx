import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './layout/mainlayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
