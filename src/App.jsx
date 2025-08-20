import Intro from "./component/Intro";
import Navbar from "./component/Navbar";
import Skills from "./component/skills";
import Myportfolio from "./component/Myportfolio";
import Contact from "./component/Contact";
const App=()=>{
  return(
  <div>
    <Navbar/>
    <Intro/>
    <Skills/>
    <Myportfolio/>
    <Contact/>
  </div>
  );
}
export default App;