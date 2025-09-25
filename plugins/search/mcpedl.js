export default {
   name: "mcpedl",
   category: "search",
   command: ["mcpedl"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("Mau nyari apa say?");
      let gak = await m.reply("Mencari...")
      let api = await Api.request("siput", "/api/s/mcpedl", {
         q: m.text
      })
      if (!api.data || api.data.length === 0) {
         return m.reply("Ga nemu apa aja cok: Null alias nurul")
      }

      let text = `Berikut hasil pencarian dari ${m.text}\n\n\n`
      let img = api.data[0].image

      api.data.forEach((item, i) => {
         text += `*#${i+1}*\n`;
         text += `📌 *Judul:* ${item.title}\n`;
         text += `🔗 *Link:* ${item.link}\n`;
         text += `⭐ *Rating:* ${item.rating}\n`;
         text += `────────────────────\n`; // pemisah antar item
      });
      text += `\n> Powered by Fanz`
      m.reply({
         image: {
            url: img
         },
         caption: text
      })
   }
}