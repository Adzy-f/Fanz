export default {
   name: "ssweb",
   category: "tools",
   command: ["ssweb"],
   run: async (conn, m, {
      Api
   }) => {
      if (!m.text) return m.reply("Ex: " + m.cmd + " urlmya");
      await m.reply("Tunggu...")
      try {
         //let txt = m.text.split("|").map(t => t.trim())
         let apis = await Api.createUrl("siput", "/api/tools/ssweb", {
            url: m.text,
            theme: "dark",
            device: "desktop"
         })
         m.reply({
            image: {
               url: apis || "https://files.catbox.moe/x15h9q.jpg"
            },
            caption: "Sudah tak scrinsut [Mode desktop]"
         })

      } catch (e) {
         console.log(e);
      }
   }
}