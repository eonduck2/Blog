export default class AboutDates {
  constructor(dateObj) {
    this.year = dateObj.getFullYear();
    this.month = dateObj.getMonth() + 1;
    this.date = dateObj.getDate();
    this.day = dateObj.getDay();
    this.hours = dateObj.getHours();
    this.minutes = dateObj.getMinutes();
    this.second = dateObj.getSeconds();
  }

  static uniqueId() {
    const now = Date.now();

    return now.toString().substr(3, now.length);
  }

  static korMinuteDiffWithStdTime() {
    const minuteDiff = new Date().getTimezoneOffset();

    return `${minuteDiff}분`;
  }

  nowYearKor() {
    return `${this.year}년`;
  }

  nowMonthKor() {
    return `${this.month}월`;
  }

  nowDateKor() {
    return `${this.date}일`;
  }

  nowDayKor() {
    const day = this.day;
    if (day == 1) {
      return `월요일`;
    } else if (day == 2) {
      return `화요일`;
    } else if (day == 3) {
      return `수요일`;
    } else if (day == 4) {
      return `목요일`;
    } else if (day == 5) {
      return `금요일`;
    } else if (day == 6) {
      return `토요일`;
    } else if (day == 7) {
      return `일요일`;
    }
  }

  nowHoursKor() {
    return `${this.hours}시`;
  }

  nowMinutesKor() {
    return `${this.minutes}분`;
  }

  nowSecondKor() {
    return `${this.second}초`;
  }

  nowKorea() {
    return `
      ${this.nowYearKor()} ${this.nowMonthKor()} ${this.nowDateKor()} ${this.nowDayKor()} ${this.nowHoursKor()} ${this.nowMinutesKor()} ${this.nowSecondKor()}
      `;
  }
}
