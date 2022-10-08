import getData from "./modules/mod_getData.js";
import parseData from "./modules/mod_parseData.js";
(async function bikePedCrashData() {
  try {
    const bikePedData = await getData().catch((err) => {
      console.log("Error retreiving data: ", err);
    });

    const { features } = bikePedData;
    const parsedData = parseData(features);
    // console.log(crashData);
    // console.log(severityTypes);
  } catch (e) {
    console.log("General error", e);
  }
})();
