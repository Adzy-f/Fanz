/**
FanzCode();
**/

export default {
   name: "listplug",
   category: "info",
   command: ["listplug"],
   run: async (conn, m) => {
      let list = Object.values(conn.plugins)
      let total = Object.values(conn.plugins).length
      let txt = "*BERIKUT DAFTAR PLUGIN FANZBOT*\n"
      txt += `> Plugin total: ${total}\n`
      list.forEach((p, i) => {
         txt += `> ${m.prefix}${p.name}\n`
      })

      m.reply(txt)
   }
}