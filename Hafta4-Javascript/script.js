// Javascript nedir?
// 1995 yılı
// Brendan Eich
// Netscape
// Mozilla 
// Javascript motorları

// Hello world
console.log("hello world")
// Kullanıcıdan veri alma
// let x = prompt("sayi gir")
// console.log(x)
// Değişken tanımlama
// var
var y = 5
var y = "metin"
// let
let metin = "string"
// const
const pi = 3.14

// Operatörler
// + toplama 
console.log(2 + 2)
// - çıkarma
// * çarpma
// ** üs alma
console.log(2 ** 3)
// / bölme
// % kalan
// ++ artırma
// -- azaltma

// == ve === farkı
// 2 == '2' true
// 2 === '2' false

// != ve !==
// >
// <
// >=
// <=

//Koşullar(Conditions)
let sayi = 3
if (sayi > 5) {
    console.log("sayi 5Ten büyüktür")
}
else {
    console.log("sayı koşulu sağlamıyor")
}

if (sayi < 3) {
    console.log("sayı 3 ten küçük")
}
else if (sayi == 3) {
    console.log("sayı 3 e eşit")

}
else {
    console.log("sayı 3 ten büyük")

}
//Döngüler (Loops)
// for
for (let i = 0; i <= 5; i++) {
    console.log(i)
}
// while
let i = 0;
while (i < 5) {
    console.log("sıra no: " + i);
    i++;
}
// do while
do {
    console.log("sıra no: " + i);
    i++;
} while (i < 5)

// Functions

function myfonk() {
    return "hello world"
}
console.log(myfonk())
// Arrow funct
let myFunction = () => {
    return "hello world"
}
// Parametreli ve parametresiz fonksiyon
// function topla(a, b) {
//     let toplam = a + b
//     return toplam
// }
// console.log(topla(2,3))
// Default parametre
function topla(a, b = 5) {
    let toplam = a + b
    return toplam
}
console.log(topla(2))

// Objects
const person = {
    name: "furkan",
    job: "teacher",
    age: "30"
}
console.log(person.job)
// Object Constructor

function Car(brand, name, year) {
    this.brand = brand;
    this.name = name;
    this.year = year
}

const byd = new Car("byd", "seal", 2026)
console.log(byd.brand)

// Diziler
let notlar = [1, 2, 3, 4, 5, 6]
console.log(sayilar[0])
console.log(sayilar.length)

for (let i = 0; i < sayilar.length; i++) {
    console.log(sayilar[i])
}

//bir dizideki notları 50 den küçük/ büyük olarak farklı dizilere atınız. 
//genel not ortalamasını hesaplayınız