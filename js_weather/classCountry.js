
export default class Country {
//הצגת מדינה ופרטיה
  constructor(_parent, _item) {
    this.parent = _parent;
    this.name = _item.name;
    this.description = _item.weather[0].description;
    this.temp_feels = _item.main.feels_like - 273.15;
    this.temp = _item.main.temp - 273.15;
    this.humidity = _item.main.humidity;
  }

  render() {
    let div = document.createElement("div");
    div.className = "col-5 mb-5";
    document.querySelector(this.parent).append(div);
    //קריאה לפונקציה שתכיל את התמונה בפועל
    let imgTemperature = this.declareEvents();

    div.innerHTML += `
      <img class="weather" src="/img/${imgTemperature}" width="50">
      <h2><strong>${this.name}</strong></h2>
      <h3 class="text-secondary">${this.description}</h3>

      <table>
        <tr>
          <td>לחות</td>
          <td>טמפ' מורגשת</td>
          <td>טמפ' נמדדת</td>
        </tr>
        <tr class="temp">
          <td>${this.humidity}%</td>
          <td>${this.temp.toFixed()} <img src="/img/celsius.png"></td>
          <td>${this.temp_feels.toFixed()} <img src="/img/celsius.png"></td>
        </tr>
      </table>
    `;
  }
//פונקציה שמחזירה תמונה תואמת לפי הטמפרטורה של מזג האויר(
  declareEvents() {
    //מערך של התמונות ושמם
    let weatherImages = {
      Hot: "1.png",
      Warm: "2.png",
      Mild: "3.png",
      Rain: "4.png",
      Cold: "5.png",
    };
    //שליחת הטמפרטורה 
    let tempCondition = this.getTempCondition(this.temp);
    //מחזיר את התמונה שתואמת לטמפרטורה
    return weatherImages[tempCondition];
  }
  //פונקציה שבודקת את הטמפרטורה ומחזירה את המזג אויר- שעפ"י זה תוצג התמונה
  getTempCondition(temperature) {
    if (temperature >= 30) {
      return "Hot";
    } else if (temperature >= 20) {
      return "Warm";
    } else if (temperature >= 10) {
      return "Mild";
    } else if (temperature >= 0) {
      return "Rain";
    }
    else{return "Cold"}
  }
}
