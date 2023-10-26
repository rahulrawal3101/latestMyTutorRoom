import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import upArrow from '../src/assets/arrowup.png';
import '../src/pages/Homepage.css';
import './appjs.css';
import { AVATAR_IMAGE, MOBILE } from './constant';
import './index.css';
import About from "./pages/About";
import ContactUs from "./pages/Contact";
import Homepage from "./pages/Homepage";
import AndroidNewPage from "./pages/Mobile/AndroidNewPage";
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsCondition from './pages/TermsConditions';
import AngularFrontend from "./pages/frontend/Angular";
import LandingLayout from "./pages/landingpage/LandingLayout";
import Wordpress from "./pages/web/Wordpress";
import useBottomBar from "./utils/useBottomBar";
import Services from './pages/Services';


function App() {
  const { state } = useBottomBar()
 

  return (
    <>
      <div className='upArrow' style={{ left: '0px', bottom: '30px', display: 'block', position: 'fixed', cursor: 'pointer', zIndex: state.drawer_opened ? -1 : 9999 }}>
        <img onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth", }) }} src={upArrow} alt="pic" style={{ width: '100px', height: '100px', borderRadius: '100%' }} />
      </div >
      <FloatingWhatsApp
        accountName="Tutor Room"
        avatar={AVATAR_IMAGE}
        phoneNumber={`${MOBILE}`}
        statusMessage="Typically replies within 1 hour"
        chatMessage={`Hello there! 🤝 How can we help?`}
        darkMode={false}
        allowEsc
        buttonStyle={{position: "fixed",bottom: "73px",right: "20px",zIndex:1000,}}
        allowClickAway
        notification
        notificationSound
      />


      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="contact" element={<ContactUs />} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="services" element={<Services/>} />
          <Route exact path="terms" element={<TermsCondition />} />
          <Route exact path="angular" element={<AngularFrontend />} />
          <Route exact path="mobile" element={<AndroidNewPage />} />
          <Route exact path="android" element={<AndroidNewPage/>} />
          <Route exact path="wordpress" element={<Wordpress />} />  
          <Route exact path="welcome" element={<LandingLayout />} />
          <Route exact path="privacy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
