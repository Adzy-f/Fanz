/**
FanzCode("ipongqc");
**/

export default {
   name: "ipongqc",
   category: "media",
   command: ["ipongqc", "iqc"],
   settings: {
      loading: true
   },
   run: async (conn, m, {
      Api,
      Func,
      cfg
   }) => {
      if (!m.text) return m.reply("Ketik text yg mau di QC");
      const time = Func.getTime()
      try {
         const iqc = Api.createUrl("ryhar", "/api/maker/fakechatiphone", {
            text: m.text,
            chatTime: time,
            statusBarTime: time,
            apikey: cfg.ryhar
         })
         m.reply({
            image: {
               url: iqc
            },
            caption: "Gambar berhasil di buat"
         })
      } catch (err) {
         m.reply("Error broh🤖")
         console.log(err)
      }
   }
}