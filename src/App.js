import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/setting/Setting';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import { useContext } from 'react';
import { Context } from './context/Context';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';

function App() {
  const {user}=useContext(Context)
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login" element={user ? <Home /> : <Login />} />
      <Route path="/write" element={user ? <Write /> : <Register />} />
      <Route path="/settings" element={user ? <Settings /> : <Register />} />
      <Route path="/posts/:postId" element={<Single />} />
      <Route path="/about" element={<About/>} /> 
      <Route path="/contact" element={<Contact/>} /> 
      </Routes>
    </Router>
  );
}

export default App;
