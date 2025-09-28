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
      await m.reply("Oke bang lagi mencari bang")
      let apis = await Api.request("furina", "/search/youtube", {
         q: m.text
      })
      if (!apis.result || apis.result.length === 0) {
         return m.reply("Pencarian gak di temukan jir")
      }
      let data = apis.result;
      let img = apis.result[0].imageUrl
      let text = "Ini hasil yang di dapat bang!\n\n\n"
      text += "—–—–—–—–—–—–—–—–—\n"
      data.forEach((p, i) => {
         text += `*#${i+1}*\n`
         text += `📝 Judul: ${p.title}\n`
         text += `💻 Channel: ${p.channel}\n`
         text += `⏰ Durasi: ${p.link}\n`
         text += "—–—–—–—–—–—–—–—–—\n"
      })

      m.reply({
         image: {
            url: img
         },
         caption: text
      })

   }
}