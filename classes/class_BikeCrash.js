import Crash from "./class_Crash.js";
export default class BikeCrash extends Crash {
  constructor(data) {
    super(data);
    this.Age = data.Biker_Age;
    this.Gender = data.Biker_Gender;
    this.City_of_Residence = data.Biker_City_of_Residence;
    this.Zip_Code = this.zip5(data.Biker_Zip_Code);
    this.Injury_Severity = data.Biker_Injury_Severity;
    this.to_Hospital = data.Biker_to_Hospital;
  }

  zip5(zip) {
    if (zip && `${zip}`.length > 5) {
      return parseInt(`${zip}`.substring(0, 5));
    } else {
      return zip;
    }
  }
}
