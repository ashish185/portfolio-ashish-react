import Experience from './src/components/timeline/Experience';
import ExperienceList from './src/components/timeline/ExperienceList';

export const getExperiences = () => {
  const xp1 = new Experience();
  xp1.year = "(2022-Present)"; // Set year using setter
  xp1.designation = "Associate Staff Engineer"; // Set designation using setter
  xp1.workDescription = "Developed and maintained web analytical application for analyzing the impact of changes the configurations over the globe"; // Set description
  xp1.skillsUsed = [ "Redux", "JavaScript", "React", "HTML5", "SCSS"];
  xp1.currentlyWorking = true;
  xp1.company = "Nagarro";

  const xp2 = new Experience();
  xp2.year = "(2021-2022)"; // Set year using setter
  xp2.designation = "Senior Software Engineer"; // Set designation using setter
  xp2.workDescription = "Worked on Data Storage Application"; // Set description
  xp2.skillsUsed = ["TypeScript", "JavaScript", "React", "HTML", "SCSS"];
  xp2.company = "Nagarro";

  const xp3 = new Experience();
  xp3.year = "(2018 - 2021)"; // Set year using setter
  xp3.designation = "Software Engineer"; // Set designation using setter
  xp3.workDescription = "Worked as a full stack engineer for a Pharmaceutical Product"; // Set description
  xp3.skillsUsed = ["React", "JavaScript", "HTML", "CSS3", "Java"]
  xp3.company = "Sopra Steria";

  const list = new ExperienceList(); list.addExperience(xp1); list.addExperience(xp2); list.addExperience(xp3);
  return list.getExperienceList();
};
