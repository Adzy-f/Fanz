/**
FanzCode();
**/

export default {
   name: "flux",
   category: "ai-image",
   command: ["flux"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("Tulis prompt nya")

      let apis = await Api.createUrl("siput", "/api/ai/flux", {
         prompt: m.text
      })
      m.reply({
         image: {
            url: apis
         },
         caption: 'Done gambar dibuat'
      })
   }
}