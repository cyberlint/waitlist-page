import { useRef } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Section from './pages/FirstSection'
import SecondSection from './pages/SecondSection'
import ThankYou from './pages/ThankYou'
import Footer from './components/Footer'

function App() {

    const waitlistRef = useRef(null);
    const classesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <>
      <div className="flex flex-col items-center justify-around h-screen">
        <Navbar
          scrollToSection={scrollToSection}
          waitlistRef={waitlistRef}
          classesRef={classesRef}
          contactRef={contactRef}
        />
        <Section waitlistRef={waitlistRef} />
        <SecondSection
          classesRef={classesRef}
        />
        <Footer contactRef={contactRef}/>
      </div>
    </>
  );
}

export default App
