/**
FanzCode();
**/

export default {
   name: "ytmp4",
   category: "downloader",
   command: ["ytmp4", "ytv"],
   run: async (conn, m, {
      Api,
      cfg
   }) => {
      if (!m.text) return m.reply("Masukin url")
      await m.reply("Sabar yaa")

      let api = await Api.request("ryhar", "/api/downloader/youtube-video", {
         url: m.text,
         apikey: cfg.ryhar
      })
      let result = api.result;
      await m.reply({
         image: {
            url: result.thumbnail
         },
         caption: `Yt video di temukan:\n> Video ini di upload pada *${result.uploadDate} dengan view: ${result.views} | ${result.likes} like*\n> Judul: ${result.title}\n> Desk: ${result.description}\n> *Status: mendownload video*`
      })
      m.reply({
         video: {
            url: result.link
         },
         caption: "Done terdownload puh"
      })
   }
}