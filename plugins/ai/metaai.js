/**
FanzCode();
**/

export default {
   name: "meta",
   category: "ai",
   command: ["meta"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("nanya apa wok?");
      await m.react(m.chat, "😁")

      let meta = await Api.request("siput", "/api/ai/metaai", {
         query: m.text
      });
      let data = meta.data;
      m.reply(data)
      await m.react(m.chat, "😅")
   }
}