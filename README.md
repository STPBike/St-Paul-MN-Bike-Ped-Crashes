# St. Paul, MN Bicycle and Pedestrian Crash Data

This is a boilerplate [Node.js](https://nodejs.org/en/) app that parses data from the [St. Paul Open Data](https://information.stpaul.gov/datasets/stpaul::pedestrian-and-bike-crash-dataset-/explore?location=44.944520%2C-93.105671%2C13.03) resource.

## Crash Data

The main parsed dataset is accessed via `parsedData` in `index.js`.

## Running the app

- Use: `npm run crash`
- Auto-reload on save: `npm run dev`

### `parsedData.crashData`

The primary list of crashes is a list of objects with the following properties:

```
<BikeCrash | PedestrianCrash> {
  Crash_Type: <String>
  Crash_Datetime: <Int / Unix Timestamp>,
  Crash_Datetime_Formatted: <String /YYYY-MM-DD HH:mm:ss>,
  Location: <String>,
  Latitude: <Float>,
  Longitude: <Float>,
  Posted_Speed: <Int || null>,
  Road_Type: <String || null>,
  ObjectId: <Int>,
  Age: <Int || null>,
  Gender: <String || null>,
  City_of_Residence: <String || null>,
  Zip_Code: <Int || null>, // Reduced to 5 digits
  Injury_Severity: <String>,
  to_Hospital:<String> // Yes/No
},
```

### `parsedData.stats`

Statistical data is available via `parsedData.stats`. Uncomment `console.logs` in `index.js` to view.

```
// List Types
// console.log("crashTypes: ", crashTypes);
// console.log("roadTypes: ", roadTypes);
// console.log("severityTypes: ", severityTypes);
// console.log("postedSpeeds: ", postedSpeeds);
// console.log("zipCodes: ", zipCodes);
// console.log("genders: ", genders);
// console.log("ages: ", ages);
// console.log("residences: ", residences);
// console.log("hospitalizations: ", hospitalizations);

// Stat Data
// console.log("crashTypeDataByYear: ", crashTypeDataByYear);
// console.log("roadTypeDataByYear: ", roadTypeDataByYear);
// console.log("postedSpeedDataByYear: ", postedSpeedDataByYear);
// console.log("zipCodeDataByYear: ", zipCodeDataByYear);
// console.log("genderDataByYear: ", genderDataByYear);
// console.log("ageDataByYear: ", ageDataByYear);
// console.log("residenceDataByYear: ", residenceDataByYear);
// console.log("hospitalizationDataByYear: ", hospitalizationDataByYear);
```

### `parsedData.stats.statData.<StatType>DataByYear`

Year breakdowns are objects keyed by year.

```
{
  2019: {
    <StatType>: <Int>
  },
  2020: {
    <StatType>: <Int>
  },
  2021: {
    <StatType>: <Int>
  },
  2022: {
    <StatType>: <Int>
  },
  ...
}
```
