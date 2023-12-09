import './app.scss'
import Test from './components/Test';
import { Hero } from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import TestList from "./components/test/TestList";
import { ABOUT, CONTACT, HOME_PAGE } from "./constant";
const App = () => {
  return (
    <div>
      <section id={HOME_PAGE}>
        <Navbar />
        <Hero />
      </section>
      <section id={ABOUT}>{ABOUT}</section>
      <section id={CONTACT}>{CONTACT}</section>
      <section>Section3</section>
      <section>Section4</section>
      <section>Section5</section>
      <section>Section6</section>
      {/* <Test /> */}
      {/*  <TestList /> */}
    </div>
  );
};

export default App;
