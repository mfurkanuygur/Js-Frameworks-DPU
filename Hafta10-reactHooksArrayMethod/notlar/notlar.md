## Bir etikete React'ta nasıl "event" eklenir?

Normalde Javascriptte addEventListener ile click vb. eventleri ekleyebiliyorduk. React'ta element içine onClick, onChange, onMouseOver vb. şekilde event ekleyebiliriz.

Event ekledikten sonra ilgili fonksiyonu iki şekilde çağırabiliriz.

    <button onClick={fonksiyonAdi}>Ekle</button>

    veya

    <button onClick={()=>fonksiyonAdi()}>Ekle</button>

Eğer fonksiyonu direk çağırırsak element render işlemi biter bitmez kendi çalışır.

    <button onClick={fonksiyonAdi()}>Ekle</button> butona tıklama işlemi gerçekleşmeden kendisi çalışır.

## useState nedir?

- useState hook'u (kancası) bir component içinde veri tutmamızı (state) sağlayan bir yapıdır.

- Normalde Javascriptte veriyi bir değişken yardımıyla tutuyorduk.

        let sayi=5;

  - Ancak burada "sayi" değişkeni güncellendiğinde/ değiştiğinde olay sadece arka planda gerçekleşir. React bunu render etmez/ekranda görüntülemez.

- Bundan dolayı useState yapısı kullanılır.

        import { useState } from 'react'

        const [state, setState] = useState(initialValue)

        state → mevcut değer
        setState → değeri değiştiren fonksiyon
        initialValue → başlangıç değeri

## useEffect nedir?

- useState bileşenin o anki durumunu tutarken, useEffect bu durumun değişimine bağlı olarak dış dünya ile iletişim kurmamızı sağlar.

useEffect iki parametre alır:

    Fonksiyon: Çalışmasını istediğimiz kod.

    Bağımlılıklar(Dependency Array): Bu kodun ne zaman çalışacağını belirleyen liste.

    useEffect(() => {
        // Buraya yan etki kodları yazılır
    }, [bagimliliklar]);