//Задача 0. Обчислити значення виразів
//1)	S1=a+12+b

/*const sideA = parseFloat(prompt(`Введите размер первой стороны`))
const sideB = parseFloat(prompt(`Введите размер первой стороны`))

let S1 = sideA + 12 + sideB;

document.write(`Загальна площа кімнати складає ${S1} м.`)*/

//========================================================================================================================================================


//Задача 1. Обчислити значення виразів 	S_2=√(((a+b)/2a) )

/*let a = parseFloat(prompt(`Введіть число А`))
let b = parseFloat(prompt(`Введіть число B`))

let S2 = Math.sqrt((a + b) / (2 * a));

document.write(`Квадратний корінь ${S2} м.`)*/

//========================================================================================================================================================

//	Задача 2. Обчислити значення виразів  S_3=∛((a+b)c)

/*const a = parseFloat(prompt(`Введіть число А`))
const b = parseFloat(prompt(`Введіть число B`))
const c = parseFloat(prompt(`Введіть число C`))

let S3 = Math.cbrt((a + b) * c)

document.write(`Кубічний корінь ${S3} м.`)*/

//========================================================================================================================================================


//Задача 3. Обчислити значення виразів	S_4=sin⁡(a/(-b))

/*const a = parseFloat(prompt(`Введіть число А`))
const b = parseFloat(prompt(`Введіть число B`))

let S4 = Math.sin(a / (-b))

document.write(`Результатом обчислення буде ${S4}`)*/

//========================================================================================================================================================


//Задача 4. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.

/*const userBirthday = parseInt(prompt(`Введіть ваш рік народження`))

const currentDate = 2023

let resultAge = currentDate - userBirthday

document.write(`На даний момент вам ${resultAge} повних років`)*/

//========================================================================================================================================================


//Задача 5. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості)


/*const totalPrice = 1400

const quantityProduct = parseInt(prompt(`Введіть кількість товарів які ви бажаєте замовити`))

const quantityPercent = 0.05

const resultProductSum = totalPrice * quantityProduct
document.write(`Загальна сума вартості товарів складає ${resultProductSum} грн<br><br>`)

const percentOfPrice = resultProductSum * quantityPercent

document.write(`Загальний ПДВ складає ${percentOfPrice} грн`)*/
//========================================================================================================================================================

//Задача 6. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів
/*
const quantityСentimeter = parseInt(prompt(`Введіть довжину у сантиметрах`))

let quantityMeter = quantityСentimeter / 100

document.write(`Загальна кількість метрів складає ${quantityMeter}<br><br> `)

let quantityKiloMeters = quantityСentimeter / 1000000

document.write(`Загальна кількість кілометрів складає ${quantityKiloMeters} `)*/

//========================================================================================================================================================


//Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.

/*const quantitySeconds = parseInt(prompt(`Введіть кількість секунд що пройшли від початку доби`))

const resultMinutes = quantitySeconds / 60
document.write(`Загальна кількість хвилин від початку доби складає ${resultMinutes.toFixed(5)} хв<br><br> `)

const resultOurs = quantitySeconds / 3600

document.write(`Загальна кількість годин від початку доби складає ${resultOurs.toFixed(5)} год `)*/

//========================================================================================================================================================


//Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

/*const firstProductPrice = parseInt(prompt(`Введіть вартість першого товару`))
const firstProductQuantity = parseInt(prompt(`Введіть кількість першого товару`))

const secondProductPrice = parseInt(prompt(`Введіть вартість другого товару`))
const secondProductQuantity = parseInt(prompt(`Введіть кількість другого товару`))

const thirdProductPrice = parseInt(prompt(`Введіть вартість третього товару`))
const thirdProductQuantity = parseInt(prompt(`Введіть кількість третого товару`))

let resultPriceFirstProduct = firstProductPrice * firstProductQuantity

let resultPriceSecondProduct = secondProductPrice * secondProductQuantity

let resultPriceThirdProduct = thirdProductPrice * thirdProductQuantity


let resultSum = (resultPriceFirstProduct + resultPriceSecondProduct) + resultPriceThirdProduct

document.write(`Вас ВІТАЄ МАГАЗИН ЗДОРОВОЇ ЇЖІ НОВУС <br><br>
Вартість першого товару складає ${resultPriceFirstProduct} грн <br><br>
Вартість другого товару складає ${resultPriceSecondProduct} грн <br><br>
Вартість третього товару складає ${resultPriceThirdProduct} грн <br><br>

Загальна сумма до оплати буде складати ${resultSum} грн <br><br>

Чекаємо на вас у Новус. Гарного дня тварі

`)*/

//========================================================================================================================================================

//Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
/*const minV = 1
const maxV = 12

const minD = 0
const maxD = 6

let randomMonth = minV + Math.floor(Math.random() * (maxV - minV + 1))
let randomDay = minD + Math.floor(Math.random() * (maxD - minD + 1))

let resultSumNumber = randomMonth + randomDay

document.write(`Отримуйте випадкову кількість ${resultSumNumber}`)*/

//========================================================================================================================================================
