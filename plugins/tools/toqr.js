export default {
   name: "toqr",
   category: "tools",
   command: ["toqr", "toqris"],
   run: async (conn, m, {
      Func
   }) => {
      if (m.text) {
       let tek = m.text // gabut
         m.reply({
            image: {
               url: `https://quickchart.io/qr?size=300&margin=2&text=${encodeURIComponent(tek)}`
            },
            caption: "> Powered by Adzy"
         })
      } else {
       m.reply("Salah oi ketik text nya")
      }
   }
}