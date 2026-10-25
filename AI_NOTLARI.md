Başlangıç notu: Kod eklemeden önce dosyalarım boştu ve başlangıç commit'ini oluşturdum.

## Gerçek Promptlardan Örnekler

Aşağıdaki alıntılar bu projede gerçekten kullanılan kullanıcı istekleridir:

1. “Şimdi yalnızca etkinlikler.html dosyasını geliştir.”
	- Amaç: Etkinlikler sayfasını diğer sayfalardan bağımsız, belirlenmiş kapsamda oluşturmak.
2. “Etkinlik araması yalnızca başlıkları kontrol etsin.”
	- Amaç: Arama davranışını kart açıklaması ve kategori yerine başlık metnine sınırlamak.
3. “yazılar çok karışık duruyor style kullanarak biraz daha estetik bir hakkımızda sayfası oluştur 390 px genişlikte yatay taşma olmasın”
	- Amaç: Hakkımızda sayfasını sadeleştirmek ve dar ekran düzenini gözetmek.

## Bir AI Önerisini Değerlendirme

Hakkımızda sayfasının ilk tasarımında dışarıdan yüklenen bir Unsplash oyun etkinliği görseli önerilip eklendi. Görsel adresi kontrol edildi; ancak daha sade bir tasarım isteği geldiğinde görselin sayfaya eklediği görsel ağırlık ve dış kaynağa bağımlılık gerekli görülmedi. Sonraki düzenlemede görsel kaldırıldı. Bu örnekte öneri, kullanıcı tercihine ve sayfanın sadelik hedefine göre yeniden değerlendirildi.

## Etkinlik Araması

`script.js`, gerekli HTML öğeleri mevcutsa arama alanına `input` olay dinleyicisi bağlar:

```js
searchInput.addEventListener("input", filterEvents);
```

`addEventListener("input", ...)`, kullanıcı metni yazdığında, sildiğinde veya alana metin yapıştırdığında `filterEvents` fonksiyonunu çalıştırır. Böylece arama düğmesine basmak gerekmeden sonuçlar güncellenir.

Fonksiyon arama terimini ve kartın `h2` başlığını normalleştirir: baştaki/sondaki boşlukları siler, Türkçe yerel ayarla küçük harfe dönüştürür ve arama karşılaştırmasında `ı` harfini `i` ile eşitler. Açıklama, kategori ve tarih alanları kullanılmaz.

Temel filtreleme koşulu:

```js
const matches = title && normalizeText(title.textContent).includes(searchTerm);
card.hidden = !matches;
```

`includes` arama ifadesinin başlığın herhangi bir bölümünde bulunup bulunmadığını kontrol eder. Başlık yoksa eşleşme oluşmaz; eşleşmeyen kart gizlenir. Görünür kart sayısı sayaca yazılır, sıfır eşleşmede mesaj gösterilir. Temizle düğmesi alanı boşaltıp filtreyi yeniden çalıştırır.