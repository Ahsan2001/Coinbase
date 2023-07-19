import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Error } from '../pages';
import ProtectedRoute from './protectedRoutes';



const WebRoutes: React.FC = () => {


  const isAuthenticated = false;


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

        <Route path="/signup" element={<h1>Sign Up </h1>} />
        <Route path="/signin" element={<h1>Sign In </h1>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default WebRoutes;