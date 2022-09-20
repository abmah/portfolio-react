import PageHeader from "./components/Header/PageHeader";
import Body from "./components/Body/BodyPage";
import Cursor from "./components/Cursor/Cursor";
import Test from "./components/Test/TestPage";
import SkillSet from "./components/Cards/SkillSet";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/ContactPage";
import About from "./components/About/About";
function App() {
  return (
    <div className="App">
      <Cursor />

      <PageHeader />
      <Test />
      <About />
      <SkillSet />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

{
  /* <Body /> */
}
