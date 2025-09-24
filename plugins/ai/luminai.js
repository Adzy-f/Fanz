// pixed by ai
export default {
   nama: "luminai",
   category: "ai",
   command: ["luminai"],
   run: async (conn, m, { Api, quoted }) => {
      if (!m.text && !quoted?.body) return m.reply("Silahkan masukin pertanyaan!");

      await m.react(m.chat, "⏳");
      
      let q = m.text || quoted?.body;
      let data = await Api.request("furina", "/ai/luminai", { text: q });

      console.log(data); // cek dulu struktur balikan API

      let send = data?.result || data?.output || JSON.stringify(data, null, 2);
      m.reply(send);
      await m.react(m.chat, "🤓");
   }
}