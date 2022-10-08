import dayjs from "dayjs";
export default function (allData) {
  const genders = new Set(allData.map((c) => c.Gender));

  // Count crashes by gender per year.
  const genderDataByYear = {};

  genders.forEach((gender) => {
    const genderData = [...allData].filter((c) => c.Gender === gender);
    if (gender === null) {
      gender = "No_Data";
    }
    genderData.forEach((genderData) => {
      const year = dayjs(genderData.Crash_Datetime).format("YYYY");

      if (!genderDataByYear[year]) {
        genderDataByYear[year] = {};
      }
      if (!genderDataByYear[year][gender]) {
        genderDataByYear[year][gender] = 0;
      }
      genderDataByYear[year][gender]++;
    });
  });

  return {
    genders,
    genderDataByYear,
  };
}
