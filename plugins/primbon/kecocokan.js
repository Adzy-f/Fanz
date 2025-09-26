/**
FanzCode();
**/

export default {
   name: "cekkecocokan",
   category: "primbon",
   command: ["cekkecocokan", "cekcocok"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply(" Format salah : \n> try it: " + m.cmd + " nam1|nam2")
      let [teks1, teks2] = m.text.split("|").map(t => t.trim());
      if (!teks1 || !teks2) {
         return m.reply("Salah bang lu harus isi nama1|nama2 bang")
      }
      let key = await Api.request("siput", "/api/primbon/kecocokan_nama_pasangan", {
         nama1: teks1,
         nama2: teks2
      })
      let api = key.data;
      let info = `[ Cek ke cocokan Pasangan ]\n\n*Info pasangan*\n> Nama 1: ${teks1}\n> Nama 2: ${teks2}`
      info += `\n\n*Result*\n`
      info += `> Sisi positif: \n${api.sisi_positif}\n`
      info += `> Sisi negatif: \n${api.sisi_negatif}\n\n`
      info += `*Catatan*\n${api.catatan}`
      m.reply(info)
   }
}