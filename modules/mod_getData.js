// Get Data from https://information.stpaul.gov/datasets/stpaul::pedestrian-and-bike-crash-dataset-/explore?location=44.944520%2C-93.105671%2C13.03

import axios from "axios";
export default async function () {
  const config = {
    method: "get",
    url: "https://services1.arcgis.com/9meaaHE3uiba0zr8/arcgis/rest/services/Pedestrian_and_Bike_Crash_Dataset_2019_2022/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&relationParam=&returnGeodetic=false&outFields=*&returnGeometry=true&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&defaultSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=Accident_Datetime&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=json&token=",
    headers: {},
  };

  const response = await axios(config).catch(function (error) {
    console.log(error);
    return error;
  });

  if (response.status === 200 && response?.data.features.length > 0) {
    return response.data;
  } else {
    throw new Error("Error retreiving data");
  }
}
