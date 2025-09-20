export default {
   name: "menu",
   category: "utility",
   command: ["menu"],
   run: async (conn, m) => {

      let plugins = Object.values(conn.plugins);

      let grouped = {};
      for (let plugin of plugins) {
         if (!plugin || !plugin.name || !plugin.category) continue; // skip yg ga valid
         if (!grouped[plugin.category]) grouped[plugin.category] = [];
         grouped[plugin.category].push(plugin);
      }

      let behh = m.args[0] ? m.args[0].toLowerCase() : null
      let menu = "";
      if (!behh) {
         menu += `Hai 👋 ${m.pushname} ini daftar menu yg tersedia:\n\n`
         for (let category of Object.keys(grouped)) {
            menu += `> ${category || "Undefined"}\n`
         }
         menu += '\nKetik *.menu <kategori>* untuk menampilkan menu\n'
         menu += 'Ketik *.menu all* untuk semua menu\n'
      } else if (behh === "all") {
         for (let [category, items] of Object.entries(grouped)) {
            menu += `-> ${category.toUpperCase() || "Undefined"} <-\n`;
            for (let item of items) {
               menu += `=> ${m.prefix}${item.name || "Undefined"}\n`;
            }
            menu += "\n"
         }
         menu += "\n\n> Powered by Dzyy";
      } else if (grouped[behh]) {
         menu += `${behh.toUpperCase()} | MENU\n`
         for (let item of grouped[behh]) {
            menu += `-> ${m.prefix}${item.name || "Undefined"}\n`
         }
         menu += "\n> Powered By Dzyy"
      } else {
         return m.reply("Apaan itu bang ga tersedia di kategori 😅")
      }
      m.reply(menu);
   }
}