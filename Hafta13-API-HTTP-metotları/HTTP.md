# API nedir?

## Application Programming Interface

- İki yazılımın birbiriyle veri alışverişi yapmasını sağlayan bir elçidir.

- Garson Benzetmesi: Bir restoranda mutfak (sunucu) ve müşteri (siz/istemci) arasındaki iletişimi garson (API) sağlar. Siparişinizi mutfağa iletir ve hazırlanan yemeği size geri getirir.

- Temel İşlev: Karmaşık kod yapılarını dış dünyaya açmadan, belirli standartlar yardımıyla (örneğin JSON veya XML) veri paylaşımına izin verir.

## API Türleri

    1. REST API (En yaygın)
        HTTP metotlarını kullanır
        JSON veri formatı kullanır
        GET /users
        POST /users

    2. SOAP API
        XML tabanlıdır
        Daha ağır ve eski sistemlerde kullanılır

    3. GraphQL
        İstemci sadece istediği veriyi alır

## API’nin Avantajları

✔ Modüler yapı sağlar.

✔ Frontend - backend ayrılır

✔ Farklı platformlar (web, mobil) aynı API’yi kullanabilir.

# HTTP ve HTTPS Nedir?

### HTTP (HyperText Transfer Protocol)

İstemci ile sunucu arasında veri iletimini sağlar.

👉 Özellikleri:

- Şifreleme <b>YOK</b>
- Veriler düz metin (plain text) gider
- <b>Güvensizdir.</b> Araya giren biri (Man-in-the-Middle) kullanıcı adınızı veya şifrenizi kolayca okuyabilir.

### HTTPS (HTTP Secure)

HTTP'nin üzerine <b>SSL/TLS</b> şifreleme katmanı eklenmiş halidir.

- Güvenlik: Veriler gönderilmeden önce şifrelenir. Sadece doğru anahtara sahip olan alıcı bu veriyi çözebilir.

- Güven Sertifikası: Tarayıcıdaki o meşhur "asma kilit" simgesi HTTPS kullanıldığını gösterir.

### SSL ve TLS

- SSL (Secure Sockets Layer)

      - Web tarayıcı ile sunucu arasında şifreli bağlantı kurar.
      - Gönderilen veriler (şifre, kredi kartı vb.) başkaları tarafından okunamaz.
      - Günümüzde eski ve güvensiz kabul edilir.

  🔐

- TLS (Transport Layer Security)

  - SSL’in geliştirilmiş ve daha güvenli versiyonudur.
  - Günümüzde HTTPS bağlantılarında aslında TLS kullanılır (ama halk arasında hâlâ SSL denir).
  - Daha güçlü şifreleme ve güvenlik sağlar.

# HTTP Metotları

Bir API'ye istek (Request) atarken ne yapmak istediğinizi belirtmek için "metotlar" kullanırsınız. En yaygın olanları şunlardır:


<table>
        <thead>
            <tr>
                <th>Metot</th>
                <th>İşlev</th>
                <th>Açıklama</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>GET</td>
                <td>Veri Al</td>
                <td>Sunucudan belirli bir kaynağı okumak için kullanılır. (Örn: Bir blog yazısını görüntülemek)</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>Veri Gönder</td>
                <td>Sunucuya yeni bir kaynak oluşturması için veri gönderir. (Örn: Yeni bir üyelik kaydı oluşturmak)</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>Veri Güncelle</td>
                <td>Mevcut bir kaynağın tamamını değiştirmek/güncellemek için kullanılır.</td>
            </tr>   
            <tr>
                <td>PATCH</td>
                <td>Kısmi Güncelleme</td>
                <td>Kaynağın sadece belirli bir kısmını değiştirmek için kullanılır.</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>Veri Sil</td>
                <td>Belirtilen kaynağı sunucudan siler.</td>
            </tr>
        </tbody>
</table>

| İşlem  | Açılım   | HTTP Metodu |
| ------ | -------- | ----------- |
| Create | Oluştur  | POST        |
| Read   | Oku      | GET         |
| Update | Güncelle | PUT / PATCH |
| Delete | Sil      | DELETE      |


# İstek ve Yanıt Döngüsü (Request & Response)

Bir API etkileşimi iki ana parçadan oluşur:

- <b>Request (İstek):</b> İstemci (tarayıcı veya uygulama) sunucuya bir talep gönderir. İçinde metot, URL, başlıklar (headers) ve bazen bir gövde (body) bulunur.

- <b>Response (Yanıt):</b> Sunucu isteği işler ve bir yanıt döner. Bu yanıtın en önemli parçası Durum Kodlarıdır (Status Codes):

    - <b>2xx (Başarılı)</b>
        - 200 OK: Her şey yolunda.

        - 201 Created: Kayıt başarıyla oluşturuldu.

    - <b>3xx (Yönlendirme)</b>
        
        -  301 → Redirect

    - <b>4xx (Client Hatası)</b>

        - 400 Bad Request: İstek hatalı (istemci tarafı hatası).

        - 401 Unauthorized: Yetkisiz erişim (Giriş yapmalısın).

        - 404 Not Found: Aranan kaynak bulunamadı.

    - <b>5xx (Server Hatası)</b>
        
        - 500 Internal Server Error: Sunucu tarafında bir sorun çıktı.

## Request - Response Yapısı

   <p style="font-size:20px"> 📤 Request:</p>

            Method (GET, POST…)
            URL
            Headers
            Body
<p style="font-size:20px">📥 Response:</p>

            Status Code
            Headers
            Body
-----

    fetch("https://api.site.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: "Ali" })
    })

# HTTP Metotları ile İlgili Kritik Kavramlar
-  Idempotent Metotlar

    Aynı istek kaç kez yapılırsa yapılsın sonuç değişmiyorsa:

    ✔ GET

    ✔ PUT
    
    ✔ DELETE
    
    ❌ POST

- Non-Idempotent Metotlar:
    
    -   Birden fazla kez çalıştırıldığında sunucuda farklı etkiler (yeni kayıtlar) yaratan metotlardır.
    -  Örnek: POST.

- Safe Metot

    Sunucuda değişiklik yapmayan:

    ✔ GET

# GET → Veri Alma (READ)

📌 Sunucudan veri çekmek için kullanılır

📌 En güvenli metottur (veri değiştirmez)

📌 URL üzerinden çalışır

    async function getUsers() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        console.log(data);
    }

# POST → Yeni Veri Oluşturma (CREATE)

📌 Genelde form gönderme işlemlerinde kullanılır

📌   Body içinde veri gönderilir (JSON)

    async function createUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    name: "Ahmet",
                    email: "ahmet@example.com"
                }
            )
        });

        const data = await response.json();
        console.log(data);
    }

# PUT → Veri Güncelleme - Tam Değişim (UPDATE)

📌   Mevcut veriyi tamamen güncellemek (UPDATE - FULL)

📌  Tüm alanlar yeniden gönderilir

📌  Eksik alan varsa silinmiş sayılır.

    async function updateUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    name: "Mehmet",
                    email: "mehmet@example.com"
                }
            )
        });

        const data = await response.json();
        console.log(data);
    }

# PATCH → Kısmi Güncelleme - (UPDATE)

📌 Verinin sadece bir kısmını güncellemek (UPDATE - PARTIAL)

📌 Sadece değişen alan gönderilir.

    async function patchUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    email: "yeniemail@example.com"
                }
            )
        });

        const data = await response.json();
        console.log(data);
    }

# DELETE → Veri Silme  (DELETE)

📌 Sunucudaki veriyi silmek (DELETE)

📌  Genelde body gönderilmez

    async function deleteUser() {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
            method: "DELETE"
        });

        console.log("Silme işlemi tamamlandı");
    }