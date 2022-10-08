import dayjs from "dayjs";
export default function (allData) {
  const postedSpeeds = new Set(allData.map((c) => c.Posted_Speed));

  // Count crashes by posted speed per year.
  const postedSpeedDataByYear = {};
  postedSpeeds.forEach((postedSpeed) => {
    const postedSpeedData = [...allData].filter((c) => c.Posted_Speed === postedSpeed);
    if (postedSpeed === null) {
      postedSpeed = "No_Data";
    }
    postedSpeedData.forEach((postedSpeedData) => {
      const year = dayjs(postedSpeedData.Crash_Datetime).format("YYYY");

      if (!postedSpeedDataByYear[year]) {
        postedSpeedDataByYear[year] = {};
      }
      if (!postedSpeedDataByYear[year][postedSpeed]) {
        postedSpeedDataByYear[year][postedSpeed] = 0;
      }
      postedSpeedDataByYear[year][postedSpeed]++;
    });
  });

  return {
    postedSpeeds,
    postedSpeedDataByYear,
  };
}
