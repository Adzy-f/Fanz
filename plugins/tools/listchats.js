export default {
   name: "listchat",
   category: "tools",
   command: ["listchat"],
   settings: {
      owner: true
   },
   run: async (conn, m) => {
      let od = Object.values(conn.chats)
      let txt = '> Daftar chats\n\n'
      txt += `-----------------------\n`
      od.forEach((item, i) => {
         txt += `!> Nama: ${item.subject}\n`
         txt += `!> Id: ${item.id}\n`
         txt += `!> Owner: ${item.owner}\n`
         txt += `!> Size: ${item.size}\n`
         txt += `-----------------------\n`
      })
      m.reply(txt)
   }
}