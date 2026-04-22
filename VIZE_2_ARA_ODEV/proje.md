# React E-ticaret Projesi

### Proje kapsamında 2 adet sayfa olacaktır. (10 Puan)

- Anasayfa
- Sepetim

### Her sayfada bir navbar olmalıdır. (10 puan)

- Navbar bir "component" şeklinde kullanılmalıdır.
- Navbar'da yer alan linklere ( anasayfa ve sepetim) tıklanıldığında ilgili sayfaya yönlendirilmelidir.

### Anasayfada veritabanında bulunan ürünler listelenecektir (GET işlemi). (10 Puan)

- Toplam 29 adet ürün bulunmaktadır.
- Ürünleri listelemek için ayrı bir "component" kullanılmalıdır. Bu componente ilgili veriler "props" yardımıyla gönderilmelidir.

### Anasayfada listelenmiş olan her ürün şu özelliklere sahip olmalıdır.(20 Puan)

- Listelenen bir ürüne ait özellikler:(10 Puan)
  - Ürün resmi
  - Ürün adı
  - Ürün kategorisi
  - Ürün fiyatı
  - "Sepete Ekle" butonu olmalıdır.
- Ekle butonuna tıklandığında ilgili API'ya istek atılarak, tıklanan ürün sepete eklenmelidir (POST işlemi). (10 puan)

### Sepetim sayfası açıldığında aşağıdaki durumlara göre farklı çıktılar verilmelidir. (40 Puan)

- Sepette bulunan ürün sayısı 0 ise ekranda "Sepetiniz boş" bilgisini vermelidir. (10 Puan)
- Sepette ürün/ürünler var ise ilgili ürün/ürünler listelenmelidir.Ürünleri listelemek için ayrı bir "component" kullanılmalıdır. Bu componente ilgili veriler "props" yardımıyla gönderilmelidir. (10 Puan)

- Listelenen bir ürüne ait özellikler:(10 Puan)
  - Ürün resmi
  - Ürün adı
  - Ürün kategorisi
  - Ürün fiyatı
  - "Sepetten sil" butonu olmalıdır.
- Sil butonuna tıklandığında ilgili API'ya istek atılarak, tıklanan ürün sepetten silinmelidir (DELETE işlemi). (10 puan)

### İlgili proje verilen tasarıma uygun olmalıdır. (10 Puan)
- CSS veya TailwindCSS ile yapılabilir.


## Kullanılan teknolojiler
- React
- TailwindCSS
- json-server
- react-router-dom
- react-icons