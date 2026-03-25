## Asenkron Javascript

Asenkron kod, bir programın uzun süren bir görevi (örneğin dosyadan veri çekme) başlatmasına ve ilk görev bitmeden diğer görevlere devam etmesine olanak tanır.

## Kontrol Akışı (Control Flow)

Kontrol akışı, bir programda ifadelerin yürütülme sırasıdır.

Varsayılan olarak, JavaScript kodu yukarıdan aşağıya ve soldan sağa doğru çalıştırır.

    myDisplayer("A");
    myDisplayer("B");
    myDisplayer("C");

## Fonksiyon Sırası

JavaScript fonksiyonları, tanımlandıkları sırayla değil, çağrıldıkları sırayla yürütülür.

    function myFirst() {
        myDisplayer("Hello");
    }

    function mySecond() {
        myDisplayer("Goodbye");
    }

### Durum 1

    myFirst();
    mySecond();

### Durum 2

    mySecond();
    myFirst();

## Neden Asenkron Kod?

Bazı görevlerin tamamlanması zaman alır (ağ istekleri, zamanlayıcılar, kullanıcı girişi).

JavaScript, hızlı yanıt verebilmek için asenkron programlama kullanabilir.

Asenkron akış, Javascript'in belirli işlemlerin arka planda çalışmasına ve sonuçlarının hazır olduğunda işlenmesine izin vermesini ifade eder.

Javascript bu görevleri bekleseydi, sayfa donardı.

Asenkron kod, programın geri kalanının çalışmaya devam etmesini sağlar.

Asenkron kod hemen çalışmaz:

- Zamanlayıcılar belirli sayıda milisaniye sonra çalışır.

- Event'ler bir olay tarafından tetiklendiğinde çalışır.

- Ağ istekleri veriler geldiğinde çalışır.

##

    myDisplayer("A");

    setTimeout(function() {
        myDisplayer("B");
    }, 1000);

    myDisplayer("C");

### Çıktısı ne olur?

    let result;

    setTimeout(function() {
        result = 5;
    },5000);

    console.log(result) ===???

## Callback function

Callback => Bir fonksiyonu başka bir fonksiyona parametre olarak vermektir.

Yani “Bu iş bitince şunu çalıştır” diyoruz aslında.

## Callback Hell

Callback içinde tekrar ve tekrar ve tekrar ve ..... fonksiyon çağırma

Birden fazla işlem var ve sırayla çalıştırmalısınız.

    Örnek senaryo:
        Kullanıcıyı getir.
        Postları getir.
        Yorumları getir.

    //Fonksiyonlar tanımlandı ama sıra garanti değil!!!

    kullaniciyiGetir();
    postlariGetir();
    yorumlariGetir();

    // Sıranın garanti olması için bir fonksiyon bittikten sonra diğerini çağırırız.

    kullaniciyiGetir(() => {
        postlariGetir(() => {
            yorumlariGetir();
        });
    });

## Promise

Promise = “Bir işlemin gelecekte sonuç vereceğini garanti eden yapı”

Örneğin, bir sunucudan veri çekmek için fetch kullanırsanız, bu veri hemen kullanılamaz, ancak bir süre sonra gelir, bu nedenle fetch bir promise döndürür. 

    let promise = new Promise(function(resolve, reject) {
        //Kodlar
    });

---

resolve() → işlem başarılı

reject() → işlem başarısız

    const veriGetir = new Promise((resolve, reject) => {
    let basarili = true;

    if (basarili) {
        resolve("Veri geldi");
    } else {
        reject("Hata oluştu");
    }
    });

Bir Promise, üç ayrı durumdan birinde olabilir:

- Pending --> (henüz tamamlanmamış) beklemedeki işlem
- Rejected --> reddedilen başarısız işlem
- Fulfilled --> tamamlanan işlem

Promise ile Callback Hell önüne geçilir:

    kullaniciyiGetir()
        .then(() => postlariGetir())
        .then(() => yorumlariGetir())
        .then(() => console.log("bitti"))
        .catch(err => console.log(err));

## Async / Await
Promise, asenkron işlemlerin sonucunu (başarı/hata) temsil eden bir nesneyken; Async/Await, bu Promise'leri senkron (ardışık) kod gibi yazmayı sağlayan modern bir sözdizimidir.

`async` bir fonksiyonun Promise döndürmesini sağlar.

`await` bir fonksiyonun Promise'i beklemesini sağlar.

await sadece async fonksiyon içinde kullanılır.

    async function calistir() {
        await kullaniciyiGetir();
        await postlariGetir();
        await yorumlariGetir();
        console.log("Bitti");
    }

Burada `await` aslında `.then` gibi davranır.

## Fetch

`fetch()`, bir sunucudan veri almanın modern yoludur.

    async function getUsers() {
        let response = await fetch("URL");
        let data = await response.json();

        console.log(data);
    }