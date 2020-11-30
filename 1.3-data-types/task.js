"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  
    const nowDate = new Date();

    function countMonth(startDate, endDate) {
      let months;
      months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
      months -= startDate.getMonth();
      months += endDate.getMonth();
  
      return months <= 0 ? 0 : months;
    }
  
    let numberMonth = countMonth(nowDate, date);
  
    let bodyCredit = amount - contribution;
    let p = percent / 100 / 12;
  
    let payPerMonth = bodyCredit * (p + p / (Math.pow(1 + p, numberMonth) - 1));
  
    let totalAmount = +(numberMonth * payPerMonth).toFixed(2);
  
    console.log(totalAmount);
  
    function checkIsNaN(prametr, string) {
      if (!prametr) {
        return (string)
      }
    
    }
    checkIsNaN(percent, "Процентная ставка");
    checkIsNaN(contribution, "Начальный взнос");
    checkIsNaN(amount, "Общая стоимость");
    checkIsNaN(date, "Срок ипотеки");
  
    return totalAmount;
}

function getGreeting(name) {
    let greeting;
    greeting = `Привет, мир! Меня зовут ${ name || 'Аноним' }`;

    console.log(greeting);
    
    return greeting;
    
    // альтернатива
    // return `Привет, мир! Меня зовут ${ name || 'Аноним' }`
}