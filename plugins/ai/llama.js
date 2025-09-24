/**
FanzCode();
pixed by ai
**/

export default {
   name: "llama",
   category: "ai",
   command: ["llama"],
   run: async (conn, m, { Func, Api }) => {
      if (!m.text) return m.reply("Ketik pertanyaan mu");

      await m.react(m.chat, "🗿");
      try {
         const data = await Api.request("sxtream", "/ai/llama-3.3-70b", {
            text: m.text
         });

         let abay = data?.result?.msg || "Gagal dapet jawaban 🤔";
         m.reply(abay);
         m.react(m.chat, "🐔");
      } catch (err) {
         console.error(err);
         m.reply("⚠️ Error: " + err.message);
      }
   }
};