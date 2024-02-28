import Experience from './src/components/timeline/Experience';
import ExperienceList from './src/components/timeline/ExperienceList';

export const getExperiences = () => {
  const xp1 = new Experience();
  xp1.year = "(2022-Present)"; // Set year using setter
  xp1.designation = "Associate Staff Engineer"; // Set designation using setter
  xp1.workDescription =
    "Developed and maintained web applications using JavaScript and React."; // Set description
  xp1.skillsUsed = ["JavaScript", "React", "HTML", "CSS"];
  xp1.currentlyWorking = true;
  xp1.company = "Nagarro";

  const xp2 = new Experience();
  xp2.year = "(2021-2022)"; // Set year using setter
  xp2.designation = "Senior Software Engineer"; // Set designation using setter
  xp2.workDescription =
    "Developed and maintained web applications using JavaScript and React."; // Set description
  xp2.skillsUsed = ["JavaScript", "React", "HTML", "CSS"];
  xp2.company = "Nagarro";

  const xp3 = new Experience();
  xp3.year = "(2018 - 2021)"; // Set year using setter
  xp3.designation = "Software Engineer"; // Set designation using setter
  xp3.workDescription =
    "Developed and maintained web applications using JavaScript and React."; // Set description
  xp3.skillsUsed = ["JavaScript", "React", "HTML", "CSS"];
  xp3.company = "Nagarro";

  const list = new ExperienceList();
  list.addExperience(xp1);
  list.addExperience(xp2);
  list.addExperience(xp3);
  return list.getExperienceList();
};
