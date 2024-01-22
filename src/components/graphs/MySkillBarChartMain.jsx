import MySkillBarChart from "./MySkillBarChart";
import { useCallback } from "react";
import { useState } from "react";
import { OPTIONS } from "../../constant";
import { COMPETENCY_SKILLS_MAP } from './graphMappings';

const MySkillBarChartMain = () => {
  const [competencyOptions, setCompetencyOptions] = useState(
    OPTIONS.COMPETENCY
  );

  const onChange = useCallback((event) => {
    const valueClicked = event.target.value;
    console.log(valueClicked);
    const newOptions = competencyOptions.map((obj) => {
      return { ...obj, selected: obj.value === valueClicked };
    });
    setCompetencyOptions(newOptions);
  }, []);

  const selected = competencyOptions.find((obj) => obj.selected)?.value;
  console.log("selected", COMPETENCY_SKILLS_MAP[selected]);
  return (
    <MySkillBarChart
      data={COMPETENCY_SKILLS_MAP[selected]}
      onSelectChange={onChange}
      options={competencyOptions}
    />
  );
};

export default MySkillBarChartMain;
