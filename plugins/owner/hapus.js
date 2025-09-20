export default {
   name: "hapus",
   category: "owner",
   command: ["hapus", "del"],
   settings: {
      owner: true
   },
   run: async (conn, m) => {
      if (!m.quoted) return m.reply("Hehe ga bisa")
      m.delet(m.quoted)
      await m.reactm.chat, ("😅")
   }
};
