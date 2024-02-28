class Experience {
  constructor(year, designation, workDescription, skillsUsed, currentlyWorking, company) {
    this._year = year;
    this._designation = designation;
    this._workDescription = workDescription;
    this._skillsUsed = skillsUsed;
    this._currentlyWorking = currentlyWorking;
    this._company= company;
  }

  get year() {
    return this._year;
  }

  set year(newYear) {
    this._year = newYear;
  }

  get designation() {
    return this._designation;
  }

  set designation(newDesignation) {
    if (typeof newDesignation !== 'string' || newDesignation.trim() === '') {
      throw new Error('Designation cannot be empty or contain only whitespace');
    }
    this._designation = newDesignation;
  }

  get workDescription() {
    return this._workDescription;
  }

  set workDescription(newDescription) {
    if (typeof newDescription !== 'string' || newDescription.trim() === '') {
      throw new Error('Work description cannot be empty or contain only whitespace');
    }
    this._workDescription = newDescription;
  }

  get skillsUsed() {
    return this._skillsUsed;
  }

  set skillsUsed(newSkills) {
    if (!Array.isArray(newSkills) || newSkills.some(skill => typeof skill !== 'string' || skill.trim() === '')) {
      throw new Error('Skills used must be an array of non-empty strings');
    }
    this._skillsUsed = newSkills;
  }

  get currentlyWorking() {
    return this._currentlyWorking;
  }

  set currentlyWorking(currentlyWorking) {
    this._currentlyWorking = currentlyWorking;
  }

  get company() {
    return this._company;
  }

  set company(company) {
    this._company = company;
  }

}
export default Experience;