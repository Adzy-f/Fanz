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
            return m.reply("tidak boleh lebih dari 10 detik");
         }
         let [packname, ...author] = (text || '').split('|');
        author = (author || []).join('|');
         conn.sendSticker(m.chat, media, m, {
            pack: packname,
            author: author
         })
      } else {
         m.reply(`Cara pkek: reply poto/pideo/atau setiker Dengan anu \n kayak gini ( ${m.cmd} teks|teks)`)
      }
   }
};