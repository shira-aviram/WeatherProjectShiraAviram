import Country from "./classCountry.js";
//המערכים מכילים לפי המיקום את קווי אורך ורוחב של המדינות
let lat_arr = [40.71992151499519, 51.5074, 61.2181, 29.5581];
let len_arr = [-74.00159218693412, -0.1278, -149.9003, 34.9482];

const init = () => {
  //מעבר על כל המדינות
  for (let i = 0; i < lat_arr.length; i++) {
    doApi(lat_arr[i], len_arr[i]);
  }
};

const doApi = (lat, len) => {
  //פנייה למדינה המבוקשת
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${len}&appid=8f9306389cee3cfe10f23d76d4d28b64&lang=he`;
  $.get(url, function (resp) {
    console.log(resp);
    CountryModule(resp);
  });
};
//הצגת המדינה בפועל
const CountryModule = (resp) => {
  let country = new Country("#id_row", resp);
  country.render();
};

init();




