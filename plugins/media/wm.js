export default {
   name: "stikwm",
   category: "media",
   command: ["swm", "stikwm"],
   run: async (conn, m, {
      quoted
   }) => {
      if (/image|video|webp/.test(quoted.msg?.mimetype) && m.text) {
         let media = await quoted.download()
         if (quoted.msg?.seconds > 10) {
            return m.reply("Apa? aneh iih aneh😂🗿");
         }
         conn.sendSticker(m.chat, media, m, {
            packname: m.text
         })
      } else {
         m.reply(`Cara pkek reply poto/pideo/atau setiker Dengan anu \n kayak gini ( ${m.cmd} teks)`)
      }
   }
};