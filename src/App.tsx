import { Route, Routes } from 'react-router-dom'
import { HomeLayout } from './layout/home/homeLayout'
import route from './routers/route';
import Auth from './page/auth/auth';
import { Home } from './page/home/home';

function App() {
  // // use navigate hook to redirect to login page
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     navigate('/app/login')
  //   }
  // }, [navigate])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route path='/' element={<Home />}>
          </Route>
        </Route>

        <Route path="/app/login" element={<Auth />} />
        {route.map(({ comp: Page, path }, index) => (
          <Route
            key={index}
            index={!path ? true : false}
            path={path}
            element={<Page />}
          />
        ))}
      </Routes>
    </>
  )
}

export default App

// 52-minutga kelgan edim redux toolkit mavzusidan 