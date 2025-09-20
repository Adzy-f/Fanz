export default {
   nama: "toqr",
   category: "tools",
   command: ["toqr", "toqris"],
   run: async (conn, m, {
      Func
   }) => {
      if (m.text) {
         let apis = Func.fetchJson(`https://api-vgx.vercel.app/api/v2/tools/textToqr?text=${m.text}&ecLevel=H&margin=15&size=200&centerImageUrl=https%3A%2F%2Ffiles.catbox.moe%2Fimyxwz.jpg`)
         m.reply({
            image: {
               url: apis
            }
         })
      } else {
       m.reply("Salah oi ketik text nya")
      }
   }
}