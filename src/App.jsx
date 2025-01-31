import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Dashboard from './Pages/Dashboard';
import MatchesPage from './Pages/MatchesPage';
import NameStep from './Components/NameStep';
import DobStep from './Components/DobStep';
import GenderStep from './Components/GenderStep';
import PhoneStep from './Components/PhoneStep';
import EmailStep from './Components/EmailStep';
import PhotoStep from './Components/PhotoStep';




function App() {
 

  return (
    <>
   <Router>
      <Routes>
        {/* Define Routes for each page */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/profile/name" element={<NameStep />} />
        <Route path="/profile/dob" element={<DobStep />} />
        <Route path="/profile/gender" element={<GenderStep />} />
        <Route path="/profile/phone" element={<PhoneStep />} />
        <Route path="/profile/email" element={<EmailStep />} />
        <Route path="/profile/photo" element={<PhotoStep />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
