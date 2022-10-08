import dayjs from "dayjs";
export default function (allData) {
  const severityTypeSet = new Set(allData.map((c) => c.Injury_Severity));

  // Count crashes by severity type per year.
  const severityTypeDataByYear = {};
  severityTypeSet.forEach((severityType) => {
    const severityTypeData = [...allData].filter((c) => c.Injury_Severity === severityType);
    if (severityType === null) {
      severityType = "No_Data";
    }
    severityTypeData.forEach((severityTypeData) => {
      const year = dayjs(severityTypeData.Crash_Datetime).format("YYYY");

      if (!severityTypeDataByYear[year]) {
        severityTypeDataByYear[year] = {};
      }
      if (!severityTypeDataByYear[year][severityType]) {
        severityTypeDataByYear[year][severityType] = 0;
      }
      severityTypeDataByYear[year][severityType]++;
    });
  });

  return {
    severityTypes: [...severityTypeSet],
    severityTypeDataByYear,
  };
}
