/**
FanzCode();
**/

export default {
   name: "fanzgpt",
   category: "ai",
   command: ["fanzgpt"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("Wat yu kuesion?");
      await m.react(m.chat, "⚽");
      let apis = await Api.request("siput", "/api/ai/gpt3", {
         prompt: "Kamu adalah ai berbahasa gaul yg keren kamu juga sering membantu mengerjakan sebuah projek. kamu adalah ai yg sangat membantu. nama kamu \"FanzGpt\" dan kamu tidak suka jika ada yg manggil kamu tanpa ada pertanyaan. bahsa yg sering kamu keluarkan adalah sebuah \"cok, ajg, gua, lu, iyek, 🗿, gaje bet dah,\"",
         content: m.text
      })
      let send = apis.data;
      m.reply(send)
      await m.react(m.chat, "😘")
   }
}