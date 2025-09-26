// pix by eyay
export default {
   name: "pitagoras",
   category: "primbon",
   command: ["pitagoras"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("📌 Format: tgl|bln|thn\n> contoh: 29|04|2008");

      await m.reply("⏳ Menganalisa...");
      let txt = m.text.split("|").map(t => t.trim());

      if (txt.length < 3) {
         return m.edit("⚠️ Gagal menganalisa\nGunakan format yg benar:\n> 29|04|2008", tai.key);
      }

      let apis;
      try {
         apis = await Api.request("siput", "/api/primbon/cek_potensi_penyakit", {
            tgl: txt[0],
            bln: txt[1],
            thn: txt[2]
         });
      } catch (e) {
         console.error(e);
         return m.edit("❌ Terjadi error saat menghubungi API", tai.key);
      }

      if (!apis || !apis.data) {
         return m.edit("⚠️ Data tidak tersedia atau API error", tai.key);
      }

      let analisa = apis.data.analisa || "Tidak ada hasil";
      let notes = apis.data.catatan || "Tidak ada catatan";

      let hasil = `🧮 *Analisa Pitagoras* 🧮\n\n` +
         `📅 Tanggal: ${txt[0]}-${txt[1]}-${txt[2]}\n\n` +
         `📊 *Analisa:*\n${analisa}\n\n` +
         `📝 *Catatan:*\n${notes}`;

      m.reply(hasil);
   }
}