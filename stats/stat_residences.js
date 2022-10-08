import dayjs from "dayjs";
export default function (allData) {
  const residences = new Set(allData.map((c) => c.City_of_Residence));

  // Count crashes by residence per year.
  const residenceDataByYear = {};

  const stPaulReg = new RegExp("^ST.*PAUL$");

  residences.forEach((residence) => {
    const residenceData = [...allData].filter((c) => c.City_of_Residence === residence);
    if (residence === null) {
      residence = "No_Data";
    } else if (stPaulReg.test(residence)) {
      residence = "SAINT PAUL";
    }
    residenceData.forEach((residenceData) => {
      const year = dayjs(residenceData.Crash_Datetime).format("YYYY");

      if (!residenceDataByYear[year]) {
        residenceDataByYear[year] = {};
      }
      if (!residenceDataByYear[year][residence]) {
        residenceDataByYear[year][residence] = 0;
      }
      residenceDataByYear[year][residence]++;
    });
  });

  return {
    residences,
    residenceDataByYear,
  };
}
