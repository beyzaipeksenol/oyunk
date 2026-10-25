# GG Campus

GG Campus, oyun oynamayı seven üniversite öğrencilerini bir araya getiren bir oyun kulübü sitesi örneğidir. Site; kulübü tanıtır, oynanan oyunları ve etkinlikleri gösterir, ayrıca etkinlik başlıklarında arama yapılmasını sağlar.

## Sayfalar

- `index.html` — Ana sayfa, kulübün kısa tanıtımı ve öne çıkan oyunlar/etkinlikler.
- `etkinlikler.html` — Altı etkinlik, etkinlik başlığına göre arama, sonuç sayacı ve temizleme düğmesi. Gösterilen Kasım 2026 tarihleri öneri niteliğindedir.
- `oyunlar.html` — Valorant, Minecraft, Stardew Valley, EA SPORTS FC, Among Us ve Fall Guys oyunlarını tür ve kısa açıklamalarıyla listeler.
- `hakkimizda.html` — Kulübün amacı, topluluk etkinlikleri ve katılım daveti.

## Teknolojiler

- HTML5: sayfa yapısı ve erişilebilir içerik.
- CSS3: ortak tasarım ve mobil düzen.
- JavaScript: etkinlik başlığı arama, kart filtreleme ve sonuç durumları.

Harici framework veya derleme adımı kullanılmıyor.

## Yerel Çalıştırma

Proje klasöründe bir terminal açıp şu komutu çalıştır:

```bash
python3 -m http.server 8000
```

Tarayıcıda `http://localhost:8000` adresini aç. Sunucuyu durdurmak için terminalde `Ctrl+C` kullan. Alternatif olarak `index.html` dosyası doğrudan tarayıcıda açılabilir.