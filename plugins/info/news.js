export default {
   nama: "news",
   category: "info",
   command: ["news"],
   run: async (conn, m, {
      Api
   }) => {
      await m.reply("memeriksa beritah hariini");
      let news = await Api.request("furina", "/berita/kompas");
      let data = news.result;
      let send = `Ada ${news.count} berita hari ini\n\n`
      data.forEach((item, i) => {
         send += `${i +1}. ${item.title}\n`
         send += `Url: ${item.url}\n`
         send += `Publis pada: ${item.published_at}\n`
      })
      m.reply(send.trim())
   }
}