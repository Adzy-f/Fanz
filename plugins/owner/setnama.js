export default {
   name: "setname",
   category: "owner",
   command: ["setname"],
   settings: {
      owner: true
   },
   run: async (conn, m) => {
      if (!m.text) {
         return m.reply("Ex .setname <query>\n> .setname SyntaxError: kont*l")
      }
      await conn.updateProfileName(input)
      m.reply("Done")
   }
}