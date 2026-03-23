// DOM nedir?
// Document Object Model, web tarayıcılarının HTML veya XML belgelerini hiyerarşik 
// bir ağaç yapısı olarak görmesini sağlayan bir standarttır.
// DOM ile HTML dosyasında bulunan her şeye erişim sağlanabilir.
// HTML dosyasında bulunan bütün öğeler, DOM üzerinde bir nesne olarak görülür.
// Tarayıcılar, bir web sayfasını yüklediğinde sayfadaki etiketleri (div, p, img) 
// nesne (node) olarak kabul eder ve bunlardan bir "DOM Ağacı" oluşturur.

// DOM ağacındaki nesnelere nasıl ulaşırız??
// Selectors kavramı


// getElementByID

let unique_text = document.getElementById("unique-text")
console.log("ID name")
console.log(unique_text)
unique_text.innerText = "hello world"
unique_text.style.color = "red"
unique_text.style.fontSize = "25px"

// getElementsByClassName 
// dizi dönderir. indeksle belirtmek gerekir.
let class_text = document.getElementsByClassName("class-text")
console.log("Class Name")
class_text[0].innerText = "hello class"
console.log(class_text)

// getElementsByTagName
let tag_name = document.getElementsByTagName("p")
console.log("Tag Name")
console.log(tag_name)
tag_name[2].style.fontSize = "25px"
tag_name[2].style.color = "blue"
tag_name[2].style.border = "1px solid black"
tag_name[2].style.width = "fit-content"


// css seçiciler ile bir nesneye ulaşmak
// iki türlü olabilir
// querySelector veya querySelectorAll
// biri ilk eşleşmeyi, diğeri tüm eşleşmeleri getirir.
let query = document.querySelector(".small")
console.log("query-selector")
console.log(query)
query.style.color = "green"

let queryAll = document.querySelectorAll(".class-text")
console.log("query-selectorAll")
console.log(queryAll)
queryAll[0].style.color = "purple"


// Sıfırdan bir elementte oluşturulabilir.
let h1 = document.createElement("h1")
h1.innerText = " BU bir başlıktır."
document.body.appendChild(h1)

// Seçilen veya oluşturulan elementlere fonksiyon eklenebilir.

let button = document.createElement("a")
button.id = "test-button"
button.href = "https://dpu.edu.tr/"
button.target = "_blank";
button.innerText = "Buraya tıklayınız."
button.classList.add("textdec")
document.body.appendChild(button)

button.addEventListener("click", testFonk);

function testFonk() {
    console.log("başarıyla tıklandı")

}


let geriBtn = document.getElementById("geri")
let durdurBtn = document.getElementById("durdur")
let playBtn = document.getElementById("play")
let ileriBtn = document.getElementById("ileri")
let myvideo = document.getElementsByTagName("video")
geriBtn.addEventListener("click", function () {
    myvideo[0].currentTime -= 5
})
ileriBtn.addEventListener("click", function () {
    myvideo[0].currentTime += 5
})
playBtn.addEventListener("click", function () {
    myvideo[0].play()
})
durdurBtn.addEventListener("click", function () {
    myvideo[0].pause()
})
