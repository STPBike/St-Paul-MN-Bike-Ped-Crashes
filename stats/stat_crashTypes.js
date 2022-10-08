import dayjs from "dayjs";
export default function (allData) {
  const crashTypes = new Set(allData.map((c) => c.Crash_Type));

  // Count crashes by crash type per year.
  const crashTypeDataByYear = {};
  crashTypes.forEach((crashType) => {
    const crashTypeData = [...allData].filter((c) => c.Crash_Type === crashType);
    crashTypeData.forEach((crashTypeData) => {
      const year = dayjs(crashTypeData.Crash_Datetime).format("YYYY");

      if (!crashTypeDataByYear[year]) {
        crashTypeDataByYear[year] = {};
      }
      if (!crashTypeDataByYear[year][crashType]) {
        crashTypeDataByYear[year][crashType] = 0;
      }
      crashTypeDataByYear[year][crashType]++;
    });
  });

  return {
    crashTypes,
    crashTypeDataByYear,
  };
}
