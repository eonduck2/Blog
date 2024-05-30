/**
 * TYPE[OBJECT]
 *
 * STATUS[O] - 현재 상태
 *
 * CHECKLIST: 24.05.30/02:39 PM 1차 단위 테스트 완료
 *
 * FIXME: 2자리 padStarting 필요
 *
 * NOTE: 1. 현재 시간과 관련된 한국어 개정 모듈
 * @param dateObj 1차적으로 new Date() 생성자 함수를 인자로 보내거나 new Date()를 2차 가공 객체를 인자로 보내야함
 */

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
