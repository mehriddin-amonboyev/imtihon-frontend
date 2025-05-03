import { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { MainLayout } from './layout/mainlayout'
import route from './routers/route';
import Login from './page/auth/auth';

function App() {

  //use navigate hook to redirect to login page
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          {route.map(({ comp: Page, path }, index) => (
            <Route
              key={index}
              index={!path ? true : false}
              path={path}
              element={<Page />}
            />
          ))}
        </Route>
      </Routes>
    </>
  )
}

export default App



// 52-minutga kelgan edim redux toolkit mavzusidan 