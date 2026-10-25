# GG Campus Test Notları

Arama testleri `script.js` dosyasını Node.js içinde sahte DOM öğeleriyle çalıştırarak yapıldı. Navigasyon hedefleri ayrıca dosya olarak denetlendi. Kullanıcı navigasyon bağlantılarını ve 390 px mobil görünümü kontrol ettiğini bildirdi; bu kontrollerin geçme/kalma sonuçları test kaydında belirtilmedi. Tab tuşu testi için ayrıca sonuç bildirilmedi.

## 1. Başlığın Tamamı veya Bir Bölümüyle Arama

- **Beklenen sonuç:** Tam başlık veya başlığın bir parçası arandığında yalnızca eşleşen kart görünür ve sayaç eşleşen kart sayısını gösterir.
- **Gerçekleşen sonuç:** **Başarılı.** Node.js sahte DOM testinde `Valorant Kampüs Turnuvası` ve `kampüs` sorguları birer kart gösterdi.

## 2. Büyük/Küçük Harf Duyarsızlığı

- **Beklenen sonuç:** Aynı başlık farklı harf büyüklükleriyle arandığında aynı kartlar görünür.
- **Gerçekleşen sonuç:** **Başarılı.** `VALORANT` ve `indie` sorguları ilgili başlığı buldu.

## 3. Eşleşmeyen Arama ve Sıfır Sonuç

- **Beklenen sonuç:** Hiçbir başlıkta olmayan bir ifade sıfır kart gösterir; sayaç `0` olur ve sonuç bulunamadı mesajı görünür.
- **Gerçekleşen sonuç:** **Başarılı.** `Yaratıcılık` sorgusu kart başlıklarında bulunmadığı için sıfır eşleşme verdi; sayaç ve mesaj durumu doğrulandı.

## 4. Yalnızca Boşluk Girme ve Temizle Düğmesi

- **Beklenen sonuç:** Yalnızca boşluk girildiğinde boş sorgu gibi davranıp tüm kartları gösterir. Temizle düğmesi sorguyu sıfırlayıp tüm kartları geri getirir.
- **Gerçekleşen sonuç:** **Başarılı.** Sahte DOM testi boşlukta altı kartı gösterdi; Temizle tıklaması alanı boşaltıp altı kartı geri getirdi ve odağı arama alanına taşıdı.

## 5. Sayfalar Arası Navigasyon Bağlantıları

- **Beklenen sonuç:** Dört sayfanın menüsündeki hedefler mevcut HTML dosyalarına gider ve sayfalar arasında gezinilebilir.
- **Gerçekleşen sonuç:** Kullanıcı bağlantıları kontrol ettiğini bildirdi; kendi sonucu: `[kendi test sonucumu buraya yazacağım]`. Kaynak kodu denetiminde dört sayfanın menü hedefleri mevcut HTML dosyalarına karşılık geliyor.
- **Durum:** Sonuç bekleniyor; başarılı/başarısız olarak işaretlenmedi.

## 6. 390 px Yatay Taşma Kontrolü

- **Beklenen sonuç:** Sayfa 390 px genişlikte yatay taşma yapmaz.
- **Gerçekleşen sonuç:** Kullanıcı kontrol ettiğini bildirdi; sonucu: `[true/false sonucumu buraya yazacağım]`.
- **Durum:** Sonuç bekleniyor; başarılı/başarısız olarak işaretlenmedi.

## 7. Tab ile Arama ve Temizle Düğmesine Erişim

- **Beklenen sonuç:** Klavyede Tab tuşuyla arama alanına ve Temizle düğmesine ulaşılır; odak göstergesi görünür.
- **Gerçekleşen sonuç:** `[başarılı/başarısız sonucumu buraya yazacağım]`.
- **Durum:** Sonuç bekleniyor; bu testin yapıldığına dair sonuç henüz kaydedilmedi.
