import Crash from "./class_Crash.js";

export default class PedestrianCrash extends Crash {
  constructor(data) {
    super(data);
    this.Age = data.Pedestrian_Age;
    this.Gender = data.Pedestrian_Gender;
    this.City_of_Residence = data.Pedestrian_City_of_Residence;
    this.Zip_Code = this.zip5(data.Pedestrian_Zip_Code);
    this.Injury_Severity = data.Pedestrian_Injury_Severity;
    this.to_Hospital = data.Pedestrian_to_Hospital;
  }
  zip5(zip) {
    if (zip && `${zip}`.length > 5) {
      return parseInt(`${zip}`.substring(0, 5));
    } else {
      return zip;
    }
  }
}
