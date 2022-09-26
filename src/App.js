import PageHeader from "./components/Header/PageHeader";
import Cursor from "./components/Cursor/Cursor";
import Test from "./components/Test/TestPage";
import SkillSet from "./components/Cards/SkillSet";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/ContactPage";
import About from "./components/About/About";
import React, { useRef } from "react";
import { useEffect } from "react";
function App() {
  const ProjectRef = useRef(null);
  const ContactRef = useRef(null);

  return (
    <div className="App">
      <Cursor />
      <PageHeader projectScrollRef={ProjectRef} contactScrollRef={ContactRef} />
      <Test />
      <About />
      <SkillSet />
      <Projects forwardRef={ProjectRef} />
      <Contact forwardRef={ContactRef} />
    </div>
  );
}

export default App;

{
  /* <Body /> */
}

// const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

// const updateMedia = () => {
//   setDesktop(window.innerWidth > 650);
// };

// useEffect(() => {
//   window.addEventListener("resize", updateMedia);
//   return () => window.removeEventListener("resize", updateMedia);
// });
