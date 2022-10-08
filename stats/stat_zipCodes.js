import dayjs from "dayjs";
export default function (allData) {
  const zipCodes = new Set(allData.map((c) => c.Zip_Code));

  // Count crashes by zip code per year.
  const zipCodeDataByYear = {};
  zipCodes.forEach((zipCode) => {
    const zipCodeData = [...allData].filter((c) => c.Zip_Code === zipCode);
    if (zipCode === null) {
      zipCode = "No_Data";
    }
    zipCodeData.forEach((zipCodeData) => {
      const year = dayjs(zipCodeData.Crash_Datetime).format("YYYY");
      if (!zipCodeDataByYear[year]) {
        zipCodeDataByYear[year] = {};
      }
      if (!zipCodeDataByYear[year][zipCode]) {
        zipCodeDataByYear[year][zipCode] = 0;
      }
      zipCodeDataByYear[year][zipCode]++;
    });
  });

  return {
    zipCodes,
    zipCodeDataByYear,
  };
}
