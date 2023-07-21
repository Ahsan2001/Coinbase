import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Error, Login, Signup } from '../pages';
import ProtectedRoute from './protectedRoutes';
import { useSelector } from 'react-redux';



const WebRoutes: React.FC = () => {

  const isAuthenticated =  useSelector((state: any) => state.user.auth);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cryptocurrency" element={<h1>cryptocurrency </h1>} />
 
        <Route path="/blogs"
          element={
            <ProtectedRoute isAuth={isAuthenticated}>
              <h1>blogs </h1>
            </ProtectedRoute>
          } />

        <Route path="/write-blog"
          element={
            <ProtectedRoute isAuth={isAuthenticated}>
              <h1>Write a blog </h1>
            </ProtectedRoute>
          } />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes;