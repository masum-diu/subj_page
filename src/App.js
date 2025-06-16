// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SubjectPage from './pages/SubjectPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/subjects/:id" element={<SubjectPage />} />
          <Route path="about" element={<About />} />
          {/* <Route path="packages" element={<Packages />} /> */}
          <Route path="contact" element={<Contact/>} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;