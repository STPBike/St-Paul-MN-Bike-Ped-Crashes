import getData from "./modules/mod_getData.js";
import parseData from "./modules/mod_parseData.js";
import mod_csvExports from "./modules/mod_csvExports.js";
(async function bikePedCrashData() {
  try {
    const bikePedData = await getData().catch((err) => {
      console.log("Error retreiving data: ", err);
    });

    // features contains main crash data
    const { features } = bikePedData;

    // Parse Data into classes
    const parsedData = parseData(features);

    const { crashData, stats } = parsedData;

    const { listTypes, statData } = stats;

    const {
      crashTypes,
      roadTypes,
      severityTypes,
      postedSpeeds,
      zipCodes,
      genders,
      ages,
      residences,
      hospitalizations,
    } = listTypes;

    const {
      crashTypeDataByYear,
      roadTypeDataByYear,
      severityTypeDataByYear,
      postedSpeedDataByYear,
      zipCodeDataByYear,
      genderDataByYear,
      ageDataByYear,
      residenceDataByYear,
      hospitalizationDataByYear,
    } = statData;

    // Full Crash Data (Parsed)
    console.log("crashData: ", crashData);

    // List Types
    // console.log("crashTypes: ", crashTypes);
    // console.log("roadTypes: ", roadTypes);
    // console.log("severityTypes: ", severityTypes);
    // console.log("postedSpeeds: ", postedSpeeds);
    // console.log("zipCodes: ", zipCodes);
    // console.log("genders: ", genders);
    // console.log("ages: ", ages);
    // console.log("residences: ", residences);
    // console.log("hospitalizations: ", hospitalizations);

    // Stat Data
    // console.log("crashTypeDataByYear: ", crashTypeDataByYear);
    // console.log("roadTypeDataByYear: ", roadTypeDataByYear);
    // console.log("severityTypeDataByYear: ", severityTypeDataByYear);
    // console.log("postedSpeedDataByYear: ", postedSpeedDataByYear);
    // console.log("zipCodeDataByYear: ", zipCodeDataByYear);
    // console.log("genderDataByYear: ", genderDataByYear);
    // console.log("ageDataByYear: ", ageDataByYear);
    // console.log("residenceDataByYear: ", residenceDataByYear);
    // console.log("hospitalizationDataByYear: ", hospitalizationDataByYear);

    // Export CSVs
    // mod_csvExports(statData);
  } catch (e) {
    console.log("General error", e);
  }
})();
