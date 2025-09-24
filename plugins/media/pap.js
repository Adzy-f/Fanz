export default {
   name: "pap",
   category: "media",
   command: ["pap"],
   run: async (conn, m, {
      Func,
      Api
   }) => {
      await m.reply("Loding");
      m.reply({
         image: {
            url: Api.createUrl("furina", "/random/papayang")
         },
         caption: "Hai sayang 😘"
      })
   }
}