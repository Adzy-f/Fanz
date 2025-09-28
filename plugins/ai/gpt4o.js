/**
FanzCode();
**/

export default {
   name: "gpt4o",
   category: "ai",
   command: ["gpt4o"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("Silahkan tanyakan sesuatu?");
      await m.react(m.chat, "⚽");
      let apis = await Api.request("furina", "/ai/gpt4o", {
         prompt: m.text,
      })
      let send = apis.result;
      m.reply(send)
      await m.react(m.chat, "😘")
   }
}