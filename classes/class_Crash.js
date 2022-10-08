import dayjs from "dayjs";
export default class Crash {
  constructor(data) {
    this.Crash_Type = data.Crash_Type;
    this.Crash_Datetime = data.Accident_Datetime;
    this.Crash_Datetime_Formatted = dayjs(data.Accident_Datetime).format("YYYY-MM-DD HH:mm:ss");
    this.Location = data.Location;
    this.Latitude = data.Latitude;
    this.Longitude = data.Longitude;
    this.Posted_Speed = data.Posted_Speed;
    this.Road_Type = data.Road_Type;
    this.ObjectId = data.ObjectId;
  }
}
