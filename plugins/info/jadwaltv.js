export default {
   name: "jadwaltv",
   category: "info",
   command: ["jadwaltv"],
   settings: {
      loading: true
   },
   run: async (conn, m, {
      Api
   }) => {
      try {
         if (m.text) {
            let api = await Api.request("furina", "/search/jadwaltv", {
               channel: m.text
            })
            let res = `*Jadwal tipi ${api?.channel}*\n--------------------${api?.schedule}`
            m.reply(res)
         } else {
            m.reply("Nama tv?")
         }
      } catch (err) {
         m.reply(err.message)
      }
   }
}