import { lazy, Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavigationBar from './shared/components/navbar/navbar';
import { Spinner } from 'react-bootstrap';

const HomePage = lazy(() => import('./features/home/home'));
// const Profile = lazy(() => import('./pages/Profile'));
// const PostDetail = lazy(() => import('./pages/PostDetail'));
// const Upload = lazy(() => import('./pages/Upload'));

function App() {
return (
    <Router>
      <NavigationBar /> 
      
      <main className="bg-light min-vh-100">
        <Suspense 
          fallback={
            <div className="d-flex justify-content-center pt-5">
              <Spinner animation="border" variant="primary" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/post/:id" element={<PostDetail />} /> */}
          </Routes>
        </Suspense>
      </main>
    </Router>
  );
}

export default App;
