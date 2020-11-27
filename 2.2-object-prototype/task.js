"use strict";

//String.prototype.isPalindrome - для задачи №1

String.prototype;

String.prototype.isPalindrome = function () {
  const newString = this.toString().toLowerCase().replace(/ /g, "");

  const newStringReverse = [...newString].reduce((prev, next) => next + prev);

  let result = newString === newStringReverse ? true : false;

  return result;
};

function getAverageMark(marks) {
    let averageMark;
    if (marks.length === 0) {
      return 0;
    } else {
      return (averageMark = Math.round(
        marks.reduce((x, y) => x + y) / marks.length
      ));
    }
    // return averageMark
}

function checkBirthday(birthday) {
    let now = Math.round(Date.now());
    birthday = Date.parse(birthday);
  
    let diff = now - birthday;
  
    const msInYear = 1000 * 60 * 60 * 24 * 365.25;
    let age = diff / msInYear;
  
    let verdict = age >= 18 ? true : false;
  
    return verdict;
}