import fs from "fs";
import dayjs from "dayjs";
export default function (crashData) {
  // Conver crashData to JSON
  const crashDataPrettyJSON = JSON.stringify(crashData, null, 2);
  // Save JSON to file
  fs.writeFileSync(`./jsonExports/full_crashData_${dayjs().format("YYYY_MM_DD_HH_mm_ss")}.json`, crashDataPrettyJSON);
}
