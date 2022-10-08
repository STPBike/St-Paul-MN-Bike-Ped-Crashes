import dayjs from "dayjs";
export default function (allData) {
  const ages = new Set(allData.map((c) => c.Age));

  // Count crashes by age per year.
  const ageDataByYear = {};
  ages.forEach((age) => {
    const ageData = [...allData].filter((c) => c.Age === age);
    if (age === null) {
      age = "No_Data";
    }
    ageData.forEach((ageData) => {
      const year = dayjs(ageData.Crash_Datetime).format("YYYY");

      if (!ageDataByYear[year]) {
        ageDataByYear[year] = {};
      }
      if (!ageDataByYear[year][age]) {
        ageDataByYear[year][age] = 0;
      }
      ageDataByYear[year][age]++;
    });
  });

  return {
    ages,
    ageDataByYear,
  };
}
