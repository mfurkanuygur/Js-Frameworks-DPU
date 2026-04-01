

const but = document.createElement("button")
but.innerHTML = "tıkla"
const p = document.createElement("p")
p.innerHTML = "hello world"
but.addEventListener("click", function () {
    p.style.color = "red"
})
document.body.appendChild(but)
document.body.appendChild(p)


const üs = (x) => {
    for (let i = 1; i <= x; i++) {
        let satir = "";
        for (let j = 0; j < i; j++) {
            satir += "*"
        }
        console.log(satir)
    }
}
üs(5)


function toplam(x,y){
    return x+y
}