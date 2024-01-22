import { useState, Suspense, lazy } from "react";

const MySkillBarChartMain = lazy(() =>
  import("./../../graphs/MySkillBarChartMain")
);

const Skills = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <MySkillBarChartMain />
  </Suspense>
);

export default Skills;
