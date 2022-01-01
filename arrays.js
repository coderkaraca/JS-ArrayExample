<!DOCTYPE html>
<html lang="tr">

<head>
    <meta charset="UTF-8">
    <meta name="author" content="Gökhan Karaca">
    <title>JAVASCRİPT / DİZİLER</title>

</head>

<body>
    <form onsubmit="return deneme()">
        <h3>Diziye eklemek istediğiniz indeksi yazınız</h3>
        <input type="text" id="ekle" name="ekle">
        <input type="submit" value="Dizi Ekle">
    </form>
    <script type="text/javascript" name="javasccript">
        let dizi = []; // Oluşturduğumuz dizi, eklenecek indekslerin devam etmesi için fonksiyon dışında olmalı.

        function deneme() {
            dizilistesi = document.getElementById('ekle').value; // ekle ID'li input bölümüne ulaşıyoruz.
            dizi.push(dizilistesi); // Dizilistesine girilen indeks değeri dizi içerisine dahil edilir.
            console.log(dizi); // Dizi içeriğini console sayfasından anlık izleyebiliriz.
            return false; // Gönderimi durdur.
        }
    </script>
</body>

</html>
