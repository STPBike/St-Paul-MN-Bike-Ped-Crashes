import dayjs from "dayjs";
export default function (allData) {
  const roadTypeSet = new Set(allData.map((c) => c.Road_Type.replaceAll("-", " "))); // Inconsistency with hyphen use

  // Count crashes by road type per year.
  const roadTypeDataByYear = {};
  roadTypeSet.forEach((roadType) => {
    const roadTypeData = [...allData].filter((c) => c.Road_Type.replaceAll("-", " ") === roadType);
    roadTypeData.forEach((roadTypeData) => {
      const year = dayjs(roadTypeData.Crash_Datetime).format("YYYY");
      if (!roadTypeDataByYear[year]) {
        roadTypeDataByYear[year] = {};
      }
      if (!roadTypeDataByYear[year][roadType]) {
        roadTypeDataByYear[year][roadType] = 0;
      }
      roadTypeDataByYear[year][roadType]++;
    });
  });

  return {
    roadTypes: [...roadTypeSet],
    roadTypeDataByYear,
  };
}
