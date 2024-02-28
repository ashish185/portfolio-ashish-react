import Experience from './Experience';
class ExperienceList {
  constructor() {
    this._experienceList = [];
  }
  addExperience(experience) {
    if (!(experience instanceof Experience)) {
      throw new Error('Argument must be an Experience object');
    }
    this._experienceList.push(experience);
  }
  getExperienceList() {
    return this._experienceList;
  }
}
export default ExperienceList;