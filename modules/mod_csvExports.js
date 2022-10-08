import dayjs from "dayjs";
import fs from "fs";
export default function (statData) {
  //  Category Names
  const statCategories = Object.keys(statData);

  // Loop through categories
  statCategories.forEach((category) => {
    // Filename with timestamp
    const filename = `./csvExports/${category}_${dayjs().format("YYYY_MM_DD_HH_mm_ss")}.csv`;
    // Years in data
    const statYears = Object.keys(statData[category]);

    // CSV Line per Year
    const yearStatArray = [];

    // CSV Headings
    const yearHeadings = [...new Set(statYears.map((year) => Object.keys(statData[category][year])).flat())].sort();
    // Add Year heading
    yearHeadings.unshift("Year");

    // Add Heading to Export Array
    yearStatArray.push(yearHeadings);

    // Loop through years
    statYears.forEach((year) => {
      // Data for year
      const yearData = statData[category][year];
      // Stats for year
      const yearStats = [year];
      // Assign stats for each heading
      yearHeadings.forEach((heading) => {
        if (heading === "Year") {
          // Skip Year heading
          return;
        }
        if (yearData[heading]) {
          // Add stat to yearStats
          yearStats.push(yearData[heading]);
        } else {
          // Add 0 if no stat
          yearStats.push(0);
        }
      });
      // Add yearStats to yearStatArray
      yearStatArray.push(yearStats);
    });

    // Convert yearStatArray to CSVs
    const csvArray = yearStatArray.map((e) => e.join(","));
    // If file exists, delete it
    if (fs.existsSync(filename)) {
      fs.unlinkSync(filename);
    }
    // Write CSV to file in csvExports folder
    csvArray.forEach((e) => fs.appendFileSync(filename, `${e}\n`));
  });
}
