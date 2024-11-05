import { Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/Home';

const LandingPage: React.FC = () => {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
        </Routes>
    </>
  )
}

export default LandingPage;
