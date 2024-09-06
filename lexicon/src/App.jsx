import { Lexicon } from "./components/Lexicon/Lexicon"
import { Header }  from "./components/Header/Header"
import { AboutText } from "./components/Main/AboutText";
import { Footer } from "./components/Footer/Footer";
import "/src/index.scss";

function App() {

  return (
    <>
    <Header />
    <Lexicon />
    <AboutText/>
    <Footer />
    
    
  </>
  )
}

export default App
