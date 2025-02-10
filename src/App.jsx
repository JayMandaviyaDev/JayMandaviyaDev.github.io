import CertificationSection from "./components/CertificationSection";
import ExperianceSection from "./components/ExperianceSection";
import MainSection from "./components/MainSection";
import SocialMediaIcons from "./components/SocialMediaIcons";
import data from "./Utils/info.json"
function App() {
  return (
    <>
      <MainSection data = {data}/>
      <ExperianceSection data = {data}/>
      <CertificationSection certifications={data.certifications}/>
      
      <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2">
        <SocialMediaIcons />
      </div>
    </>
  )
}

export default App;