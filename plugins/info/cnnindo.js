/**
FanzCode();
**/

export default {
   name: "cnn",
   category: "berita",
   command: ["cnn"],
   run: async (conn, m, {
      Func,
      bruh
   }) => {
      await m.reply(bruh.wait);
      try {
         let api = await Func.fetchJson("https://api-furina.vercel.app/berita/cnnindonesia")
         let res = api.results;

         let text = `📢 *Total Berita:* ${api.total}\n\n📰 *Daftar Berita CNN Indonesia:*\n\n`;

         res.forEach((item, i) => {
            text += `*${i + 1}. ${item.title}*\n`
            text += `📝 ${item.desc}\n`
            text += `🔗 ${item.link}\n\n`
         });

         m.reply(text);
      } catch (err) {
         m.reply(err)
      }
   }
}