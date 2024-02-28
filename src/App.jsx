import './app.scss';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { AboutMe } from './components/page/AboutMe/AboutMe';
import Skills from './components/page/Skills/Skills';
import TimeLine from './components/timeline/TimeLine';
import { ABOUT, HOME_PAGE, SKILLS, TIME_LINE } from "./constant";
import { getExperiences } from './../config';

const App = () => {
  return (
    <div>
      <section id={HOME_PAGE}>
        <Navbar linksList={[HOME_PAGE, ABOUT, SKILLS, TIME_LINE]} />
        <Hero />
      </section>
      <section id={ABOUT}>
        <AboutMe />
      </section>
      <section id={SKILLS}>
        <Skills />
      </section>
      <section id={TIME_LINE}>
        <TimeLine experiencesList={getExperiences()} />
      </section>
    </div>
  );
};

export default App;
