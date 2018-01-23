# autoedom
Ngisi EDoM Palawa UGM otomatis dengan "Sangat Baik"

### Latar Belakang
Dibuat untuk mempersingkat waktu yang diperlukan dalam mengisi EDoM. Bayangin aja, kita ngambil 6 mata kuliah, masing-masing harus menjawab pertanyaan EDoM sebanyak dua belas butir, dan setiap butir pertanyaan beranak 3 (kalau 2 dosen pengampu). Total kamu harus mengeklik sebanyak 216 kali untuk 6 matkul, belum kalo lebih. Padahal kita merasa bahwa dosennya bagus semua dan layak diberi rating "Sangat Baik" atau "Baik" semua, masa iya harus ngeklik segitu banyaknya hehehehe padahal tangan udah tremor deg-degan ga sabar mau lihat nilai.

### Disclaimer
Ini cuma script yang menggantikan 'klik' anda, bukan hek. Saya juga bukan hekel.

### Himbauan
Gunakan hanya jika dosen pengampu matkul Anda memang pantas mendapatkan rating baik.

### USE AT YOUR OWN RISK!!1!!1!

### Cara Pakai (noob)
Copy salah satu code:
#### 1. Auto "Sangat Baik":
```javascript
var jq = document.createElement('script');
jq.src = "https://github.com/medreza/autoedom/blob/master/sangatbaik.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();
```
atau
#### 2. Auto random "Baik" atau "Sangat Baik":
```javascript
var jq = document.createElement('script');
jq.src = "https://github.com/medreza/autoedom/blob/master/random_baik.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();
```
Lalu di halaman kita ngasih rating EDoM tiap matkul (yang banyak bunder2nya) buka fitur Inspect Element (Firefox), pilih tab Console, paste di Console-nya, enter.

P.S. di Firefox versi terbaru harus ketik "allow pasting" dulu di console biar bisa paste

Works in Jan 2018.
