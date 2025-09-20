/**
FanzCode();
**/

export default {
   name: "ytmp3",
   category: "downloader",
   command: ["ytmp3", "yta"],
   run: async (conn, m, {
      Func
   }) => {
      if (!m.text) return m.reply("Masukin url yt nya")
      await m.reply("mendownload sabar...")
     // let link = Func.isUrl(m.text)
      let api = await Func.fetchJson(`https://api.yupra.my.id/api/downloader/ytmp3?url=${encodeURIComponent(m.text)}}`)
      let kirim = api.result.link;
      m.reply({
         audio: {
            url: kirim
         },
         mimetype: "audio/mpeg"
      })
   }
}