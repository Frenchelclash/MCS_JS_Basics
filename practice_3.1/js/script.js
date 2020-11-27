  
let totalCash = prompt('Сколько наличных у вас есть?')
let watchesCount = prompt('Сколько часов вы хотите купить?')
let earringsCount = prompt('Сколько пар серёжек вы хотите купить?')
let watchesCost = prompt('Сколько стоят часы?')
let earringsCost = prompt('Сколько стоят серёжки?')
let watchSum = parseInt(watchesCost)*parseInt(watchesCount)
let earringsSum = parseInt(earringsCost)*parseInt(earringsCount)
document.write(parseInt(earringsSum)+parseInt(watchSum)<=parseInt(totalCash))