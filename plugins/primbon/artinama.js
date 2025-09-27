export default {
   name: "artinama",
   category: "primbon",
   command: ["artinama"],
   run: async (conn, m, {
      Func,
      Api
   }) => {
      if (m.text) {
         let api = await Api.request("siput", "/api/primbon/artinama", {
            nama: m.text
         })
         let exec = api.data
         let send = `Nama: ${exec.nama}\n> Arti: ${exec.arti}\n\n> Catatan: ${exec.catatan}`
         m.reply(send)
      } else {
         m.reply("gagal kamu tidak memberikan nama kamu")
      }
   }
}