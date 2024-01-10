import './app.scss'
import { Parallax } from './components/parallax/Parallax';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import { ABOUT, HOME_PAGE, SKILLS } from "./constant";
import MySkillBarChartMain from './components/graphs/MySkillBarChartMain';

const App = () => {
  return (
    <div>
      <section id={HOME_PAGE}>
        <Navbar />
        <Hero />
      </section>
      <section id={ABOUT}>
        <Parallax />
      </section>
      <section id={SKILLS} >
        <MySkillBarChartMain />
      </section>
      <section>Section5</section>
      <section>Section6</section>
      {/* <Test /> */}
      {/*  <TestList /> */}
    </div>
  );
};

export default App;
