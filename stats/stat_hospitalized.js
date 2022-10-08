import dayjs from "dayjs";
export default function (allData) {
  const hospitalizations = new Set(allData.map((c) => c.to_Hospital));
  // Count crashes by hospitalizations per year.
  const hospitalizationDataByYear = {};
  hospitalizations.forEach((hospitalization) => {
    const hospitalizationData = [...allData].filter((c) => c.to_Hospital === hospitalization);
    if (hospitalization === null) {
      hospitalization = "No_Data";
    }
    hospitalizationData.forEach((hospitalizationData) => {
      const year = dayjs(hospitalizationData.Crash_Datetime).format("YYYY");
      if (!hospitalizationDataByYear[year]) {
        hospitalizationDataByYear[year] = {};
      }
      if (!hospitalizationDataByYear[year][hospitalization]) {
        hospitalizationDataByYear[year][hospitalization] = 0;
      }
      hospitalizationDataByYear[year][hospitalization]++;
    });
  });
  return {
    hospitalizations,
    hospitalizationDataByYear,
  };
}
