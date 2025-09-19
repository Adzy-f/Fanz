# FnzBot

![Banner](https://files.catbox.moe/oj4f9s.png)

Fnz adalah bot WhatsApp Multi-Device yang sederhana dan ringan.

---

## Ringkasan singkat
- Bahasa: JavaScript / Node.js
- Fokus: stabilitas dan kemudahan penggunaan
---

## Persyaratan
- Node.js v20+
- npm atau yarn
- Koneksi internet untuk autentikasi

---

## Instalasi & Menjalankan
1. Clone repository
   ```bash
   git clone https://github.com/AdzMd/fnzBot
   cd fnzBot
   ```

2. Install dependensi
   ```bash
   npm install
   # atau
   yarn
   ```

3. Jalankan bot
   ```bash
   npm run fanzbot
   ```

4. Masukkan Code Pairing
   - Pada jalankan pertama, Pairing Code akan muncul di terminal. Masukkan di WhatsApp untuk autentikasi.

---

## Struktur direktori (contoh)
```txt
fanzBot/
├─ Fanz/
｜  ├ ai
｜  ├ dev
｜  ├ downloader
｜  ├ fun
｜  ├ info
｜  ├ tools
｜  └ utility
├─ lib/
｜  ├ api.js
｜  ├ color.js    
｜  ├ exif.js    
｜  ├ loadPlugins.js    
｜  ├ pungsi.js    
｜  └ serialize.js  
├─ fnz.js
├─ config.js
├─ index.js
├─ package.json
└─ README.md
```

---

## Cara nambah fitur

```js
export default {
   name: "namafitur",
   category: "category",
   command: ["cmd", "cmdd"],
   run: async (conn, m, { optional kalo ada yang mau di import dari handler.js => {
   /**
     Disini code mu taro ya puh
     **/
   }
}

// contoh 
export default {
    name: "ping",
    category: "utility",
    command: ["ping"],
    run: async (conn, m) => {
        const start = performance.now();
        m.reply(`Pong! ${(performance.now() - start).toFixed(2)} ms`);
    }
} 
```

## Config.js

```js
export default {
    numP: 62, // no bot
    dev: [{
        jid: '62',
        name: 'ma'
    }],
    owner: ["62"], // edit owner di sini
    status: true, //publik (false, //self)
    botN: "Fanz-bot",
    botF: "Fnz",
    version: "v1.3.3-beta",
    view: "https://files.catbox.moe/oj4f9s.png",
    url: "https://github.com/AdzMd",
    pack: "Fanzbot",
    auth: "by adi"
    // pairC: "FANZZBOT" pke bail v6 aja lah dulu v7 masi ng bug klo nak pkek pakek lah
}
```

---

## Kontribusi
Kontribusi kecil diterima (bugfix, perbaikan dokumentasi, penambahan perintah minimal). Langkah:
1. Fork repository
2. Buat branch: git checkout -b feat/nama-fitur
3. Commit & push
4. Buka Pull Request

Untuk perubahan fitur besar, buka issue dulu supaya dibahas.

---

## Lisensi
MIT — lihat file LICENSE di repo.

---

## Kontak Devloper base
Owner / Maintainer: AgusXzz  
Repo: [AgusXzz](https://github.com/AgusXzz/ESEMPE-MD)

## Kontak Devloper fnzBot
Github: [me](https://github.com/AdzMd)
Kontrib: AguzXzz

Terima kasih sudah menggunakan fnz!