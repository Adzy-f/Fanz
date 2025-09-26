/**
FanzCode();
**/

export default {
   name: "totalfitur",
   category: "info",
   command: ["totalfitur"],
   run: async (conn, m) => {
      let total = Object.values(conn.plugins).length
      m.reply(`> Total fitur saat ini ${total} Plugins`)
   }
}