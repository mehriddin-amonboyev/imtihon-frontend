import { Route, Routes } from 'react-router-dom'
import { HomeLayout } from './layout/guest/homeLayout'
import { studentRoutes } from './routers/route';
import Auth from './page/auth/auth';
import { Home } from './page/guest/home/home';
import { AUTH_ROUTES, HOME_ROUTES } from './utils/path';
import { AuthRequired } from './components/common/auth/AuthRequired';
import { ROLES } from './utils/const';
import { lazy, Suspense } from 'react';
import { StudentLayout } from './layout/student/studentHome';
import { NotFound } from './components/common/notFound/notFound';

function App() {
  return (
    <>
      <Routes>
        <Route path={HOME_ROUTES.home} element={<HomeLayout />}>
          <Route path={HOME_ROUTES.home} element={<Home />} />
          <Route path={AUTH_ROUTES.login} element={<Auth />} />
        </Route>

        <Route element={<AuthRequired allowRoles={[ROLES.user, ROLES.teacher, ROLES.student]} />}>
          <Route element={<StudentLayout />}>
            {studentRoutes.map(({ comp, path }, index) => {
              const Page = lazy(comp);
              return (
                <Route
                  key={index}
                  index={!path}
                  path={path}
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <Page />
                    </Suspense>
                  }
                />
              )
            })}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </>
  )
}

export default App

// 52-minutga kelgan edim redux toolkit mavzusidan 