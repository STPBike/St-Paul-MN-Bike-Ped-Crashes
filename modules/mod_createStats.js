// import dayjs from "dayjs";
import crashTypeStats from "../stats/stat_crashTypes.js";
import roadTypeStats from "../stats/stat_roadTypes.js";
import severityTypeStats from "../stats/stat_severityTypes.js";
import postedSpeedStats from "../stats/stat_postedSpeeds.js";
import zipCodeStats from "../stats/stat_zipCodes.js";
import genderStats from "../stats/stat_genders.js";
import ageStats from "../stats/stat_ages.js";
import residenceStats from "../stats/stat_residences.js";
import hospitalStats from "../stats/stat_hospitalized.js";
export default function (allData) {
  // Get Crash Types
  const { crashTypes, crashTypeDataByYear } = crashTypeStats(allData);

  // Get Road Types
  const { roadTypes, roadTypeDataByYear } = roadTypeStats(allData);

  // Get Severity Types
  const { severityTypes } = severityTypeStats(allData);

  // Get Posted Speeds
  const { postedSpeeds, postedSpeedDataByYear } = postedSpeedStats(allData);

  // Get Zip Codes
  const { zipCodes, zipCodeDataByYear } = zipCodeStats(allData);

  // Get Gender Stats
  const { genders, genderDataByYear } = genderStats(allData);

  // Get Age Stats
  const { ages, ageDataByYear } = ageStats(allData);

  // Get Residence Stats
  const { residences, residenceDataByYear } = residenceStats(allData);

  // Get Hospital Stats
  const { hospitalizations, hospitalizationDataByYear } = hospitalStats(allData);

  return {
    listTypes: {
      crashTypes,
      roadTypes,
      severityTypes,
      postedSpeeds,
      zipCodes,
      genders,
      ages,
      residences,
      hospitalizations,
    },
    statData: {
      crashTypeDataByYear,
      roadTypeDataByYear,
      postedSpeedDataByYear,
      zipCodeDataByYear,
      genderDataByYear,
      ageDataByYear,
      residenceDataByYear,
      hospitalizationDataByYear,
    },
  };
}
