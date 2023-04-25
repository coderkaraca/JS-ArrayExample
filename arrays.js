<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Gökhan Karaca">
    <title>JAVASCRİPT</title>
</head>

<body>
    <form onsubmit="return diziEkle()">
        <h3>Diziye eklemek istediğiniz indeksi yazınız</h3>
        <input type="text" id="ekle" name="ekle" placeholder="Diziye eklenecek değer">
        <input type="submit" value="Dizi Ekle">
    </form>
    <script type="text/javascript" name="javasccript">
        const dizi = []; // Oluşturduğumuz dizi, eklenecek olan indekslerin devam etmesi için fonksiyon dışında olmalı.

        function diziEkle() {
            const dizilistesi = document.getElementById('ekle').value; // ekle ID'li input bölümüne ulaşıyoruz.
            dizi.push(dizilistesi); // Dizi listesine girilen indeks değeri dizi içerisine dahil edilir.
            console.log(dizi); // Dizi içeriğini console sayfasından anlık izleyebiliriz.
            event.preventDefault(); // Gönderimi durdur.
        }
    </script>
</body>

</html>
