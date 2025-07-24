function checkForSpam(message) {
    // перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки
    
    message = message.toLowerCase();
    
    if (message.includes('spam') || message.includes('sale')) {
        return true; // якщо є, то повертає true
    } else {
        return false; // якщо немає, то повертає false
    }
    //Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
