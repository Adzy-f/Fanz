export default {
   name: "lowongan",
   category: "search",
   command: ["lowongan", "carikerja"],
   settings: {
      loading: true
   },
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("Salah ❌\n Kek gini ( .lowongan kerjaan|kota|jumlah)");
      try {
         let tulul = m.text.split("|");
         let args1 = tulul[0]
         let args2 = tulul[1]
         let args3 = tulul[2]

         let api = await Api.request("sxtream", "/search/carikerja", {
            pekerjaan: args1,
            kota: args2,
            jumlah: args3
         });
         if (!api.status) return m.reply("Errr: status false")
         m.reply(api.result)

      } catch (err) {
         m.reply("Ada yang error bang hehe coba cek konstol bang😁")
         console.log(err)
      }
   }
}