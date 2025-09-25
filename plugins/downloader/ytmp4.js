/**
FanzCode();
**/

export default {
   name: "ytmp4",
   category: "downloader",
   command: ["ytmp4", "ytv"],
   run: async (conn, m, {
      Api,
      bruh
   }) => {
      if (!m.text) return m.reply("Masukin url")
      await m.reply("Sabar yaa")

      let api = await Api.request("ryhar", "/api/downloader/youtube-video", {
         url: "https://youtube.com/watch?v=VxilLXXR2i8",
         apikey: bruh.ryhar
      })
      let result = api.result;
      await m.reply({
         image: {
            url: result.thumbnail
         },
         caption: `Yt video di temukan:\n> Judul: ${result.title}\n> Desk: ${result.description}\n> *Status: mendownload video*`
      })
      m.reply({
         video: {
            url: result.link
         },
         caption: "Done terdownload puh"
      })
   }
}