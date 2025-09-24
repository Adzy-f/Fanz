export default {
   name: "deepseek",
   category: "ai",
   command: ["deepseek", "deeps"],
   run: async (conn, m, {
      Api,
      quoted
   }) => {
      if (!m.text && !quoted?.body) return m.reply("Nanya apa sama dipsex?");
      await m.react(m.chat, "⏰")
      try {
         let ribetBat = await Api.request("sxtream", "/ai/deepseek-r1-distill-llama-70b", {
            text: m.text || quoted?.body
         });
         let send = ribetBat?.result?.msg  || "gua sakit hati sumpah 💔";
         m.reply(send)
         m.react(m.chat, "✅")
      } catch (err) {
         m.reply(err.message)
      }
   }
}