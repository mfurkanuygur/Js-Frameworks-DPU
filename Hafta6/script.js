// // Callback function
function selamVer(ad, callback) {
    console.log("Merhaba " + ad);
    callback();
}

function yazdir() {
    console.log("hoşgeldin")
}

selamVer("furkan", yazdir);

//Örnek 1
const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
];

const listBooks = () => {
    for (let i = 0; i < books.length; i++) {
        console.log(books[i].name)
    }
};

listBooks();

const addBook = (newBook ,callback) => {
    books.push(newBook)
    callback()
}

addBook({ name: "Kitap 4", author: "Yazar 4" },listBooks)


// Örnek 2
function kullaniciyiGetir(callback) {
    setTimeout(() => {
        console.log("Kullanıcı geldi");
        callback();
    }, 1000);
}

function postlariGetir(callback) {
    setTimeout(() => {
        console.log("Postlar geldi");
        callback();
    }, 1000);
}

function yorumlariGetir() {
    setTimeout(() => {
        console.log("Yorumlar geldi");
    }, 1000);
}

kullaniciyiGetir(() => {
    postlariGetir(() => {
        yorumlariGetir();
    });
});

// Promises
let promise = new Promise(function (resolve, reject) {

});
console.log(promise)



function kullaniciyiGetir() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Kullanıcı geldi");
            resolve();
        }, 1000);
    });
}

function postlariGetir() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Postlar geldi");
            resolve();
        }, 1000);
    });
}

function yorumlariGetir() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Yorumlar geldi");
            resolve();
        }, 1000);
    });
}

kullaniciyiGetir()
    .then(() => postlariGetir())
    .then(() => yorumlariGetir())
    .then(() => console.log("bitti"))
    .catch(err => console.log(err));


// FETCH

async function getUsers() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
    userList(data)

}
getUsers()



function userList(users) {
    let ul = document.createElement("ul")
    for (let i = 0; i < users.length; i++) {
        let li = document.createElement("li")
        li.textContent = users[i].name
        ul.appendChild(li)
        document.body.appendChild(ul)
    }
}


async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    postList(data)

}
getPosts()

function postList(posts) {

    for (let i = 0; i < posts.length; i++) {
        let div = document.createElement("div")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        h3.textContent = posts[i].title
        p.textContent = posts[i].body

        div.appendChild(h3)
        div.appendChild(p)
        document.body.appendChild(div)
    }
}