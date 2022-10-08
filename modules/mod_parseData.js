/* Sample Data
  {
    attributes: {
      Crash_Type: 'Bike',
      Accident_Datetime: 1591487100000,
      Location: 'S WINTHROP ST',
      Latitude: 44.93539533,
      Longitude: -93.00993837,
      Posted_Speed: 30,
      Road_Type: 'Municipal State Aid Street',
      Pedestrian_Age: null,
      Pedestrian_Gender: null,
      Pedestrian_City_of_Residence: null,
      Pedestrian_Zip_Code: null,
      Biker_Age: 8,
      Biker_Gender: 'M',
      Biker_City_of_Residence: 'ST. PAUL',
      Biker_Zip_Code: 55106,
      Pedestrian_Injury_Severity: null,
      Pedestrian_to_Hospital: null,
      Biker_Injury_Severity: null,
      Biker_to_Hospital: 'No',
      ObjectId: 24
    },
    geometry: { x: -10353818.978062158, y: 5611356.530713483 }
  }
*/
import BikeCrash from "../classes/class_BikeCrash.js";
import PedestrianCrash from "../classes/class_PedestrianCrash.js";
import createStats from "./mod_createStats.js";
export default function (allData) {
  // Separate Bike Data from allData
  const bikeData = allData.filter((c) => c.attributes.Crash_Type === "Bike");

  // Map relevant bike data
  const bikeDataMap = bikeData.map((c) => {
    return new BikeCrash(c.attributes);
  });

  // Separate Pedestrian Data from allData
  const pedData = allData.filter((c) => c.attributes.Crash_Type === "Pedestrian");

  // Map relevant pedestrian data
  const pedDataMap = pedData.map((c) => {
    return new PedestrianCrash(c.attributes);
  });

  const crashData = pedDataMap.concat(bikeDataMap).sort((a, b) => b.Crash_Datetime - a.Crash_Datetime);

  const stats = createStats(crashData);
  console.log(stats.statData);

  return {
    crashData,
    stats,
  };
}
