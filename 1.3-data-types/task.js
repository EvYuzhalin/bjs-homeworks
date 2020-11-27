"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
    checkIsNaN(percent, "Процентная ставка");
    checkIsNaN(contribution, "Начальный взнос");
    checkIsNaN(amount, "Общая стоимость");
    checkIsNaN(date, "Срок ипотеки");
  
    let nowDate = new Date();
  
    let numberMonth = countMonth(nowDate, date);
  
    let bodyCredit = amount - contribution;
    let p = percent / 100 / 12;
  
    let payPerMonth = bodyCredit * (p + p / (Math.pow(1 + p, numberMonth) - 1));
  
    let totalAmount = +(numberMonth * payPerMonth).toFixed(2);
  
    console.log(totalAmount);
    //   console.log(`Переплата составит: ${(totalAmount - bodyCredit).toFixed(3)}`);
  
    // Вспомогательные функции:
    function countMonth(startDate, endDate) {
      let months;
      months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
      months -= startDate.getMonth();
      months += endDate.getMonth();
  
      return months <= 0 ? 0 : months;
    }
    function checkIsNaN(prametr, string) {
      if (!prametr) {
        return console.log(
          `Параметр "${string}" содержит неправильное значение ${prametr}`
        );
      }
    }
  
    return totalAmount;
}

function getGreeting(name) {
    let greeting;

    if (!isNaN(name) || name === undefined) {
      greeting = `Привет, мир! Меня зовут Аноним`;
    } else {
      greeting = `Привет, мир! Меня зовут ${name}`;
    }
  
    console.log(greeting);
    
    return greeting;
}