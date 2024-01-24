import './app.scss'
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { ABOUT, HOME_PAGE, SKILLS } from "./constant";
import Skills from './components/page/Skills/Skills';
import AnimatedButton from './components/animated/AnimatedButton';
import { AboutMe } from './components/page/AboutMe/AboutMe';

const App = () => {
  return (
    <div>
      <section id={HOME_PAGE}>
        <Navbar />
        <Hero />
      </section>
      <section id={ABOUT}>
        <AboutMe />
      </section>
      <section id={SKILLS}>
        <Skills />
      </section>
      {/* {/* <section>Section5</section> */}
      <section>
        <AnimatedButton />
      </section>
      {/* <Test /> */}
      {/*  <TestList /> */}
    </div>
  );
};

export default App;
