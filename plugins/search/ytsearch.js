/**
FanzCode();
**/

export default {
   name: "ytsearch",
   category: "search",
   command: ["ytsearch", "yts"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) {
         return m.reply("Ex .yts <query>")
         await m.react(m.chat, "😁")
      }
      let apis = await Api.request("siput", "/api/s/youtube", {
         query: m.text
      })
      if (!apis.data || apis.data.length === 0) {
         return m.reply("Pencarian gak di temukan jir")
      }
      let data = apis.data;

      let text = "Ini hasil yang di dapat bang!\n\n\n"
      data.forEach((pck, i) => {
         text += `*#${i+1}*\n`
         text += `> Tipe: ${pck.type}\n`
         text += `📝 Judul: ${pck.title}\n`
         text += `💻 Link: ${pck.url}\n`
         text += `⏰ Durasi: ${pck.timestamp || "Null ges"}\n`
         text += "—–—–—–—–—–—–—–—–—\n"
         //text += `🗿 Author: ${pck.author.name}\n> Url: ${pck.author.url}`
      })

      m.reply(text)

   }
}