export default {
   name: "toqr",
   category: "tools",
   command: ["toqr", "toqris"],
   run: async (conn, m, {
      Func
   }) => {
      if (m.text) {
       //  let apis = Func.fetchJson(`https://api-vgx.vercel.app/api/v2/tools/textToqr?text=${m.text}&ecLevel=H&margin=15&size=200&centerImageUrl=https%3A%2F%2Ffiles.catbox.moe%2Fimyxwz.jpg`)
       let tek = m.text // gabut
         m.reply({
            image: {
               url: `https://quickchart.io/qr?size=300&margin=2&text=${encodeURIComponent(tek)}`
            }
         })
      } else {
       m.reply("Salah oi ketik text nya")
      }
   }
}